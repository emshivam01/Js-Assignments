const options = ["r", "p", "s"];
let userVal = 0;
let userScoreVal = document.getElementById("userScoreVal");

let compVal = 0;
let compScoreVal = document.getElementById("compScoreVal");

let userStats = document.getElementById("result-user-stat");
let computerStats = document.getElementById("result-comp-stat");
let finalStats = document.getElementById("result-final-stat");

let computerChoice = options[Math.floor(Math.random() * options.length)];

let choicesArr = document.querySelectorAll(".choice");

choicesArr.forEach((element) => {
  element.addEventListener("click", randomSelect);
});

function randomSelect() {
  userStats.innerText = "User: ";
  computerStats.innerText = "Computer: ";
  finalStats.innerText = "Winner: ";

  let computerChoice = options[Math.floor(Math.random() * options.length)];

  let compChoice;

  if (computerChoice === "r") {
    compChoice = "Rock";
  }
  if (computerChoice === "p") {
    compChoice = "Paper";
  }
  if (computerChoice === "s") {
    compChoice = "Scissor";
  }

  // Getting ID

  let userID = this.id;

  let humanChoice;

  if (userID === "r") {
    humanChoice = "Rock";
  }
  if (userID === "p") {
    humanChoice = "Paper";
  }
  if (userID === "s") {
    humanChoice = "Scissor";
  }

  // Checking
  if (computerChoice === userID) {
    userStats.insertAdjacentText("beforeend", humanChoice);
    computerStats.insertAdjacentText("beforeend", compChoice);
    finalStats.insertAdjacentText("beforeend", " Tied");
  }
  if (computerChoice === "r" && userID === "p") {
    userScoreVal.textContent = userVal += 1;
    userStats.insertAdjacentText("beforeend", humanChoice);
    computerStats.insertAdjacentText("beforeend", compChoice);
    finalStats.insertAdjacentText("beforeend", " User");
  }
  if (computerChoice === "r" && userID === "s") {
    compScoreVal.innerText = compVal += 1;
    userStats.insertAdjacentText("beforeend", humanChoice);
    computerStats.insertAdjacentText("beforeend", compChoice);
    finalStats.insertAdjacentText("beforeend", " Computer");
  }
  if (computerChoice === "p" && userID === "r") {
    compScoreVal.innerText = compVal += 1;
    userStats.insertAdjacentText("beforeend", humanChoice);
    computerStats.insertAdjacentText("beforeend", compChoice);
    finalStats.insertAdjacentText("beforeend", " Computer");
  }
  if (computerChoice === "p" && userID === "s") {
    userScoreVal.textContent = userVal += 1;
    userStats.insertAdjacentText("beforeend", humanChoice);
    computerStats.insertAdjacentText("beforeend", compChoice);
    finalStats.insertAdjacentText("beforeend", " User");
  }
  if (computerChoice === "s" && userID === "r") {
    userScoreVal.textContent = userVal += 1;
    userStats.insertAdjacentText("beforeend", humanChoice);
    computerStats.insertAdjacentText("beforeend", compChoice);
    finalStats.insertAdjacentText("beforeend", " User");
  }
  if (computerChoice === "s" && userID === "p") {
    compScoreVal.innerText = compVal += 1;
    userStats.insertAdjacentText("beforeend", humanChoice);
    computerStats.insertAdjacentText("beforeend", compChoice);
    finalStats.insertAdjacentText("beforeend", " Computer");
  }
}

choicesArr.forEach((element) => {
  element.addEventListener("click", randomSelect);
});
