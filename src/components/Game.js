import Board from "./Board";
import History from "./History";
import "./Game.css";

export default function Game() {
  const values = Array(9).fill();
  const history = [...Array(5).keys()];

  return (
    <div className="game">
      <Board values={values} />
      <History history={history} />
    </div>
  );
}
