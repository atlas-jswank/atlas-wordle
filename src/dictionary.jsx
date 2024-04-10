import dictionary from "./assets/dictionary.txt?raw";
const validWords = dictionary.split("\n");

export function getRandomWord() {
  return validWords[
    Math.floor(Math.random() * validWords.length)
  ].toUpperCase();
}

export function isValidWord(word) {
  return validWords.includes(word.toLocaleLowerCase());
}
