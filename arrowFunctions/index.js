//this are arrow functions that will replace anonymous functions

//example of anonymous function

console.log("ANONYMOUS FUNCTIONS")
var square1 = function(x) { return x * x; };
console.log(square1(5))

var add = function(a, b) { return a + b; };
console.log(add(5,10))


//EXAMPLE OF ARROW FUNCTIONS
console.log("ARROW FUNCTIONS")

let square=x=>x*x
console.log(square(10))

let addNumber=(a,b)=>a+b
console.log(addNumber(10,10))