import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import "./ResultsList.css";
import Results from "./Results";
import axios from "axios";

const IDs = [
  {
    artist: "j-hope",
    valence: "0.265",
    id: "2QWEMqQMJR1KDf6hDjJOs6",
    trackName: "Arson",
  },
  {
    artist: "BTS",
    valence: "0.534",
    id: "0aE3V0zgSD2YwkEHW42gxG",
    trackName: "Burning Up (Fire)",
  },
  {
    artist: "V",
    valence: "0.761",
    id: "2LowwiemmGMzzNSH1PJprK",
    trackName: "It's Definitely You",
  },
  {
    artist: "BTS",
    valence: "0.333",
    id: "2QZe2H1f03t5PJWEMg2Mbe",
    trackName: "UGH!",
  },
];

const ResultsList = (props) => {
  console.log(props.quizResult);
  const resultComponents = IDs.map((song) => <Results song={song} />);
  return <div>{resultComponents}</div>;
};

export default ResultsList;
