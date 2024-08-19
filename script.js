document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");
  const winnerDeclaration = document.getElementById("winner-declaration");
  const winnerText = document.getElementById("winner-text");
  const restartButton = document.getElementById("restart-after-win");

  let currentPlayer = "X";
  let board = ["", "", "", "", "", "", "", "", ""];

  // All possible winning combinations

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
      if (
        box.innerText === "" &&
        !winnerDeclaration.classList.contains("show-winner")
      ) {
        box.classList.add(currentPlayer);

        board[index] = currentPlayer;

        // Winner checking otherwise switch players

        if (checkWinner(currentPlayer)) {
          winnerText.innerText = `Player ${currentPlayer} Won`;
          winnerDeclaration.classList.add("show-winner");
        } 
          else if (isBoardFull()) {
          winnerText.innerText = `It's a Draw!`;
          winnerDeclaration.classList.add('show-winner');
        }
        else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    });
  });

  // Restart game section

  restartButton.addEventListener("click", () => {
    board.fill("");

    boxes.forEach((box) => {
      box.innerText = "";
      box.classList.remove("X", "O");
    });

    currentPlayer = "X";

    winnerDeclaration.classList.remove("show-winner");
  });

  // Function for checking the winner

  function checkWinner(player) {
    return winningCombinations.some((combination) => {
      return combination.every((index) => board[index] === player);
    });
  }

    function isBoardFull() {
    return board.every(cell => cell !== '');
}
});
