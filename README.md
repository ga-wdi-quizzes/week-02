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
[ ] NaN
[x] Integers
[ ] Arrays
[x] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
Read eval print loop. it's how we test single lines of code in the chrome console. you can type in a command and immediately see the result.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
for (var i = 0; i < foods.array.length; i++)
  console.log("I want to eat a" + " " + "[i]")
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
var pfh = foods[1];
console.log(pfh[0]);

//OR

foods[1][0];

```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```Scope is where a variable can be referenced.
two categories of scope:
        1. global:
        2. local
Four rules of scope:
  1. variables created without the var keyword are global.
  2. variables created with the var keyword are created in the local scope.
  3. All functions create a new local scope.
  4. Current scope includes all outer enclosing scopes.       
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
  }
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
instructor = "robin";
var instructor = "robin";

```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text
For function();

calling would be inputting the foillowing: function();

referencing would be simply inputting "function;"
```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js 
var student= {
  name: "Vijay",
  age: 28,
  sayHello: function(){
    console.log("Hi, my name is" + " " + "student.name");
  }
}
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
