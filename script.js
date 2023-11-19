let currentRound = 1;
let playerScore = 0;
let computerScore = 0;

function updateResult(message) {
  document.getElementById("result").innerText = message;
}

function updateRound() {
  document.getElementById("round").innerText = `Round ${currentRound}`;
}

function updateScore() {
  document.getElementById(
    "score"
  ).innerText = `Score: You ${playerScore} - ${computerScore} Computer`;
}

function updateWinner(message) {
  document.getElementById("winner").innerText = message;
}

function showResetButton() {
  document.getElementById("reset").style.display = "block";
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = play(playerSelection, computerSelection);

  updateResult(result);
  updateRound();

  // Update scores
  if (result.includes("Win")) {
    playerScore++;
  } else if (result.includes("Lose")) {
    computerScore++;
  }

  updateScore();

  // Check if it's the last round
  if (currentRound === 5) {
    // Determine the overall winner
    if (playerScore > computerScore) {
      updateWinner("You win the game!");
    } else if (playerScore < computerScore) {
      updateWinner("You lose the game!");
    } else {
      updateWinner("It's a tie!");
    }

    showResetButton();
  }

  currentRound++;
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function play(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function resetGame() {
  currentRound = 1;
  playerScore = 0;
  computerScore = 0;

  document.querySelectorAll("button").forEach((button) => {
    button.disabled = false;
  });

  document.getElementById("reset").style.display = "none";
  updateResult("");
  updateRound();
  updateScore();
  updateWinner("");
}
