import Dice from "./Dice";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [diceArray, setDiceArray] = useState(allNewDice());

  function allNewDice() {
    const diceArr = [];

    for (let i = 0; i < 10; i++) {
      diceArr.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }

    return diceArr;
  }

  function rollDice() {
    setDiceArray(allNewDice());
  }

  const diceElements = diceArray.map((dice) => <Dice key={dice.id} value={dice.value} />);

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
