import Styles from "./timerProgressBar.module.css";
import { useEffect, useState } from "react";

// This component shows a small animated progress bar for the current question.
// Once the time limit expires, it automatically moves to the next question.
export function TimerProgressBar({ timeLimit, nextQue }) {
  // The timer is handled with a single timeout instead of a full interval.
  // This keeps the per-question countdown simple and predictable.
  useEffect(() => {
    let time = timeLimit;
    let timeoutId = setTimeout(() => {
      nextQue(); // auto-advance when the timer reaches zero
    }, time * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeLimit]);

  const progressBar = {
    backgroundColor: "green",
    animationDuration: `${timeLimit}s`,
  };

  return (
    <div style={{ border: "1px solid black" }}>
      <div style={progressBar} className={Styles.progressBar}></div>
    </div>
  );
}
