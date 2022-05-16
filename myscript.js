let playerScore = 0;
let compScore = 0;
let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');
let playerPick = "";
const results = document.createElement('div');
results.classList.add('results');
document.body.appendChild(results);



function computerPlay(){
    const choice = ["Rock","Paper","Scissors"];
    let computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}


function playerChoice(){
    if(document.getElementById('rock').clicked == true){
        return playerPick = 'rock';
    }
    else if(document.getElementById('paper').clicked == true){
        return playerPick ='paper';
    }
    else if(document.getElementById('scissors').clicked == true){
        return playerPick = 'scissors';
    }
    
    
    
    
}





function playRound(val){
    

    let playerSelection = val;
    console.log("Player Chose: " + playerSelection);
    let computerPick = computerPlay();
    //Prints what the computer chose
    console.log("The computer chose: " + computerPick);
    if (playerSelection == "rock" && computerPick == "Rock"){
        results.textContent = ("It is a tie! Computer score is: "+ compScore + " Player Score is: " + playerScore);
    }
    else if (playerSelection == "rock" && computerPick == "Paper"){
        results.textContent = ("Computer wins! Computers score is: " + (compScore += 1) + " Player Score is: " + playerScore);
    }
    else if(playerSelection == "rock" && computerPick == "Scissors"){
        results.textContent =("Player wins! Player score is: " + (playerScore +=1) + " Computer score is: "+compScore);
    }
    else if(playerSelection == "paper" && computerPick == "Rock"){
        results.textContent = ("Player wins! Player score is: " + (playerScore +=1)+ " Computer score is: "+compScore);
    }
    else if(playerSelection == "paper" && computerPick == "Paper"){
        results.textContent = ("It is a tie. Computer score is: "+compScore + " Player Score is: " +playerScore);
    }
    else if(playerSelection == "paper" && computerPick == "Scissors"){
        results.textContent = ("Computer Wins! Computers score is: "+ (compScore += 1) + " Player Score is: " + playerScore);
    }
    else if(playerSelection == "scissors" && computerPick == "Rock"){
        results.textContent = ("Computer Wins! Computers score is: " + (compScore += 1) + " Player Score is: " + playerScore);
    }
    else if(playerSelection == "scissors" && computerPick == "Paper"){
        results.textContent = ("Player wins! Player score is: " + (playerScore +=1)+ " Computer score is: "+compScore);
    }
    else if(playerSelection == "scissors" && computerPick == "Scissors"){
        results.textContent = ("It is a tie. Computer score is: "+compScore + " Player Score is: " +playerScore);
    }

    if(compScore == 5){
        results.textContent = "Game over! Computer Wins! Comp Score: " + compScore + " Player Score: " + playerScore;
        compScore = 0;
        playerScore = 0;
    }
    else if(playerScore == 5){
        results.textContent = "Game over! Player Wins! Player Score: " + playerScore + " Computer Score: " + compScore;
        playerScore = 0;
        compScore = 0;
    }
}


