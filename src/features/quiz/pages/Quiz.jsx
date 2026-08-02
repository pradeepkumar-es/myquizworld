import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import "./quiz.css";
import { questions } from "../data/mockQuestions";
import QuizResult from "./QuizResult";
import { QuizSidebar } from "../components/layout/QuizSidebar";
import { Button } from "../../../Components/ui/Button";
import { TimerProgressBar } from "../components/ui/TimerProgressBar";
import { quizAPI } from "../services/quizAPI";
import { decodeHTML } from "../utils/decodeHTML";
import { shuffleCollection } from "../utils/shuffleCollection";
import { calculateSolvedNum } from "../utils/calculateSolvedNum";
import { calculateVisitedNum } from "../utils/calculateVisitedNum";

// Main quiz page: loads questions, handles answer selection, tracks score,
// and displays the result modal when the user submits or the timer ends.
function Quiz() {
  // Question data fetched from the API or fallback source.
  const [queData, setQueData] = useState([]);

  // Current question index being displayed.
  const [currentQue, setCurrentQue] = useState(0);

  // Score for the active quiz session.
  const [marks, setMarks] = useState(0);

  // Stores answer selections per question.
  // Example: { selectedopt: 3, isSolved: true }
  const [queResponse, setQueResponse] = useState([]);

  // Shows the final result modal once the user submits or timer expires.
  const [displayResult, setDisplayResult] = useState(false);

  // Randomized options for each question.
  const [options, setOptions] = useState([]);

  // Tracks which questions were viewed/visited in the quiz.
  const [visit, setVisit] = useState([true, ...new Array(9).fill(false)]);

  // Derived values for sidebar status counts.
  const visitedNum = queData.length > 0 ? calculateVisitedNum(visit) : 0;
  const nonVistedNum = 10 - visitedNum;
  const solvedNum = calculateSolvedNum(queResponse);

  // Reads the selected category from the URL query string.
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryNum = searchParams.get("category");

  // Navigation used to move back to the category page after finishing a quiz.
  const navigate = useNavigate();

  // Category label, decoded from HTML entities returned by the API.
  const quizCategory = decodeHTML(queData?.[currentQue]?.category);

  // Quiz-level countdown timer.
  const [timer, setTimer] = useState(150);

  // Toggle for showing or hiding the individual question timer bar.
  const [showTimerBar, setShowTimerBar] = useState(true);

  // Difficulty setting for the active question set.
  const [difficulty, setDifficulty] = useState("random");

  // Start the overall countdown as soon as the quiz data loads.
  useEffect(() => {
    if (queData.length <= 0) return;

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

  // Shuffle and decode the answer choices for the current question.
  const handleOption = (data, queIndex) => {
    const option = [
      data[queIndex].correct_answer,
      ...data[queIndex].incorrect_answers,
    ];
    const decodedOption = option.map((val) => decodeHTML(val));
    const shuffledOptions = shuffleCollection(decodedOption);

    // Do not overwrite a question that has already been answered.
    if (queResponse[currentQue]?.isSolved) {
      return;
    }

    setOptions((prevOptions) => {
      const nextOptions = [...prevOptions];
      nextOptions[queIndex] = [...shuffledOptions];
      return nextOptions;
    });
  };

  // Rebuild options whenever the question or question set changes.
  useEffect(() => {
    if (queData.length > 0) {
      handleOption(queData, currentQue);
    }
  }, [queData, currentQue]);

  // Fetches a fresh set of questions whenever the category or difficulty changes.
  useEffect(() => {
    let isMounted = true;

    const apiURL =
      Number(categoryNum) > 8
        ? difficulty !== "random"
          ? `https://opentdb.com/api.php?amount=10&category=${categoryNum}&difficulty=${difficulty}&type=multiple`
          : `https://opentdb.com/api.php?amount=10&category=${categoryNum}&type=multiple`
        : "https://opentdb.com/api.php?amount=10&type=multiple";

    async function loadData() {
      try {
        // Reset quiz state before loading a new question set.
        setQueData([]);
        setCurrentQue(0);
        setMarks(0);
        setQueResponse([]);
        setOptions([]);
        setVisit([true, ...new Array(9).fill(false)]);
        setTimer(1150);
        setDisplayResult(false);

        const data = await quizAPI(apiURL, categoryNum);
        if (!isMounted) return;

        setQueData(data ?? []);
      } catch (err) {
        console.log("Error:", err.message);
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, [categoryNum, difficulty]);

  // Move to the next question and mark it visited.
  const nextQue = () => {
    if (currentQue < queData.length - 1) {
      setCurrentQue((c) => c + 1);
      setVisit((pre) => {
        const nextIndex = currentQue + 1;
        if (pre[nextIndex]) {
          return pre;
        }
        const next = [...pre];
        next[nextIndex] = true;
        return next;
      });
    }
  };

  // Go to the previous question.
  const backQue = () => {
    if (currentQue > 0) {
      setCurrentQue((c) => c - 1);
      setVisit((pre) => {
        const prevIndex = currentQue - 1;
        if (pre[prevIndex]) {
          return pre;
        }
        const next = [...pre];
        next[prevIndex] = true;
        return next;
      });
    }
  };

  // Update the score based on the currently selected answer.
  const updateScore = (optionIndex) => {
    if (!queData[currentQue]) return;

    const selectedAnswer = options[currentQue]?.[optionIndex];
    const correctAnswer = decodeHTML(queData[currentQue].correct_answer);

    // Prevent duplicate scoring when the same correct answer is clicked again.
    if ((queResponse[currentQue]?.isSolved ?? false) && selectedAnswer === correctAnswer) {
      return;
    }

    // Remove a mark if the user changes a previous answer to a wrong one.
    if ((queResponse[currentQue]?.isSolved ?? false) && selectedAnswer !== correctAnswer) {
      setMarks((m) => {
        if (m > 0) {
          return m - 1;
        } else {
          return m;
        }
      });
    }

    // Add a mark when the answer is correct.
    if (selectedAnswer === correctAnswer) {
      setMarks((m) => m + 1);
    }
  };

  // Close the result popup and return to the categories page.
  const handleModalClose = () => {
    setDisplayResult(false);
    navigate("/categories", { replace: true });
  };

  // Disable page scrolling while the result modal is open.
  useEffect(() => {
    document.body.style.overflow = displayResult ? "hidden" : "scroll";

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [displayResult]);

  // Update the selected difficulty from the dropdown.
  function handleDifficulty(e) {
    setDifficulty(e.target.value);
  }

  return (
    <div className="quizContainer">
      <div className="main">
        <div className="heading">
          <h2>Quiz on {queData?.length > 0 ? quizCategory : "...."}</h2>
          <p>
            <b>
              Overall Time Left:{" "}
              <span style={{ color: timer < 30 ? "red" : "green" }}>
                {timeString}
              </span>
            </b>
          </p>
        </div>

        {displayResult ? (
          createPortal(
            <QuizResult
              marks={marks}
              totalmarks={queData?.length}
              queData={queData}
              options={options}
              queResponse={queResponse}
              nonVistedNum={nonVistedNum}
              onClick={handleModalClose}
              quizCategory={quizCategory}
            />,
            document.getElementById("quizResultModal")
          )
        ) : (
          <>
            <div>
              <label htmlFor="difficulyLevel">
                Set Difficulty:{" "}
                <select
                  name="difficulyLevel"
                  id="difficulyLevel"
                  className="level"
                  value={difficulty}
                  onChange={handleDifficulty}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                  <option value="random">Random</option>
                </select>
              </label>

              <span style={{ paddingLeft: "25px" }}>
                Current Difficulty: <span style={{ fontWeight: "bold" }}>{queData?.[currentQue]?.difficulty?.toUpperCase()}</span>
              </span>
            </div>

            <label htmlFor="timerBar">
              <input
                id="timerBar"
                name="timerBar"
                type="checkbox"
                checked={showTimerBar}
                onChange={(e) => setShowTimerBar(e.target.checked)}
              />
              {showTimerBar ? "Hide" : "Set"} Timer Bar for Each Question
            </label>

            {showTimerBar && (
              <TimerProgressBar
                key={currentQue}
                timeLimit={150 / queData?.length}
                nextQue={nextQue}
              />
            )}

            <div className="question">
              {queData?.length > 0 ? (
                <>
                  <p>
                    <span>{currentQue + 1}/{queData?.length}: </span>
                    {decodeHTML(queData?.[currentQue]?.question)}
                  </p>
                </>
              ) : (
                "Loading...."
              )}
            </div>

            <div className="option">
              {options[currentQue]?.map((option, i) => {
                return (
                  <button
                    key={i}
                    className={`optionbtn ${queResponse[currentQue]?.selectedopt === i + 1 ? "checked" : null}`}
                    onClick={() => {
                      setQueResponse((prev) => {
                        const updated = [...prev];
                        updated[currentQue] = {
                          selectedopt: i + 1,
                          isSolved: true,
                        };
                        updateScore(i);
                        return updated;
                      });
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div className="btn">
              <Button onClick={backQue} isDisabled={currentQue === 0} text="Back" />
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
        <QuizSidebar
          data={queData}
          currentQue={currentQue}
          setCurrentQue={setCurrentQue}
          solved={solvedNum}
          setVisit={setVisit}
          visitedNum={visitedNum}
          visit={visit}
          nonVisit={nonVistedNum}
          queResponse={queResponse}
        />
      </div>
    </div>
  );
}

export default Quiz;
