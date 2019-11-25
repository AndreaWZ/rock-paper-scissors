<<<<<<< HEAD
const playerSelection = document.getElementsByTagName("input");
let input = " ";
=======

function startGame() {
    let playerSelection;

    for(let i = 0; i < 5; i++){
        let computerSelection = choice[Math.floor(Math.random() * choice.length)];
        playerSelection = prompt ("Rock, Paper or Scissors");

        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log('player: ' + playerScore + ', computer: ' + computerScore);
    }
    
    if(playerScore > computerScore){
        alert("YOU WIN THE GAME!! 😎✌️");
    }
    
    else if (playerScore < computerScore) {
        alert("GAME OVER. You loose 😭");
    }

    else {
         alert("It's a Tie 🤗");
    }
}

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
   
    if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++;
        return "Player win!";
    }

    else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        return "Player win!";
    }

    else if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        return "Player win!";
    }

    else if(playerSelection === computerSelection){
        return "It's a tie";
    }

    else {
        computerScore++;
        return "Computer win!";
    }
    
}

