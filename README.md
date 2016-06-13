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
[] NaN --is  number
[x] Number
[x] Array
[x] Null

```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```
Read-Eval-Print-Loop, process and environment of reading the function, evaluating (computing it), printing it on display and looping the  previous commands until terminated. This is everything in development and I guess the process, In terms of debugging, we can pinpoint the cause of the issue by looking at the individual steps. We are able to get a input and ouput using the shell or various online compilers and the Chrome console.

```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
i = 0;
for (i=0; i<3; i++){
console.log("I want to eat a "+foods[0][i]);
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
```
Scope: where variables and functions are accessible. Variables and functions can be defined in a global or local scope.
```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js

var pizza = {
  normal: 70
  bake: function(){this.normal = 300;}
}
--Is this right? using this?
```

### Question #7

Using a 'for' loop, iterate over an array of numbers in JavaScript, printing each to the console.

Your Answer:
```js
for (i=0; i< array.length; i++)
console.log(array[i]);
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
document.querySelectorAll("button").addEventListener("click", function(event)){
  (event.target).innerHTML

  --yea I am stumped, I am looking at the jakeWeary solution and I cant even follow what it means.
```

## Objects and Functions

### Question #9

What are the differences between calling and referencing a function? Please provide examples of each.

```text
Calling a function is flat out telling the function to execute.. in your code you can say myFunction(); and the code will run.

When you are referencing a function, you are using an event or a listener, when the listener is 'triggered', the function executes. window.onload = getFunction(); is a good example or document ready or jQuery's .click
```
### Question #10

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
  name: "Anh",
  age: "26",
  sayHello: function(){return "Hi, my name is "+this.name;}
}

call it with student.sayHello
```

## Callbacks

### Question #11

**What is the difference between synchronous and asynchronous program execution?**

Select all that apply:
```
[X] Synchronous code runs at an even pace, asynchronous code runs with uneven pacing.
[] Synchronous code runs all at the same time, asynchronous code runs completely randomly
[X] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
