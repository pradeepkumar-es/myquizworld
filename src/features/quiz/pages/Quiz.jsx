import React, { useEffect, useState } from "react";
import "./quiz.css";
import { questions } from "../data/mockQuestions";
import QuizResult from "./QuizResult";
import { Button } from "../../../Components/ui/Button";
import { quizAPI } from "../services/quizApi";
function Quiz() {
  const [currentQue, setCurrentQue] = useState(0);
  const [marks, setMarks] = useState(0);
  const [selectedopt, setSelectedopt] = useState(0);
  const [displayResult, setDisplayResult] = useState(false);

  async function loadData() {
    const data = await quizAPI();
    console.log(data);
  }
  useEffect(()=>{
    loadData()
  },[])

  const nextQue = () => {
    updatedScore();
    if (currentQue < questions.length - 1) {
      setCurrentQue(currentQue + 1);
      setSelectedopt(0); //to be unchecked  next que option and avoid previous selected response
    }
  };

  const backQue = () => {
    if (currentQue > 0) {
      setCurrentQue(currentQue - 1);
    }
  };

  const updatedScore = () => {
    if (selectedopt === questions[currentQue].Answer) {
      setMarks(marks + 1);
    } else {
    }
  };

  return (
    <div className="containerforclass">
      <h2 className="heading">Quiz For Class 5th students</h2>
      {displayResult ? (
        <QuizResult marks={marks} totalmarks={questions.length} />
      ) : (
        <>
          <div className="question">
            <span>
              {currentQue + 1}/{questions.length}:{" "}
            </span>
            {questions[currentQue].Question}
          </div>
          <div className="option">
            {questions[currentQue].option.map((option, i) => {
              return (
                <button
                  key={i}
                  className={`optionbtn ${selectedopt === i + 1 ? "checked" : null}`}
                  onClick={() => setSelectedopt(i + 1)}
                >
                  {" "}
                  {option}
                </button>
              );
            })}
          </div>
          <div className="btn">
            <Button
              onClick={backQue}
              isDisabled={currentQue === 0}
              text="Back"
            />
            {currentQue === questions.length - 1 ? (
              <Button onClick={() => setDisplayResult(true)} text="Submit" />
            ) : (
              <Button onClick={nextQue} text="Next" />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
