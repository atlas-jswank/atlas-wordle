import "./Wordle.css";
import Board from "./Board";
import WordInput from "./WordInput";
import WordHistory from "./WordHistory";
import { useGameState } from "./use-game-state";
import DarkMode from "./DarkMode";

function App() {
  const { answer, correct, wordHistory, reset, onSubmit } = useGameState();

  return (
    <div>
      <h1>Wordle</h1>
      <DarkMode />
      <Board>
        <WordHistory words={wordHistory} answer={answer} />
        {!correct && <WordInput onSubmit={onSubmit} />}
        {correct && <button onClick={reset}>Reset</button>}
      </Board>
    </div>
  );
}

export default App;
