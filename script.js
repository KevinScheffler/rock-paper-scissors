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

const player = document.getElementById('player')
const computer = document.getElementById('computer')

const rock = document.getElementById('rock');
rock.addEventListener('click', function() {
    playRound('rock');
    player.textContent = playerRoundScore;
    computer.textContent = computerRoundScore;
});

const paper = document.getElementById('paper');
paper.addEventListener('click', function() {
    playRound('paper');
    player.textContent = playerRoundScore;
    computer.textContent = computerRoundScore;
});

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', function() {
    playRound('scissors')
    player.textContent = playerRoundScore;
    computer.textContent = computerRoundScore;
});



function playRound(playerSelection, computerSelection) {
    // playerSelection = prompt("Enter rock, paper or scissors.").toLowerCase();
    computerSelection = computerPlay();
    
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerRoundScore++
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerRoundScore++
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerRoundScore++
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerRoundScore++
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerRoundScore++
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerRoundScore++
    }
    game() 
}

const results = document.getElementById('results');

function game() {
    if (playerRoundScore === 5) {
        results.textContent = `You Win! With a score of ${playerRoundScore} vs ${computerRoundScore}`;

    } else if (computerRoundScore === 5) {
        results.textContent = `The Computer Wins! With a score of ${computerRoundScore} vs ${playerRoundScore}`;
    } else if (playerRoundScore === 5 && computerRoundScore === 5) {
        results.textContent = `It's A Tie! with a score of ${playerRoundScore} and ${computerRoundScore}`
    }
}











