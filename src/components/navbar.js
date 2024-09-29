/* 
File Name: navbar.js
Student's Name: Fang Dou
StudentID: 301381266
Date: 09-28-2024
*/

import React from 'react';
import '../CSS/navbar.css';
import logo from '../assets/OIG4.jpg';
import { Link } from 'react-router-dom';

/* Navbar Component */
const Navbar = () => {
    return (
        /* Navbar Container */
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo' />
            <div className="desktopMenu">
                <Link to="/" className="desktopMenuListItem">Home Page</Link>
                <Link to="/about" className="desktopMenuListItem">About Me</Link>
                <Link to="/projects" className="desktopMenuListItem">Projects</Link>
                <Link to="/services" className="desktopMenuListItem">Services</Link>
                <Link to="/contact" className="desktopMenuListItem">Contact Me</Link>
            </div>
        </nav>
    );
};

export default Navbar;
