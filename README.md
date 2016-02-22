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
[] Number
[] Arrays
[] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
Read Evaluate Print Loop; like the chrome browser.  Best practice/ use would be to test a line of code or block to verify everything is working properly.  Type in, reads code, tests it, prints to the console and then "loops" back to the next line of code.  Best used, at least for me, is debugging.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
for (var i = 0; i < foods[0].length; i++) {
  console.log("I want to eat a " + foods[0][i]);
}
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
var foods = [ ["apple", ""banana", "strawberry"], ["pizza", "fries", "hamburger"] ];
console.log(foods[1][0]);
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```
Scope are the parent functions and means that an inner function will be influenced by it's parent. Children functions are not included in the scope and cannot be referenced. Calling variables and functions that are within the scope, but anything that is outside the scope cannot be referenced.
```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
+var pizza = {
    temperature: 70,
    bake: function() {
        this.temperature = 300;
    }
}

pizza.bake();
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
var instructor = "Becky";
 
 function instructor() {
     instructor = "Becky";
 }
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text
Calling a function runs the function. Doing this separately to instruct the browser to run the code that you have defined as that specific function.

 homework(); is an example of calling a Functions

 While referencing a function means that the function will be run when something is executed. Say you need to reference a function when adding an event listener so that it knows what function to run when the event is going to occur.

 +element.addEventListener("click", homework);
```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
   name: "Casey",
   age: 28,
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
[] Synchronous code runs at an even pace, asynchronous code runs with uneven pacing.
[] Synchronous code runs all at the same time, asynchronous code runs completely randomly
[x] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
