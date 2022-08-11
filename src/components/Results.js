import Quiz from "./Quiz.js";
import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import "./Results.css";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

const Result = (props) => {
  return (
    <div>
      <p>Song</p>
      {props.song.trackName}
      <p>Artist</p>
      {props.song.artist}
      {props.quizResult}
      {/* <LinkPreview url={URL} width="400px" /> */}
    </div>
  );
};

export default Result;
