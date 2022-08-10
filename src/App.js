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
        // console.log(response.data);
        const pulledData = response.data.map((entry) => {
          return {
            artist: entry.artist,
            valence: entry.valence,
            id: entry.id,
            track: entry.trackName,
          };
        });
        setSpotifyData(pulledData);
        // console.log(pulledData);
      })
      .catch((error) => {
        console.log("couldn't call api");
      });
  };

  const [finalQuizResult, setFinalQuizResult] = useState([]);

  const handleFinalQuizAnswerClick = (quizResults) => {
    console.log("Made it into final click quiz button or whatever-Fena");
    console.log(quizResults);
    console.log(spotifyData);

    // Result list  or call spotify API to create playlist 

    // Junnie will do this 
    // Loop through answers to find max mood
    // If there's a tie, Store them in a list and randomize the list to get the mood


    const max = Object.keys(quizResults).reduce((a, v) => Math.max(a, quizResults[v]), -Infinity);
    const maxResult = Object.keys(quizResults).filter(v => quizResults[v] === max);
    
    // if (maxResult === "angry") {
    //   spotifyData.valence === 0-0.25
    // };
    // if (maxResult === "sad") {
    //   spotifyData.valence === 0.26-0.5
    // };
    // if (maxResult === "tired") {
    // spotifyData.valence === 0.51-0.75
    // };
    // if (maxResult === "happy") {
    //   spotifyData.valence === .76-1
    // };

    console.log(maxResult);

    // Store song choice in finalQuizResult state variable
  };

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
        <Navbar handleFinalQuizAnswerClick={handleFinalQuizAnswerClick} />
      </div>
    </div>
  );
}
