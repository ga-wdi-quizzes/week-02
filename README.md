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
[] Integers
[x] Arrays
[x] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
REPL stands for Read Eval Print Loop. It's a programming environment that takes in
input, evaluates that code, and returns a result in a line by line fashion.

It can be used to help with debugging by allowing the programmer to interact with
portions of the code individually and determine their current state. For example,
a programmer could have the REPL display the value of a variable before and after a
breakpoint while debugging. From there, they can determine if the variable is behaving
as expected or if the code needs changing.

```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
for(var i = 0; i < foods[0].length; i++){
  console.log("I want to eat a " + foods[0][i]);
}
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
console.log(foods[1][0]);
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```text
Scope is where a variable can be used in a program. In JavaScript, there are 4 basic rules of scope:
1. Variables created without the keyword var are in the global scope. This is regardless of where they are declared.
2. Variables created with the keyword var are in the current local scope. They can be accessed only in the function they were created and the functions within that function.
3. Functions create new local scope.
4 The current scope includes the enclosing scopes.

A way to imagine it is like a castle with rings of gates (like Minas Tirith). It's hard to find out what is happening within the walls if you are outside. But if you are inside the walls, you can look out and see what is happening around you.
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
instructor = "Nick"; // global variable
var instructor = "Nick"; // local variable
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text
When we call a function, we are executing that block of code with the call. When we reference a function, we are passing the block of code to be used at a later point in the program.
doSomeThing(); // This will call the function called doSomeThing. The program will immediately enter that function and execute the block of code within.
button.addEventListener("click", doSomeThing); // This will pass the function doSomeThing to the button as an attribute to the button object. The program will not enter that function and execute the code unless it is later called by the button when it is clicked.

```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
  name: "Melissa",
  age: 33,

  sayHello: function(){
    console.log("Hi, my name is " + this.name);
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
[x] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
