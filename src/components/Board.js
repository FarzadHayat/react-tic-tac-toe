import Square from "./Square";
import "./Board.css";

export default function Board({ squares, onPlay, currentMove }) {
  const [winner, winningSquares] = calculateWinner(squares);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)[0]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = currentMove;
    onPlay(newSquares, i);
  }

  function getStatus() {
    if (winner) {
      return `Winner: ${winner[0]}`;
    } else if (!squares.includes(null)) {
      return "It's a draw...";
    } else {
      return `Current move: ${currentMove}`;
    }
  }

  function buildBoard() {
    const boardContent = [];

    for (let i = 0; i < 3; i++) {
      const rowContent = [];

      for (let j = 0; j < 3; j++) {
        const idx = 3 * i + j;

        rowContent.push(
          <Square
            key={idx}
            value={squares[idx]}
            onClick={() => handleClick(idx)}
            isWinner={winningSquares && winningSquares.includes(idx)}
          />
        );
      }

      boardContent.push(
        <div className="board-row" key={i}>
          {rowContent}
        </div>
      );
    }
    return boardContent;
  }

  return (
    <div className="board-panel">
      <h2>{getStatus()}</h2>
      <div className="board">{buildBoard()}</div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let result = [null, null];

  lines.forEach((line) => {
    let [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      result = [squares[a], line];
      return;
    }
  });

  return result;
}
