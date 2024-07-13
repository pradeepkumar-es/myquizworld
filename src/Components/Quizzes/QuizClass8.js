import React, { useState } from 'react'
import '../Styles/AllQuizClass.css';
import { QuizDataclass5 } from '../QuizDataclass5'
import QuizResult from '../QuizResult'


function QuizClass8() {
    const [currentQue, setCurrentQue]=useState(0);
    const [marks, setMarks]=useState(0);
    const [selectedopt, setSelectedopt]=useState(0);
    const [displayResult, setDisplayResult]=useState(false);
    const nextQue=()=>{
        updatedScore();
        if(currentQue<QuizDataclass5.length-1){
            setCurrentQue(currentQue+1);
            setSelectedopt(0); //to be unchecked  next que option and avoid previous selected response
        }
        else{
            setDisplayResult(true);
        }
    }

    const backQue=()=>{
        if(currentQue>0){
            setCurrentQue(currentQue-1);
        }
        else{
        }
    }

    const updatedScore=()=>{
        if(selectedopt===QuizDataclass5[currentQue].Answer){
            setMarks(marks+1);
        }
        else{
        }
    }
    
  return (
    <div className="containerforclass">
        {displayResult?(
            <QuizResult marks={marks} totalmarks={QuizDataclass5.length}/>
        ):(<>
        <div className="question">
            <span>{currentQue+1}: </span>
            {QuizDataclass5[currentQue].Question}
        </div>
        <div className="option">
            {QuizDataclass5[currentQue].option.map((option,i)=>{
                return ( <button 
                    key={i} className={`optionbtn ${selectedopt === i+1?"checked":null}`}
                    onClick={()=>setSelectedopt(i+1)}
                > {option}</button> );
            }
            )}
        </div>
        <div className="btn">
        <button className='backbtn' onClick={backQue}>Back</button>
                <button className='nextbtn' onClick={nextQue}>Next</button>
            </div>
        </>)}
    </div>
  )
}

export default QuizClass8
