import React from 'react'

function QuizResult(props) {
  return (
    <div>
      <h2>Your Score: {props.marks}</h2> 
      <h2>Total Score: {props.totalmarks}</h2>
    </div>
  )
}

export default QuizResult
