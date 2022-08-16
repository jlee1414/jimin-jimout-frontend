import "./Navbar.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";
import ResultsList from "./ResultsList";
import PropTypes from "prop-types";

const Navbar = (props) => {
  if (props.showResults) {
    return (
      <div>
        <ResultsList
          quizResult={props.quizResult}
          moodResult={props.moodResult}
          retakeQuiz={props.retakeQuiz}
        />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Routes className="nav">
        <Route path="/" element={<Home />} />
        <Route
          path="/quiz"
          element={
            <Quiz
              handleFinalQuizAnswerClick={props.handleFinalQuizAnswerClick}
            />
          }
          x
        />
      </Routes>
    </BrowserRouter>
  );
};
Navbar.propTypes = {
  quizResult: PropTypes.array.isRequired,
  handleFinalQuizAnswerClick: PropTypes.func.isRequired,
  retakeQuiz: PropTypes.func.isRequired,
};

export default Navbar;
