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
[] Integers
[] Arrays
[X] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
A Read-Eval-Print Loop (REPL) is an environment that accepts input from the user, evaluates the input, prints the results and loops back to ask the user for more input. A REPL can be useful for testing small pieces of code to make sure they work as intended before implementing them in a program or to see why a certain portion of code isn't working properly.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
// write code here
for (var i = 0; i < foods[0]; i++) {
  console.log("I want to eat a " + foods[0][i]);
}
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
// write code here
foods[1][0];
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```text
Scope is a "property" of a variable that determines where in a program that variable can be accessed. If a variable has global scope, meaning it was declared outside of any function, it can be accessed anywhere in the program and by any function. A local variable is declared inside of a function and can only be accessed by that function and by any function defined inside that outer function.
```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
// write code here
var pizza = {
  temperature: 70,

  bake: function() {
    this.temperature: 300;
  }
}
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
// write code here
var instructor = "Nick";

function myFunc() {
  var instructor = "Nick";
}
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text
Calling a function runs the block of code inside the function.  reallyCoolFunction();

Referencing a function points to a function definition including the block of code inside the function. reallyCoolFunction;
```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
// write code here
var student = {
  name: "Patrick",
  age: 27,

  sayHello: function() {
    console.log("Hi, my name is " + this.name);
  }
}
```

## Callbacks

### Question #10

**What is the difference between synchronous and asynchronous program execution?**

Select all that apply:
```

[X] Synchronous code runs at an even pace, asynchronous code runs with uneven pacing.
[] Synchronous code runs all at the same time, asynchronous code runs completely randomly
[] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.

<!-- As I understand it, asynchronous code still runs in order, but the browser doesn't have to wait for that bit of code to finish running before it runs the next bit. Is this right? -->
```
