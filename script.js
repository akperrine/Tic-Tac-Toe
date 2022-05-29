const board = document.querySelector(".grid-box");
const boardSquare = document.querySelectorAll(".square");
const cellElements = document.querySelectorAll("data-cell");
const btnRestart = document.querySelector(".btn-restart");

const player1 = true;
const gameOver = false;
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

const tieMessage = function () {
  return `It's a tie`;
};

const placeTic = function (e) {
  const cell = e.target;
  const index = cell.getAttribute("data-cell-index");
  if (cell.textContent === "") {
    if (counter % 2 === 0 && cell.textContent === "") {
      tic = "X";
      cell.classList.add("is-x");
      cell.classList.remove("is-o");
      gameState[index] = tic;
      counter++;
    } else if (counter % 2 !== 0 && cell.textContent === "") {
      tic = "O";
      cell.classList.add("is-o");
      cell.classList.remove("is-x");
      gameState[index] = tic;
      counter++;
    } else {
      counter = counter;
    }
    cell.textContent = tic;
  }
  checkWin();
};

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
      console.log("You win");
    }
  }
};

const restartGame = function () {
  counter = 1;
  boardSquare.forEach((square) => {
    return (square.textContent = "");
  });
  gameState = ["", "", "", "", "", "", "", "", ""];
};

// board.addEventListener("click", handleCellClick);
board.addEventListener("click", placeTic);
btnRestart.addEventListener("click", restartGame);
