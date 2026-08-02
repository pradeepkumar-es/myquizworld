import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from 'react';

// The top navigation bar for the app.
// It contains the main page links and a mobile menu toggle for smaller screens.
export default function Navabar() {
    // `toggle` controls whether the mobile nav menu is expanded or collapsed.
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <header>
            <nav className={toggle ? 'nav expanded' : 'nav'}>
                <div className='left'>
                    <Link to="/">My Quiz World</Link>
                </div>

                <div className='right'>
                    <ul className='right'>
                        <li className='item'><Link to="/">Home</Link></li>
                        <li className='item'><Link to="/categories">Categories</Link></li>

                        {/* These links are disabled for now but kept as future routes. */}
                        {/* <li className='item'><Link to="/blog">Blog</Link></li> */}
                        {/* <li className='item'><Link to="/about">About</Link></li> */}
                        {/* <li className='item'><Link to="/contact">Contact</Link></li> */}
                        {/* <li className='item'><Link to="/signup">SignUp</Link></li> */}
                        {/* <li className='item'><Link to="/signin">Sign In</Link></li> */}
                    </ul>
                </div>

                <div className='smallScreen_navbar_btn' onClick={handleToggle}>
                    {toggle ? <CgClose name='close-btn' /> : <CgMenu name='menu-btn' />}
                </div>
            </nav>
        </header>
    )
}
