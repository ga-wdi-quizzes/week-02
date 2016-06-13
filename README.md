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
[x] String
[x] Boolean
[x] Undefined
[] NaN
[x] Number
[x] Array
[x] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```
It stands for Read Evaluate Print Loop.  It's easy to test JavaScript line by line to make sure the code is working.

```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
for (i=0; i<foods.length; i++) {
  console.log('I want to eat a ' + foods[i]);
}
// write code here
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
foods[1][0];
// write code here
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```text
Scope is part of the code where variables can be seen and be used or to the other variables and functions it can see.
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
  bake:  function(){
    this.temperature =300;
  }
}
// write code here
```

### Question #7

Using a 'for' loop, iterate over an array of numbers in JavaScript, printing each to the console.

Your Answer:
```js

for (i=0; i<array.length); i++{
  console.log(array[i]);
}
// write code here
```

### Question #8

Write the vanilla JS equivalent of the following jQuery code:

```js
$("button").on("click", function(event){
  $(event.target).css('color', 'red')
})
```

Your Answer:
```js
document.querySelector('button').addEventListener('click',function(event){
  document.getElementsByClassName('event.target').style.color="red";
})
// write code here
```

## Objects and Functions

### Question #9

What are the differences between calling and referencing a function? Please provide examples of each.

```text
calling a function will execute the function, while referencing a function will not execute until some type of action is made.
```
### Question #10

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js

var student = {
  name: Sean,
  age: 30,
  sayHello: functinon(){
    Console.log ("Hi, My name is " +this.name)
  }
}
// write code here
```

## Callbacks

### Question #11

**What is the difference between synchronous and asynchronous program execution?**

Select all that apply:
```
[] Synchronous code runs at an even pace, asynchronous code runs with uneven pacing.
[] Synchronous code runs all at the same time, asynchronous code runs completely randomly
[x] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
