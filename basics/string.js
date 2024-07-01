const name = "Vishal";
const repono = 5;

console.log(`This is my name : ${name} and it's my repo count ${repono}`);

const gameName = new String("vishal-hc");
console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.charAt(6));
console.log(gameName.indexOf('-'));

const newString = gameName.substring(0, 9)
console.log(newString);

const anotherString  = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "  Vishal    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://vishal.com/vishal%20shimpi";

console.log(url.replace('%20', '-'));

console.log(url.includes('vishal'));

console.log(gameName.split('-'));



