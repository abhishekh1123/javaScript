// Primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, bitInt

// Numbers
const score = 100
const scoreValue = 99.5

// Boolean 
const isLoggedIn = false

// null
const outSideTemp = null

// Symbol
const id = Symbol('123');
const anotherId = Symbol('123')
// console.log(id); // Symbol(123)
// console.log(anotherId); // Symbol(123)
// console.log(id === anotherId); // False  

// BigInt
const bigNumber = 2453284927932342n


// Reference (Non Primitive)

// Array, Objects, Functions

//Arrays
const avengers = ["Captain America", "Iron Man", "Doctor Strange", "Thor", "Hulk"]
// console.log(avengers); 

// Objects
let myObj = {
    name: "Abhi",
    age: 22,
}

// console.log(typeof myObj);

//Functions
const myFunciton = function(){
    console.log("Hello World");
}

console.log(typeof id);
