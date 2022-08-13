import Quiz from "./Quiz.js";
import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import "./Results.css";
import ReactAudioPlayer from "react-audio-player";
import { Typography } from "@material-ui/core";

const Result = (props) => {
  console.log(props.song);
  const imgURL = props.song.imageUrl;
  const spotifyURL = "https://open.spotify.com/track/" + props.song.id;
  const audioPreview = props.song.previewUrl;

  return (
    <body className="resultsBody">
      <div className="playlist">
        <Typography color="white" align="center" variant="h4">
          Thank you for taking the quiz! It seems you are currently (mood). 
          Here are some songs to keep you company during your frame of mind.
        </Typography>
        <Typography className="song-display" color="white" align="center">
          Song: {props.song.track}
          </Typography>
        <Typography className="artist-display" color="white" align="center">
          Artist: {props.song.artist}
          </Typography>

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
