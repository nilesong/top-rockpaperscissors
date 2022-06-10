let choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let rand = Math.floor(Math.random() * 3);
    computerSelection = choices[rand];
    return computerSelection;
}

function playerPlay() {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        return playerSelection;
    } else {
        playerSelection = 'invalid';
        return playerSelection;
    }
}

function playRound() {
    let computer = computerPlay();
    let player = playerPlay();
    if (computer === 'rock' && player === 'rock') {
        console.log('Tie!');
    } else if (computer === 'rock' && player === 'paper') {
        console.log('You win! Paper beats Rock');
    } else if (computer === 'rock' && player === 'scissors') {
        console.log('You lose! Rock beats Scissors');
    } else if (computer === 'paper' && player === 'rock') {
        console.log('You lose! Paper beats Rock');
    } else if (computer === 'paper' && player === 'paper') {
        console.log('Tie!');
    } else if (computer === 'paper' && player === 'scissors') {
        console.log('You win! Scissors beats Paper');
    } else if (computer === 'scissors' && player === 'rock') {
        console.log('You win! Rock beats Scissors');
    } else if (computer === 'scissors' && player === 'paper') {
        console.log('You lose! Scissors beats Paper');
    } else if (computer === 'scissors' && player === 'scissors') {
        console.log('Tie!');
    } else {
        console.log('Invalid answer! Please play again.');
    }

    console.log(`Computer played ${computer}`);
    console.log(`Player played ${player}`);
}

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Game #${i}`);
        playRound();
    }
}