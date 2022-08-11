import "./Navbar.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";
import ResultsList from "./ResultsList";

const Navbar = (props) => {
  console.log(props.showResults);
  if (props.showResults) {
    return (
      <div>
        <ResultsList quizResult={props.quizResult} />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
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

export default Navbar;
