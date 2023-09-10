import React from 'react'
import Styles from './Styles/Quizzes.module.css'
import {Link} from 'react-router-dom'

export default function Quizzes() {
  return (
    <div className={Styles.container}>
      <div  className={Styles.quizclass} id='5'>
        Class 5th
        <Link to="/quizzes/quizclass5"><button>Start</button></Link>
        
        </div>
      <div className={Styles.quizclass} id='6'>
        Class 6th
        <Link to="/quizzes/quizclass6"><button>Start</button></Link>
        </div>
      <div className={Styles.quizclass} id='7'>
        Class 7th
        <Link to="/quizzes/quizclass7"><button>Start</button></Link>
       
        </div>
      <div className={Styles.quizclass} id='8'>
        Class 8th
        <Link to="/quizzes/quizclass8"><button>Start</button></Link>
       
        </div>
      <div className={Styles.quizclass} id='9'>
        Class 9th
        <Link to="/quizzes/quizclass9"><button>Start</button></Link>
       
        </div>
      <div className={Styles.quizclass} id='10'>
        class 10th
        <Link to="/quizzes/quizclass10"><button>Start</button></Link>
       
        </div>
      <div className={Styles.quizclass} id='11'>
        Class 11th
        <Link to="/quizzes/quizclass11"><button>Start</button></Link>
       
        </div>
      <div className={Styles.quizclass} id='12'>
        Class 12th
        <Link to="/quizzes/quizclass12"><button>Start</button></Link>
       
        </div>
    </div>
  )
}
