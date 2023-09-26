import React from 'react'
import './Styles/contact.css'

export default function Contact() {
  return (
    <div>
      <div className="contactus">
        <div className="left">
          <h1>Let's Get In Touch</h1>
          <p>We are open to have any suggestion or just to have a chat </p>
          <strong>Address:</strong>
          <p>Hall 5, IIT Kanpur</p>
          <p>Uttar Pradesh, India</p>
        </div>
        <div className="right">
          <form className='form' action="">
            <input type="text" name="name" id="name" placeholder='Your Name ' required/>
            <input type="text" name="email" id="email" placeholder='Your E-mail' required/>
            <input type="text" name="subject" id="subject" placeholder='Message Subject' />
            <textarea name="message" id='message' col="20" rows="10" placeholder='Write Here Your Message ' required></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
