const marvel_heros = ["Spiderman", "Ironman", "Captain America"]

const dc_heros = ["Batman", "SuperMan", "Wonder Woman"]

const indian_heros = ["Saktiman", "Nagraj"]
// marvel_heros.push(dc_heros) // produces a array within a array

let all_heros = marvel_heros.concat(dc_heros);

// console.log(all_heros);

// Spread operator
let all_heros2 = [...marvel_heros, ...dc_heros, ...indian_heros];

// console.log(all_heros2);

let arr = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10], 11], 12, 13, 14];

let new_arr = arr.flat(Infinity)

// console.log(new_arr);

// console.log(Array.isArray("Abhishekh Kumar"));
// console.log(Array.from("Abhishekh Kumar"));
// console.log(Array.from({name: "Abhishekh Kumar"}));

let score1 =100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score2, score3, score4));