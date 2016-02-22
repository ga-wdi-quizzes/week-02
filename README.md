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
[x] Strings
[x] Booleans
[x] Undefined
[] NaN
[] Integers
[x] Arrays
[x] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```
R- Read
E- Evaluate
P- Print
L- Loop

You can use this in the chrome development tool or sites like repl.it. It reads each line of the code, evaluates it, prints it in the console and then loops it back to the beginning and onto the next line.

It is important to developers bc it helps you find an error by line and gives you details on the type of error with they type of error message.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
//
for(var i = 0; i < foods[0].length; i++) {
console.log("I want to eat a + foods[0][i]");
}
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
//
foods[1][0];
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```
Scope can be either Global or local. Global scope cane be used everywhere but local scope can only be used within the function it is defined in.

```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
//
var pizza = {
temperature: 70,

bake: function(){
  this.temperature= 300;
}
}
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
//
Global
instructor = "Jesse"

local
function instructor() {
  var firstName = "Jesse";
}
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```
Calling a function when something (like an event) calls/invokes it.

from above, calling fruit in the console log. 
console.log("I want to eat a + foods[0][i]");


Referencing a function is when you are assigning a function to an object.  Below is an example from color scheme switcher:
var redButton = document.querySelector(".one")
redButton.addEventListener("click", changeRed )


```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
//
var student = {
  name: "Farishta Haider",
  age: "34",
sayHello: function(){
  console.log("Hi, my name is" + this.name);
}
}
```

## Callbacks

### Question #10

**What is the difference between synchronous and asynchronous program execution?**

Select all that apply:
```
[x] Synchronous code runs at an even pace, asynchronous code runs with uneven pacing.
[] Synchronous code runs all at the same time, asynchronous code runs completely randomly
[] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
