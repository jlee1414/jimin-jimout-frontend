import PropTypes from "prop-types";
import "./Results.css";
import ReactAudioPlayer from "react-audio-player";
import { Typography } from "@material-ui/core";

const Result = (props) => {
  const imgURL = props.song.imageUrl;
  const spotifyURL = "https://open.spotify.com/track/" + props.song.id;
  const audioPreview = props.song.previewUrl;

  return (
    <div className="resultsBody">
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
        <ReactAudioPlayer
          className="reactAudioPlayer"
          src={audioPreview}
          controls
        />
      </div>
    </div>
  );
};

Result.propTypes = {
  song: PropTypes.arrayOf(PropTypes.string),
};

export default Result;
