import React from 'react'
import { Link } from 'react-router-dom'

export default function Navabar() {
  return (
    <header>
        <nav>
            <div className="left">My Quiz World</div>
            <div className="right">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Quizzes</Link></li>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    
                </ul>
            </div>
        </nav>
    </header>
)
}
