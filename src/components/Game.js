import Board from "./Board";
import History from "./History";
import "./Game.css";
import { useState } from "react";

export default function Game() {
  const [history, setHistory] = useState([[Array(9).fill(null), null]]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePlay(squares, i) {
    const newHistory = [...history.slice(0, currentIndex + 1), [squares, i]];
    setCurrentIndex(currentIndex + 1);
    setHistory(newHistory);
  }

  function jumpTo(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="game">
      <Board
        squares={history[currentIndex][0]}
        currentMove={currentIndex % 2 === 0 ? "X" : "O"}
        onPlay={handlePlay}
      />
      <History history={history} jumpTo={jumpTo} />
    </div>
  );
}
