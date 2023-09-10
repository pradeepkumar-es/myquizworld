import React from 'react'
import Styles from './Styles/Home.module.css'
import img1 from '../images/bg1.png'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className={Styles.container1}>
      <div className={Styles.left}>
        <h1>A Quiz Platform To</h1>
        <h1>Boost Your Knowledge</h1>
        <div>
           <button className={Styles.startbtn}><Link to="/Quizzes">Get Started</Link></button>
           </div>
      </div>
         
      <div className={Styles.right}>
        <img src={img1} alt="Quiz Description" />
      </div>
    </div>
    </>
  )
}

export default Home
