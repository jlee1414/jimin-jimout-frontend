import Quiz from "./Quiz.js";
import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import "./Results.css";

const Result = (props) => {
  return (
    <div>
      <h1>Results here</h1>
      {props.id}
    </div>
  );
};

export default Result;
