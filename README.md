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
[] NaN    //=> Number
[x] Number
[] Array  //=> Object
[x] Null
```

ref: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

```
typeof []  //=>"object"
typeof NaN //=>"number"
```


## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
- REPL stands for read–eval–print loop.
- REPL is a simple, interactive computer programming environment that takes single user inputs, evaluates them, and returns the result to the user
- REPL is important for us because it allows us to:
  + practice using a programming language
  + do experiments with code
  + do a simple unit test where we type a program, give it a input and check what it outputs
  + do mathematical calculations
```

ref: [https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)


### Question #3

**Given the Following Array**

```js
var foods = [
    ["apple","banana","strawberry"], 
    ["pizza","fries","hamburger"] 
];
```

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
var i, j;
for ( i = 0; i < foods.length; i++ ) {
    for ( j = 0; j < foods[i].length; j++ ) {
        console.log( "I want to eat a %s", foods[i][j] );
    }
}
```
### Question #4

**Given the Following Array**

```js
var foods = [ 
    ["apple","banana","strawberry"], 
    ["pizza","fries","hamburger"] 
];
```
How would I go about accessing the string "pizza" in the above array?

```js
var pizza = foods[1][0];
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```text
- A function bottles up its scope when its declaration is evaluated.
- A variable defined exclusively within the function cannot be accessed from outside the function or within other functions.
```

- Scope
    + The current context of execution.
    + The context in which values and expressions are "visible," or can be referenced.
- this
    + A variable that is automatically set when a function is invoked.
    + Its value depends on how a function is invoked. 
    + It has some differences between strict mode and non-strict mode.
- refs:
    - [https://developer.mozilla.org/en-US/docs/Glossary/Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
    - [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
    - [http://javascriptplayground.com/blog/2012/04/javascript-variable-scope-this/](http://javascriptplayground.com/blog/2012/04/javascript-variable-scope-this/)

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
// Define an object and store it in a variable `pizza`.
var pizza = {
    // A temperature.
    temperature: 70,
    // Sets the pizza's temperature to be 300
    bake: function() {
        this.temperature = 300;
    }
}

// Test
console.log( "Before baking: %sF", pizza.temperature ); //=>70
pizza.bake();
console.log( "After baking:  %sF", pizza.temperature ); //=>300
```

### Question #7

Using a 'for' loop, iterate over an array of numbers in JavaScript, printing each to the console.

Your Answer:
```js
var numbers = [49, 46, 67, 22, 8, 62, 72, 84, 24, 87];
var i;
for ( i = 0, len = numbers.length; i < len; i++ ) {
    console.log( numbers[i] );
}

numbers.forEach( function( number ) {
    console.log( number );
});
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
// Get references to all the button elements in the document.
var elems = document.querySelectorAll('button');

// Iterate over the array of the button elements.
var i = 0;
var len = elems.length;
for (; i < len; i++) {
    // Add a click listener on each element in the list.
    elems[i].addEventListener('click', function(event){ 
        // Set to red the text color of the clicked element.
        event.target.style.color = 'red';
    });
}
```

Experiment:
```js
// Change all the images to Masa.
var elems = document.querySelectorAll('img')
var i = 0;
var len = elems.length;
for (; i < len; i++) {
    elems[i].setAttribute('src', 'http://mnishiguchi.com/images/masatoshi_chinatown_300.png')
}
```

## Objects and Functions

### Question #9

What are the differences between calling and referencing a function? Please provide examples of each.

```text
// Declaring a function
function doNothing() { 
    console.log( "I am doing nothing" ) 
}

// Calling a function
doNothing();

// Referencing a function
setTimeout( doNothing, 1000 );
```

### Question #10

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
    name: "Masatoshi Nishiguchi",
    age: 39,
    sayHello: function() {
        console.log("Hi, my name is %s.", this.name)
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
