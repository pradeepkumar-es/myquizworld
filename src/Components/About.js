import React from 'react'
import headeraboutimg from '../images/about-header-image.png'
import profileimg from '../images/profile.png'
import business2 from '../images/business2.png'
import './Styles/about.css'
import{BsLinkedin, BsTwitter} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="aboutus">
      <div className="about">
        <div className="left"><img src={headeraboutimg} alt="header about " /></div>
        <div className="right">
          <h3>About Us</h3>
          <h1>We Provide Platform To <span style={{color:"yellow"}}>Practice</span>, <span style={{color:"yellow"}}>Learn</span> and <span style={{color:"yellow"}}>Enhance</span> Your Knowledge</h1>
           <div className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur officiis, qui eos eligendi provident praesentium nam asperiores libero sequi odit unde. Nisi quos deserunt tempore modi ipsum eius recusandae assumenda molestiae deleniti. Alias, totam cupiditate. Adipisci, id error cupiditate officia commodi est dolorem sequi beatae consectetur doloremque accusantium numquam?</div> 
           <a href="#1"><button>Our Feature</button></a>
        </div>
      </div>
      <div id="1" className="feature">
        <div className="left">
          <h3 >Feature</h3>
          <h1 >Our Features & Services</h1>
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
          <div className="mem"><img src={profileimg} alt="team member profile" />
            <p>lorem, Ipsum</p>
            <h4>Founder</h4>
            <a href="https://www.linkedin.com/in/pradeepkumar-es/" rel="noreferrer" target='_blank'><div className='linkedin'><BsLinkedin /></div></a>
            <a href="mailto:kpradeep22@iitk.ac.in" rel="noreferrer" target='_blank'><div className='email'><MdEmail/></div></a>
            <a href="https://twitter.com/" rel="noreferrer noopener" target='_blank'><div className='twitter'><BsTwitter/></div></a>
          </div>
          <div className="mem"><img src={profileimg} alt="team member profile" />
             <p>lorem, Ipsum</p>
             <h4>Web Executive</h4>
             <a href="https://www.linkedin.com/in/pradeepkumar-es/" rel="noreferrer" target='_blank'><div className='linkedin'><BsLinkedin /></div></a>
            <a href="mailto:kpradeep22@iitk.ac.in" rel="noreferrer" target='_blank'><div className='email'><MdEmail/></div></a>
            <a href="https://twitter.com/" rel="noreferrer noopener" target='_blank'><div className='twitter'><BsTwitter/></div></a>
          </div>
          <div className="mem"><img src={profileimg} alt="team member profile" />
              <p>lorem, Ipsum</p>
              <h4>Marketing Head</h4>
              <a href="https://www.linkedin.com/in/pradeepkumar-es/" rel="noreferrer" target='_blank'><div className='linkedin'><BsLinkedin /></div></a>
            <a href="mailto:kpradeep22@iitk.ac.in" rel="noreferrer" target='_blank'><div className='email'><MdEmail/></div></a>
            <a href="https://twitter.com/" rel="noreferrer noopener" target='_blank'><div className='twitter'><BsTwitter/></div></a>
          </div>
          <div className="mem"><img src={profileimg} alt="team member profile" />
              <p>lorem, Ipsum</p>
              <h4>Content Head</h4>
              <a href="https://www.linkedin.com/in/pradeepkumar-es/" rel="noreferrer" target='_blank'><div className='linkedin'><BsLinkedin /></div></a>
            <a href="mailto:kpradeep22@iitk.ac.in" rel="noreferrer" target='_blank'><div className='email'><MdEmail/></div></a>
            <a href="https://twitter.com/" rel="noreferrer noopener" target='_blank'><div className='twitter'><BsTwitter/></div></a>
          </div>
          <div className="mem"><img src={profileimg} alt="team member profile" />
            <p>lorem, Ipsum</p>
            <h4>Research & Development Head</h4>
            <a href="https://www.linkedin.com/in/pradeepkumar-es/" rel="noreferrer" target='_blank'><div className='linkedin'><BsLinkedin /></div></a>
            <a href="mailto:kpradeep22@iitk.ac.in" rel="noreferrer" target='_blank'><div className='email'><MdEmail/></div></a>
            <a href="https://twitter.com/" rel="noreferrer noopener" target='_blank'><div className='twitter'><BsTwitter/></div></a>
          </div>
        </div>
      </div> 
      <div className="contact" style={{
        height:'300px',
        width:'1380px',
        backgroundImage:`url(${business2})`}}>
          <div className="content">
              <h3>Contact</h3>
              <h1>Looking For Business Opportunity </h1>
                <h1> or have any Question</h1>
              <Link to="/contact" target='_blank'><button>Contact Us</button></Link>
          </div>
      </div>
    </div>
  )
}
