import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import "./ResultsList.css";
import Results from "./Results";

const IDs = [
  "2QWEMqQMJR1KDf6hDjJOs6",
  "0aE3V0zgSD2YwkEHW42gxG",
  "2LowwiemmGMzzNSH1PJprK",
  "5YMXGBD6vcYP7IolemyLtK",
];

const ResultsList = (props) => {
  const resultComponents = IDs.map((id) => <Results id={id} />);
  return <div>{resultComponents}</div>;
};

export default ResultsList;
