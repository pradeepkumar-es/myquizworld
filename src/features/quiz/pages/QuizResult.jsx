import React, { useEffect } from "react";
import { useState } from "react";
import Styles from "./result.module.css";
import { Button } from "../../../Components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { decodeHTML } from "../utils/decodeHTML";
import { shuffleCollection } from "../utils/shuffleCollection";
function QuizResult({
  marks,
  totalmarks,
  queData,
  options,
  solvedNum,
  visitedNum,
  nonVistedNum,
  queResponse,
  onClick,
  quizCategory,
}) {
  console.log(options.length);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [allOptions, setAllOptions] = useState([]);
  const navigate = useNavigate();
  function handleRestart(e) {
    e.stopPropagation();
    navigate(0); //0: go in same location, number represent go to x steps back or forward of browser history depending on sign before number
  }

  //set options for questions where user has not visited that questions
  useEffect(()=>{
      let allOption = [];
  for(let i = 0; i < options.length; i++){
    // console.log(options[i])
        if (options[i]) {
        //if it exist and not undefined return the same content
        allOption.push(options[i]);
      } else {
        //if undefined
        // console.log(option)
        const shuffledOption = shuffleCollection([
          queData[i].correct_answer,
          ...queData[i].incorrect_answers,
        ]);
        const decodedOption = shuffledOption.map((option) =>
          decodeHTML(option),
        );
        allOption.push(decodedOption);
      }
  }
  setAllOptions(allOption);
  },[])
  return (
    <div className={Styles.modalWrapper} onClick={onClick}>
      {" "}
      {/* to let close modal outside click of content  */}
      <div className={Styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {" "}
        {/* stop click event to react to wrapper */}
        <div className={Styles.closeModal}>
          <span onClick={onClick}>X</span>
        </div>
        <p>
          Congratulations! on completing <b>{quizCategory} </b>quiz
        </p>
        <h3>Total Visited Question: {visitedNum}/{visitedNum + nonVistedNum}</h3>
        <h3>Total Solved Question: {solvedNum}</h3>
        <h3>Your Score: {marks}/{totalmarks}</h3>
        <Button
          text={isDetailOpen ? "Close Details" : "Analyse Result"}
          onClick={() => setIsDetailOpen((prev) => !prev)}
        />
        {isDetailOpen && (
          <DetailedResult
            queData={queData}
            options={allOptions}
            queResponse={queResponse}
          />
        )}
        <div className={Styles.modalActions}>
          <Button text="Cancel" onClick={onClick} />
          <Button text="Restart" onClick={(e) => handleRestart(e)} />
        </div>
      </div>
    </div>
  );
}
function DetailedResult({ queData, options, queResponse }) {
  console.log(options);
  return (
    <div className={Styles.analytics}>
      {queData.map((data, i) => {
        return (
          <div className={Styles.queInfo}>
            <p className={Styles.question}>
              <span>({i + 1})</span> {decodeHTML(data.question)}
            </p>
            <div className={Styles.options}>
              {options[i].map((option, j) => {
                return (
                  <div
                    className={Styles.option}
                    style={{
                      //if selectedopt is correct then green background, if false, red background, other option as white
                      backgroundColor:
                        queResponse[i]?.selectedopt === j + 1 &&
                        decodeHTML(data.correct_answer) === option
                          ? "green"
                          : queResponse[i]?.selectedopt === j + 1
                            ? "red"
                            : "white",
                      border: `3px solid ${decodeHTML(data.correct_answer) === option ? "green" : "gray"}`,
                    }}
                  >
                    {option}
                  </div>
                );
              })}
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
export default QuizResult;
