import React from 'react';
import logo from '../img/logo.png';
import {Link} from "react-router-dom";



export default function Navbar() {
    return(
        <div className='nav-container'>
            <a href="#" className='logo-box'><img src={logo} className='logo'/></a>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/notes'>Notes</Link>
                </li>
            </ul>
            {/* <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Notes</a></li>
                <li><a href='#'>About Us</a></li>
            </ul> */}
        </div>
)
}