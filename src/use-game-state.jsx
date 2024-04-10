import { useState } from "react";
import { getRandomWord } from "./dictionary";

export function useGameState() {
  const [answer, setAnswer] = useState(getRandomWord());
  const [correct, setCorrect] = useState(false);
  const [wordHistory, setWordHistory] = useState([]);

  function reset() {
    setCorrect(false);
    setWordHistory([]);
    setAnswer(getRandomWord());
  }

  function onSubmit(value) {
    setWordHistory((v) => [...v, value]);
    if (value === answer) {
      setCorrect(true);
    }
  }

  return { answer, correct, wordHistory, reset, onSubmit };
}
