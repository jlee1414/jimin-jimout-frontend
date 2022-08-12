import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import "./ResultsList.css";
import Results from "./Results";
import axios from "axios";

const ResultsList = (props) => {
  console.log(props.quizResult);
  const resultComponents = props.quizResult.map((song) => (
    <Results song={song} />
  ));
  return <div>{resultComponents}</div>;
};

export default ResultsList;
