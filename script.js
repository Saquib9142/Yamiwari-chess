let selectedPiece = null;

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', () => {
        if (selectedPiece) {
            // Move piece
            square.innerHTML = selectedPiece.innerHTML;
            selectedPiece.innerHTML = '';
            selectedPiece = null;
        } else if (square.innerHTML !== '') {
            // Select piece
            selectedPiece = square;
        }
    });
});
