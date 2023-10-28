import "./Move.css";

export default function Move({ index, isButton, onClick, pos }) {
  let row;
  let col;
  if (index > 0) {
    row = Math.floor(pos / 3);
    col = pos % 3;
  }

  let description;
  if (!isButton) {
    if (index > 0) {
      description = `The last move was (${row}, ${col}) by ${
        index % 2 === 0 ? "O" : "X"
      }`;
    } else {
      description = `You are at the start`;
    }
  } else if (index > 0) {
    description = `Go to move (${row}, ${col}) by ${
      index % 2 === 0 ? "O" : "X"
    }`;
  } else {
    description = `Go to game start`;
  }
  return (
    <li>
      {isButton ? (
        <button className="move" onClick={onClick}>
          {description}
        </button>
      ) : (
        <p className="move">{description}</p>
      )}
    </li>
  );
}
