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
[X] Arrays
[X] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
REPL stands for "Read, Evaluate, Print, Loop".  It is a computer environment that interactively responds to user input.  This is important in debugging because it allows the developer to evaluate and troubleshoot errors in their code in real time.  This improves efficiency and streamlines the debugging process.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
//I know iteration is needed here, but unsure how to move forward...
for (i = 0; i > 6; i++ ){
  console.log("I want to eat a [i]");
}
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
//Unclear on how to access nested arrays...
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```text
Scope refers to where in a program a variable (function, object, etc.) can be used, and is considered to be either global or local.  Within the global scope, access is available to all parts of the program.  Global variables, for example, have no restrictions on where in the program they can be used.  Local variables, in contrast, are restricted to use within the functions where they are defined.  This means other functions (outside of the local function) cannot use variables that are defined locally.
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
  bake: function (){
    pizza.temperature = 300;
  }
}
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
//global variable
var instructor = "Matt";
function someFunction(){
  //code goes here
}

//local variable
function someFunction(){
  var instructor = "Matt";
  //rest of code...
}
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text
function someFunction(){
  //code goes here
}

//calling the function on the console line looks like this and will return a value:
someFunction();
32

//referencing a function looks like this on the console line and will display the contents of the function
someFunction (){//code goes here}

```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
  name: "Todd",
  age: 32,
  sayHello: function(name){
    console.log("Hi, my name is " + student.name);
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
