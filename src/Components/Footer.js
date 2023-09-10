import React from 'react'
import Styles from './Styles/footer.module.css'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <footer>
        <div className={Styles.footer}>
            <div className={Styles.footer1}><h2>My Quiz World</h2></div>
            <div className={Styles.footer2}>
                <ul>
                    <li><b>Links</b></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/quizzes">Quizzes</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
            <div className={Styles.footer3}>
                <ul>
                    <li><b>Social Links</b></li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Linkedin</li>
                </ul>
            </div>
        </div>
        <div className={Styles.copyright}>
            Copyright &copy;| myquizworld.com | All Rights Resereverd  
        </div>
    </footer>
  )
}
