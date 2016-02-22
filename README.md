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
[] Undefined
[] NaN
[] Integers
[x] Arrays
[] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
A REPL - Read Eval Print Loop - is an interactive language interpreter that allows you to write and execute code, line by line, seeing it's output immediately.

REPLs are useful for debugging purposes as they allow you to inspect what happens at a very micro level, by evaluating single expressions as they come.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
foods.forEach(function(fruits) {
    fruits.forEach(function(fruit) {
        console.log("I want to eat a " + fruit);
    });
});
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
Scope is dependant on which function a variable is declared in, and whether it is declared with the `var` keyword.

Variables declared with the `var` keyword have a scope limited to the function in which they are declared, and any other function declared within that function.

Variables declared without the `var` keyword are global variables (they can be accessed by any other function).
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
    bake: function() {
        this.temperature = 300;
    }
}
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
var instructor = "Joe";

function localizeInstructor() {
    var instructor = "Shmo";
    console.log(instructor); // logs "Shmo"
}

localizeInstructor();
console.log(instructor) // logs "Joe"
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text
Calling a function executes it, while referencing a function passes around its definition.

If I wanted the function to run and return a value, I'd do this:

    function sayHello() {
        return "Hello";
    }
    console.log(sayHello()); // logs "Hello" to the console because sayHello was called with ()

I could pass a function reference as an argument to another function:

    function sayHello() {
        return "Hello"
    }
    function getHello(reference) {
        console.log(reference()); // Here the parameter reference is called and its return value is logged to the console
    }
    getHello(sayHello); // Logs "Hello".  No trailing parentheses means sayHello is passed as a reference
```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
    name: "John",
    age: 31,
    sayHello: function() {
        return "Hi, my name is " + this.name;
    }
}
```

## Callbacks

### Question #10

**What is the difference between synchronous and asynchronous program execution?**

Select all that apply:
```
[] Synchronous code runs at an even pace, asynchronous code runs with uneven pacing. // what does the question mean by "pace"? seems too general a term to be marked as true.  "pace" usually depends on if the program is multi-threaded.
[] Synchronous code runs all at the same time, asynchronous code runs completely randomly
[x] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
