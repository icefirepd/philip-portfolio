/* 
File Name: ContactMe.js
Student's Name: Fang Dou
StudentID: 301381266
Date: 09-28-2024
*/

import React, { useState } from 'react';
import '../CSS/ContactMe.css';

/* Contact Me Component */
const ContactMe = () => {
    /* Form State */
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    });

    /* Handle Input Change */
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    /* Handle Form Submission */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        alert('Thank you for your inquiry! Philip will get back to you very soon!');
    };

    /* Contact Me Container */
    return (
        <div className="container contact-me">

            {/* Contact Form */}
            <div className="contact-form">
                <h2>Send a Message to Philip</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
                <p><strong>Phone: </strong>+1-416-771-8281</p>
                <p><strong>Email: </strong>fdou@my.centennialcollege.ca</p>
                <p><strong>LinkedIn: </strong> <a href="https://www.linkedin.com/in/philip" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            </div>
        </div>
    );
};

export default ContactMe;
