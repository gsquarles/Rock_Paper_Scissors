let playerScore = 0;
let compScore = 0;


function computerPlay(){
    const choice = ["Rock","Paper","Scissors"];
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
    
}

function playRound(playerSelection, computerSelection){
    let playerPick = prompt("Do you choose rock, paper, or scissors?");
    let computerPick = computerPlay();
    //Prints what the computer chose
    console.log("The computer chose: " + computerPick);
    if (playerPick.toLowerCase() == "rock" && computerPick == "Rock"){
        return("It is a tie! Computer score is: "+compScore + " Player Score is: " +playerScore);
    }
    else if (playerPick.toLowerCase() == "rock" && computerPick == "Paper"){
        return("Computer wins! Computers score is: " + (compScore += 1));
    }
    else if(playerPick.toLowerCase() == "rock" && computerPick == "Scissors"){
        return("Player wins! Player score is: " + (playerScore +=1));
    }
    else if(playerPick.toLowerCase() == "paper" && computerPick == "Rock"){
        return("Player wins! Player score is: " + (playerScore +=1));
    }
    else if(playerPick.toLowerCase() == "paper" && computerPick == "Paper"){
        return("It is a tie. Computer score is:"+compScore + "Player Score is: " +playerScore);
    }
    else if(playerPick.toLowerCase() == "paper" && computerPick == "Scissors"){
        return("Computer Wins! Computers score is: "+ (compScore += 1));
    }
    else if(playerPick.toLowerCase() == "scissors" && computerPick == "Rock"){
        return("Computer Wins! Computers score is: " + (compScore += 1));
    }
    else if(playerPick.toLowerCase() == "scissors" && computerPick == "Paper"){
        return("Player wins! Player score is: " + (playerScore +=1));
    }
    else if(playerPick.toLowerCase() == "scissors" && computerPick == "Scissors"){
        return("It is a tie.Computer score is:"+compScore + "Player Score is: " +playerScore);
    }
}




function game(){
    for (let i = 0; i < 5; i++){
        
        
        console.log(playRound());

        if(i == 4 && playerScore > compScore){
            alert("Game Over Player Wins!  Player Score: " + playerScore + " Computer Score: "+ compScore);
        }
        else if(i == 4 && playerScore < compScore){
            alert("Game Over Computer Wins! Player Score: " + playerScore + " Computer Score: "+ compScore);
        }
        else if(i == 4 && playerScore == compScore){
            alert("Game Over It is a Tie! Player Score: " + playerScore + " Computer Score: "+ compScore);
        }

    }
}

game();