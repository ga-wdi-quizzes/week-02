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
[x] NaN
[x] Integers
[x] Arrays
[x] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
REPL stands for read-eval-print loop. It helps with debugging because developers can inspect the printed results and correct any errors to make sure the code works up to that point.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
// write code here
for (i = 0, i <= foods[0].length; i++) {
  console.log("I want to eat a foods[0][i])":
}
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
// write code here
foods[1][0]
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```text
Variables created without 'var' are placed in the global scope. Variables created with 'var' are in the current local scope. Only functions create a new local scope and any variables created within a function can only be accessed within that function. If a variable is created outside a function (even with 'var'), that variable is placed in the global scope.
```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
// write code here
var pizza = function () {
  temperature: 70,
  bake: function (setTemperature) {
    this.temperature = setTemperature;
  }
}

```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
// write code here
var instructor = becky

function displayName () {
  var instructor = becky;
  console.log(instructor);
}
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text
Calling a function means to invoke a function:

function add( num1, num2 ) {
  return num1 + num2;
}

add( 3, 5 );
8

Referencing a function means to to 'define' a function:

add

function add( num1, num2 ) {
  return num1 + num2;
}

```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
// write code here
var student = {
  name: Charles,
  age: 30,
  sayHello: function () {
    console.log( "Hi, my name is" + this.name );
  });
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
