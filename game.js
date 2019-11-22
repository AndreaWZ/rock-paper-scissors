
alert("Are you ready?");

let selection = prompt("rock, paper or scissors?!");

let playerSelection = selection;

let choice = ["rock", "paper", "scissors"];

function computerSelection(choice){
    
    let rand = Math.floor(Math.random() * 3) + 0;
    return (computerSelection[rand]);
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    while (playerScore <= 5) {
        if(playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        return "You loose!";
    }

        else if(playerSelection === "rock" && computerSelection === "scissors"){
            playerScore++;
            return "You win!";
        }

        if(playerSelection === "scissors" && computerSelection === "paper"){
            playerScore++;
            return "You win!";
        }

        else if(playerSelection === "scissors" && computerSelection === "rock"){
            computerScore++;
            return "You loose!";
        }

        if(playerSelection === "paper" && computerSelection === "rock"){
            playerScore++;
            return "You win!";
        }

        else if(playerSelection === "paper" && computerSelection === "scissors"){
            computerScore++;
            return "You loose!";
        }

        else if(playerSelection === computerSelection){
            return "It's tie";
        }
    }
    
	
}



