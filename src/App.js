import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import Home from "./components/Home";
import Result from "./components/Results";
import axios from "axios";
import "./App.css";

import Navbar from "./components/Navbar";

export default function App() {
  //Source of truth in App
  //Axios call to backend
  //Create hash map for quiz results
  //Compare hashmap w/ spotify data

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
      <div>
        <ul id="nav-bar">
          <li>
            <a href="http://localhost:3000/">Home</a>
          </li>
          <li>
            <a href="http://localhost:3000/quiz">Quiz</a>
          </li>
        </ul>
        <Navbar />
      </div>
    </div>
  );
}
