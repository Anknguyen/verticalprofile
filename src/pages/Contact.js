import React, { useState } from 'react';
import '../css/Contact.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const formContainerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
            staggerChildren: 0.15,
            delayChildren: 0.15, // Delay the form and button animations
        },
    },
};

const bottomItemVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
                setSuccessMessage('Message sent successfully');
                setErrorMessage('');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 10000);
            } else {
                console.error('Error submitting form data');
                setErrorMessage('Error submitting form data');
                setSuccessMessage('');
                setTimeout(() => {
                    setErrorMessage('');
                }, 10000);
            }
        } catch (error) {
            console.error('Error submitting form data', error);
            setErrorMessage('Error submitting form data');
            setSuccessMessage('');
            setTimeout(() => {
                setErrorMessage('');
            }, 10000);
        }
    };

    return (
        <div className="contactBackgroundContainer">
            <motion.div
                className="contactContainer"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.p className="contactTitle" variants={itemVariants}>Contact Me</motion.p>
                <motion.form onSubmit={handleSubmit} variants={itemVariants}>
                    <div className="inputRow">
                    <motion.div className="inputGroup" variants={itemVariants}>
                        <div className="inputContainer">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder=" "
                                required
                            />
                            <label htmlFor="name" className={`floatingLabel ${formData.name ? 'focused' : ''}`}>Name</label>
                        </div>
                    </motion.div>
                        <motion.div className="inputGroup" variants={itemVariants}>
                        <div className="inputContainer">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder=" "
                                required
                            />
                            <label htmlFor="email" className={`floatingLabel ${formData.email ? 'focused' : ''}`}>Email</label>
                        </div>
                        </motion.div>
                    </div>
                    <motion.div className="formContainer" variants={formContainerVariants}>
                        <motion.div variants={itemVariants}>
                        <div className="inputContainer">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder=" "
                                required
                                rows="4"
                            />
                            <label htmlFor="message" className={`floatingLabel ${formData.message ? 'focused' : ''}`}>Message</label>
                        </div>
                        </motion.div>
                        <motion.div className="buttonContainer" variants={itemVariants}>
                            <button type="submit">Submit</button>
                        </motion.div>
                    </motion.div>
                </motion.form>
                {successMessage && <p className="successMessage">{successMessage}</p>}
                {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                <motion.div className="bottomContactDiv">
                    <motion.p className="botNavContactIcon" initial="hidden" animate="visible" variants={bottomItemVariants}><FaEnvelope /> akimnguyen1999@gmail.com</motion.p>
                    <motion.p className="botNavContactIcon" initial="hidden" animate="visible" variants={bottomItemVariants}><FaPhone /> 919-230-0092</motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Contact;