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
[] Undefined
[] NaN
[x] Number
[x] Array
[] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text

A read–eval–print loop (REPL), which is a simple, interactive computer programming environment that allows a
user to input code, then evaluate code and return a result to the user. It helps developers to evaluate code in pieces
without running the entire program.

```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
// write code here

for(var i = 0; i < foods[0].length; i++){
	console.log("I want to eat a/an " + foods[0][i]);
}


```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
// write code here

console.log(foods[1][0]);
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```text

Scope relates to a variable's accessibility in a particular part of a program.
Variable scope is dictated by where a variable is located when it is declared.

```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
// write code here

var pizza = {
  temperature:70,
  bake: function(){
    this.temperature = 300;
  }
}

```

### Question #7

Using a 'for' loop, iterate over an array of numbers in JavaScript, printing each to the console.

Your Answer:
```js
// write code here
var numberArray = [47,45,19,12,6]

for(var i = 0; i < numberArray.length; i++){
	console.log(numberArray[i]);
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
// write code here
Listen for a click event on all buttons
When a button is clicked, change the color of the text to red

button.addEventListener("click", function(event){
  $(event.target).css('color', 'red');
});


document.getElementById('button').style.color = 'red'

```

## Objects and Functions

### Question #9

What are the differences between calling and referencing a function? Please provide examples of each.

```text
>>> Calling a function is when using the name of the function, followed by a set of parenthesis
Example of a function call --- computeTotalCost();

>>> Referencing a function is using the function name without the parenthesis. You would reference a function when you don't want to run function right away.
Example of a function reference --- $("#button").on("click",computeTotalCost);
```
### Question #10

Using the object literal notation, Define an object called student and give it the
properties (your attributes) of name, age, and a method sayHello, that outputs "Hi,
my name is [your_name]".

Your Answer:
```js
// write code here
var student = {
	name: "John Doe",
	age: 30,
	sayHello: function(){
		console.log("Hi, my name is " + this.name + ".");
	}

}


```

## Callbacks

### Question #11

**What is the difference between synchronous and asynchronous program execution?**

Select all that apply:
```
[] Synchronous code runs at an even pace, asynchronous code runs with uneven pacing.
[x] Synchronous code runs all at the same time, asynchronous code runs completely randomly
[] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
