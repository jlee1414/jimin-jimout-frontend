import Quiz from "./Quiz.js";
import { useState, useEffect } from "react";
import Proptypes from "prop-types";
import "./Results.css";
import ReactAudioPlayer from "react-audio-player";
import { Typography } from "@material-ui/core";
import {Grid} from "@material-ui/core"
import btsGroupPic from "./images/Group_2.jpeg"

const Result = (props) => {
  console.log(props.song);
  const imgURL = props.song.imageUrl;
  const spotifyURL = "https://open.spotify.com/track/" + props.song.id;
  const audioPreview = props.song.previewUrl;




  return (
    <body className="resultsBody">
      {/* <div>
        <Grid container justify="center">
        <img
          className="btsMainPic"
          src={btsGroupPic}
          alt="group"
        />
        </Grid>
      </div> */}
      
        <div className="playlist">
          <Typography className="song-display" align="center" variant="h8">
            Song: {props.song.track}
          </Typography>
          <Typography className="artist-display" align="center" variant="h8">
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
          <ReactAudioPlayer className="reactAudioPlayer" src={audioPreview} controls />
        </div>
    </body>
  );
};

export default Result;
