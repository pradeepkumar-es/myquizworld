import React from "react";
import Styles from "./Home.module.css";
import img1 from "../../../assets/bg1.png";
import { Link } from "react-router-dom";
import { MdQuiz } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { FcIdea } from "react-icons/fc";
import { BiTimer } from "react-icons/bi";
import { TbDeviceAnalytics } from "react-icons/tb";
import { BsBook } from "react-icons/bs";
import profileimg from "../../../assets/profile.png";

const Home = () => {
  const tm = [
    "Rahul Kumar",
    "Pradeep Kumar",
    "Karan Jangid",
    "Aarsh Choudhary",
    "Amrit Kumar",
    "Bhavya Garg",
  ];

  const testimonialMessages = [
    "The timed quiz format keeps me focused and helps me practice faster recall before exams.",
    "I like how the category-based questions make learning feel structured and relevant.",
    "The result analysis is very helpful because it shows exactly where I need to improve.",
    "The interface is simple and smooth, and the quiz flow feels easy to follow.",
    "This platform is perfect for quick revision sessions and self-assessment.",
    "I can test my knowledge in different subjects without getting overwhelmed.",
  ];

  return (
    <div className={Styles.home}>
      <div className={Styles.getstarted}>
        <div className={Styles.left}>
          <h1>Challenge your mind</h1>
          <h1>and sharpen your knowledge</h1>
          <div>
            <Link to="/categories">
              <button className={Styles.startbtn}>Get Started</button>
            </Link>
          </div>
        </div>

        <div className={Styles.right}>
          <img src={img1} alt="Quiz platform illustration" />
        </div>
      </div>

      <div className={Styles.featureCon}>
        <h3>Features</h3>
        <h1>Everything you need for smart practice</h1>
        <div className={Styles.feature}>
          <div className={Styles.feature1}>
            <MdQuiz size={120} />
            <h2>Wide range of questions</h2>
            <p>
              Explore multiple-choice questions across different categories and
              topics to keep your learning varied and engaging.
            </p>
          </div>
          <div className={Styles.feature1}>
            <SiLevelsdotfyi size={120} />
            <h2>Difficulty-based rounds</h2>
            <p>
              Choose your challenge level and test yourself with easy, medium, or
              hard quiz sets based on your preparation level.
            </p>
          </div>
          <div className={Styles.feature1}>
            <FcIdea size={120} />
            <h2>Quick concept practice</h2>
            <p>
              Build confidence through repeated practice sessions that make
              revision faster and more effective for learners.
            </p>
          </div>
          <div className={Styles.feature1}>
            <BiTimer size={120} />
            <h2>Timed quiz sessions</h2>
            <p>
              Stay focused with time-based question rounds that simulate real
              exam pressure and improve speed and accuracy.
            </p>
          </div>
          <div className={Styles.feature1}>
            <TbDeviceAnalytics size={120} />
            <h2>Detailed result analysis</h2>
            <p>
              Review your performance, check answers, and analyze where you need
              more improvement after every quiz attempt.
            </p>
          </div>
          <div className={Styles.feature1}>
            <BsBook size={120} />
            <h2>Subject-wise learning</h2>
            <p>
              Practice by category and topic so you can focus on the areas that
              matter most for your academic or personal growth.
            </p>
          </div>
        </div>
      </div>

      <div className={Styles.testimonials}>
        <h3>Testimonials</h3>
        <h1>What students say about us</h1>
        <div className={Styles.tmContainers}>
          {tm.map((user, i) => (
            <div key={i} className={Styles.tm1}>
              <p>"{testimonialMessages[i]}"</p>
              <div className="img">
                <img src={profileimg} alt={user} />
              </div>
              <div className="name">{user}</div>
              <div className="position">Student</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
