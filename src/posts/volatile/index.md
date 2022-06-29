---
title: ❄️ Volatile
category: Concurrency
date: 2020-10-10
author: Pedro Lourenço
published: true
tags: ['concurrency', 'compilers', 'cpu']
---

> The fun part about about analyzing race conditions is that anything can
> happen - so most of your assumptions will probably be right.

There are two important concepts to achieve in a multi-threading environment:
**Visibility** and **Atomicity**.

The `volatile` keyword ensures that updates to a variable are propagated
predictably to other threads.[^1] Prevents the compiler from re-ordering
instructions (derived from, such as, optimisations) **and** its variable from
being cached in registers hidden from other threads. `Volatile` targets
**visibility** by <u>guaranteeing it returns the most recent value by any
thread</u>.

If you find the inner depths of compilers and concurrency as fascinating as I
do, this definition just isn't enough.

## The need by example

Let's assume, in the example below, the two methods `A` and `B` were run
concurrently by two different threads.

```java {7-8}
/* Adapted from "C# 4 in a Nutshell", Joseph Albahari, Ben Albahari */
class Foo {
    int answer;
    volatile boolean complete;

    public void A() {
        answer = 123;
        complete = true;
    }

    public void B() {
        if (complete) {
            System.out.println(answer);
        }
    }

    public static void main(String[] args) throws InterruptedException {
        Foo t = new Foo();
        new Thread(t::B).start();
        new Thread(t::A).start();
    }
}
```

Using `volatile` for the boolean value `complete`, will ensure a
**happens-before** relationship where reads/writes cannot be re-ordered to occur
after a write to a `volatile`, effectively creating a memory barrier.

Re-orderings are a possibility underlying a weak memory model and, besides being
useful for optimisations, they can also cause unpredictable cases such as the
highlighted lines above becoming:

```java
complete = true; // without volatile
answer = 123;
```

Potentially resulting in the program above to view `complete` as `true` and
print `0` instead of the expected `123` right before its assignment. Or, equally
targeting visibility, by never getting to print anything out as the thread
running `A` did not commit any of the writes - there is no _freshness_
guarantee.

Taking this in consideration, you might have previously read: _a `volatile`
variable is read from the computer's main memory_, and adding to the fact that
it is no longer cached in CPU registers, are we stumbling upon a clash between
performance and concurrency?

## Is volatile expensive?

Does that actually mean every `volatile` access will be read from the main
memory? **No**, this is a common misconception I've seen in _nearly half_ of the
`volatile` definitions inducing me in mistake previously. That is actually a
property of the target hardware.

If volatiles were read/written from main memory every time, the performance
impact would be very overwhelming. The actual cost depends on the CPU
architecture which, in a broader context, using protocols such as the
[MESI](https://en.wikipedia.org/wiki/MESI_protocol), shares a **coherent cache
line** allowing other caches to obtain the cached reference from another CPU,
reducing the memory hits.

> The `volatile` modifier guarantees that any thread that reads a field will see
> the most recently written value. -- <cite>Joshua Bloch in Effective Java
> 3</cite>

Keeping the caches coherent enforces that when two threads read from the same
memory address, they should never simultaneously read different values.[^2]

This is accomplished by a set of states:

- **Modified**: One processor contains the data, but it is dirty - has been
  modified.
- **Exclusive**: One processor contains the data and it hasn't been shared.
- **Shared**: Multiple processors have cached this data and it's up to date.
- **Invalid**: The entry is invalid and unused.

In simplified terms, if an entry is initially `Invalid` and a processor requests
to read an address, the state will transition to `Shared` if other caches have a
valid copy or `Exclusive` if none (and eventually fetched from main memory). If
an entry is `Shared` and a processor requests to write, the state transitions to
`Modified` and other caches mark their copy of the block as `Invalid`. I do not
intend to cover the combination of possible events under this protocol, but you
can read more about its state machine
[here](https://en.wikipedia.org/wiki/MESI_protocol).

Taking coherency in consideration, it leads us to another important question:

### Why do we still need volatile over the previously explained cache-coherency?

Besides visibility, cache coherency is not sufficient to guarantee the
instruction ordering. If 2 cores write to the same line simultaneously, MESI
protocol only guarantees _some_ order, **not a specific one you might
expect**.[^3] Coherence says nothing about **when** writes will become visible.
[^4]

```
initially A = B = 0
process 1               process 2
store A := 1            load B (gets 1)
store B := 1            load A (gets 0)
```

The trace above is expected to load `A` and `B` as 1, but instead could be seen
in the wrong order. It is still coherent, as the writes to `A` and `B` are
**eventually** visible to process 2. [^5] Both processes will have a coherent
view of the memory, but not soon enough.

<Note>

Some **x86** and **x64** processors implement a strong memory model where memory
access is effectively volatile[^6], but unless they guarantee **sequential
consistency**, re-orderings are allowed.

</Note>

In addition to any further possible
[compiler (not hardware) optimisations](https://igoro.com/archive/volatile-keyword-in-c-memory-model-explained/),
the latter is also prohibited from allocating these values in registers, such as
two references to the same volatile variable, where the first involves a load
from memory, but the second tries to skip it re-using the value in the register.

<Note>

CPU registers are special temporary locations that facilitate some CPU
operations. While the cache is a high-speed volatile memory, closer to the CPU,
that helps reducing main memory hits.[^7]

</Note>

Some programmers might consider that since they're compiling for `x86`, they
don't need some ordering guarantees for a shared variable. <u>But optimisations
happen based on the as-if rule for the language memory model, not the target
hardware.</u>[^8]

## Does volatile mean atomic?

The effect of a volatile read or write is that the individual operation will be
atomic. However, an operation such as `i++`, where `i` is effectively atomic, is
decomposed into two operations `i = i + 1` (read and write), which are not
atomic since the respective thread might be interrupted in the meantime.

[^1]: _Java Concurrency in Practice_, Brian Goetz et al.
[^2]:
    [Myths programmers believe about CPU caches](https://software.rajivprab.com/2018/04/29/myths-programmers-believe-about-cpu-caches/)

[^3]:
    [Is the MESI protocol enough?](https://stackoverflow.com/questions/27522190/is-the-mesi-protocol-enough-or-are-memory-barriers-still-required-intel-cpus)

[^4]:
    [Consistency vs. coherence](https://people.engr.ncsu.edu/efg/506/s01/lectures/notes/lec14.pdf)

[^5]:
    [Memory consistency vs cache coherence](https://cs.stackexchange.com/questions/20044/memory-consistency-vs-cache-coherence)

[^6]:
    [Volatile keyword in C memory model explained](https://igoro.com/archive/volatile-keyword-in-c-memory-model-explained/)

[^7]:
    [Are CPU registers and CPU cache different?](https://stackoverflow.com/questions/3500491/are-cpu-registers-and-cpu-cache-different)

[^8]:
    [How does memory re-ordering help processors and compilers](https://stackoverflow.com/questions/37725497/how-does-memory-reordering-help-processors-and-compilers)
