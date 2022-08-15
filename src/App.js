import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import btsLogoImage from "./components/images/BTS-army-logo.jpg";

import Navbar from "./components/Navbar";
import { Box, Button } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7e57c2",
    },
    secondary: {
      main: "#512da8",
    },
  },
});

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
      })
      .catch((error) => {
        console.log("couldn't call api");
      });
  };

  const [finalQuizResult, setFinalQuizResult] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleFinalQuizAnswerClick = (quizResults) => {
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

    setFinalQuizResult(valenceArray);
    setShowResults(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App-Main">
        <header className="App-Main-header">
          <h2>BTS</h2>
        </header>
        <div className="navigation-bar-app-page">
          <Grid container justify="center">
            <Button
              id="homeButton"
              href="http://localhost:3000/"
              size="small"
              variant="contained"
              color="secondary"
            >
              HOME
            </Button>
            <img className="btsLogo" src={btsLogoImage} alt="btslogo" />
            <Button
              id="quizButton"
              href="http://localhost:3000/quiz"
              size="small"
              variant="contained"
              color="secondary"
            >
              QUIZ
            </Button>
          </Grid>
          <Navbar
            handleFinalQuizAnswerClick={handleFinalQuizAnswerClick}
            quizResult={finalQuizResult}
            showResults={showResults}
          />
        </div>
        <footer></footer>
      </div>
    </ThemeProvider>
  );
}
