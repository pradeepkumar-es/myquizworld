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
import profileimg from '../images/profile.png'


const Home = () => {
  const tm =["Rahul Kumar", "Pradeep Kumar", "Karan Jangid", "Aarsh Choudhary", "Amrit Kumar", "Bhavya Garg"];
  return (
    <div className={Styles.home}>
      <div className={Styles.getstarted}>
        <div className={Styles.left}>
          <h1>A Quiz Platform To</h1>
          <h1>Boost Your Knowledge</h1>
          <div>
          <Link to="/Quizzes"><button className={Styles.startbtn}>Get Started</button></Link>
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
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, rerum?"</p>
            <div className="img"><img src={profileimg} alt="" /></div>
            <div className="name">{tm[0]}</div>
            <div className="position">Student</div>
          </div>
          <div className={Styles.tm1}>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, rerum?"</p>
            <div className="img"><img src={profileimg} alt="" /></div>
            <div className="name">{tm[1]}</div>
            <div className="position">Student</div>
          </div>
          <div className={Styles.tm1}>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, rerum?"</p>
            <div className="img"><img src={profileimg} alt="" /></div>
            <div className="name">{tm[2]}</div>
            <div className="position">Student</div>
          </div>
          <div className={Styles.tm1}>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, rerum?"</p>
            <div className="img"><img src={profileimg} alt="" /></div>
            <div className="name">{tm[3]}</div>
            <div className="position">Student</div>
          </div>
          <div className={Styles.tm1}>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, rerum?"</p>
            <div className="img"><img src={profileimg} alt="" /></div>
            <div className="name">{tm[4]}</div>
            <div className="position">Student</div>
          </div>
          <div className={Styles.tm1}>
          <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, rerum?"</p>
              <div className="img"><img src={profileimg} alt="" /></div>
                <div className="name">{tm[5]}</div>
                <div className="position">Student</div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Home
