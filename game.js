
let playerScore = 0;
let computerScore = 0;
const choice = ["rock", "paper", "scissors"];

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

startGame();
