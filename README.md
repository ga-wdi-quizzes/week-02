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
[] NaN // NaN is a "Number"
[] Integers // "Number" is a JS Data Type
[] Arrays // Arrays are Objects
[X] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

*Your Answer:*
```text
REPL stands for `Read-Eval-Print Loop`; one example of a REPL is the console in the Chrome browser. Developers use this tool to test code one line at a time: the REPL reads the code, evaluates it, prints it to the console, and then loops back to repeat the process for the next line of code entered. This tool is useful for debugging because it allows us to identify the line number and the stack trace of whatever error is being thrown.
```

### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];
for (i = 0; i < foods[0].length; i++) {
   console.log("I want to eat a(n) " + foods[0][i])
}
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];
foods[1][0];
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

*Your Answer:*

```text
Scope is defined as where a given variable may be referenced in code. In JavaScript there are two types of scope, namely global scope and local scope. The rules of scope in JavaScript are as follows:

1. Variables defined without the `var` keyword are automatically in the global scope
2. Variables defined with the `var` keyword are in the current local scope
3. All functions create a new local scope; only functions may create a new local scope
  * The implication of this point is that variables not defined *within* a function are automatically in the global scope
4. The current scope includes all outer scopes (i.e., scopes that include the current scope)
  * The implication of this point is that variables in outer scopes can be accessed within a function, but variables *within* the function cannot be accessed from without it
```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
var pizza = {
  temperature: 70,
  bake: function(){
    this.temperature = 300;
  }
}
// After calling the method `pizza.bake();`, I can then `console.log(pizza.temperature);`, which is now set to 300.
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
var instructor = "Adrian";  //`instructor` is a global variable here

var printName = function(instructor) {
  var instructor = "Adrian";  // `instructor` is a local variable here, because it is inside the `printName` function
   console.log(instructor);
}
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text

```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
// write code here
```

## Callbacks

### Question #10

**What is the difference between synchronous and asynchronous program execution?**

Select all that apply:
```
[] Synchronous code runs at an even pace, asynchronous code runs with uneven pacing.
[] Synchronous code runs all at the same time, asynchronous code runs completely randomly
[] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
