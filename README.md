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

```
REPL stands or Read-Eval-Print Loop. It allows users to enter code into a program that will evaluate it and print out the results; it's useful in testing out portions of code as developers are working on various projects.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
// write code here
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
foods [1][0];
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```
Scope defines where a variable can be used and there are two types, local and global. Any variable without "var" is considered global and can be used anywhere. Variables defined with "var" can only be within the local scope; meaning if it's defined in a function it can only be used inside that function. Also, functions can use other variables so long as they are defined within it's local scope.
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
    this.temperature = 300;
    console.log (pizza.temperature);
  }
}
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
//global
instructor = Robin;
//local
var instructor = Robin;

```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```
calling a function will execute the code inside it; referencing only refers back to it without executing the code.
```
```js
function niceToMeetYou (){
  console.log ("Hi there!");
}

//calling niceToMeetYou
niceToMeetYou ()
//referencing niceToMeetYou
niceToMeetYou;

```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
  name: "Winnie",
  age: 27,
  sayHello: function () {
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
[x] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
