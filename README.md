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

R: read, E: evaluate, P: print, L: loop.

This is important for developers so that we know what is going on in our code. It helps us know that what we think is happening is actually true.

```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js

for(var i = 0; i<=foods.length; i++){
  console.log("I want to eat a " + foods[0][i]);
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

Variables that AREN'T created with "var" are placed in the global scope.

Variables that ARE created with "var" are placed in the local scope (unless they aren't contained in a function which means they are considered global).

Only functions can create new local scopes; all functions do this.

The current scope includes all the outer scopes as well.

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
  bake: function(){
    this.temperature = 300;
  }
};

```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js

//global variable
instructor = "Robin";

function name(){
  //local variable
  var instructor = "Robin";
  console.log("My squad leader's name is " + instructor + ".");
};

```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text
  Calling the function provides a result and/or a return value. Example:  calling the function MULTIPLY with arguments 1 and 8
          ~~~function multiply( num1, num2 ){
              console.log( num1 * num2 );
              return num1 * num2;
             }~~~~
  -->multiply(1,8)<-- prints and returns the value 8.

  Referencing the function provides only the function's code.
          ~~~function multiply( num1, num2 ){
              console.log( num1 * num2 );
              return num1 * num2;
             }~~~
  -->multiply<-- provides only the above code.
```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js

var student ={
  name: "Toni",
  age: 25,
  sayHello: function(){
    console.log("Hi, my name is " + this.name + ".")
  }
};

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
