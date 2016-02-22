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
[x] Integers
[] Arrays
[x] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
REPL stands for read-evaluate-print-loop and it is showing how program is being processed. It is important to developers because you can see what's happening in the code on line at a time so it is much easier to find bugs when there is a problem.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
// write code here
var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

//Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

for (var i = 0 ; i <= foods[0].length ; i++){
 console.log("I like to eat " + foods[0][i]);
}
}



```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
foods[1][0];
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.


Your Answer:
```text
Variables declared within a JS function becomes Local(Scope) to the function(only access within that function). Variables declared outside of the function becomes Global(Scope) function(which you can access from anywhere).



```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
var pizza = {temperature : 70,
             var bake = function(){this.temperature : 300;}
             }

```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
Global
instructor = "Robin";
Local (inside of one function)
var instructor : "Robin";
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.



```text
Once function is defined,

var addNumber = function(num1, num2) {
    x = num1 + num2;
    console.log(x);
}

1. you can call a function.(executes the function)
  addNumber(2,3);
   // showing 5

2. you can referencing it.(show the details of the function)
  addNumber
  // showing
  addNumber = function(num1, num2) {
      x = num1 + num2;
      console.log(x);
  }





```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {name : "Yun", age : 35, var sayHello = function(){
  console.log("Hi, my name is" + this.name +".");
}}
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
