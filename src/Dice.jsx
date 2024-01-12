function Dice({ value, isHeld, handleClick }) {
  return (
    <div className={`dice ${isHeld && "dice--is-held"}`} onClick={handleClick}>
      <h2>{value}</h2>
    </div>
  );
}

export default Dice;
