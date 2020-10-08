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

The `volatile` keyword ensure that updates to a variable are propagated
predictably to other threads.[^2] Prevents the compiler from re-ordering
instructions (derived from, such as, optimisations) **and** its variable from
being cached in registers hidden from other threads. `Volatile` targets
**visibility** by <u>guaranteeing it returns the most recent value by any
thread</u>.

If you find the inner depths of compilers and concurrency as fascinating as I
do, this definition just isn't enough.

You might have previously read: _a `volatile` variable is read from the
computer's main memory_, and adding to the fact that it is no longer cached in
registers, are we stumbling upon a clash between performance and concurrency?

## Is volatile expensive?

Does that actually mean every `volatile` access will be read from the main
memory? Not exactly, this is a common misconception I've seen in _nearly a
quarter_ of the `volatile` definitions inducing me in mistake previously.

If volatiles were read/written from main memory every time, the performance
impact would be very underwhelming. The actual cost depends on the CPU
architecture which, in a broader context, using protocols such as the
[MESI](https://en.wikipedia.org/wiki/MESI_protocol), shares a **coherent cache
line** allowing other caches to obtain the cached reference from another CPU,
reducing the memory hits.

> The `volatile` modifier guarantees that any thread that reads a field will see
> the most recently written value. -- <cite>Joshua Bloch in Effective Java
> 3</cite>

Keeping the caches coherent enforces that when two threads read from the same
memory address, they should never simultaneously read different values.[^3]

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
protocol only guarantees that these writes will have _some_ order, **not a
specific one you might expect**.[^4] Two threads might still read from that same
memory address in-between, read the exact same values, but not in the order you
initially designed it.

<Note>

Some **x86** and **x64** processors implement a strong memory model where memory
access is effectively volatile[^5], but unless they guarantee **sequential
consistency**, re-orderings are allowed.

</Note>

In addition to any further possible
[compiler (not hardware) optimisations](https://igoro.com/archive/volatile-keyword-in-c-memory-model-explained/),
the latter is prohibited from allocating these values in registers.

<Note>

CPU registers are special temporary locations that facilitate some CPU
operations. While the cache is a high-speed volatile memory, closer to the CPU,
that helps reducing main memory hits.[^1]

</Note>

Some programmers might consider that since they're compiling for `x86`, they
don't need some ordering guarantees for a shared variable. <u>But optimisations
happen based on the as-if rule for the language memory model, not the target
hardware.</u>[^6]

## Is volatile atomic?

The effect of a volatile read or write is that the individual operation will be
atomic. However, an operation such as `i++`, where `i` is effectively atomic, is
decomposed into two operations `i = i + 1` (read and write), which are not
atomic since the respective thread might be interrupted in the meantime.

[^1]:
    [Are CPU registers and CPU cache different?](https://stackoverflow.com/questions/3500491/are-cpu-registers-and-cpu-cache-different)

[^2]: _Java Concurrency in Practice_, Brian Goetz et al.
[^3]:
    [Myths programmers believe about CPU caches](https://software.rajivprab.com/2018/04/29/myths-programmers-believe-about-cpu-caches/)

[^4]:
    [Is the MESI protocol enough?](https://stackoverflow.com/questions/27522190/is-the-mesi-protocol-enough-or-are-memory-barriers-still-required-intel-cpus)

[^5]:
    [Volatile keyword in C memory model explained](https://igoro.com/archive/volatile-keyword-in-c-memory-model-explained/)

[^6]:
    [How does memory re-ordering help processors and compilers](https://stackoverflow.com/questions/37725497/how-does-memory-reordering-help-processors-and-compilers)
