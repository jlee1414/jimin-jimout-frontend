import "./Quiz.css";
import Proptypes from "prop-types";
import { useState } from "react";

const Quiz = (props) => {
  const questions = [
		{
			questionText: "Your friend calls you and wants to chat. You:",
			answerOptions: [ //change the isCorrect to weight percentage later? 
				{ answerText: "A: Ignore the call.", isCorrect: false }, //sad
				{ answerText: "B: Answer and talk for over an hour!", isCorrect: false }, //happy
				{ answerText: "C: Answer and don't say much. Conversation only lasts 5 minutes.", isCorrect: true }, //tired
				{ answerText: "D: Answer and begin ranting about everything you hate.", isCorrect: false }, //angry
			],
		},
		{
			questionText: "The sun is shining, and the temperature is just right. What are you going to do today?",
			answerOptions: [
				{ answerText: "A: Get outside and do something great!", isCorrect: false }, //happy
				{ answerText: "B: Watch TV, play on my phone, nothing too exciting.", isCorrect: true }, //sad
				{ answerText: "C: The same thing I do every day.", isCorrect: false }, //tired
				{ answerText: "D: Who knows - I'm sure someone will come along and ruin my day.", isCorrect: false }, //angry
			],
		},
		{
			questionText: "Choose a color:",
			answerOptions: [
				{ answerText: "A: Beige", isCorrect: true }, //tired
				{ answerText: "B: Red" , isCorrect: false }, //angry
				{ answerText: "C: Black", isCorrect: false }, //sad
				{ answerText: "D: Blue", isCorrect: false }, //happy
			],
		},
		{
			questionText: "Do you worry a lot?",
			answerOptions: [
				{ answerText: "A: All the time.", isCorrect: false }, //sad
				{ answerText: "B: No, who has the time?", isCorrect: false }, //tired
				{ answerText: "C: Only about the big stuff.", isCorrect: false }, //happy
				{ answerText: "D: Only about myself!", isCorrect: true }, //angry
			],
		},
    {
			questionText: "It's Monday morning, and you have to go to work. You:",
			answerOptions: [
				{ answerText: "A; Quit!", isCorrect: false }, //angry
				{ answerText: "B: Go in late", isCorrect: false }, //tired
				{ answerText: "C: Call in sick", isCorrect: false }, //sad
				{ answerText: "D; Go in!", isCorrect: true }, //happy
			],
		},{
			questionText: "What is your favorite kind of weather?",
			answerOptions: [
				{ answerText: "A: Doesn't matter! Any day is beautiful!", isCorrect: false }, //happy
				{ answerText: "B: Cloudy and rainy", isCorrect: false }, //sad
				{ answerText: "C: Blizzard/storm to shut down the whole neighborhood.", isCorrect: false }, //angry
				{ answerText: "D: Snowy and cold.", isCorrect: true }, //tired
			],
		},{
			questionText: "When was the last time you took a vacation/time for yourself?",
			answerOptions: [
				{ answerText: "A: I don't remember...", isCorrect: false }, //tired
				{ answerText: "B: Who has time for a vacation?", isCorrect: false }, //angry
				{ answerText: "C: Whenever I feel the need!", isCorrect: false }, //happy
				{ answerText: "D: Time for myself?", isCorrect: true }, //sad
			],
		},{
			questionText: "If you could do anything you wanted, right now, you would:",
			answerOptions: [
				{ answerText: "A: Scream and yell.", isCorrect: false }, //angry
				{ answerText: "B: Sleep", isCorrect: false }, //tired
				{ answerText: "C: Spend quality time with my loved ones.", isCorrect: false }, //happy
				{ answerText: "D: Go on a walk alone.", isCorrect: true }, //sad
			],
		},{
			questionText: "How are you feeling today?",
			answerOptions: [
				{ answerText: "A: No complaints.", isCorrect: false }, //happy
				{ answerText: "B: I want to punch a wall.", isCorrect: false }, //angry
				{ answerText: "C: Like there is no point.", isCorrect: false }, //sad
				{ answerText: "D: Ready for the day to end.", isCorrect: true }, //tired
			],
		},{
			questionText: "If your most favorite food was sitting on the counter downstairs, would you go and get it?",
			answerOptions: [
				{ answerText: "A: I don't have a favorite food.", isCorrect: false }, //angry
				{ answerText: "B: I would... but its just too far away...", isCorrect: false }, //tired
				{ answerText: "C: So what? I couldn't care less.", isCorrect: false }, //sad
				{ answerText: "D: I'm already on my way!", isCorrect: true }, //happy
			],
		},
	];

// does this go in App.js?
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);
  
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // while loop that uses JSON as a frequency table to keep track of which answer the user is feeling
    // and return that feeling to retrieve the corresponding playlist. If tie, wtf do we do

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}


export default Quiz