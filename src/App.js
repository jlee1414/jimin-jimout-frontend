import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Navbar from "./components/Navbar";
import { Button } from "@material-ui/core";
import {TextField} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default function App() {
  const [spotifyData, setSpotifyData] = useState([]);

  useEffect(() => {
    getSpotifyApi();
  }, []);
  const beginningURL = "https://open.spotify.com/track/";

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
            previewUrl: entry.previewUrl,
            imageUrl: entry.imageUrl,
            songUrl: beginningURL + entry.id,
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
  const [showResults, setShowResults] = useState(false);

  const handleFinalQuizAnswerClick = (quizResults) => {
    // console.log("made it to submit button function");
    const max = Object.keys(quizResults).reduce(
      (a, v) => Math.max(a, quizResults[v]),
      -Infinity
    );
    const maxResult = Object.keys(quizResults).filter(
      (v) => quizResults[v] === max
    );

    let valenceArray = [];

    for (var i = 0; i < spotifyData.length; ++i) {
      let valenceData = parseFloat(spotifyData[i].valence);
      console.log(typeof valenceData);

      if (maxResult.includes("angry")) {
        if (0 <= valenceData && valenceData <= 0.25) {
          valenceArray.push(spotifyData[i]);
        }
      }
      if (maxResult.includes("sad")) {
        if (0.26 <= valenceData && valenceData <= 0.5) {
          valenceArray.push(spotifyData[i]);
        }
      }
      if (maxResult.includes("tired")) {
        if (0.51 <= valenceData && valenceData <= 0.75) {
          valenceArray.push(spotifyData[i]);
        }
      }
      if (maxResult.includes("happy")) {
        if (0.76 <= valenceData && valenceData <= 1) {
          valenceArray.push(spotifyData[i]);
        }
      }
    }
    // console.log("final quiz result is" + valenceArray);
    setFinalQuizResult(valenceArray);
    setShowResults(true);
  };

  return (
    // <body className="appBody">
    <div className="App-Main">
      <header className="App-Main-header">
        <h2>Once You Jimin, You Can't Jimout</h2>
      </header>
      <div className="navigation-bar-app-page">
        <ul id="nav-bar">
          {/* <li>
            <a href="https://jimin-jimout.herokuapp.com/">Home</a>
          </li>
          <li>
            <a href="https://jimin-jimout.herokuapp.com/quiz">Quiz</a>
          </li> */}
          <li>
            <a href="http://localhost:3000/">Home</a>
          </li>
          <li>
            <a href="http://localhost:3000/quiz">Quiz</a>
          </li>
        </ul>
        <Navbar
          handleFinalQuizAnswerClick={handleFinalQuizAnswerClick}
          quizResult={finalQuizResult}
          showResults={showResults}
        />
      </div>
      {/* <div className="App">
    <br/>
      <Navbar/>
      <Button color="primary" variant="contained"> Press me </Button> 
      <br/><br/>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <br/><br/>
      <AccountCircle/>

    </div> */}

    </div>
    // </body>
  );
  };
