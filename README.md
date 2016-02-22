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
[] Undefined
[] NaN
[X] Integers
[X] Arrays
[] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
Repl is an identifier for errors within the code, grammatically or simply incorrect. It allows a coder to catch mistakes before submitting
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
  var i
 for (i = 0; i <= food.length[1][0]; i++) {
 console.log("I want to eat a" + food[1][0])
}
```


### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js

foods[2][0].shift();
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```
Scope is a way to help define the location of where your functions and variables are located. Globally, or locally within other functions.
EX:

var vegetables = foods

  function eatfruit(){
    var fruit = ("banana","orange","apple")
  }


vegetables - global ...not inside a function
fruit - local within the eatFruit function

```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called, this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
var pizza = {
  temperature: 70,
  bake: function() {
    temperature = 300;
}

```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js

var instructor = 'Jesse'

  function squadInstructor {
    var instructor = 'Jesse'
  }


```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```
Calling a function is executing a function, while referencing is simply stating the existence of a function.

Calling:

vegetables()

referencing:

function vegetables =

```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js



var student = {
  name: "hilary",
  age: "28",
  hi: sayHello()
    console.log("Hi, my name is " + student.name)
}


```

## Callbacks

### Question #10

**What is the difference between synchronous and asynchronous program execution?**

Select all that apply:
```
[] Synchronous code runs at an even pace, asynchronous code runs with uneven pacing.
[X] Synchronous code runs all at the same time, asynchronous code runs completely randomly
[] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
