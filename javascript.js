const choices = ["rock","paper","scissors"];

function getComputerChoice() {
    
    let n = Math.floor(Math.random() * 3); 
    return choices[n];
}

// console.log(getComputerChoice())

const rockbtn = document.getElementById("rockbtn")
const paperbtn = document.getElementById("paperbtn")
const scissorsbtn = document.getElementById("scissorsbtn")

const compscorelabel = document.getElementById("compscore");
const humanscorelabel = document.getElementById("humanscore");
const tieslabel = document.getElementById("ties");
const roundlabel = document.getElementById("round");



// console.log(getHumanChoice())

let playerSelect;
let humanScore=0;
let computerScore=0;
let ties=0;
let rounds=0;

function playRound(humanChoice, computerChoice) {
    console.log("human chose: " + humanChoice);
    console.log("computer chose: " + computerChoice);
    // human and computer same
    if (humanChoice == computerChoice) {
        ties = ++ties;
        console.log("Tie game!")
    } 

    //human chose rock
    if (humanChoice == "rock" && computerChoice =="paper") {
        computerScore=++computerScore;
        console.log("You lose! Paper beats rock!");
    } else if (humanChoice =="rock" && computerChoice =="scissors") {
        humanScore= ++humanScore;
        console.log("You win! Rock beats scissors!");
    }

    //human chose paper
    if (humanChoice == "paper" && computerChoice =="rock") {
        humanScore= ++humanScore;
        console.log("You win! Paper beats rock!");
    } else if (humanChoice =="paper" && computerChoice =="scissors") {
        computerScore=++computerScore; 
        console.log("You lose! Scissors beats paper!");
    }

     //human chose scissors
    if (humanChoice == "scissors" && computerChoice =="rock") {
        computerScore=++computerScore;
        console.log("You lose rock beats scissors!");
    } else if (humanChoice =="scissors" && computerChoice =="paper") {
        humanScore= ++humanScore;
        console.log("You win! Scissors beats paper!");
    }
}
function resetgame(){
    humanScore = 0; 
    computerScore = 0;
    rounds = 0; 
    ties = 0;

    compscorelabel.textContent = computerScore;
    humanscorelabel.textContent = humanScore;
    tieslabel.textContent = ties;
    roundlabel.textContent = rounds;
}

function fifth(){
    if (humanScore == 5){
        alert("Human Wins!!");
        resetgame();
    }
    if (computerScore == 5){
        alert("Computer Wins!!");
        resetgame();
    }
}

rockbtn.onclick = function(){
    playerSelect = "rock";
    let compSelect = getComputerChoice();
    playRound(playerSelect,compSelect);
    compscorelabel.textContent = computerScore;
    humanscorelabel.textContent = humanScore;
    tieslabel.textContent = ties;
    rounds = rounds + 1;
    roundlabel.textContent = rounds;
    fifth();
}

paperbtn.onclick = function(){
    playerSelect = "paper";
    let compSelect = getComputerChoice();
    playRound(playerSelect,compSelect);
    compscorelabel.textContent = computerScore;
    humanscorelabel.textContent = humanScore;
    tieslabel.textContent = ties;
    rounds = rounds + 1;
    roundlabel.textContent = rounds;
    fifth();
}

scissorsbtn.onclick = function(){
    playerSelect = "scissors";
    let compSelect = getComputerChoice();
    playRound(playerSelect,compSelect);
    compscorelabel.textContent = computerScore;
    humanscorelabel.textContent = humanScore;
    tieslabel.textContent = ties;
    rounds = rounds + 1;
    roundlabel.textContent = rounds;
    fifth();
}




// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);
