const board = document.querySelector(".grid-box");
const boardSquare = document.querySelector(".square");
const cellElements = document.querySelectorAll("[data-cell]");
const btnRestart = document.querySelector(".btn-restart");

let counter = 1;

const placeTic = function (e) {
  const cell = e.target;
  if (cell.textContent === "") {
    if (counter % 2 === 0 && cell.textContent === "") {
      tic = "X";
      cell.classList.add("is-x");
      cell.classList.remove("is-o");
      counter++;
    } else if (counter % 2 !== 0 && cell.textContent === "") {
      tic = "O";
      cell.classList.add("is-o");
      cell.classList.remove("is-x");
      counter++;
    } else {
      counter = counter;
    }
    cell.textContent = tic;
  }
};

const restartGame = function () {
  counter = 1;

  cellElements.forEach((e) => {
    console.log(e);
    e.classList.remove("is-x");
    e.classList.remove("is-o");
  });
};

board.addEventListener("click", placeTic);

btnRestart.addEventListener("click", restartGame);
