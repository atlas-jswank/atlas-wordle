import Word from "./Word";
import Letter from "./Letter";

function getColors(word, correct) {
  const letterBank = [];
  for (let i = 0; i < correct.length; i++) {
    if (!letterBank[correct[i]]) {
      letterBank[correct[i]] = 0;
    }
    letterBank[correct[i]] += 1;
  }

  const state = Array(word.length);
  for (let i = 0; i < word.length; i++) {
    if (word[i] === correct[i]) {
      state[i] = "correct";
      letterBank[correct[i]] -= 1;
    } else if (!letterBank[word[i]]) {
      state[i] = "incorrect";
    }
  }

  for (let i = 0; i < word.length; i++) {
    if (!state[i]) {
      if (letterBank[word[i]] > 0) {
        state[i] = "misplaced";
        letterBank[word[i]] -= 1;
      } else {
        state[i] = "incorrect";
      }
    }
  }

  return state;
}

export default function WordHistory({ words, answer }) {
  return words.map((w) => {
    const colors = getColors(w, answer);
    return (
      <Word key={w}>
        {[...w].map((k, i) => (
          <Letter key={k + i} value={k} state={colors[i]} />
        ))}
      </Word>
    );
  });
}
