/* 
File Name: AboutMe.js
Student's Name: Fang Dou
StudentID: 301381266
Date: 09-28-2024
*/

import React from 'react';
import '../CSS/AboutMe.css';
import aboutme from '../assets/about.jpg';

/* About Me Component */
const AboutMe = () => {
    return (
        /* About Me Container */
        <div className="container about-me">
            <h1>About Me</h1>
            <img src={aboutme} alt="Fang Dou (Philip)" />
            <p>
                I’m Fang Dou (Philip), a solution consultant with a passion for growth hacking and holistic wellness.<br />
                I specialize in both FinTech and mind-body wellness through my business, InnovateWell Consulting.
            </p>
            <p>Download my <a href="../assets/Philip_Fang_DOU_Resume_2024_generic_full.pdf" download>Resume</a>.</p>
        </div>
    );
};

export default AboutMe;
