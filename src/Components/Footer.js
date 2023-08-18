import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <footer>
        <div className="footer">
            <div className="footer1"><h2>My Quiz World</h2></div>
            <div className="footer2">
                <ul>
                    <li><b>Links</b></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Quizzes</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </div>
            <div className="footer3">
                <ul>
                    <li><b>Social Links</b></li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Linkedin</li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            Copyright &copy;| myquizworld.com | All Rights Resereverd  
        </div>
    </footer>
  )
}
