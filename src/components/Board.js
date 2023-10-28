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

  return (
    <div className="board-panel">
      <h2>{getStatus()}</h2>
      <div className="board">
        <div className="board-row">
          <Square
            value={squares[0]}
            onClick={() => handleClick(0)}
            isWinner={winningSquares && winningSquares.includes(0)}
          />
          <Square
            value={squares[1]}
            onClick={() => handleClick(1)}
            isWinner={winningSquares && winningSquares.includes(1)}
          />
          <Square
            value={squares[2]}
            onClick={() => handleClick(2)}
            isWinner={winningSquares && winningSquares.includes(2)}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[3]}
            onClick={() => handleClick(3)}
            isWinner={winningSquares && winningSquares.includes(3)}
          />
          <Square
            value={squares[4]}
            onClick={() => handleClick(4)}
            isWinner={winningSquares && winningSquares.includes(4)}
          />
          <Square
            value={squares[5]}
            onClick={() => handleClick(5)}
            isWinner={winningSquares && winningSquares.includes(5)}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[6]}
            onClick={() => handleClick(6)}
            isWinner={winningSquares && winningSquares.includes(6)}
          />
          <Square
            value={squares[7]}
            onClick={() => handleClick(7)}
            isWinner={winningSquares && winningSquares.includes(7)}
          />
          <Square
            value={squares[8]}
            onClick={() => handleClick(8)}
            isWinner={winningSquares && winningSquares.includes(8)}
          />
        </div>
      </div>
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
