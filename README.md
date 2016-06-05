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
[X] String
[X] Boolean
[X] Undefined
[] NaN
[X] Number
[] Array
[X] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```
It means "Read Eval Print Loop" and is what lets us run JavaScript by each individual line so we can test it bit by bit.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
for(var x = 0, x < foods[0].length){
  console.log("I want to eat a" + foods[0][x])
}

//I know I'm missing something in this but can't figure out what.

```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
var pizza = foods[1][0]
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```
-Globally-scoped variable
-Local Scope
-Intermediate: Object properties
-Advanced: Closures
-Advanced: Prototype-based scope resolution
-Altogether
-Global+local
-Catch clause-scoped variable
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
  bake: function(){
    this.temp = 300;
  }
}
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
instructor = "Robin";
var instructor = "Robin";
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```
Calling the function is actually using the function and getting a result while referencing it just refers to it without actually using it.
//This is calling a function:
callFunction();
//This is referencing a function:
.on("click", referenceFunction);
```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
  name: "Gandy",
  age: 34;
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
[] Synchronous code runs at an even pace, asynchronous code runs with uneven pacing.
[] Synchronous code runs all at the same time, asynchronous code runs completely randomly
[X] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
