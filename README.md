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
[] Undefined
[] NaN
[x] Number
[x] Array
[] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text

```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
// write code here
for (var i = 0; i < foods[0].length; i++) {
  console.log("I want to eat a " + foods[0][i]);
}
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
var notDominos = foods[1][0];
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```text
The simplest way to look at it is variables are "in scope" within the functions where they are defined. 
For instance,
```
```js
var i0; // global variable, in scope everywhere, except where noted

function foo1() {
  var i1; // in scope for foo1 and bar1 only
  function bar1() {
  }
}
  
function foo2() {
  function bar2() {
      var i2; // in scope for bar2 only
  }
}  

function foo3() {
  var i0; // overrides the "globalness" of i0 within foo3 only
}


```text
For variables, placement is important. 
```
```js
function foo4() {
  function bar4() {
  }
  function i4; // only in scope in foo4, after the declaration. not in scope in bar4 
} 
```
```text 
However, if a variable is used without being declared, such as `i5 = 5;` without a `var i5;` before, it becomes global. 

Also, a function declared with `function foo5() {}` is immediately "hoisted" to the top of the file, so that it is visible throughout.

That is not true of functions defined in the form `var foo6 = function(a,b) {}`. They are not hoisted but "remain where they are". 
```
### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js

var pizza = {
  temperature : 70,
  bake : function() {this.temperature = 300;}
}
```

### Question #7

Using a 'for' loop, iterate over an array of numbers in JavaScript, printing each to the console.

Your Answer:
```js
// write code here
var arrayOfNums = [1,2,3,4,5,6,7,8,9,8.1,7.2,6.3,5.4,4.5,3.6,2.7,1.8,0.9];
for (var i = 0; i < arrayOfNums.length; i++) {
  console.log(arrayOfNums[i].toString());
}
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
// write code here
```

## Objects and Functions

### Question #9

What are the differences between calling and referencing a function? Please provide examples of each.

```text

```
### Question #10

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
// write code here
var student = {
  name : "Arthur Adams",
  age : 0x31,
  sayHello : function() { console.log( "Hi, my name is " + this.name ); }
}
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
