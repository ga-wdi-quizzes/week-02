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
[X] Undefined **(classified as 'special' data type though not a primary)
[] NaN
[X] Integers
[No...but] Arrays **(called a 'composite' data type but is not a primary data type. It contains a list of primary data types (Strings, Booleans, Numbers/Integers))(overthinking it? Yeah... dern it.)
[X] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```It stands for "read, evaluate, print, loop." It is a very cool development environment wherein you can type code and see the result in real time. Super helpful if you want to see what you are doing and if it works as you go. Made piece by piece.

```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
var foods = [["apple","banana","strawberry"],["pizza","fries","hamburger"]];
for(var i = 0;i < foods[0].length; i=i+1){
  console.log("I want to eat a " + foods[0][i]);
}
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
foods[1][0]  

```accessing? Like if you want to use it you could make it a variable? Or console log it? Either way: var whatShouldIEat = foods[1][0] would equal pizza. It is in the variable "foods", second array, first in the list.
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```text
Scope is a concept referring to what can be accessed from where in JS. If an item that can be named (things like functions or variables) are named without those modifiers and are outside of any function they are considered to be in the "global" scope which by default refers to the "window" in a browser. If functions or variables are called within a function, or if they use the keywords "var" or "function" then they are only accessible within THAT present scope and the ones outside of them. NOT the ones inside them. This is why hoisting works.
```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizzas temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
var pizza = {
  temperature = 70,
  bake: function(){
    this.temperature = 300;
  }
}
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructors Name. Then, define the same as a local variable instead.

Your Answer:
```js
// instructor = "Adrian";    /// That's the global one, see? No "var" :)
// var instructor = "Adrian";   /// that variable creates a local scope and is not global.

```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text
"calling" a function refers to when you want to deploy the action that function takes right then and there in your code. "referencing" a function is when you are just referring to a previously defined function in another action(usually another function or some event.)

examples:
var food = ["sandwich","chips","drink"]
function orderLunch(){
  console.log("I want a "+food[0]+", "+food[1]+" and a "+food[2])
}
orderLunch();   <-- this is "calling a function."

you can 'refer' to a function by just not using the () after.

ex: setInterval(orderLunch,5000)   <--- order lots of lunches every 5000 seconds!!!

```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
    name = "Adrian",
    age = 33
    sayHello: function(){
      console.log("Hi, my name is (also) "+ this.name);
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
[] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
