import React from 'react'
import Styles from './Styles/Quizzes.module.css'
import {Link} from 'react-router-dom'

export default function Quizzes() {
  return (
    <div className={Styles.container}>
      <div  className={Styles.quizclass} id='5'>
        <h2>Class 5th</h2>
        <Link to="/quizzes/quizclass5"><button>Start</button></Link>
        
        </div>
      <div className={Styles.quizclass} id='6'>
      <h2>Class 6th</h2>
        <Link to="/quizzes/quizclass6"><button>Start</button></Link>
        </div>
      <div className={Styles.quizclass} id='7'>
      <h2>Class 7th</h2>
        <Link to="/quizzes/quizclass7"><button>Start</button></Link>
       
        </div>
      <div className={Styles.quizclass} id='8'>
      <h2>Class 8th</h2>
        <Link to="/quizzes/quizclass8"><button>Start</button></Link>
       
        </div>
      <div className={Styles.quizclass} id='9'>
      <h2>Class 9th</h2>
        <Link to="/quizzes/quizclass9"><button>Start</button></Link>
       
        </div>
      <div className={Styles.quizclass} id='10'>
      <h2>Class 10th</h2>
        <Link to="/quizzes/quizclass10"><button>Start</button></Link>
       
        </div>
      <div className={Styles.quizclass} id='11'>
      <h2>Class 11th</h2>
        <Link to="/quizzes/quizclass11"><button>Start</button></Link>
       
        </div>
      <div className={Styles.quizclass} id='12'>
      <h2>Class 12th</h2>
        <Link to="/quizzes/quizclass12"><button>Start</button></Link>
       
        </div>
    </div>
  )
}
