////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = 'tie';
    } else if ((playerMove === 'rock') && (computerMove === 'paper')) {
        winner = 'computer';
    } else if ((playerMove === 'rock') && (computerMove === 'scissors')) {
        winner = 'player';
    } else if ((playerMove === 'paper') && (computerMove === 'scissors')) {
        winner = 'computer';
    } else if ((playerMove === 'paper') && (computerMove === 'rock')) {
        winner = 'player';
    } else if ((playerMove === 'scissors') && (computerMove === 'paper')) {
        winner = 'player';
    } else if ((playerMove === 'scissors') && (computerMove === 'rock')) {
        winner = 'computer';
    }
    
    return winner;
}

var playerWins = 0;
var computerWins = 0;



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played
    // what, who won, and what the current scoreboard looks like.

    // while ((playerWins < 5) && (computerWins < 5)) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var roundWinner = getWinner(playerMove, computerMove);


    if (roundWinner === 'player') {
        console.log("Player chose " + playerMove + " and computer chose " + computerMove + ". " + " Player wins this round.");
        playerWins+=1; 
    } else if (roundWinner === 'computer') {
        console.log("Computer chose " + computerMove + " and player chose " + playerMove + ". " + " Computer wins this round.");
        computerWins +=1;
    } else if (roundWinner === 'tie') {
        console.log("It's a tie. Play again.");
    }
    console.log("The score is Player " + playerWins + " and " + " Computer " + computerWins + ".");
    // }

    if( playerWins < 5 && computerWins < 5) {
        playToFive();
    } else {
        if (playerWins === 5) {
            console.log("Player won the game!")
        } else if (computerWins === 5) {
            console.log("Computer won the game!")
        }
    }


    
}

playToFive()






