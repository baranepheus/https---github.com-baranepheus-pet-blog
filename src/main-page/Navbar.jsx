import React from 'react'
import logo from '../img/logo.png'

export default function Navbar() {
    return(
        <div className='nav-container'>
            <a href="#" className='logo-box'><img src={logo} className='logo'/></a>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>News</a></li>
                <li><a href='#'>Notes</a></li>
                <li><a href='#'>About Us</a></li>
            </ul>
        </div>
)
}