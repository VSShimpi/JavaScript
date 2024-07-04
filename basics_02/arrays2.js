const marvel_heros = ["thor", "ironman", "hulk"];
const dc_heros = ["superman", "batman", "flash"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros)
// console.log(marvel_heros[3][0]);

const newArr = marvel_heros.concat(dc_heros);
// console.log(newArr);

// const another_array = [1,2,3,[4,5,6],7,[6,8,[4,5]]];
// const real_arr = another_array.flat(Infinity);
// console.log(real_arr);

console.log(Array.isArray("Vishal"));
console.log(Array.from("Vishal"));
console.log(Array.from({name: "Vishal"}));

let score1 = 200;
let score2 = 300;
let score3 = 400;

console.log(Array.of(score1, score1, score2, score2,score3));