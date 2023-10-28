import Square from "./Square";
import "./Board.css";

export default function Board({ values }) {
  return (
    <div className="board-panel">
      <h2>Current move: X</h2>
      <div className="board">
        <div className="board-row">
          <Square value={values[0]} />
          <Square value={values[1]} />
          <Square value={values[2]} />
        </div>
        <div className="board-row">
          <Square value={values[3]} />
          <Square value={values[4]} />
          <Square value={values[5]} />
        </div>
        <div className="board-row">
          <Square value={values[6]} />
          <Square value={values[7]} />
          <Square value={values[8]} />
        </div>
      </div>
    </div>
  );
}
