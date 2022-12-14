import "./Quiz.css";
import Proptypes from "prop-types";
import { useState } from "react";

const Quiz = (props) => {
  const questions = [
    {
      questionText: "Your friend calls you and wants to chat. You:",
      answerOptions: [
        { answerText: "A: Ignore the call.", isCorrect: false, mood: "sad" },
        {
          answerText: "B: Answer and talk for over an hour!",
          isCorrect: false,
          mood: "happy",
        },
        {
          answerText:
            "C: Answer and don't say much. Conversation only lasts 5-minutes.",
          isCorrect: false,
          mood: "tired",
        },
        {
          answerText: "D: Answer and begin ranting about everything you hate.",
          isCorrect: false,
          mood: "angry",
        },
      ],
    },
    {
      questionText:
        "The sun is shining and the temperature is just right. What are you going to do today?",
      answerOptions: [
        {
          answerText: "A: Get outside and do something great!",
          isCorrect: false,
          mood: "happy",
        },
        {
          answerText: "B: Watch TV, play on my phone, nothing too exciting.",
          isCorrect: false,
          mood: "sad",
        },
        {
          answerText: "C: The same thing I do every day.",
          isCorrect: false,
          mood: "tired",
        },
        {
          answerText:
            "D: Who knows - I'm sure someone will come along and ruin my day.",
          isCorrect: false,
          mood: "angry",
        },
      ],
    },
    {
      questionText: "Choose a color:",
      answerOptions: [
        { answerText: "A: Beige", isCorrect: false, mood: "tired" },
        { answerText: "B: Black", isCorrect: false, mood: "angry" },
        { answerText: "C: Blue", isCorrect: false, mood: "sad" },
        { answerText: "D: Purple", isCorrect: false, mood: "happy" },
      ],
    },
    {
      questionText: "Do you worry a lot?",
      answerOptions: [
        { answerText: "A: All the time.", isCorrect: false, mood: "sad" },
        {
          answerText: "B: No, who has the time?",
          isCorrect: false,
          mood: "tired",
        },
        {
          answerText: "C: Only about the big stuff.",
          isCorrect: false,
          mood: "happy",
        },
        {
          answerText: "D: Only about myself!",
          isCorrect: false,
          mood: "angry",
        },
      ],
    },
    {
      questionText: "It's Monday morning, and you have to go to work. You:",
      answerOptions: [
        { answerText: "A: Quit!", isCorrect: false, mood: "angry" },
        { answerText: "B: Go in late", isCorrect: false, mood: "tired" },
        { answerText: "C: Call in sick", isCorrect: false, mood: "sad" },
        { answerText: "D: Go in!", isCorrect: false, mood: "happy" },
      ],
    },
    {
      questionText: "What is your favorite kind of weather?",
      answerOptions: [
        {
          answerText: "A: Sunny and warm!",
          isCorrect: false,
          mood: "happy",
        },
        { answerText: "B: Cloudy and rainy", isCorrect: false, mood: "sad" },
        {
          answerText: "C: Blizzard/storm to shut down the whole neighborhood.",
          isCorrect: false,
          mood: "angry",
        },
        { answerText: "D: Snowy and cold.", isCorrect: false, mood: "tired" },
      ],
    },
    {
      questionText:
        "When was the last time you took a vacation/time for yourself?",
      answerOptions: [
        {
          answerText: "A: I don't remember...",
          isCorrect: false,
          mood: "tired",
        },
        {
          answerText: "B: Who has time for a vacation?",
          isCorrect: false,
          mood: "angry",
        },
        {
          answerText: "C: Whenever I feel the need!",
          isCorrect: false,
          mood: "happy",
        },
        { answerText: "D: Time for myself?", isCorrect: false, mood: "sad" },
      ],
    },
    {
      questionText:
        "If you could do anything you wanted, right now, you would:",
      answerOptions: [
        { answerText: "A: Scream and yell.", isCorrect: false, mood: "angry" },
        { answerText: "B: Sleep", isCorrect: false, mood: "tired" },
        {
          answerText: "C: Spend quality time with my loved ones.",
          isCorrect: false,
          mood: "happy",
        },
        { answerText: "D: Go on a walk alone.", isCorrect: false, mood: "sad" },
      ],
    },
    {
      questionText: "How are you feeling today?",
      answerOptions: [
        { answerText: "A: No complaints.", isCorrect: false, mood: "happy" },
        {
          answerText: "B: I want to punch a wall.",
          isCorrect: false,
          mood: "angry",
        },
        {
          answerText: "C: Like there is no point.",
          isCorrect: false,
          mood: "sad",
        },
        {
          answerText: "D: Ready for the day to end.",
          isCorrect: false,
          mood: "tired",
        },
      ],
    },
    {
      questionText:
        "If your most favorite food was sitting on the counter downstairs, would you go and get it?",
      answerOptions: [
        {
          answerText: "A: I don't have a favorite food.",
          isCorrect: false,
          mood: "angry",
        },
        {
          answerText: "B: I would... but its just too far away...",
          isCorrect: false,
          mood: "tired",
        },
        {
          answerText: "C: So what? I couldn't care less.",
          isCorrect: false,
          mood: "sad",
        },
        {
          answerText: "D: I'm already on my way!",
          isCorrect: false,
          mood: "happy",
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const initalQuizResults = {
    sad: 0,
    angry: 0,
    happy: 0,
    tired: 0,
  };

  const [quizResults, setQuizResults] = useState(initalQuizResults);

  const handleAnswerOptionClick = (mood) => {
    const updatedQuizResults = { ...quizResults };
    for (const quizMood in updatedQuizResults) {
      if (quizMood === mood) {
        updatedQuizResults[mood]++;
      }
    }

    setQuizResults(updatedQuizResults);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <body className="quizBody">
      <div className="app">
        {showScore ? (
          <div className="submit-quiz">
            <button
              onClick={() => props.handleFinalQuizAnswerClick(quizResults)}
            >
              {" "}
              SEE MY RESULTS
            </button>
            {/* I think we should have another button here that says "Take quiz again" */}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() => {
                    handleAnswerOptionClick(answerOption.mood);
                  }}
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </body>
  );
};

Quiz.propTypes = {
  handleFinalQuizAnswerClick: Proptypes.func.isRequired,
};
export default Quiz;
