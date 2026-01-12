import { useState } from "react";
import words from "./wordList.json";

function App() {
  // Create state word to guess
  const [wordToGuess, setWordToGuess] = useState(() => {
    // Inline function to return the array position randomnly
    return words[Math.floor(Math.random() * words.length)];
  });

  // Create state to track letters guessed
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  console.log(wordToGuess);
  return <h1>{wordToGuess}</h1>;
  return <h1>{guessedLetters}</h1>;
}

export default App;
