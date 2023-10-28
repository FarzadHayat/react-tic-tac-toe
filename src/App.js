import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>React Tic Tac Toe</h1>
      </header>
      <Game />
      <footer>
        Made by{" "}
        <a href="https://github.com/FarzadHayat" alt="FarzadHayat on GitHub">
          Farzad Hayat
        </a>
      </footer>
    </div>
  );
}

export default App;
