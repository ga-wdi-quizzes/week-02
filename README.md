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
[*this one*] Strings
[*this one*] Booleans
[] Undefined
[] NaN
[*this one*] Integers
[*this one*] Arrays
[] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
Read Eval Print Loop. It's an environment like i.e the console, where we input a command. It helps with debugging to check our line by line from where a break point is. It can show if you've left some undefined or you defined the wrong variable
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
for(var i = 0; i< foods.length-3; i++){
  console.log("I want to eat a " + foods[i]);
}
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
"If you're trying to output it then"
console.log(foods[3]);
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```Global variables can accessed anywhere in your code
Local Variables can only be accessed in the function they were called.
```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js

var pizza ={
  toppings: ["pepperoni","cheese"]
  crust: "stuffed"
  bake: function(temp){
    console.log("now baking at " + temp + "Degrees");
  }

  pizza.bake(300);

}
// write code here
```

### Question #7

Define a global variable instructor and set it equal to your Squad Instructor's Name. Then, define the same as a local variable instead.

Your Answer:
```js
var instructor = "Jesse"

function theRippers(){
  var instructor = "Jesse"
}
// write code here
```

## Objects and Functions

### Question #8

What are the differences between calling and referencing a function? Please provide examples of each.

```text

calling a function or invoking it excutes the function i.e
function myNum (x){
  console.log(x);
}

myNum(8);


referencing a function is similar to calling, it gets passed as a parameter in another function i.e

function myNum(x){
  x = prompt("number?")
}

function addNum(p,y){
 return p+y;
}

addNum(myNum(),7);


```
### Question #9

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
  name: "Isaac",
  age: "24",
  gender: male,

  sayHello:function(x){
    console.log ("Hi, my name is " + this.name)
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
[*this one*] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
