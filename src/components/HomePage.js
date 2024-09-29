/* 
File Name: HomePage.js
Student's Name: Fang Dou
StudentID: 301381266
Date: 09-28-2024
*/

import React from 'react';
import '../CSS/HomePage.css';
import bg from '../assets/img.png';
import { Link } from 'react-router-dom';

/* Home Page Component */
const HomePage = () => {
    return (
        /* Self-intro Section */
        <section id="intro">
            <div className="introContent">
                <spam className="hello">Hello,</spam>
                <span className="introText">I'm <span className="introName">Philip</span>, a solution consultant <br />with a passion for growth hacking <br />and health & wellness.</span>
                <p className="introPara">I specialize in both FinTech solution and mind-body wellness.</p><br />
                <Link to="/contact" className="btn">Contact Me</Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default HomePage;
