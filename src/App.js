import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Navbar from "./components/Navbar";

export default function App() {
  //Source of truth in App
  //Axios call to backend
  //Create hash map for quiz results
  //Compare hashmap w/ spotify data

  const [spotifyData, setSpotifyData] = useState([]);

  useEffect(() => {
    getSpotifyApi();
  }, []);

  const getSpotifyApi = () => {
    axios
      .get("https://jimin-jimout-backend.herokuapp.com/api")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("couldn't call api");
      });
  };

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
          <li>
            <a href="http://localhost:3000/results">Result</a>
          </li>
        </ul>
        <Navbar />
      </div>
    </div>
  );
}
