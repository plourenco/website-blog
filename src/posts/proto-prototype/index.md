---
title: 🤯 The Proto and the Prototype
category: Javascript
date: 2020-08-05
author: Pedro Lourenço
published: true
tags: ['javascript']
---

The proto and the prototype can be two very confusing terms, even though their
definitions might sound simple. If you've been using Javascript for quite a
while, you've probably struggled with these terms. In this post, I intend to show
you a few examples that demonstrate the potential of prototypes.

By definition, and with a
[quick search](https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript),
we can agree on the following:

> `__proto__`refers to object used in the lookup chain to resolve fields, while
> `prototype` is the actual object used to build `__proto__` when a new object
> is created (**the prototype to install when constructing**).

In practice, this means all instances of class X will have their `__proto__`
built from X's `prototype`.

```javascript
function User() {
  this.name = 'my name';
}

User.prototype.save = function () {
  return 'save';
};

let user1 = new User();
let user2 = new User();

console.log(user1.__proto__ === User.prototype); // true
console.log(user1.save === user2.save); // true
```

In the previous example, `user1`'s `__proto__` will be linked to the `User`'s
prototype. But it also means the function `save` **will be shared** across all
instances of `User`.

On the other hand, we can also confirm that:

```javascript
function User() {
  this.name = 'my name';
  this.save = function () {
    return 'save';
  };
}

let user1 = new User();
let user2 = new User();

console.log(user1.save === user2.save); // false
```

But why? Every time a new object is instantiated from `User`, a new function
`save` is being created on the spot.

# Prototypal inheritance 😳

ES6 provides us with the stereotyped `class` syntax. However, under the hood, classes
are not something contemporary. To further understand how we can play
with prototypes to implement pre-ES6 inheritance, consider the following
example:

```javascript
class Parent {
  constructor() {
    this.name = 'parent';
  }

  print() {
    return 'I am an object method';
  }

  static print() {
    return 'I am a static method';
  }
}

class Son extends Parent {
  constructor() {
    super();
    this.name = 'son';
  }
}
```

Let's imagine we want to reproduce the same example but this time there is no
`class` keyword available. How do we convert the `Parent` class to the
traditional syntax? Using prototypes!

> [Recall](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
> that, in JavaScript, classes are a special type of function. Functions
> are no more than first-class objects because they can have properties and
> methods just like any other object.

The field `name` is pretty straightforward, defined inside a function.
Conversely, the `print` method will be part of `Parent`'s prototype because when
an object is instantiated, their `__proto__` will be booted with that exact
method.

```javascript
function Parent() {
  this.name = 'parent';
}
Parent.prototype.print = function () {
  return 'I am an object method';
};
Parent.print = function () {
  return 'I am a static method';
};
```

Now for the real challenge, we're tackling `Son`'s inheritance.

- First, we need to ensure each object of `Son` will contain the `print` method.
  This means `Son`'s prototype is similar to `Parent`.

```javascript {5}
function Son() {
  this.name = 'son';
}

Son.prototype = Object.create(Parent.prototype);
```

- Then, we want to apply the static method. In other words, we can let `Son`'s
  `__proto__` refer to `Parent` in the lookup chain to its resolve fields.

```javascript
Son.__proto__ = Parent;
```

- Finally, `Parent` function will be invoked replacing the context of `this`
  with `Son`'s instance. This is the exact purpose of
  [`call`](https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Global_Objects/Function/Call).

```javascript {2-3}
function Son() {
  Parent.call(this); // inherit the name
  this.name = 'son';
}
Son.prototype = Object.create(Parent.prototype); // inherit print
Son.prototype.constructor = Son;
Son.__proto__ = Parent; // inherit static print
```

But why `Son.prototype.constructor = Son`?

That's the tricky part. If you carefully analyse the previous line, the `Son`
prototype is a copy of its `Parent` equivalent, and so is the constructor! We
need to manually reset the constructor otherwise it will correspond to a brand
new instance of the `Parent`.

If you would like to see more of classes in action, you can also check
[Babel's live compiler](https://babeljs.io/repl#?presets=env%2Ces2015-loose%2Cenv&prettier=false&targets=&version=7.11.0).
