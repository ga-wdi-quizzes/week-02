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
[x] NaN
[x] Number
[x] Array
[x] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
REPL stands for read-eval-print loop. It is an interactive programming environment that takes a users input, evaluates the input, then returns/prints a result. This interactive environment allows developers to see whats going on 'under the hood', which helps make debugging much more efficient.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

function printFruit(){
  for (var i = 0; i < foods[0].length; i++){
    console.log("I want to eat a " + foods[0][i]);
  }
}
printFruit();
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
1. Variables with the var keyword are available in the current local scope. e.g. = FunctionA contains: var number = 1,    where var fruit = 1 is only accessible within functionA and var fruit is hoistable, but its value of 1 is not.

2. Variables without the var keyword are available in the global scope. e.g. = FunctionA contains: number = 1, where number = 1 is accessible outside of functionA and fruit is hoistable, but its value of 1 is not.

3. All functions and only functions create a current local scope within them. e.g. = FunctionA contains functionB where everything in functionA is the current local scope.

4. The current scope includes all outer (enclosing) scopes. e.g. = FunctionA contains functionB where everything outside functionA is the current scope.
```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
Objects are collections of key-value pair properties.

var pizza = {
  temperature: 70,
  bake: function (){
    temperature = 300;
    console.log("the pizza's temp is " + temperature)
  }
}
pizza.bake();
```

### Question #7

Using a 'for' loop, iterate over an array of numbers in JavaScript, printing each to the console.

Your Answer:
```js
var numbers = [ 1, 2, 3, 4, 5]

function printNums(){
  for (var i = 0; i < numbers.length; i++)
  console.log(numbers[i])
}
printNums();
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
document.querySelectorAll('button', function(event){
  event.target.addEventListener(onclick).css('background-color', 'red')
})
```

## Objects and Functions

### Question #9

What are the differences between calling and referencing a function? Please provide examples of each.

```text
Calling a function tells the browser to run the function. Referencing a function tells the browser which function to look for when it's called.

Calling a function = runFunction();
Referencing a function = runFunction
```
### Question #10

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
  name: 'Joe',
  age: 28,
  sayHello: function(){
    console.log('Hi, my name is ' + student.name)
  }
}
student.sayHello();
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
