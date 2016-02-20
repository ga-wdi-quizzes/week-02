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
[X] Undefined
[] NaN
[] Integers
[X] Arrays
[] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```
It stands for read–eval–print loop – and it's an interactive interpreter of programming languages. Basically, it executes one command at a time, printing the result, thus allowing programmers to experiment with a language, including trying to debug something.

```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
for (var i = 0; i <= (foods.length - 1); i++){
  var foodStuff = foods[i];
  for (var e = 0; e <= foods.length; e++){
    console.log("I want to eat a " + foodStuff[e]);
  }
};
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
```
1. Any variable created without the var keyword is accessible anywhere in the program – ie, in the global scope.
2. Any vairable created with the var keyword is in the local scope.
3. Functions are the only things that create new local scopes – and every function creates a new local scope.
4. The current scope always includes all of the enclosing scopes – so variables in the those outer scopes are available to the current scope.
```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
var recipe = {
  'pizza' : {
    'temperature' : 70,
    bake : function(){
      var self = this;
      self.temperature = 300;
    }
  }
};

recipe.pizza.bake();
console.log(recipe.pizza.temperature);
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
Global:
instructor = "Jesse";

Local:
var instructor = "Jesse";

function getInstructor(){
  var instructor = "Jesse";
  console.log("Our fearless leader is " + instructor);
}

```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text
Calling a function runs the function – we include parentheses to call a function, as in:

function sayHi(){
  console.log("Hi!");
}

sayHi();

Referencing a function is exactly what it sound like – it refers to a function without calling it.

console.log(sayHi) doesn't say hi, but prints the function sayHi to the console. Another example would be referencing a function when some event events, such as:

var hiBtn = document.getElementById("btn");
hiBtn.onclick = sayHi;

```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
  'name': 'Clarissa',
  'age': 30,
  sayHello: function(){
    var self = this;
    console.log("Hi, my name is " + this.name);
  }
};
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
