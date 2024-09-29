/* 
File Name: Projects.js
Student's Name: Fang Dou
StudentID: 301381266
Date: 09-28-2024
*/

import React from 'react';
import '../CSS/Projects.css';
import antbank from '../assets/antbank.png';
import alipayhk from '../assets/alipayhk.png';
import alibaba from '../assets/alibaba.png';

/* Project Component */
const Projects = () => {
    return (
        /* Projects Container */
        <div className="container projects">
            <h1>Projects</h1>
            <div className="project-card">
                <img src={antbank} alt="logo" className="project-logo" />
                <h2 className="project-title">Ant Bank Project – Launch the bank business 0-1</h2><br />
                <p><strong>Background:</strong>Ant Bank is one of 8 digital banks in Hong Kong. After got the license in mid-2019, Philip joined the team and played the project owner role, for the bank’s first product launch – Libra Savings, to start the retail banking business to this high competition & well-developed market.</p>
                <p><strong>Goal:</strong>Build a competitive advantage and fulfill the regulatory requirements for a phased business launch.</p>
                <p><strong>Strategy & Tactics:</strong> Collaborated with partners, conducted market research, and managed project timelines with cross-functional teams.</p>
                <p><strong>Results:</strong>Delivered a new bank launch in the market, and made the first bank mini-app with direct consumption payments and high-yield deposits, achieving the fastest account opening in the market.</p>
            </div>

            <div className="project-card">
                <img src={alipayhk} alt="logo" className="project-logo" />
                <h2 className="project-title">AlipayHK Project – Curate the ross-scenario CNY Digital Campaign with creativity</h2><br />
                <p><strong>Background:</strong>Tailer-made an e-Stamp campaign, include AR scan, Lucky Money & Offline Payment, to collaborate with the Alipay international PR strategy on promoting the annual CNY viral campaign of the “福 scans” </p>
                <p><strong>Goal:</strong>Keep payment active during CNY and increase user engagement with AR scan and offline payment activities.</p>
                <p><strong>Strategy & Tactics:</strong> Implemented AR scan, collaborated with marketing campaigns, and leveraged offline payment as a traffic source.</p>
                <p><strong>Results:</strong>Increased active user count by 60% and MAU by 30X, with 3% growth in offline payments.</p>
            </div>

            <div className="project-card">
                <img src={alibaba} alt="logo" className="project-logo" />
                <h2 className="project-title">Alibaba Brand Marketing Campaign: Alibaba.com GATEWAY ’17 #CREATEBEYOND</h2><br />
                <p><strong>Background:</strong>Gateway ’17 is a conference hosted by Alibaba to help U.S. businesses, farmers and entrepreneurs explore growth opportunities and reach millions of Chinese consumers.</p>
                <p><strong>Goal:</strong>Drive awareness and establish Alibaba.com as a global thought leader for SMEs.</p>
                <p><strong>Strategy & Tactics:</strong>Customized content, live-streamed the event, and engaged users through interactive social media strategies.</p>
                <p><strong>Results:</strong>Engaged 1.6M users, 0.3M live video views, and 10K new page likes.</p>
            </div>
        </div>
    );
};

export default Projects;
