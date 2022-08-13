import "./Navbar.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";
import ResultsList from "./ResultsList";
import {AppBar, Toolbar, Typography} from '@material-ui/core';

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
    // <AppBar position='static'>
    // <Toolbar>
    //     <Typography>React Navbar Example</Typography>
    // </Toolbar>
    // </AppBar>

);
  };

export default Navbar;
