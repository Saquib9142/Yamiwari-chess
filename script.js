const board = document.getElementById('chessboard');
let selected = null;

const pieces = {
  0: ["♜","🥲","♝","♛","♚","♝","♞","♜"],
  1: Array(8).fill("♟"),
  6: Array(8).fill("♙"),
  7: ["♖","♘","♗","♕","♔","♗","♘","♖"]
};

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement('div');
    square.className = `square ${(row + col) % 2 === 0 ? 'white' : 'black'}`;
    square.dataset.row = row;
    square.dataset.col = col;

    if (pieces[row]) {
      square.textContent = pieces[row][col];
    }

    square.addEventListener('click', () => {
      if (selected) {
        // move
        square.textContent = selected.textContent;
        selected.textContent = '';
        selected = null;
      } else if (square.textContent !== '') {
        // select
        selected = square;
      }
    });

    board.appendChild(square);
  }
}
