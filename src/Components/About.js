import React from 'react'
import headeraboutimg from '../images/about-header-image.png'
import './Styles/about.css'

export default function About() {
  return (
    <div className="aboutus">
      <div className="about">
        <div className="left"><img src={headeraboutimg} alt="header about " /></div>
        <div className="right">
          <h3>About Us</h3>
          <h1>We Provide Platform To <span style={{color:"yellow"}}>Practice</span>, <span style={{color:"yellow"}}>Learn</span> and <span style={{color:"yellow"}}>Enhance</span> Your Knowledge</h1>
           <div className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur officiis, qui eos eligendi provident praesentium nam asperiores libero sequi odit unde. Nisi quos deserunt tempore modi ipsum eius recusandae assumenda molestiae deleniti. Alias, totam cupiditate. Adipisci, id error cupiditate officia commodi est dolorem sequi beatae consectetur doloremque accusantium numquam?</div> 
           <button>Our Feature</button>
        </div>
      </div>
      <div className="feature">
        <div className="left">
          <h3>Feature</h3>
          <h1>Our Features & Services</h1>
        </div>
        <div className="right">
        <ul>
          <li>Short Quiz </li>
          <li>Long Quiz</li>
          <li>Class Wise Quiz</li>
          <li>Chapter Wise Quiz</li>
          <li>Subject Wise Quiz</li>
          <li>Diffculty wise Quiz</li>
          <li>Hint For Question</li>
          <li>Time Limit Quiz</li>
          <li>Result Analysis</li>
        </ul>
        </div>
      </div>
      <div className="team">
        <h3>Team</h3>
        <h1>Our Team</h1>
        <div className="member">
          <div className="mem1">1</div>
          <div className="mem1">2</div>
          <div className="mem1">3</div>
          <div className="mem1">4</div>
        </div>
      </div>
      <div className="Benefits">
        <p>Lorem ipsum dolor sit amet.</p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="aim">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, eius? xyz</p>
      </div>
      
      <div className="Reach Us">
        <div className="contact"></div>
        <div className="Social"></div>
        <div className="E-mail"></div>
        <div className="Address"></div>
      </div>
    </div>
  )
}
