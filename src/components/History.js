import Move from "./Move";
import "./History.css";
import { useState } from "react";

export default function History({ history, jumpTo, currentIndex }) {
  const [isReversed, setIsReversed] = useState(false);

  const moves = history.map((squares, i) => {
    return (
      <Move
        key={i}
        index={i}
        isButton={i !== currentIndex}
        onClick={() => jumpTo(i)}
        pos={squares[1]}
      />
    );
  });
  if (isReversed) {
    moves.reverse();
  }

  return (
    <div className="history-panel">
      <div className="history-header">
        <h2>History</h2>
        <button
          className="reverse-button"
          onClick={() => setIsReversed(!isReversed)}
        >
          Reverse
        </button>
      </div>
      <ol className="history" reversed={isReversed}>
        {moves}
      </ol>
    </div>
  );
}
