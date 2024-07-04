"use-strict";
const prompt = require("prompt-sync")({sigint: true});

console.log("Welcome to the Rock Paper scissor Game!!!");

let win = 0;
let losses = 0;
let draw = 0;

while(true){

    const playerChoice = prompt("Enter your choice r:Rock, p:Paper & s:Scissor (or q to quit): ").toLowerCase();
    
    if(playerChoice === 'q'){
        break;
    }

    if(
        playerChoice != 'r' && 
        playerChoice != 'p' && 
        playerChoice!= 's'){
        console.log("Enter a Valid Choice");
        continue;
    }

    const choices = ["rock", "paper", "scissor"];
    const randomIndex = Math.round(Math.random() * 2)
    const computerChoice = choices[randomIndex];

    console.log("The computer used", computerChoice);  

    if( 
    (playerChoice == 'r' && computerChoice == 'scissor') ||
    (playerChoice == 'p' && computerChoice == 'rock') ||
    (playerChoice == 's' && computerChoice == 'paper')){

        console.log("You WIN!!");
        win++;
   }
    else if(playerChoice == computerChoice){
        console.log("Its a DRAW!!");
        draw++;
    }
    else{
        console.log("You LOSE!!");
        losses++;
    }
}

console.log("Wins:",win,"Losses:",losses,"Draw:",draw);


