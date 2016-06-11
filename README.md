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
```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
// write code here
```

### Question #7

Using a 'for' loop, iterate over an array of numbers in JavaScript, printing each to the console.

Your Answer:
```js
// write code here
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
```

## Objects and Functions

### Question #9

What are the differences between calling and referencing a function? Please provide examples of each.

```text

```
### Question #10

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
// write code here
```

## Callbacks

### Question #11

**What is the difference between synchronous and asynchronous program execution?**

Select all that apply:
```
[] Synchronous code runs at an even pace, asynchronous code runs with uneven pacing.
[] Synchronous code runs all at the same time, asynchronous code runs completely randomly
[] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
