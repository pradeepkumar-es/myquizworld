import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import "./quiz.css";
import { questions } from "../data/mockQuestions";
import QuizResult from "./QuizResult";
import { QuizSidebar } from "../components/layout/QuizSidebar";
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
  const navigate = useNavigate(); //return a function
  // console.log("categoryNum", categoryNum);
  const quizCategory = decodeHTML(queData?.[currentQue]?.category);

  //timer
  const [timer, setTimer] = useState(150);
  useEffect(() => {
    if (queData.length <= 0) return; //start timer only when que data loaded
    console.log("inside time");
    const intervalId = setInterval(() => {
      setTimer((t) => {
        if (t <= 0) {
          clearInterval(intervalId);
          setDisplayResult(true);
          return 0;
        } else {
          return t - 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [queData.length]);
  const timeString = Math.floor(timer / 60) + " : " + (timer % 60);

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
      } catch (err) {
        console.log("Error:", err.message);
      }
    }
    console.log("loading");
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
  const handleModalClose = () => {
    setDisplayResult(false);
    navigate("/categories", { replace: true }); //2nd argument to avoid going back to prev page after navigation
  };

  //hide scroll when result modal is displayed
  useEffect(() => {
    document.body.style.overflow = displayResult ? "hidden" : "scroll";

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [displayResult]);
  return (
    <div className="quizContainer">
      <div className="main">
        <div className="heading">
          <h2>Quiz on {queData?.length > 0 ? quizCategory : "...."}</h2>
          <p>
            <b>
              Overall Time Left:{" "}
              <span style={{ color: timer < 30 ? "red" : "green" }}>
                {" "}
                {timeString}{" "}
              </span>
            </b>
          </p>
        </div>
        {displayResult ? (
          createPortal(
            <QuizResult
              marks={marks}
              totalmarks={queData?.length}
              onClick={handleModalClose}
              quizCategory={quizCategory}
            />,
            document.getElementById("quizResultModal"),
          )
        ) : (
          <>
            <div className="question">
              {queData?.length > 0 ? (
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
      <div className="quizSidebar">
        <QuizSidebar data = {queData} handleOption = {handleOption} setCurrentQue = {setCurrentQue}/>
      </div>
    </div>
  );
}

export default Quiz;
