const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetButton');
const statusText = document.getElementById('status');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleCellClick(event) {
  const cellIndex = event.target.dataset.index;
  if (gameBoard[cellIndex] === '' && currentPlayer === 'X') {
    gameBoard[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    checkGameStatus();
    currentPlayer = 'O';
    botTurn();
  }
}

function botTurn() {
  let bestScore = -Infinity;
  let move;

  for (let i = 0; i < 9; i++) {
    if (gameBoard[i] === '') {
      gameBoard[i] = 'O';
      let score = minimax(gameBoard, 0, false);
      gameBoard[i] = '';

      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  cells[move].textContent = 'O';
  gameBoard[move] = 'O';
  checkGameStatus();
  currentPlayer = 'X';
}

function minimax(board, depth, isMaximizing) {
  let winner = checkWinner(board);
  if (winner !== null) {
    return scores[winner];
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === '') {
        board[i] = 'O';
        let score = minimax(board, depth + 1, false);
        board[i] = '';
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === '') {
        board[i] = 'X';
        let score = minimax(board, depth + 1, true);
        board[i] = '';
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

const scores = {
  X: 10,
  O: -10,
  tie: 0
};

function checkWinner(board) {
  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (board.every(cell => cell !== '')) {
    return 'tie';
  }

  return null;
}

function checkGameStatus() {
  const winner = checkWinner(gameBoard);
  if (winner === 'X') {
    statusText.textContent = 'You Win!';
    disableCells();
  } else if (winner === 'O') {
    statusText.textContent = 'You Lose!';
    disableCells();
  } else if (winner === 'tie') {
    statusText.textContent = "It's a tie!";
    disableCells();
  } else {
    statusText.textContent = `Play your turn`;
  }
}

function disableCells() {
  cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => {
    cell.textContent = '';
    cell.addEventListener('click', handleCellClick);
  });
  statusText.textContent = 'Current player: X';
}

resetButton.addEventListener('click', resetGame);

cells.forEach(cell => cell.addEventListener('click', handleCellClick));