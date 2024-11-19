import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../cssMobile/MobileContact.css';

const MobileContact = () => {
    return (
    <div>
        <div className="contactContainer mobile">
            <h1 className="contactTitle">Contact Me</h1>
            <p className="contactSubtitle">I'd love to hear from you! Feel free to reach out using any of the methods below.</p>
            <form className="contactForm">
                <input type="text" name="name" placeholder="Your Name" className="contactInput" required />
                <input type="email" name="email" placeholder="Your Email" className="contactInput" required />
                <textarea name="message" placeholder="Your Message" className="contactTextarea" required></textarea>
                <button type="submit" className="contactButton">Send Message</button>
            </form>
        </div>
        <div className="contactInfo">
            <div className="contactItem">
                <FaEnvelope className="contactIcon" />
                <a href="mailto:akimnguyen1999@gmail.com" className="contactLink">akimnguyen1999@gmail.com</a>
            </div>
            <div className="contactItem">
                <FaPhone className="contactIcon" />
                <a href="tel:+19192300092" className="contactLink">+1 919-230-0092</a>
            </div>
            <div className="contactItem">
                <FaLinkedin className="contactIcon" />
                <a href="https://www.linkedin.com/in/your-profile" className="contactLink" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="contactItem">
                <FaGithub className="contactIcon" />
                <a href="https://github.com/your-profile" className="contactLink" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    </div>
    );
};

export default MobileContact;