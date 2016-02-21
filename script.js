//3. Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

foods[0].forEach(function (foods) {
  console.log("I want to eat a " + foods);
});

//6. Define an object and store it in a variable `pizza`. The object should have 2
// properties: a temperature (set to 70), and a method called `bake`. When called,
// this method should set the pizza's temperature to be 300. Note: you may not use
// the variable pizza inside your method.

var pizza = {
  temperature: 70,
  bake: function() {
    console.log("Pizza baked to 300 degrees.");
     this.temperature = 300;
  }
};
console.log(pizza.temperature);
pizza.bake();
console.log(pizza.temperature);
