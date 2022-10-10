const options = ["r", "p", "s"];

// let computerChoice = options[Math.floor(Math.random() * options.length)];

let computerChoice = "r";

let humanChoice = "r";

let userScore = document.getElementById("userScoreVal");
let val = 0;

function randomSelection() {
  if (computerChoice === humanChoice) {
    userScore.textContent = val += 1;
  }
}

document.getElementById("s").addEventListener("click", randomSelection);
