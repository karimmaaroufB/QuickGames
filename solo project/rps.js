$(".rps-option").click(function() {
    let playerChoice = $(this).attr("id");
    let computerChoice = getComputerChoice();
    let result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
  });
  
  function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
  }
  
  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "tie";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "player";
    } else {
      return "computer";
    }
  }
  
  function displayResult(result) {
    let resultMessage = "";
    if (result === "tie") {
      resultMessage = "It's a tie!";
    } else if (result === "player") {
      resultMessage = "You win!";
    } else {
      resultMessage = "You lose!";
    }
    $("#rps-result-message").text(resultMessage);
  }
  $("#reset-button").click(function() {
    $("#rps-result-message").text("");
  });  