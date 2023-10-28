import "./Square.css";

export default function Square({ value, onClick, isWinner }) {
  let classes = "square";
  if (isWinner) {
    classes += " winner";
  }
  return (
    <button className={classes} onClick={onClick}>
      {value}
    </button>
  );
}
