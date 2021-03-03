let playerRoundScore = 0;
let computerRoundScore = 0;

function computerPlay() {
    const computerSelection = Math.floor(Math.random() * 3 + 1);
    if (computerSelection === 1) {
        return 'rock';
    } else if (computerSelection === 2) {
        return 'paper';
    } else if (computerSelection === 3) {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Enter rock, paper or scissors.").toLowerCase()
    computerSelection = computerPlay();

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerRoundScore++
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerRoundScore++
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerRoundScore++
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerRoundScore++
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerRoundScore++
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerRoundScore++
        return `You lose ${computerSelection} beats ${playerSelection}`;
    }
}



function game() {
    for(let i = 0; i < 5; i++) {
        playRound()
    }
    if (playerRoundScore > computerRoundScore) {
        return 'You Win!';
    } else if (computerRoundScore > playerRoundScore) {
        return 'You Lose!';
    } else {
        return 'It\'s a draw!';
    }
}

console.log(game());
