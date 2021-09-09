let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.random() * 10
}

const compareGuesses = (humanGuess, computerGuess, targetNum) => {
    let closestNum = 0
    if(getAbsoluteDistance(humanGuess, targetNum) <= getAbsoluteDistance(computerGuess, targetNum)) {
        return true;
    } else {
        return false;
    }
}

// update function use to increase score each round
const updateScore = winner => {
    if(winner === 'human') {
        humanScore++
    } else {
        computerScore++
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}

// get absolute number
const getAbsoluteDistance = (num, target) => {
    return Math.abs(target - num)
}


