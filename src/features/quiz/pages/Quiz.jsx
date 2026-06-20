import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import "./quiz.css";
import { questions } from "../data/mockQuestions";
import QuizResult from "./QuizResult";
import { Button } from "../../../Components/ui/Button";
import { quizAPI } from "../services/quizAPI";
import { decodeHTML } from "../utils/decodeHTML";
import { shuffleCollection } from "../utils/shuffleCollection";
function Quiz() {
  const [queData, setQueData] = useState([]);
  const [currentQue, setCurrentQue] = useState(0);
  const [marks, setMarks] = useState(0);
  const [selectedopt, setSelectedopt] = useState(0);
  const [displayResult, setDisplayResult] = useState(false);
  const [options, setOptions] = useState([]);
  const hasFetched = useRef(false); //to stop strict mode to re-run api too frequently to avoid api block in development mode
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryNum = searchParams.get("category"); //get categoryNum from current url's query string
  // console.log("categoryNum", categoryNum);
  const quizCategory = decodeHTML(queData?.[currentQue]?.category);

  const handleOption = (data, queIndex) => {
    const option = [
      data[queIndex].correct_answer,
      ...data[queIndex].incorrect_answers,
    ];
    const decodedOption = option.map((val) => decodeHTML(val));
    const shuffledOptions = shuffleCollection(decodedOption);
    setOptions(shuffledOptions);
  };

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    // let ignore = false;
    console.log("Effect is running");
    let apiURL =
      categoryNum > 8
        ? `https://opentdb.com/api.php?amount=10&category=${categoryNum}&type=multiple`
        : "https://opentdb.com/api.php?amount=10&type=multiple"; //for random category there is no category params in api

    async function loadData() {
      try {
        const data = await quizAPI(apiURL, categoryNum);
        // if (!ignore) {
        setQueData(data);
        handleOption(data, 0);
        // }
        console.log(data);
      }catch(err){
        console.log("Error:", err.message)
      }

    }
    console.log("loading")
    loadData();
    // return () => {
    //   ignore = true;
    // };
  }, []);
  const nextQue = () => {
    if (currentQue < queData.length - 1) {
      setCurrentQue((c) => c + 1); //it update index later, so to avoid current index used to calculate options for next,
      handleOption(queData, currentQue + 1); //send 1 index advanced, to fetch options correctly with questions
      setSelectedopt(0); //to be unchecked  next que option and avoid previous selected response
    }
  };

  const backQue = () => {
    if (currentQue > 0) {
      setCurrentQue((c) => c - 1);
      handleOption(queData, currentQue - 1);
    }
  };

  const updateScore = () => {
    if (options[selectedopt] === queData[currentQue].correct_answer) {
      setMarks(marks + 1);
    }
  };
  return (
    <div className="containerforclass">
      <h2 className="heading">
        Quiz on {queData.length > 0 ? quizCategory : "...."}
      </h2>
      {displayResult ? (
        <QuizResult marks={marks} totalmarks={queData?.length} />
      ) : (
        <>
          <div className="question">
            {queData.length > 0 ? (
              <>
                <span>
                  {currentQue + 1}/{queData?.length}:{" "}
                </span>
                {decodeHTML(queData?.[currentQue]?.question)}
              </>
            ) : (
              "Loading...."
            )}
          </div>
          <div className="option">
            {options.map((option, i) => {
              return (
                <button
                  key={i}
                  className={`optionbtn ${selectedopt === i + 1 ? "checked" : null}`} //here i+1 is used instead of i so that on options load, no options get checked
                  onClick={() => {
                    setSelectedopt(i + 1);
                    updateScore();
                  }} //when user click one of option, state update with option 1/2/3/4 which cause component re-render, now this time
                //  one of the option get match with i+1 so that one option get checked
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
            {currentQue === queData?.length - 1 ? (
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
