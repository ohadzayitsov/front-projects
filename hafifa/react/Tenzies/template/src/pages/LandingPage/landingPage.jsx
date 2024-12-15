import { useEffect, useState } from "react";
import "./LandingPage.css";
import Die from "../../components/Die/Die";
import Confetti from "react-confetti";
const LandingPage = () => {
  const [dice, setDice] = useState([]);

  useEffect(() => {
    generateDice();
  }, []);
  const isGameWon = () => {
    return (
      dice.every((die) => die.value === dice[0].value) &&
      dice.every((die) => die.isHeld)
    );
  };

  const rollDice = () => {
    if (!isGameWon()) {
      setDice((oldDice) =>
        oldDice.map((die, index) =>
          die.isHeld
            ? die
            : {
                value: Math.floor(Math.random() * 10 + 1),
                isHeld: false,
                id: index,
              }
        )
      );
    } else {
     generateDice();
    }
  };
  const generateDice = () => {
    setDice(
      new Array(10).fill(0).map((die, index) => ({
        value: Math.floor(Math.random() * 10 + 1),
        isHeld: false,
        id: index,
      }))
    );
  };

  const selectDie = (index) => {
    if (!isGameWon()) {
      setDice((prevDice) =>
        prevDice.map((die, i) =>
          i === index ? { ...die, isHeld: !die.isHeld } : die
        )
      );
    }
  };
  return (
    <div className="body">
      {isGameWon() ? <Confetti numberOfPieces={500} gravity={0.1} ></Confetti>:null}
      <div className="container">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="die-container">
          {dice.map((die) => (
            <Die die={die} selectDie={selectDie} />
          ))}
        </div>
        <button className="roll-btn" onClick={rollDice}>
          {isGameWon() ? "New Game" : "Roll"}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
