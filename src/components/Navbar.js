import "./Navbar.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";
import ResultsList from "./ResultsList";

const Navbar = (props) => {
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
        />
        <Route
          path="/results"
          element={<ResultsList quizResult={props.quizResult} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Navbar;
