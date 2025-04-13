const board = document.getElementById('chessboard');
const pieces = {
  'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟',
  'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'
};
let selected = null;

const layout = [
  'rnbqkbnr',
  'pppppppp',
  '        ',
  '        ',
  '        ',
  '        ',
  'PPPPPPPP',
  'RNBQKBNR'
];

function createBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.classList.add((i + j) % 2 === 0 ? 'white' : 'black');
      square.dataset.row = i;
      square.dataset.col = j;
      const piece = layout[i][j];
      if (piece !== ' ') {
        square.textContent = pieces[piece];
      }
      square.addEventListener('click', () => handleClick(square));
      board.appendChild(square);
    }
  }
}

function handleClick(square) {
  if (selected) {
    selected.textContent = '';
    selected = null;
  } else if (square.textContent !== '') {
    selected = square;
  }
}

createBoard();