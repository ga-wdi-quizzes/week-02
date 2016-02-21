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
[x] Integers
[] Arrays
[x] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```
REPL is "read eval print loop" and it helps in testing small bits of code by quickly showing the result of code.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```
var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

for (i = 0; i < foods[0].length; i = i +1)
{
console.log("I want to eat " + foods[0][i]);
}
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```
var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

console.log(foods[1][0]);
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```
Scope defines where the variable is accessible. If variable is declared outside of function then it is accessible globally through out the code whereas a local variable which is inside of a function is only available to access in that function. If variable is not declared inside the function it will be accessible through out the code.
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

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```

var instructor = "adrian"
console.log(instructor)

this is a global variable as long as it was not declared inside {} curly brackets function, if it is within curly brackets then it becomes local variable. if there was no var written in front of instructor then it would be a global variable regardless of if it was inside or outside of curly brackets.



```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text

```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
// write code here
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
