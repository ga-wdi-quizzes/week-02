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

```
REPL stands for read-eval-print loop and it's a kind of computer program that demonstrates how code is being processed (i.e. the outputs of your code) in real time and step-by-step. This allows you to see what the hell your code is doing which allows for (relatively!) easy debugging.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
// In this particular problem it would also work to have the loop run "i <= foods.length" times, but that seems like a weak solution because it would *not* work if there was a 4th fruit. This way it steps through the entire 0th element of the array no matter how long it is.
for (i = 0; i < foods[0].length; i++) {
  console.log("I want to eat a " + foods[0][i]);
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
```
Global scope includes variables (and I just learned that functions and objects are variables) that are accessible from anywhere in the program. Local scope are variables that are only accessible from within a particular function.
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
  bake: function () {
    this.temperature = 300;
  }
}
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
var instructor = "Joe";
function myFunction() {
  var instructor = "Joe";
}
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```
Calling a function is to invoke the code it contains. So if I have

var myFunction = function () {
  var instructor = "Joe";
  console.log(instructor);
}

I can call this function with

myFunction();

Referencing a function is when you do something that acknowledges the existence of a function but does not run any of its code. I can reference myFunction by setting a variable that points to it like this:

var myExample = myFunction;

```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
  name: "Jeff",
  age: 40,
  sayHello: function (){
    console.log("Hi, my name is " + this.name)
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
