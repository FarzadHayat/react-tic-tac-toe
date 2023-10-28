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
    description = `You are at move ${index}`;
    if (index > 0) {
      description += ` (${row}, ${col})`;
    }
  } else if (index > 0) {
    description = `Go to move ${index} (${row}, ${col})`;
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
