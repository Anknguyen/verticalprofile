import React, { useState } from 'react';
import '../css/Contact.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion, AnimatePresence, easeOut } from 'framer-motion';

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
            staggerChildren: 0.2,
            delayChildren: 0.35, // Delay the form and button animations
        },
    },
};

const bottomItemVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="parentContainer">
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
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                            />
                        </motion.div>
                        <motion.div className="inputGroup" variants={itemVariants}>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                            />
                        </motion.div>
                    </div>
                    <motion.div className="formContainer" variants={formContainerVariants}>
                        <motion.div variants={itemVariants}>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                required
                                rows="4"
                            />
                        </motion.div>
                        <motion.div className="buttonContainer" variants={itemVariants}>
                            <button type="submit">Submit</button>
                        </motion.div>
                    </motion.div>
                </motion.form>
                <motion.div className="bottomContactDiv">
                    <motion.p className="botNavContactIcon" initial="hidden" animate="visible" variants={bottomItemVariants}><FaEnvelope /> akimnguyen1999@gmail.com</motion.p>
                    <motion.p className="botNavContactIcon" initial="hidden" animate="visible" variants={bottomItemVariants}><FaPhone /> 919-230-0092</motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Contact;