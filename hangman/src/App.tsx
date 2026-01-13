import { useState } from "react";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { GuessingKeyboard } from "./GuessingKeyboard";
import words from "./wordList.json";

function App() {
  // Create state word to guess
  const [wordToGuess, setWordToGuess] = useState(() => {
    // Inline function to return the array position randomnly
    return words[Math.floor(Math.random() * words.length)];
  });

  // Create state to track letters guessed
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div // Overall element styling for entire program
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div // Styling for text: win and lose
        style={{
          fontSize: "2rem",
          fontFamily: "arial",
          textAlign: "center",
        }}
      >
        Lose Win
      </div>
      <HangmanDrawing />
      <HangmanWord />
      <GuessingKeyboard />
    </div>
  );
}

export default App;
