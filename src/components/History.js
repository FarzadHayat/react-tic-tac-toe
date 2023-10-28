import Move from "./Move";
import "./History.css";

export default function History({ history, jumpTo }) {
  const moves = history.map((squares, i) => {
    return (
      <Move
        key={i}
        index={i}
        isButton={i !== history.length - 1}
        onClick={() => jumpTo(i)}
        pos={squares[1]}
      />
    );
  });
  return (
    <div className="history-panel">
      <h2>History</h2>
      <ol className="history">{moves}</ol>
    </div>
  );
}
