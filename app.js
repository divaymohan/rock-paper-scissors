let userScore = 0;
let computerScore = 0;
const unserScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div_div = document.getElementById("s");

function convertToword(letter) {
  if (letter == "r") {
    return "Rock";
  }
  if (letter == "p") {
    return "Paper";
  } else {
    return "Scissior";
  }
}
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const random_number = Math.floor(Math.random() * 3);
  return choices[random_number];
}
function win(userChoice, computerChoice) {
  userScore++;
  unserScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToword(userChoice)} Beats ${convertToword(
    computerChoice
  )}. You Win! 👍 💖`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToword(
    userChoice
  )} can't Beats ${convertToword(computerChoice)}. You Lose! 👎 💔`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 500);
}
function draw(userChoice, computerChoice) {
  result_div.innerHTML = `${convertToword(
    userChoice
  )} is Equals to ${convertToword(computerChoice)}. Its Draw! 🤖`;
  document.getElementById(userChoice).classList.add("no-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("no-glow");
  }, 500);
}

getComputerChoice();
function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log("user choice=> " + userChoice);
  console.log("user choice=> " + computerChoice);
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      console.log("user win!!");
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      console.log("USER LOSES.");
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      console.log("Its a Draw..");
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    //console.log("hey you clicked on rock!");
    game("r");
  });
  paper_div.addEventListener("click", function() {
    //console.log("hey you clicked on paper!");
    game("p");
  });
  scissors_div_div.addEventListener("click", function() {
    //console.log("hey you clicked on scissor");
    game("s");
  });
}
main();
