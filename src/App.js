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
    // console.log("Made it into final click quiz button or whatever-Fena");
    // console.log(quizResults);
    // console.log(spotifyData);

    // Result list  or call spotify API to create playlist 

    // Junnie will do this 
    // Loop through answers to find max mood
    // If there's a tie, Store them in a list and randomize the list to get the mood


    const max = Object.keys(quizResults).reduce((a, v) => Math.max(a, quizResults[v]), -Infinity);
    const maxResult = Object.keys(quizResults).filter(v => quizResults[v] === max);
    
  //   for(var i=0; i<spotifyData.length; i++) {
  //     var obj = spotifyData[i];
  //     for(var key in obj) {
  //         var value = obj[key];
  //         console.log(key+" = "+value);
  //     }
  // }
    const valenceArray =[]
    for (var i = 0; i < spotifyData.length; ++i) {
      let valence = (spotifyData[i].valence);

    

      // Create an array to add songs within results
      // Will have four nested if condition statements
      // Outer if loop is checking for the mood
      // Inner if loop is checking if valence value in within that range
      // will have valence variable

      if (maxResult.includes("angry")) {
        if ("0" < "valence" < "0.25") {
          console.log("made it into angry")
          valenceArray.push(spotifyData[i])
        }
      };
      if (maxResult.includes("sad")) {
        if ("0.26" < "valence" < "0.50") {
          console.log("made it into sad")
          valenceArray.push(spotifyData[i])
        
      }};
      if (maxResult.includes("tired")) {
        if ("0.51" < "valence" < "0.75") {
          console.log("made it into tired")
          valenceArray.push(spotifyData[i])
      }};
      if (maxResult.includes("happy")) {
        if ("0.76" < "valence" < "1") {
          console.log("made it into happy")
          valenceArray.push(spotifyData[i])
      }};
      
    

    // if ("angry" in maxResult) {
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
    console.log(valenceArray);
    

    // Store song choice in finalQuizResult state variable
  };
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
