import React from 'react'
import Styles from './Styles/Home.module.css'
import img1 from '../images/bg1.png'
import {Link} from 'react-router-dom'
import {MdQuiz} from 'react-icons/md' 
import {SiLevelsdotfyi} from 'react-icons/si'
import {FcIdea} from 'react-icons/fc'
import {BiTimer} from 'react-icons/bi'
import {TbDeviceAnalytics} from 'react-icons/tb'
import {BsBook} from 'react-icons/bs'


const Home = () => {
  return (
    <div className={Styles.aboutus}>
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
    <div className={Styles.container2}>
      <h3>Feature</h3>
      <h1>Our Quiz Feature</h1>
      <div className={Styles.feature}>
        <div className={Styles.feature1}>
          <MdQuiz/>
          <h4>All Type of Questions</h4>
        </div>
        <div className={Styles.feature1}>
          <SiLevelsdotfyi/>
          <h4>Level Wise Questions</h4>
        </div>
        <div className={Styles.feature1}>
          <FcIdea/>
          <h4>Hint For Question</h4>
        </div>
        <div className={Styles.feature1}>
          <BiTimer/>
          <h4>Quiz with Timer</h4>
        </div>
        <div className={Styles.feature1}>
          <TbDeviceAnalytics/>
          <h4>Result Analysis</h4>
        </div>
        <div className={Styles.feature1}>
          <BsBook/>
          <h4>Subject & Topic Wise Questions</h4>
        </div>
      </div>
    </div>
    <div className={Styles.testimonials}>
      <h3>Testimonials</h3>
      <h1>What Student Say about us</h1>
      <div className={Styles.tm1}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, rerum?</p>
        <div className="img"><img src="" alt="" /></div>
        <div className="name"></div>
        <div className="position"></div>
      </div>
      <div className={Styles.tm2}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, rerum?</p>
        <div className="img"><img src="" alt="" /></div>
        <div className="name"></div>
        <div className="position"></div>
      </div>
      <div className={Styles.tm3}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, rerum?</p>
        <div className="img"><img src="" alt="" /></div>
        <div className="name"></div>
        <div className="position"></div>
      </div>
      <div className={Styles.tm4}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, rerum?</p>
        <div className="img"><img src="" alt="" /></div>
        <div className="name"></div>
        <div className="position"></div>
      </div>
      <div className={Styles.tm5}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, rerum?</p>
        <div className="img"><img src="" alt="" /></div>
        <div className="name"></div>
        <div className="position"></div>
      </div>
      <div className={Styles.tm6}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, rerum?</p>
        <div className="img"><img src="" alt="" /></div>
        <div className="name"></div>
        <div className="position"></div>
      </div>
    </div>
    </div>
  )
}

export default Home
