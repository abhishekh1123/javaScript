// A very Simple quiz game in JS using condittions statements.

"use strict";
const prompt = require("prompt-sync")( {sigint: true});
// const prompt = require("prompt-sync")();

console.log("Welcome to the General Quiz!");

let countScore = 0;
const totalQuestions = 6;

// 1
const answer1 = prompt("What is the national bird of India? ")
const correctAnswer1 = "PEACOCK";

if(answer1.toUpperCase() === correctAnswer1){
    console.log("You got it correct");
    countScore++;
}
else{
    console.log("You got it Wrong");
}

// 2
const answer2 = prompt("What is the national flower of India? ")
const correctAnswer2 = "LOTUS";

if(answer2.toUpperCase() === correctAnswer2){
    console.log("You got it correct");
    countScore++;
}
else{
    console.log("You got it Wrong");
}

// 3
const answer3 = prompt("What is the national language of India? ")
const correctAnswer3 = "HINDI"

if(answer3.toUpperCase() === correctAnswer3){
    console.log("You got it correct");
    countScore++;
}
else{
    console.log("You got it Wrong");
}

// 4
const answer4 = prompt("What is the national sport of India? ")
const correctAnswer4 = "HOCKEY"

if(answer4.toUpperCase() === correctAnswer4){
    console.log("You got it correct");
    countScore++;
}
else{
    console.log("You got it Wrong");
}
// 5
const answer5 = prompt("What is the national anthem of India? ")
const correctAnswer5 = "JANA GANA MANA"

if(answer5.toUpperCase() === correctAnswer5){
    console.log("You got it correct");
    countScore++;
}
else{
    console.log("You got it Wrong");
}

// 6
const answer6 = prompt("What is the national flag of India? ")
const correctAnswer6 = "TRICOLOR"

if(answer6.toUpperCase() === correctAnswer6){
    console.log("You got it correct");
    countScore++;
}
else{
    console.log("You got it Wrong");
}

const percentage = Math.round((countScore / totalQuestions) * 100);


console.log(`You got ${countScore} correct out of ${totalQuestions}!!`);

console.log(`Your win percentage is ${percentage}%`);
// console.log("Your percentage", percentage.toString()+ "%");