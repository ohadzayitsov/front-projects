import { useEffect, useState } from "react";
import "./Die.css";
const Die = ({ die, selectDie }) => {
 
  const handleClick = () => {
    selectDie(die.id);
  };
  return (
    <button className={die.isHeld ? "die-held" : "die-body"} onClick={handleClick}>
      <div className="die-num">{die.value}</div>
    </button>
  );
};

export default Die;
