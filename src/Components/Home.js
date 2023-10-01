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
    <div className={Styles.home}>
      <div className={Styles.getstarted}>
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

      <div className={Styles.featureCon}>
        <h3>Feature</h3>
        <h1>Our Quiz Feature</h1>
        <div className={Styles.feature}>
          <div className={Styles.feature1}>
            <MdQuiz size={120}/>
            <h2>All Type of Questions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus error ipsa nihil obcaecati eos cupiditate adipisci est inventore quidem.</p>
          </div>
          <div className={Styles.feature1}>
            <SiLevelsdotfyi size={120}/>
            <h2>Level Wise Questions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus error ipsa nihil obcaecati eos cupiditate adipisci est inventore quidem.</p>
          </div>
          <div className={Styles.feature1}>
            <FcIdea size={120}/>
            <h2>Hint For Question</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus error ipsa nihil obcaecati eos cupiditate adipisci est inventore quidem.</p>
          </div>
          <div className={Styles.feature1}>
            <BiTimer size={120}/>
            <h2>Quiz with Timer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus error ipsa nihil obcaecati eos cupiditate adipisci est inventore quidem.</p>
          </div>
          <div className={Styles.feature1}>
            <TbDeviceAnalytics size={120}/>
            <h2>Result Analysis</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus error ipsa nihil obcaecati eos cupiditate adipisci est inventore quidem.</p>
          </div>
          <div className={Styles.feature1}>
            <BsBook size={120}/>
            <h2>Subject & Topic Wise Questions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus error ipsa nihil obcaecati eos cupiditate adipisci est inventore quidem.</p>
          </div>
        </div>
    </div>

    <div className={Styles.testimonials}>
      <h3>Testimonials</h3>
      <h1>What Student Say about us</h1>
      <div className={Styles.tmContainers}>
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
    </div>
  )
}

export default Home
