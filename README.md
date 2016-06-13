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
[] NaN
[x] Number
[] Array
[x] Null
```

## Question #2

Explain what is a REPL, and why is it important for us as developers and help with debugging?

```text
Read-Evaluate-Print Loop-- it reads a functions inputs, evaluates the the code passed into the function, then prints and displays the output results from the function, & continues to loop through the previous steps until all of the code is executed. It is important for developers to help with debugging because it helps programmers to understand the interactive programming environment and allows for them to inspect the printed results  more frequently than the previous edit-compile-run debug method.
```
### Question #3

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

```js
var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];
for (var i = 0; i < foods[0].length; i++) {
	console.log("I want to eat a " + foods[0][i]);
}

```
### Question #4

**Given the Following Array**

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

How would I go about accessing the string "pizza" in the above array?

```js
var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];
for (var i = 0; i < foods[1].length; i++) {
}
console.log(foods[1][1]);
```

## Scope/Context/Closures

### Question #5

Describe the rules of scope in JavaScript.

Your Answer:
```text
In JavaScript, functions define scope, with the default scope being the window. Whenever you see a function within another function, the inner function has access to the scope in the outer function. When looking for a variable, JavaScript searches the innermost scope and then outward until it finds the variable/object/function. You can change scope with .call(), .apply() & .bind() by changing the context of how a function is called. Additionally, accessing variables outside of their scope creates closure. And each scope creates a different value of 'this' depending on how the function is invoked, with the default value being set to the global window.
```

### Question #6

Define an object and store it in a variable `pizza`. The object should have 2
properties: a temperature (set to 70), and a method called `bake`. When called,
this method should set the pizza's temperature to be 300. Note: you may not use
the variable pizza inside your method.

Your Answer:
```js
var pizza = {
    temp: 70,
    bake: function (newTemp) {
        return this.temp = newTemp;
    }
};
console.log(pizza.bake(300));
```

### Question #7

Using a 'for' loop, iterate over an array of numbers in JavaScript, printing each to the console.

Your Answer:
```js
var nums = [ 1,2,3,4,5,6,7,8,9 ];
nums.forEach(function(nums) {
  console.log(nums);
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
document.addEventListener('click', function(event) {
  if(event.target === matchesSelector)) {
      event.style.color = 'red';
   }
}, false);
```

## Objects and Functions

### Question #9

What are the differences between calling and referencing a function? Please provide examples of each.

```text
Since variables and functions defined within a function may only be accessed inside a function, invoking a function provides a way to create privacy. If you choose to use function declaration or expression, without parentheses the function is not invoked. In JavaScript, the parentheses imply that the function is being immediately called rather than just referenced, which can be helpful for someone else who is reading your code to understand.
examples:
referenced: var foo = function(){ /* code */ }
invoked: (function(){ /* code */ }());
```
### Question #10

Using the object literal notation, Define an object called student and give it the properties (your attributes) of name, age, and a method sayHello, that outputs "Hi, my name is [your_name]".

Your Answer:
```js
var student = {
    name: "Rebekah",
    age: 30,
    sayHello: function () {
        return "Hi, my name is " + this.name;
    }
};
console.log(student.sayHello());
```

## Callbacks

### Question #11

**What is the difference between synchronous and asynchronous program execution?**

Select all that apply:
```
[x] Synchronous code runs at an even pace, asynchronous code runs with uneven pacing.
[] Synchronous code runs all at the same time, asynchronous code runs completely randomly
[x] Synchronous code runs in order (as appears in the source), asynchronous code may run at a later time.
```
