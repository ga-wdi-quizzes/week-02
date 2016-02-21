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
[] Arrays
[x] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```
REPL stands for read-evaluate-print.  It refers to a programming environment where single user inputs are evaluated and returned to the user.  The program is executed piece by piece, rather than the entire program all at once.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
var eatFruit = function() {
  for (var i = 0; i < foods[0].length; i ++) {
    console.log("I want to eat a " + foods[0][i] + ".")
  }
}
eatFruit();
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
var accessPizza = foods[1][0];
accessPizza;
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```Javascript breaks down its entire landscape into two primary locales: global scope and local scope.  Variables declared outside of a function can be used and reused within any object or function in the code.  Variables declared within functions will only be recognized within that particular function (a local scope).  Therefore, if you call a variable in the global scope that was initially declared locally, it will be undefined.  Each function has its own scope, and when a function is inside another scope, a nested scope is created.


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
  bake: function cook() {
      pizza.temp = 300;
  }
 }

pizza.bake();
console.log(pizza);
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
instructor = "Adrian";
var instructor = "Adrian";
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text
for var exampleFunction = function() {
  console.log("Question 8");
}
Calling a function: exampleFunction();

Referencing a function -  exampleFunction;

Calling a function executes the function immediately. Referencing a function stores it and allows it to be executed at a later time.
```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
  firstName: "Andrew",
  age: 29,
  sayHello: function() {
      console.log("Hi, my name is " + student.firstName)
  }
}
console.log(student.sayHello);
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
