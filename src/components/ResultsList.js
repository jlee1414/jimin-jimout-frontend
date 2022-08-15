import PropTypes from "prop-types";
import "./ResultsList.css";
import Results from "./Results";

const ResultsList = (props) => {
  console.log(props.quizResult);
  const resultComponents = props.quizResult.map((song) => (
    <Results song={song} />
  ));
  return <div>{resultComponents}</div>;
};

ResultsList.propTypes = {
  quizResult: PropTypes.arrayOf(PropTypes.object),
};

export default ResultsList;
