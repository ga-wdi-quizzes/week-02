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
[x] NaN
[x] Number
[x] Array
[x] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
REPL stands for "read, evaluate, print, loop", it is an interactive console that allows the user to enter code and immediately see the results of said code. It gives dev's a means of seeing what the lines of code they've been writing actually do (if anything at all). This is essential to fixing control flow, syntax, and various other types of errors.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
for(var i = 0; i < foods.length; i++){
      console.log("I want to eat "+foods[i]+"")
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
// write ce here
foods[][1]
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:

"Scope is the parts of a variable / function that can be seen by other functions / variables.  It's kind of difficult to explain, so i'll write an example"

var w = function() {
var x = "some string";
someFunction() {
  var y = "some other string";
  console.log(var y + var x)
  }
}
var w can "see" all of the functions and variables below it, because they are all nested within it. var x cannot see var y because var y is within someFunction(), but it can see someFunction(), and if i were to return someFunction(), it would be able to see its output. conversly, var y CAN see and utilize the value of var x.
```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js

var pizza = {
  temp : "70",
  bake : temp.replace("70","300"),  
}

```

### Question #7

Using a 'for' loop, iterate over an array of numbers in JavaScript, printing each to the console.

Your Answer:
```js
var num = ["1","2","3","4","5"];
for (var i =0, i < num.length , i++){
  console.log(num[i]);
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
var changeColor = function(){
  document.addEventListener("click", function(){
   document.getElementById("button").css("color", "red");
 });
 }
```

## Objects and Functions

### Question #9

What are the differences between calling and referencing a function? Please provide examples of each.

```text
when you call a function, that code runs. when you reference a function (for example if you use a function inside of another function), the program is made aware of the output of the function, but it doesn't neccesarily execute it.


function multiply( num1, num2 ){
  console.log( num1 * num2 );
  return num1 * num2;

(called)

multiply(2,6)

(referenced)

var x = function {
  var y = 2;
  var z = y * multiply;
  return var z;
};   
```
### Question #10

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
  Attributes []
}
```

## Callbacks

### Question #11

**What is the difference between synchronous and asynchronous program execution?**

Select all that apply:
```
[x] Synchronous code runs at an even pace, asynchronous code runs with uneven pacing.
[?] Synchronous code runs all at the same time, asynchronous code runs completely randomly " I wouldn't say 'completely randomly...' async code runs when the parameters of its call back/event has been met / enacted. There is a method to the madness (no pun intended... ok maybe a small pun intended)"
[x] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
