const board = document.querySelector(".grid-box");
const boardSquare = document.querySelectorAll(".square");
const cellElements = document.querySelectorAll("data-cell");
const btnRestart = document.querySelector(".btn-restart");
const winnerDisplay = document.querySelector(".winner");

let playerX = true;
let currentPlayer;
let gameOver = false;
let win = false;
let counter = 1;

let gameState = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const winMessage = function () {
  return `Player ${currentPlayer} wins!`;
};

const switchPlayer = function () {
  while (!gameOver) {
    const switchBool = !playerX;
    if (playerX) {
      playerX = switchBool;
      return (currentPlayer = "Player X");
    } else {
      playerX = switchBool;
      return (currentPlayer = "Player O");
    }
  }
};

const placeTic = function (e) {
  const cell = e.target;
  const index = cell.getAttribute("data-cell-index");
  if (cell.textContent === "") {
    if (counter % 2 === 0 && cell.textContent === "") {
      tic = "O";
      cell.classList.add("is-x");
      cell.classList.remove("is-o");
      gameState[index] = tic;
      counter++;
    } else if (counter % 2 !== 0 && cell.textContent === "") {
      tic = "X";
      cell.classList.add("is-o");
      cell.classList.remove("is-x");
      gameState[index] = tic;
      counter++;
    } else {
      counter = counter;
    }
    cell.textContent = tic;
    console.log(gameOver);
  }

  const checkWin = function () {
    for (let i = 0; i < gameState.length - 1; i++) {
      const winCondition = winningConditions[i];
      let a = gameState[winCondition[0]];
      let b = gameState[winCondition[1]];
      let c = gameState[winCondition[2]];
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        winnerDisplay.textContent = `${currentPlayer} Wins!`;
        winnerDisplay.classList.remove("hidden");
        console.log(`${currentPlayer} Wins!`);
        gameOver = true;
        return board.classList.add("hidden");
      }
    }
  };

  checkWin();
};

const restartGame = function () {
  counter = 1;
  playerX = true;
  gameOver = false;
  win = false;
  boardSquare.forEach((square) => {
    return (square.textContent = "");
  });
  gameState = ["", "", "", "", "", "", "", "", ""];
  board.classList.remove("hidden");
  winnerDisplay.classList.add("hidden");
};

btnRestart.addEventListener("click", restartGame);
board.addEventListener("click", switchPlayer);
board.addEventListener("click", placeTic);
