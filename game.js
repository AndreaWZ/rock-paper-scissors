let playerScore = 0;
let computerScore = 0;
let totalScore = 0;
const choice = ["rock", "paper", "scissors"];

function startGame(playerSelection){
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];

    if(totalScore < 5) {

        playRound(playerSelection, computerSelection);
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log("Player: " + playerScore);
        console.log("Computer: " + computerScore); 
        

    }

    else {
        if(playerScore > computerScore){

            alert("YOU WIN THE GAME!! 😎✌️ " + " Player: " + playerScore + " --- Computer: " + computerScore);
        }
        
        else if (playerScore < computerScore) {
            alert("GAME OVER. You loose 😭 " + " Computer: " + computerScore + " --- Player: " + playerScore);
        }
    
        else {
            alert("It's a Tie 🤗 " + " Player: " + playerScore + " --- Computer: " + computerScore);
        }

    }
    
}

function playRound(playerSelection, computerSelection) {

    totalScore++;

    if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++;
        alert ("Player Win!! " + " Player: " + playerSelection + " --- Computer: " + computerSelection)
    }

    else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        alert ("Player Win!! " + " Player: " + playerSelection + "--- Computer: " + computerSelection)
    }

    else if(playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        alert ("Player Win!! " + " Player: " + playerSelection + " --- Computer: " + computerSelection)
    }

    else if(playerSelection === computerSelection){
        alert ("It's a Tie!! " + " Player: " + playerSelection + " --- Computer: " + computerSelection)
    }

    else {
        computerScore++;
        alert ("Computer Win!! " + " Player: " + playerSelection + " --- Computer: " + computerSelection)
    }
}   

