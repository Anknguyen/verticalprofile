import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, useLocation } from 'react-router-dom';
import '../css/About.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import projectImg1 from '../img/projectImg1.jpg';

function About() {

    const overflowRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
          if (overflowRef.current) {
            const scrollTop = overflowRef.current.scrollTop;
            const scrollHeight = overflowRef.current.scrollHeight - overflowRef.current.clientHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 57;
            document.querySelector('.scroll-bar').style.height = `${scrollPercentage}%`;
          }
        };
    
        const overlayElement = overflowRef.current;
        if (overlayElement) {
          overlayElement.addEventListener('scroll', handleScroll);
        }
    
        return () => {
          if (overlayElement) {
            overlayElement.removeEventListener('scroll', handleScroll);
          }
        };
      }, [overflowRef]);

    const { ref, inView } = useInView({
        triggerOnce: false, // Trigger the animation only once
        threshold: 0.1, // Trigger when 10% of the element is in view
    });

    const textVariants = {
        hidden: { opacity: 0, y: -120 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const aboutContainerVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: {
            opacity: 1,
            y: 0, // Single value for y position
            rotate: 0, // Single value for rotate
            transition: {
                duration: 2, // Duration for the transition
                ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier for smoother easing
                y: { duration: 1 }, // Ensure y position animation
                rotate: { duration: 1 }, // Ensure rotate animation
                opacity: { duration: 1 }, // Ensure opacity animation
            },
        },
    };

    return (
        <div className="parentContainer">
                <motion.div
                    className="totalContainer"
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={aboutContainerVariants}
                >

                <div className='aboutLeftContainer'>
                    <div className="blob blob4"></div>
                    <div className="blob blob5"></div>
                    <div className="blob blob6"></div>
                    <img className='myPicture' src={projectImg1} alt="Project Image" />
                </div>
                <div className="aboutContainer">
                    <div className="blob blob1"></div>
                    <div className="blob blob2"></div>
                    <div className="blob blob3"></div>
                    <div className="headerContainer">
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
                    
                        <div className="scroll-bar"></div>
                        <div className="scroll-bar-container"></div>
                    
                    <div className="overflowContainer" ref={overflowRef}>
                        <motion.div
                            className="textContainer"
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={textVariants}
                        >
                            {/* <h4><Typewriter
                                    words={["Passionate software developer"]}
                                    loop={1}
                                    cursor
                                    cursorStyle=''
                                    typeSpeed={30}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                            /></h4> */}
                            <h4>Passionate software developer</h4>
                            <p>I am a passionate software developer with a strong foundation in both frontend and backend coding. I have just recently graduated, and I’m excited to see where this road leads me.</p>
                            {/* <h4><Typewriter
                                    words={["Diverse skillset"]}
                                    loop={1}
                                    cursor
                                    cursorStyle=''
                                    typeSpeed={40}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                            /></h4> */}
                            <h4>Diverse skillset</h4>
                            <p>I have a diverse skill set that includes proficiency in Python, JavaScript, Java, and SQL. My journey into programming began when my parents introduced me to their work, where I discovered a fascination with how code can transform ideas into functional applications. </p>
                            {/* <h4><Typewriter
                                    words={["Improvement oriented"]}
                                    loop={1}
                                    cursor
                                    cursorStyle=''
                                    typeSpeed={40}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                            /></h4> */}
                            <h4>Improvement oriented</h4>
                            <p>Though I’m still early in my career, I’m always eager to learn and improve. I’m excited about opportunities where I can collaborate with experienced engineers, solve complex problems, and continue growing my technical skill set. My adaptability, attention to detail, and curiosity drive me to constantly seek new challenges and better solutions.</p>
                            {/* <h4><Typewriter
                                    words={["Looking for new connections"]}
                                    loop={1}
                                    cursor
                                    cursorStyle=''
                                    typeSpeed={40}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                            /></h4> */}
                            <h4>Looking for new connections</h4>
                            <p>
                            I’m excited about the future and ready to contribute to a team where I can not only apply what I’ve learned but also pick up new skills along the way. Feel free to contact me if you'd like to chat more about technology, software development, or potential opportunities!
                            </p>
                        </motion.div>
                    </div>
                    <div className="bottomDiv">
                        <Link to="/projects" class="projectsBtnContainer">
                            <button className='projectsBtn'>View projects
                            <div className='line1'></div>
                            <div className='line2'></div>
                            </button>
                        </Link>              
                    </div>
                </div>
            </motion.div>
            
        </div>
    );
}

export default About;