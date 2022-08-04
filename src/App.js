import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Results";
import axios from "axios";

export default function App() {
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [showScore, setShowScore] = useState(false);
  // const [score, setScore] = useState(0);

  // const handleAnswerOptionClick = (isCorrect) => {
  //   if (isCorrect) {
  //     setScore(score + 1);
  //   }

  //   // while loop that uses JSON as a frequency table to keep track of which answer the user is feeling
  //   // and return that feeling to retrieve the corresponding playlist

  //   const nextQuestion = currentQuestion + 1;
  //   if (nextQuestion < questions.length) {
  //     setCurrentQuestion(nextQuestion);
  //   } else {
  //     setShowScore(true);
  //   }
  // };
  return (
    <div className="App-Main">
      <header className="App-Main-header">
        <h1>Once you Jimin, you can't Jimout</h1>
      </header>
      <main>
        <div>{<Quiz />}</div>
      </main>
    </div>
  );
}
