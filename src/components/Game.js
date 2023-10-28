import Board from "./Board";
import History from "./History";
import "./Game.css";

export default function Game() {
  const values = Array(9).fill();
  const history = [...Array(5).keys()];

  return (
    <>
      <header>
        <h1>React Tic Tac Toe</h1>
      </header>
      <div className="game">
        <Board values={values} />
        <History history={history} />
      </div>
      <footer>
        Made by{" "}
        <a href="https://github.com/FarzadHayat" alt="FarzadHayat on GitHub">
          Farzad Hayat
        </a>
      </footer>
    </>
  );
}
