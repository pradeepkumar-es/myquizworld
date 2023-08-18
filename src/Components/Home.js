import React from 'react'
import './Home.css'
import img1 from '../images/bg1.png'

const Home = () => {
  return (
    <>
    <div className="container1">
      <div className="left">
        <h1>A Quiz Platform To</h1>
        <h1>Boost Your Knowledge</h1>
        <div>
           <button className='startbtn'><a href="/">Get Started</a></button>
           </div>
      </div>
         
      <div className="right">
        <img src={img1} alt="Quiz Description" />
      </div>
    </div>
    </>
  )
}

export default Home
