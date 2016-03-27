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
[X] String
[X] Boolean
[X] Undefined
[] NaN
[X] Number
[] Array
[X] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```REPL helps programmers see an immediate outcome to their code- a test. It can also be used to experiment with code.  It also helps to  pinpoint where a problem may lie in the code therefore going hand in hand with debugging.

```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```
var fruit = foods[0];
for (var i = 0; i < fruit.length; i++) {
  console.log("I want to eat a " + (fruit[i]);
}
//
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```
// foods[1][0];
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```The rules of scope pertains to location of variables which can either be local or global. A variable located outside of a function can be used anywhere in your code.  A variable located within a function can only be used within that function and can't be accessed anywhere else.
```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```
//

var pizza = {temp:"70", bake: function() {return this.temp = 300;}
};

```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```
//
<!-- global -->
var instructor = "Adam Bray"

<!-- local -->
function myInstructor() {
  var name = "Adam Bray";
  return name;
}   
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```
Calling a function causes you to execute the function. (with parenthesis)

var instructor = {firstName: "Adam", lastName: "Bray", fullName: function(){
  return this.firstName + " " + this.lastName;
  }
  instructor.fullName();
}
Referencing a function means to reference it by it's variable name or label, not by the actual values it hold and it will not execute- (no parenthesis).

function fullName() {
  var Person =
  console.log("hey");

  fullName;
}

```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```
// var student = {
  name: "Habby",
  age: "35",
  sayHello: function(){
    console.log("Hi, my name is " + (name));
  };
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
