import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/header.css'
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from 'react';

export default function Navabar() {
    const [toggle, setToggle]=useState(false)
   const handleToggle=()=>{
        setToggle(!toggle);
    }
  return (
    <header>
        <nav className={toggle?'nav expanded':'nav'/*{`${Styles.nav} ${Styles.expanded}`}:{Styles.nav}*/}>
            <div className='left'>My Quiz World</div>
            <div className='right'>
                <ul className='right'>
                    <li className='item'><Link to="/">Home</Link></li>
                    <li className='item'><Link to="/quizzes">Quizzes</Link></li>
                    <li className='item'><Link to="/blog">Blog</Link></li>
                    <li className='item'><Link to="/about">About</Link></li>
                    <li className='item'><Link to="/contact">Contact</Link></li>
                    <li className='item'><Link to="/signup">SignUp</Link></li>
                    <li className='item'><Link to="/signin">Sign In</Link></li>
                </ul>
            </div>
            <div className='smallScreen_navbar_btn' onClick={handleToggle}> {/*in css module we can not use -( hyphen)*/}
                   {toggle?<CgClose name='close-btn' />: <CgMenu name='menu-btn' />}
                    {/*  */}
            </div>
        </nav>
    </header>
)
}
