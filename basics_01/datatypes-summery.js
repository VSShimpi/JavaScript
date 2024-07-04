// Primitive
// 7 types

const scores = 100;
const scoresValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null

const id = Symbol('123');
const anotherId = Symbol('123');

const bigNumber = 4752738423472434723743n


console.log(id === anotherId);  
// console.log(typeof bigNumber);


// Array, Objects, Functions

const heros = ["Shaktiman", "ironman", "doga"];

const obj = {
    name: "Vishal",
    age : 23
}

const myFunction = function(){
    console.log("hello world");
}


console.log(typeof myFunction, typeof obj, typeof heros);

console.log(typeof anotherId);
