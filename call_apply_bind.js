//call:
function myFunction(item1,item2){
    console.log(`${this.name} having a meal of ${item1} and ${item2}`)
 
}
const person={name:"John"};
myFunction.call(person,"rice","sambar")
//apply
function applyfunction(flw1,flw2){
    console.log(`${this.name} love ${flw1} and ${flw2}`)

}
const person1={name:"Alice"};
applyfunction.apply(person1, ["rose","jasmine"])


//bind:

function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}
const person2 = { name: "Alice" };
// Using .bind() to set 'this' to 'person' but NOT calling immediately
const boundGreet = greet.bind(person2, "Hello", "!");

// Call the new function later
boundGreet(); 

// Output: "Hello, Alice!"
