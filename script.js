body {
  font-family: sans-serif;
  text-align: center;
}

#chessboard {
  display: grid;
  grid-template-columns: repeat(8, 60px);
  grid-template-rows: repeat(8, 60px);
  margin: 20px auto;
  width: 480px;
}

.square {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  cursor: pointer;
}

.white { background-color: #f0d9b5; }
.black { background-color: #b58863; }
