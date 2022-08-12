import Quiz from "./Quiz.js";
import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import "./Results.css";

const Result = (props) => {
  console.log(props.song);
  const imgURL = props.song.imageUrl;
  const spotifyURL = "https://open.spotify.com/track/" + props.song.id;

  return (
    <body className="resultsBody">
      <div className="playlist">
        <p className="song-display">Song: {props.song.track}</p>

        <p className="artist-display">Artist: {props.song.artist}</p>

        <a
          className="artist-image"
          href={spotifyURL}
          target="_blank"
          rel="noreferrer"
        >
          <img src={imgURL} alt="Image not available"></img>
        </a>
      </div>
    </body>
  );
};

export default Result;
