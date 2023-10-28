import "./Move.css";

export default function Move({ move, isButton }) {
  let description;
  if (!isButton) {
    description = `You are at move ${move}`;
  } else if (move > 0) {
    description = `Go to move ${move}`;
  } else {
    description = `Go to game start`;
  }
  return (
    <li>
      {isButton ? (
        <button className="move">{description}</button>
      ) : (
        <p className="move">{description}</p>
      )}
    </li>
  );
}
