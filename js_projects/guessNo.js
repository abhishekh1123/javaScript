// A random number guess game 
"use-strict";
const prompt = require("prompt-sync")( {sigint: true});

let guessCount = 0;
const playerName = prompt(`Enter your name: `)
console.log(`Welcome to the guessing Game ${playerName}!!!!`);

const randomNumber = Math.round(Math.random() * 10) 
// console.log(randomNumber);

let left = 0
let right = 10

while(true){
    const playerNumber = Number(prompt(`Guess the number between ${left} - ${right} `));

    if(playerNumber > 10){
        console.log(`Enter between ${left} - ${right}. Try again!`);
        continue;
    }

    if(playerNumber > randomNumber ){
        console.log("Number is too high!");
        right = playerNumber
        guessCount++;
    }
    else if(playerNumber < randomNumber ){
        console.log("Number is too low");
        left = playerNumber
        guessCount++;
    }
    else{
        console.log("You Gussed it!!!");
        console.log(`You took ${guessCount} Guess`);
        break;
    }
}


