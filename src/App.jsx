import Die from "./Die";
import { useState } from "react";

function App() {
  const [diceArray, setDiceArray] = useState(allNewDice());

  function allNewDice() {
    const diceArr = [];

    for (let i = 0; i < 10; i++) {
      diceArr.push(Math.ceil(Math.random() * 6));
    }

    return diceArr;
  }

  function rollDice() {
    setDiceArray(allNewDice());
  }

  const diceElements = diceArray.map((die) => <Die value={die} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-btn" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
