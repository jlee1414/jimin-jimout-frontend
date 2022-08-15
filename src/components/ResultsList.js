import PropTypes from "prop-types";
import "./ResultsList.css";
import Results from "./Results";
import { Typography } from "@material-ui/core";

const ResultsList = (props) => {
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
          According to the quiz, you are {props.moodResult.join(", ")}.
        </Typography>
      </div>
      <div>{resultComponents}</div>;
      <div>
        <button onClick={props.retakeQuiz}>Retake Quiz</button>
      </div>
    </body>
  );
};

ResultsList.propTypes = {
  quizResult: PropTypes.arrayOf(PropTypes.object),
  moodResult: PropTypes.arrayOf(PropTypes.string),
  retakeQuiz: PropTypes.func.isRequired,
};

export default ResultsList;
