import { useEffect, useState } from "react";
import Word from "./Word";
import Letter from "./Letter";
import { isValidWord } from "./dictionary";

export default function WordInput({ onSubmit }) {
  const [word, setWord] = useState("");
  const [error, setError] = useState(false);
  const letters = [...word.padEnd(5, " ")];

  useEffect(() => {
    function onKeyDown(event) {
      const c = event.key;
      if (c === "Enter") {
        onEnter();
      }
      if (c === "Backspace") {
        onBackspace();
      }
      if (/^[a-zA-Z]$/.test(c)) {
        onLetter(event);
      }
    }

    function onEnter() {
      setWord((value) => {
        if (value.length === 5) {
          if (isValidWord(value)) {
            onSubmit(value);
            return "";
          } else {
            setError(true);
          }
        }
        return value;
      });
    }

    function onBackspace() {
      setError(false);
      setWord((value) => value.substring(0, value.length - 1));
    }

    function onLetter(event) {
      setError(false);
      setWord((value) =>
        value.length < 5 ? value + event.key.toUpperCase() : value
      );
    }

    document.onkeydown = onKeyDown;
    return () => (document.onkeydown = undefined);
  }, [setWord, setError, onSubmit]);
  return (
    <Word>
      {letters.map((l, i) => (
        <Letter key={l + i} state={error ? "error" : "focused"} value={l} />
      ))}
    </Word>
  );
}
