import Move from "./Move";
import "./History.css";

export default function History({ history }) {
  const moves = history.map((move) => (
    <Move move={history[move]} isButton={move !== history.length - 1} />
  ));
  return (
    <div className="history-panel">
      <h2>History</h2>
      <ol className="history">{moves}</ol>
    </div>
  );
}
