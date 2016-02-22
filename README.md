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
[x] Integers //Numbers?
[] Arrays
[x] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
REPL stands for "Read–eval–print loop". It is a method to ensure code is working by iteratively testing small pieces to see if they are evaluating properly. The REPL interface in chrome is built into the console and can be used to test small pieces of code in this environment.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
for (var i = 0; i<foods.length; i++) {
  for (var j = 0; j<3; j++) {
    console.log("I want to eat a " + foods [i][j]);
  }
}
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
foods[1][0]
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```text
There are 4 rules to scope in javascript. To summarize them, any variable created with the 'var' keyword is within the local scope, where as any variable created without the 'var' keyword is placed within the global scope. Local scope is applied within functions, and are the only place where the specific local variables can be accessed. Global variables can be accessed within and outside any functions or anywhere else in a program.

```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
var pizza = {
  temp: 70,
  bake: function (){
    this.temperature = 300;
  },
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
instructor = "Jesse"
var instructor = "Jesse"
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text
Referencing a function stores the properties of a function for later use where as calling the function causes it to execute immediately.
For the function:
function foo(){
  console.log("say hi");
}

the function would be referenced by writing:
foo;
whereas it would be called by writing:
foo();
```

### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
  name: "Craig",
  age: "25",
  sayHello: function (){
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
[x] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
