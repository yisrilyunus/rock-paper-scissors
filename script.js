
/*
Function to produce a random number between 0, 1, 2 
and assign those number to either Rock, Paper, Scissors
*/
function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        result = "Rock";
    } else if (randomNumber === 1) {
        result = "Paper";
    } else {
        result = "Scissors";
    }
    return result ;
}

/*
Function to convert the case of userinput so only
first letter is capitalize
*/

function convertCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


/*
Function that get playerinput and get computer input
and decide which one is win based on set of rules

GAME RULES:
Paper vs Rock = Paper
Rock vs Scissors = Rock
Scissors vs Paper = Scissors
Equal = Tie
*/
function playRound(playerSelection, computerSelection) {
    const userInput = convertCase(playerSelection);

    if (userInput === computerSelection){
        const result = `It's Tie. You chose ${userInput} and Computer chose ${computerSelection}.`;
        return result;
        console.log(scoreCount(result));
        
    }

    else if (userInput === "Rock" && computerSelection === "Scissors") {
        const result = `You Win! ${userInput} beats ${computerSelection}`;
        return result;
        console.log(scoreCount(result));
    }

    else if (userInput === "Rock" && computerSelection === "Paper") {
        const result = `You Lose! ${computerSelection} beats ${userInput}`;
        return result;
        console.log(scoreCount(result));
    }

    else if (userInput === "Paper" && computerSelection === "Rock") {
        const result = `You Win! ${userInput} beats ${computerSelection}`;
        return result;
        console.log(scoreCount(result));
    }

    else if (userInput === "Paper" && computerSelection === "Scissors") {
        const result =`You Lose! ${computerSelection} beats ${userInput}`; 
        return result;
        console.log(scoreCount(result));
    }

    else if (userInput === "Scissors" && computerSelection === "Paper") {
        const result = `You Win! ${userInput} beats ${computerSelection}`;
        return result;
        console.log(scoreCount(result));
    }

    else {const result = `You Lose! ${computerSelection} beats ${userInput}`;
        return result;
        console.log(scoreCount(result));     
    }
}


//Function to count the score of each player

function scoreCount (result){

    if (result.includes("Win")) {
        userScore++;
        return `User's Score: ${userScore} and Computer's Score: ${computerScore}`;
    } else if (result.includes("Lose")) {
        computerScore++;
        return `User's Score: ${userScore} and Computer's Score: ${computerScore}`;
    } else if (result.includes("Tie")) {
        return `User's Score: ${userScore} and Computer's Score: ${computerScore}`;
    }
    
}

// Play game for 5 times
function game(){
    //for (let i=0;i<5;i++){

    const playerSelection = prompt("Choose either Rock, Paper, or Scissors: ");
    console.log(`player: ${playerSelection}`);
    const computerSelection = computerPlay();
    console.log(`computer: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    }
//}

// Initialize variable
let userScore = 0;
let computerScore = 0;
const playerSelection = null;
const computerSelection = null;

// Execute Game
game();