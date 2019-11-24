const playerSelection = document.getElementsByTagName("input");
let input = " ";

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
      return 'rock';
    } else if (randomNumber > 0.66) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }

  let computerSelection = computerPlay;

function playRound(playerSelection, computerSelection) {

    if(playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        return "You loose!";
    }

    else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++;
        return "You win!";
    }

    else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        return "You win!";
    }

    else if(playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        return "You loose!";
    }

    else if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        return "You win!";
    }

    else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        return "You loose!";
    }

    else if(playerSelection === computerSelection){
        return "It's a tie";
    }
    
}



