import Die from "./Die";
import { useState } from "react";

function App() {

  const [diceArray, setDiceArray] = useState(allNewDice())

  function allNewDice() {
    const diceArr = [];

    for (let i = 0; i < 10; i++) {
      diceArr.push(Math.ceil(Math.random() * 6));
    }

    return diceArr;
  }


  const dieElements = diceArray.map( die => <div className="die"><h2>{die}</h2></div>)

  return (
    <main>
      <div className="dice-container">
        {dieElements}
      </div>
    </main>
  );
}

export default App;
