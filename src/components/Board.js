import Square from "./Square";
import "./Board.css";
import { useState } from "react";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentMove, setCurrentMove] = useState("X");

  const [winner, winningSquares] = calculateWinner(squares);
  function handlePlay(i) {
    if (squares[i] || calculateWinner(squares)[0]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = currentMove;
    setCurrentMove(currentMove === "X" ? "O" : "X");
    setSquares(newSquares);
  }
  let status;
  if (winner) {
    status = `Winner: ${winner[0]}`;
  } else {
    status = `Current move: ${currentMove}`;
  }

  return (
    <div className="board-panel">
      <h2>{status}</h2>
      <div className="board">
        <div className="board-row">
          <Square
            value={squares[0]}
            onClick={() => handlePlay(0)}
            isWinner={winningSquares && winningSquares.includes(0)}
          />
          <Square
            value={squares[1]}
            onClick={() => handlePlay(1)}
            isWinner={winningSquares && winningSquares.includes(1)}
          />
          <Square
            value={squares[2]}
            onClick={() => handlePlay(2)}
            isWinner={winningSquares && winningSquares.includes(2)}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[3]}
            onClick={() => handlePlay(3)}
            isWinner={winningSquares && winningSquares.includes(3)}
          />
          <Square
            value={squares[4]}
            onClick={() => handlePlay(4)}
            isWinner={winningSquares && winningSquares.includes(4)}
          />
          <Square
            value={squares[5]}
            onClick={() => handlePlay(5)}
            isWinner={winningSquares && winningSquares.includes(5)}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[6]}
            onClick={() => handlePlay(6)}
            isWinner={winningSquares && winningSquares.includes(6)}
          />
          <Square
            value={squares[7]}
            onClick={() => handlePlay(7)}
            isWinner={winningSquares && winningSquares.includes(7)}
          />
          <Square
            value={squares[8]}
            onClick={() => handlePlay(8)}
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
