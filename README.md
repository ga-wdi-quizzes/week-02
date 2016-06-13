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

```text
  A read-eval-print-loop, helps to evaluate simple expressions so that a developer can see if something is working or not.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
// write code here
for (var i = 0; i < 1; i++) {
  for (var j = 0; j < 3; j++) {
    console.log(foods[i][j]);
  }
}
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
var pizza = foods[1][0];
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```text
Follow the triangle. Anything inside of a function can only be used with that function.

For example, below, var x can be used in any of the functions, var p can also be used by any of the functions however, var q can only be used by functions b and c, not function a. Likewise, var r can only be used by function c.

var x;
function a() {
  var p;
  function b() {
    var q;
    function c() {
      var r;
    }
  }
}
```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
  var pizza = {
    "temperature" : 70,
    "bake" : function() {
      this.temperature = 300;
    }
  }
```

### Question #7

Using a 'for' loop, iterate over an array of numbers in JavaScript, printing each to the console.

Your Answer:
```js
// write code here
var numbers = [0,1,2,3,4,5];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
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
var buttons = document.querySelectorAll("button");
buttons.addEventListener("click", function() {
  buttons.style.background = "red";
});
```

## Objects and Functions

### Question #9

What are the differences between calling and referencing a function? Please provide examples of each.

```text
calling a function means getting the output of a function, what a function returns and is done by writing functionName() with parantheses.

referencing a function is used for callbacks and says "run the function on this thing" and is written by writing functionName without parantheses
```
### Question #10

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
// write code here
var student = {
  "name" : "David",
  "age" : 27,
  "sayHello" : function() {
    return "Hi, my name is "+this.name
  }
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
