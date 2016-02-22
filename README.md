# Quiz #2

## Instructions

1. Fork this repo
2. Clone your fork
3. Fill in your answers by writing in the appropriate area, or placing an 'x' in
the square brackets (for multiple-choice questions).
4. Add/Commit/Push your changes to Github.
5. Open a pull request.

## JavaScript

### Question #1

**What of the following are JavaScript Data Types?**

Select all that apply:
```
[X] Strings
[X] Booleans
[X] Undefined
[] NaN
[X] Integers
[] Arrays
[X] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```
Read-Evaluate-Print Loop.  A programming environment that allows us to execute code
one line at a time.  It allows us to see step by step how the system is responding
to our code.  Should we notice any errors or incorrect behavior from our programs,
using REPL can help us isolate and correct the problem.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
  for (var i = 0; i < foods[0].length; i++){
    console.log("I want to eat a " + foods[0][i]);
  }
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
foods[1][0];
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```text
Scope is where (within your code) a variable can be referenced. In js there are
global and local scopes.  Variables created without the var keyword are always placed
in global scope.  Variable created with the var keyword are always put into the
current local scope.  Functions create a new local scope.  Current scope includes
all enclosing scopes.

```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
var pizza = {
  var temperature: 70,
  bake: function(){
    this.temperature = 300;
  }
}
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
var instructor = "nick";
function scopeTest(){
  var instructor = "nick";
}
// Another example:
  instructor = "nick";
  var instructor = "nick";

```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text
Calling a function means the function will be executed.  Referencing a function
designates a function, not executing it.

Calling myFunc function:
var test = myFunc();

Referencing myFunc function:
var test = myFunc;

in the first example test would equal the output of the function, or undefined if
the function doesn't return anything.  In the second test equals the function itself
and can also be called by using test();
```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
  name: "Ryan",
  age: 32,
  sayHello: function(){
    console.log("Hi, my name is " + this.name);
  }
}
```

## Callbacks

### Question #10

**What is the difference between synchronous and asynchronous program execution?**

Select all that apply:
```
[] Synchronous code runs at an even pace, asynchronous code runs with uneven pacing.
[] Synchronous code runs all at the same time, asynchronous code runs completely randomly
[X] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
