import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../cssMobile/MobileContact.css';

const MobileContact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3001/api/contact', { // Use the backend server's URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          console.log('Form data submitted successfully');
          setFormData({ name: '', email: '', message: '' });
        } else {
          console.error('Error submitting form data');
        }
      } catch (error) {
        console.error('Error submitting form data', error);
      }
    };
  

    return (
        <div className='contactPageMobile'>
        <div className="contactContainer mobile">
          <h1 className="contactTitle">Contact Me</h1>
          <p className="contactSubtitle">I'd love to hear from you! Feel free to reach out.</p>
          <form className="contactForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contactInput"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contactInput"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="contactTextarea"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="contactButton">Send Message</button>
          </form>
        </div>
        {/* <div className="contactInfo">
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
        </div> */}
    </div>
    );
};

export default MobileContact;