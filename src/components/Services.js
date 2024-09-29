/* 
File Name: Services.js
Student's Name: Fang Dou
StudentID: 301381266
Date: 09-28-2024
*/

import React from 'react';
import '../CSS/Services.css';
import software from '../assets/software.png';
import aromatherapy from '../assets/aroma.png';
import marketing from '../assets/marketing.png';
import financial from '../assets/financial.png';

/* Services Component */
const Services = () => {
    return (
        /* Services Container */
        <div className="container services">
            <div className="service-card">
                <h2>Software Development & E-commerce Consulting</h2>
                <img src={software} alt="Software Development" />
            </div>

            <div className="service-card">
                <h2>Aromatherapy & Essential Oil Treatment</h2>
                <img src={aromatherapy} alt="Aromatherapy" />
            </div>

            <div className="service-card">
                <h2>Marketing Strategy & Business Development</h2>
                <img src={marketing} alt="Marketing Strategy" />
            </div>

            <div className="service-card">
                <h2>Financial Planning & Investment Advice</h2>
                <img src={financial} alt="Financial Planning" />
            </div>
        </div>
    );
};

export default Services;