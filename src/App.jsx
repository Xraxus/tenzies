import Dice from "./Dice";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [diceArray, setDiceArray] = useState(allNewDice());

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const diceArr = [];

    for (let i = 0; i < 10; i++) {
      diceArr.push(generateNewDie());
    }

    return diceArr;
  }

  function rollDice() {
    setDiceArray((oldDice) =>
      oldDice.map((dice) => {
        if (dice.isHeld) return dice;
        else return generateNewDie();
      })
    );
  }

  function holdDice(id) {
    setDiceArray((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = diceArray.map((dice) => (
    <Dice
      key={dice.id}
      value={dice.value}
      isHeld={dice.isHeld}
      handleClick={() => holdDice(dice.id)}
    />
  ));

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-btn" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
