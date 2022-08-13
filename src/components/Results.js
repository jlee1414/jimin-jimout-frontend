import Quiz from "./Quiz.js";
import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import "./Results.css";
import ReactAudioPlayer from "react-audio-player";

const Result = (props) => {
  console.log(props.song);
  const imgURL = props.song.imageUrl;
  const spotifyURL = "https://open.spotify.com/track/" + props.song.id;
  const audioPreview = props.song.previewUrl;

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
          <img src={imgURL} alt="Not available"></img>
        </a>
        <ReactAudioPlayer src={audioPreview} controls />
      </div>
    </body>
  );
};

export default Result;
