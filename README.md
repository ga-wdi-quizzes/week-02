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
[X] Array
[] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
Read, Evaluate, Print, Loop.  Can use the browser's console; gives error messages with
locations in the script noted.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
// write code here
var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];
function getFruit(gF){
  for (var i=0; i<foods[0].length; i++) {
    console.log("I want to eat a " + foods[0][i]);
  }
}
getFruit();
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
Global and Local -- Global variables exist everywhere in the script when it runs.
Local variables exist only within the function in which they are assigned, then
they are discarded.  Local scope is only created by creating a function.
```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
// write code here
var pizza = {
  temperature: 70,
  bake: function(){
    this.temperature = 300;
  }
}
console.log(pizza.temperature);
pizza.bake();
console.log(pizza.temperature);
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
// write code here
var instructor = "Andy Kim"; // Global

function classRoom(){
  var instructor = "Andy Kim";
}
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text
Calling a function makes it operate right away.  It's typed like:  doSomething();
Referencing a function is used when you want to make it part of something else.
Example of referencing:  pizza(doSomething);
```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
// write code here
var student = {
  name: "Leland",
  age: 44,
  sayHello(){
    console.log("Hi, my name is " + this.name);
  }
}
student.sayHello();
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
