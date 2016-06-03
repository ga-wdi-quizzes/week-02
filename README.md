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
[] Array
[X] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
REPL stands for Read, Eval, Print Loop.  It is a program that takes instructions as input, evaluates/performs the instructions, and returns the output to the terminal.  The JavaScript
console is a REPL, like the one in Chrome.  

It's useful or troubleshooting by providing a quick and dirty means of running chunks of code
to make sure they do what the programmer things they're doing.  The console also provides tools
console.log and debugger that give programmers the ability to interrogate programs a they
run.  
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];
for (i = 0; i < foods[0].length; i+=1) {
  console.log(foods[0][i]);
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
```text
Scope is the set of variables, objects, and functions a program has access to at any given time.  

A variable defined using a VAR statement within the main program is GLOBAL and is available everywhere.
A variable defined using a VAR statement within a function is only available within that function and to functions within that function, and are deleted when that function ends.
A variable defined without using the VAR statement (e.g., just by assigning it a value like "x = y") is automatically global and available everywhere.  (Evidently, this is not always a good thing.)


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
  bake: function() {
    this.temperature = 300;
  }
}
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
instructor = "Adrian";
function nameCalling() {
  var instructor = "Adrian";
}
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text
Calling a function actually executes it, referencing a function specifies it to be used elsewhere.

To call a function, you include the parentheses "()" such as:

  parseInt()

The parentheses may or may not contain parameters being passed to the function.

To refer to a function, you specify the function name without using the parentheses.  For example, one of the parameters of the setInterval function is a reference to a function to be run, specified WITHOUT the parentheses.  The text updateTime in this example is the name of a function to be run by setInterval:

  setInterval(updateTime, 1000)

All callbacks use function references.
```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
  name: "Kevin Golden",
  age: 58,
  sayHello: function() {
    console.log("Hi, my name is " + student.name)
  }
}
​
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
