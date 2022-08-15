import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import "./ResultsList.css";
import Results from "./Results";
import axios from "axios";
import { Typography } from "@material-ui/core";

const ResultsList = (props) => {
  console.log(props.quizResult);
  const resultComponents = props.quizResult.map((song) => (
    <Results song={song} />
  ));

// const Mood= (props) => {
//     const quizMood = props.quizResult 
// };

  return ( 
  <body className="resultListBody">
    <div className="resultMood">
      <Typography align="center" variant="h5">
      According to the quiz, you are [quizMood]. 
      </Typography>
    </div>
    <div>{resultComponents}</div>;
  </body>
  );
};

export default ResultsList;
