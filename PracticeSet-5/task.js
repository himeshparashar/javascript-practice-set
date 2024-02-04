const playerInput = prompt(
  "Enter 'S' for Snake, 'W' for Water, or 'G' for Gun"
);
const randomIndex = Math.floor(Math.random() * 3);
const computerOptions = ["S", "W", "G"];
const computerChoice = computerOptions[randomIndex];

function determineWinner(computerChoice, playerInput) {
  if (computerChoice === playerInput) {
    return "It's a draw!";
  } else if (
    (computerChoice === "S" && playerInput === "W") ||
    (computerChoice === "G" && playerInput === "S") ||
    (computerChoice === "W" && playerInput === "G")
  ) {
    return "Computer wins!";
  } else {
    return "You win!";
  }
}

const gameResult = determineWinner(computerChoice, playerInput);

document.write(
  `Computer chose: ${computerChoice} <br>Your choice: ${playerInput} <br>Result: ${gameResult}`
);
