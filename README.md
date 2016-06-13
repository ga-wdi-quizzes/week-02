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

```
REPL stands for read-eval-print loop. It is is an interactive interpreter to a programming language. It is important for us as developers as it creates an environment for experimentation. This aids with debugging as a user can enter single inputs that can get evaluated without compiling.

```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```
for(i=0; i<foods.length; i++){
  for(j=0; j<foods[i].length; j++){
    console.log("I want to eat a " + foods[0][j]);
  }
}
```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```
for(i=0; i<foods.length; i++){
  for(j=0; j<foods[i].length; j++){
    console.log("I want to eat a " + foods[1][0]);
  }
}
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```
Variables declared within a JavaScript function, become local to the function. A variable declared outside a function, becomes global. If you assign a value to a variable that has not been declared, it will automatically become a global variable.
```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```
var pizza = {
  temperature: 70,
  bake: function() {this.temperature = 300;}
}
pizza.bake()
pizza.temperature
```

### Question #7

Using a 'for' loop, iterate over an array of numbers in JavaScript, printing each to the console.

Your Answer:
```
var arrayOfNums = [1,2,3,4,5,6,7,8,9];
for (var i = 0; i < arrayOfNums.length; i++) {
  console.log(arrayOfNums[i].toString());
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
```
document.getElementById('button').this.style.color = "red";
```

## Objects and Functions

### Question #9

What are the differences between calling and referencing a function? Please provide examples of each.

```
When you want something to execute right now, you call the function. If the function is wanted for later use or needs stored, you reference it.
For example, sayHello() has the parenthesis, therefore Javascript will execute this immediately. For it to be stored or executed later on, it is referenced. It would be sayHello.

```
### Question #10

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```
var student = {
  name: "Kristin",
  age: "23",
  sayHello : function() {console.log("Hi, my name is " + student.name)}
}
student.sayHello()
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
