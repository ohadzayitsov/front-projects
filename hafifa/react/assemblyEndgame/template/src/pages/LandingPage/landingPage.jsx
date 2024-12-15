import { useEffect, useState } from "react";
import "./LandingPage.css";
import { languages } from "../../languages";
import { getRandomWord } from "../../utils";
import { clsx } from "clsx";
import Confetti from "react-confetti";
import { getFarewellText } from "../../utils";
const LandingPage = () => {
  const [allLanguages, setAllLanguages] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [word, setWord] = useState("");
  const [numOfGuesses, setNumOfGuesses] = useState("");
  const [isLastGuessIncorrect, setIsLastGuessIncorrect] = useState("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const isGameWon = word
    .split("")
    .every((letter) => guessedLetters.includes(letter.toUpperCase()));
  const isGameLost = numOfGuesses === 0;
  const isGameOver = isGameLost || isGameWon;

  const isLetterChosen = (letter) => {
    return Boolean(
      guessedLetters.find(
        (currLetter) => currLetter.toUpperCase() === letter.toUpperCase()
      )
    );
  };
  const handleChooseLetter = (event) => {
    const letter = event.target.textContent;
    if (!isGameOver) {
      if (!isLetterChosen(letter)) {
        setGuessedLetters((prev) => [...prev, letter]);
        if (!isLetterInWord(letter)) {
          setNumOfGuesses((numOfGuesses) => numOfGuesses - 1);
          setIsLastGuessIncorrect(true);
        } else {
          setIsLastGuessIncorrect(false);
        }
      }
    }
  };
  const isLetterCorrect = (letter) => {
    return isLetterChosen(letter) && isLetterInWord(letter);
  };
  const isLetterWrong = (letter) => {
    return isLetterChosen(letter) && !isLetterInWord(letter);
  };
  const isLetterInWord = (letter) => {
    return word.toUpperCase().includes(letter.toUpperCase());
  };
  const letterElements = () => {
    return alphabet.split("").map((letter, index) => (
      <div
        onClick={handleChooseLetter}
        key={index}
        className={clsx("letter", {
          correct: isLetterCorrect(letter),
          wrong: isLetterWrong(letter),
          "not-allowed": isGameOver,
        })}
      >
        {letter.toUpperCase()}
      </div>
    ));
  };
  const hiddenLetters = () => {
    return word
      .toUpperCase()
      .split("")
      .map((letter, index) => (
        <div key={index} className="letter-display">
          <p
            className={clsx("secret-letter", {
              "incorrect-letter": isGameOver && !isLetterChosen(letter),
              hidden: !isGameOver && !isLetterChosen(letter),
            })}
          >
            {letter}
          </p>
        </div>
      ));
  };
  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setWord(getRandomWord());
    setGuessedLetters([]);
    setAllLanguages(languages);
    setNumOfGuesses(languages.length - 1);
    setIsLastGuessIncorrect(false);
  };
  const isLanguageDead = (index) => {
    const numOflanguagesDead = allLanguages.length - numOfGuesses;
    return index + 1 < numOflanguagesDead;
  };

  const gameStatus = () => {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <div className="farewell-message">
          <p>
            {getFarewellText(
              languages[languages.length - numOfGuesses - 2].name
            )}
          </p>
        </div>
      );
    }
    if (isGameLost) {
      return (
        <div className="lost-message">
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly</p>
        </div>
      );
    }
    if (isGameWon) {
      return (
        <div className="won-message">
          <h2>You win!</h2>
          <p>Well done!</p>
        </div>
      );
    }
  };
  return (
    <div className="body">
      {gameStatus()}
      {isGameWon ? (
        <Confetti numberOfPieces={500} gravity={0.1}></Confetti>
      ) : null}
      <div className="languages-container">
        {allLanguages.map((language, index) => (
          <div
            key={index}
            className={clsx("language", isLanguageDead(index) && "dead")}
            style={{
              backgroundColor: language.backgroundColor,
              color: language.color,
            }}
          >
            {language.name}
          </div>
        ))}
      </div>
      <div className={"input-container"}>{hiddenLetters()}</div>
      {isGameOver ? (
        <button className="new-game" onClick={resetGame}>
          New Game
        </button>
      ) : (
        <div></div>
      )}
      <div className={clsx("letters-container", { "not-allowed": isGameOver })}>
        {letterElements()}
      </div>
    </div>
  );
};

export default LandingPage;
