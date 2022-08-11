import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import "./ResultsList.css";
import Results from "./Results";
import axios from "axios";

// const IDs = [
//   {
//     previewUrl:
//       "https://p.scdn.co/mp3-preview/174f3f31b59310e0a141ece9de48bcd5e63a2756?cid=649b54e3aa36460daac3e10686deba63",
//     artist: "j-hope",
//     imageUrl:
//       "https://i.scdn.co/image/ab67616d0000b273ce5bba40b16f887e0461c6e2",
//     valence: "0.265",
//     id: "2QWEMqQMJR1KDf6hDjJOs6",
//     trackName: "Arson",
//   },
//   {
//     previewUrl:
//       "https://p.scdn.co/mp3-preview/6331f6210b71a3c42b6b4dabfe5be82202e6b8f5?cid=649b54e3aa36460daac3e10686deba63",
//     artist: "BTS",
//     imageUrl:
//       "https://i.scdn.co/image/ab67616d0000b273c6dbc63cf145b4ff6bee3322",
//     valence: "0.534",
//     id: "0aE3V0zgSD2YwkEHW42gxG",
//     trackName: "Burning Up (Fire)",
//   },
//   {
//     previewUrl:
//       "https://p.scdn.co/mp3-preview/c5df8a75d1dc70c5be4014010f90ee9148884ad1?cid=649b54e3aa36460daac3e10686deba63",
//     artist: "V",
//     imageUrl:
//       "https://i.scdn.co/image/ab67616d0000b2738dd6de651baf8860665f8003",
//     valence: "0.761",
//     id: "2LowwiemmGMzzNSH1PJprK",
//     trackName: "It's Definitely You",
//   },
// ];

const ResultsList = (props) => {
  console.log(props.quizResult);
  const resultComponents = props.quizResult.map((song) => (
    <Results song={song} />
  ));
  return (
  <div>{resultComponents}</div>
  )
};

export default ResultsList;
