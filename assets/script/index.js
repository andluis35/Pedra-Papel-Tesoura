let playerScore = 0;
let computerScore = 0;
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMessage = document.getElementById("result-message");
const winnerMessageElement = document.getElementById("winner-message");
const optionsContainer = document.querySelector(".options");
const resetGameBtn = document.getElementById("reset-game-btn");

resetGameBtn.addEventListener("click", resetGame);

rockBtn.addEventListener("click", function () {
    showResults("Rock");
});
  
paperBtn.addEventListener("click", function () {
    showResults("Paper");
});
  
scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
});

function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
    if((player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")) {
          return true;
    }
    else {
      return false;
    }
}

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if(hasPlayerWonTheRound(userOption, computerResult)) {
      playerScore++;
      return "Player wins! " + userOption + " beats " + computerResult;
    }
    else {
      if(userOption === computerResult) {
        return "It's a tie! Both chose " + userOption;
      }
      else {
        computerScore++;
        return "Computer wins! " + computerResult + " beats " + userOption;
      }
    }
}

function showResults(userOption) {
    roundResultsMessage.innerText = getRoundResults(userOption);
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;

    if(playerScore === 3) {
        winnerMessageElement.innerText = "Player has won the game!";
        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
      }
      else {
        if(computerScore === 3) {
          winnerMessageElement.innerText = "Computer has won the game!";
          resetGameBtn.style.display = "block";
          optionsContainer.style.display = "none";
        }
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMessageElement.innerText = "";
    roundResultsMessage.innerText = "";
}