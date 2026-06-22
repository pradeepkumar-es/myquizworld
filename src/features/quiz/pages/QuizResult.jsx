import React from "react";
import "./result.css";
import {Button} from "../../../Components/ui/Button";
import {useNavigate} from "react-router-dom";
import {useSearchParams} from "react-router-dom";
function QuizResult({marks, totalmarks, onClick, quizCategory}) {
  const navigate = useNavigate();
  function handleRestart(e){
    e.stopPropagation();
    navigate(0); //0: go in same location, number represent go to x steps back or forward of browser history depending on sign before number
  }
  return (
    <div className="modalWrapper" onClick={onClick}> {/* to let close modal outside click of content  */}
      <div className="modalContent" onClick = {e=>e.stopPropagation()}> {/* stop click event to react to wrapper */}
        <div className="closeModal"><span onClick={onClick}>X</span></div>
        <p>Congratulations! on completing <b>{quizCategory} </b>quiz</p>
        <h3>Your Score: {marks}</h3>
        <h3>Total Score: {totalmarks}</h3>
        <div className="modalActions">
          <Button text = "Cancel" onClick={onClick}/>
          <Button text = "Restart" onClick = {(e)=>handleRestart(e)}/>
        </div>
      </div>
    </div>
  );
}

export default QuizResult;
