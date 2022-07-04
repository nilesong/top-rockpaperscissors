let choices = ['rock', 'paper', 'scissors'];

let scoreComputer = 0;
let scorePlayer = 0;
const scoreBoardPlayer = document.querySelector('.scorePlayer');
const scoreBoardComputer = document.querySelector('.scoreComputer');
const resultBoard = document.querySelector('.resultBoard');

function computerPlay() {
    let rand = Math.floor(Math.random() * 3);
    computerSelection = choices[rand];
    return computerSelection;
}

// From pre-UI Code
// function playerPlay() {
//     let playerSelection = prompt("Rock, Paper or Scissors?");
//     playerSelection = playerSelection.toLowerCase();
//     if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
//         return playerSelection;
//     } else {
//         playerSelection = 'invalid';
//         return playerSelection;
//     }
// }

function scoreCheckStart() {
    if (scorePlayer === 5 || scoreComputer === 5) {
        return false;
    } else {
        return true;
    }
}


function scoreCheckEnd() {
    if (scorePlayer === 5 || scoreComputer === 5) {
        if (scorePlayer > scoreComputer) {
            console.log('Player wins');
            resultBoard.innerText = "Player Wins!"
        } else {
            console.log('Computer wins');
            resultBoard.innerText = "Computer Wins!"
        }
    }
}

function playRound(event) {
    if (!scoreCheckStart()) return;
    let computer = computerPlay();
    let player = event.srcElement.innerText;
    player = player.toLowerCase();
    if (computer === 'rock' && player === 'rock') {
        console.log('Tie!');
    } else if (computer === 'rock' && player === 'paper') {
        console.log('You win! Paper beats Rock');
        scorePlayer += 1;
    } else if (computer === 'rock' && player === 'scissors') {
        console.log('You lose! Rock beats Scissors');
        scoreComputer += 1;
    } else if (computer === 'paper' && player === 'rock') {
        console.log('You lose! Paper beats Rock');
        scoreComputer += 1;
    } else if (computer === 'paper' && player === 'paper') {
        console.log('Tie!');
    } else if (computer === 'paper' && player === 'scissors') {
        console.log('You win! Scissors beats Paper');
        scorePlayer += 1;
    } else if (computer === 'scissors' && player === 'rock') {
        console.log('You win! Rock beats Scissors');
        scorePlayer += 1;
    } else if (computer === 'scissors' && player === 'paper') {
        console.log('You lose! Scissors beats Paper');
        scoreComputer += 1;
    } else if (computer === 'scissors' && player === 'scissors') {
        console.log('Tie!');
    } else {
        console.log('Invalid answer! Please play again.');
    }

    console.log(`Computer played ${computer}`);
    console.log(`Player played ${player}`);
    scoreCheckEnd();
    event.stopPropagation();
    scoreBoardPlayer.innerText = scorePlayer;
    scoreBoardComputer.innerText = scoreComputer;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
})

// From pre-UI Code
// function game() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(`Game #${i}`);
//         playRound();
//     }
// }