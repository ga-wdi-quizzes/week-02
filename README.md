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

```REPL creates a computer environment that Reads, Evaluates, Prints, and Loops commands, giving an output developers can use to run their code. In class we use REPL.it and I am assuming that the console in chrome's inspection tool is a type of REPL as well.  

```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];



    for (var i = 0; i <= foods.length; i++) {
    console.log("I want to eat a " + foods[0][i]);


    }


```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
console.log (foods[1][0]);
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
Scope defines the global and local functions/variables that are accessible throughout the document. The way it works is that everything within a parent element can access anything that's within that element but not outside of it unless it's referring to a variable that's global. To be considered global, you cannot use var to define a variable, must use the name of the variable only. Also, if a var is set, it must be set outside of any functions or { } to be accessible by all. I cannot describe it by words best but can create an example.

global
globalexample=()

local
var globalexample=()

also, the local variable must be outside of any brackets/function to be considered global so other functions can access it. example:

Var globalexample=()

function(){console.log ("hi" + globalexample)}

is accessible because the variable is outside of the function or any other.

but if it was nested within, it cold not. For example

function notAGlobal () {var globalexample=function(){console.log ("hi" + globalexample)}}

This is not a global function because it is within brackets


### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
var pizza =
temperature: "70";
bake: "";

```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
instructor="Joe Zaretsky";
var instructor="Joe Zaretsky";
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```
Referencing is the functions name only and call is when you have the function name and () to add its value. examples below.

function functionName (num1, num 2)

call a function:
functionName (1, 2)

reference a functionName
console.log ("You have bought" + functionName + "tickets today")

```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student= {
name: "Kaira Johnson",
age:"33"
}

function sayHello() {console.log ("Hi, my name is " + [student.name])}

sayHello()
```

## Callbacks

### Question #10

**What is the difference between synchronous and asynchronous program execution?**

Select all that apply:
```
[] Synchronous code runs at an even pace, asynchronous code runs with uneven pacing.
[x] Synchronous code runs all at the same time, asynchronous code runs completely randomly
[x] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
