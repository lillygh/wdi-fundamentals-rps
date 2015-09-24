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
    move || getInput();
    return PlayerMove;
}

function getComputerMove(move) {
    move || randomPlay();
    return ComputerMove;
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


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played
    // what, who won, and what the current scoreboard looks like.
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var roundWinner = getWinner(playerMove, computerMove);

    while ((playerWins <= 5) || (computerWins <= 5)) {
        if (winner === 'player') {
            console.log("Player chose" + playerMove + "and computer chose" + computerMove + "." + "Player wins this round.");
            playerWins+=1;
        } else if (winner === 'computer') {
            console.log("Computer chose" + computerMove + "and player chose" + playerMove + "." + "Computer wins this round.");
            computerWins +=1;
        } else if (winner === 'tie') {
            console.log("It's a tie. Play again.");
        }
        console.log("The score is Player won" + playerWins + "rounds" + "and" + "Computer won" + computerWins + "rounds.");
    }
    return [playerWins, computerWins];
}

