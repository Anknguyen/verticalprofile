import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../cssMobile/MobileAbout.css'; // Ensure this file includes the blob styles
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import projectImg1 from '../img/projectImg1.jpg';

function MobileAbout() {

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        exit: { opacity: 0, y:-50, transition: { duration: 0.6 } }
    };

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="parentContainer mobile">
            <div className="aboutContainer mobile">
                <div className="blob blob1"></div>
                <div className="blob blob2"></div>
                <div className="blob blob3"></div>
                <div className="blob blob4"></div>
                <div className="blob blob5"></div>
                <div className="blob blob6"></div>
                <div className='aboutTitle mobile'>
                    <Typewriter
                        words={["Hi! I'm An Nguyen"]}
                        loop={1}
                        cursor
                        cursorStyle=''
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </div>

                <div className='aboutDivider'></div>

                <div className='overlayContainerMobile'>
                    <motion.h4 initial="hidden" whileInView="visible" variants={variants} viewport={{ once: true }}>
                        Passionate software developer
                    </motion.h4>
                    <motion.p initial="hidden" whileInView="visible" variants={variants} viewport={{ once: true }}>
                        I am a passionate software developer with a strong foundation in both frontend and backend coding. I have just recently graduated, and I’m excited to see where this road leads me.
                    </motion.p>
                    
                    <motion.h4 initial="hidden" whileInView="visible" variants={variants} viewport={{ once: true }}>
                        Diverse skillset
                    </motion.h4>
                    <motion.p initial="hidden" whileInView="visible" variants={variants} viewport={{ once: true }}>
                        I have a diverse skill set that includes proficiency in Python, JavaScript, Java, and SQL. My journey into programming began when my parents introduced me to their work, where I discovered a fascination with how code can transform ideas into functional applications.
                    </motion.p>

                    <motion.h4 initial="hidden" whileInView="visible" variants={variants} viewport={{ once: true }}>
                        Improvement oriented
                    </motion.h4>
                    <motion.p initial="hidden" whileInView="visible" variants={variants} viewport={{ once: true }}>
                        Though I’m still early in my career, I’m always eager to learn and improve. I’m excited about opportunities where I can collaborate with experienced engineers, solve complex problems, and continue growing my technical skill set. My adaptability, attention to detail, and curiosity drive me to constantly seek new challenges and better solutions.
                    </motion.p>

                    <motion.h4 initial="hidden" whileInView="visible" variants={variants} viewport={{ once: true }}>
                        Looking for new connections
                    </motion.h4>
                    <motion.p initial="hidden" whileInView="visible" variants={variants} viewport={{ once: true }}>
                        I’m excited about the future and ready to contribute to a team where I can not only apply what I’ve learned but also pick up new skills along the way. Feel free to contact me if you'd like to chat more about technology, software development, or potential opportunities!
                    </motion.p>
                </div>
                {/* <div className='aboutProjectsButtonContainer'> */}
                    <Link to='/projects' onClick={handleLinkClick}>
                        <motion.button className='aboutProjectsButton' initial="hidden" whileInView="visible" variants={variants} viewport={{ once: true }}>
                            View Projects
                        </motion.button>
                    </Link>
                {/* </div> */}
            </div>
        </div>
    );
}

export default MobileAbout;