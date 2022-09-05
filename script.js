// PLAYER CODES
function getPlayerChoice() {
//let playerSelection = prompt('Do you choose Rock, Paper or Scissors?')
    if (playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors') {
        console.log("You chose " + `${playerSelection}`);
        return playerSelection
    } else {
        console.log('Error! Pick Rock, Paper or Scissors')
        return getPlayerChoice()
    }
}

// COMPUTER CODES
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let random = choices[Math.floor(Math.random() * 3)];
    return random; 
 }

 // GAME
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return ('Draw')
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        return ('Player Wins! Rock beats Scissors.')
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
        return ('Player Wins! Scissors beats Paper.')
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
        return ('Player Wins! Paper beats Rock.')
    } else if ((computerSelection === 'Scissors') && (playerSelection === 'Paper')) {
        return ('Computer Wins! Scissors beats Paper.')
    } else if ((computerSelection === 'Paper') && (playerSelection === 'Rock')) {
        return ('Computer Wins! Paper beats Rock.')
    } else if ((computerSelection === 'Rock') && (playerSelection === 'Scissors')) {
        return ('Computer Wins! Rock beats Scissors.')
    }
}

/*ROUNDS
function game() {
    for (let i = 1; i < 6; i++){
        console.log('Round  ' + i)
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log("Computer chose " + `${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
}*/
game()
