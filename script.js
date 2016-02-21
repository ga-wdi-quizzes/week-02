//3. Create a For Loop that outputs the following string for each piece of fruit in the console. "I want to eat a [fruit]"

var foods = [ ["apple","banana","strawberry"], ["pizza","fries","hamburger"] ];

foods[0].forEach(function (foods) {
  console.log("I want to eat a " + foods);
});

for (var i = 0; i < foods[0].length; i++) {
  console.log("I want to eat a " + foods);
}
