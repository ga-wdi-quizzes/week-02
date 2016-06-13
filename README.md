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
[] Array
[x] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

a "Read Evaluate Print Loop", or, REPL, allows us to explore and debug, test variables and functions in our code, including the ability to test at specific points in code or run smaller portions. The developer's console in chrome is an example, allowing a user to type in a commands and immediately see results. This allows for exploring code and debugging.


### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"


```js

for (var i=0; i<foods[0].length; i++){
  console.log("I want to eat a "+foods[0][i]);
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

Scope is all of the functions and variables you can see from a certain line of code. Variables and functions have scope, referring to the parts of the code where they can be used.


### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
var pizza = {
  temperature: "70",
  bake: function (){
    return this.temperature="300";
  }
}
pizza.bake();


```

### Question #7

Using a 'for' loop, iterate over an array of numbers in JavaScript, printing each to the console.

Your Answer:
```js

for(var i=0; i<array.length; i++) {
console.log(array[i]);}

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
    document.getElementById('button').onclick = changeColor;   

    function changeColor() {
        document.body.style.color = "red";
    }   
```

## Objects and Functions

### Question #9

What are the differences between calling and referencing a function? Please provide examples of each.

```text

Calling a function: when you actually call the function to run, ie: changeColor();

Referencing a function: when you refer to a function is called elsewhere in the code, ie: changColor with no parenthesis

```
### Question #10

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js

var student = {
  name: "Julia",
  age: "25",
  sayHello: function(){
    console.log("Hi, my name is " + name + ".");
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
