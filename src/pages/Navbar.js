import React, { useRef, useEffect, useState } from 'react';
import '../css/Navbar.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, easeOut } from 'framer-motion';

const menuVariants = {
    hidden: { 
        // y: '-100vh',
        opacity: 0, 
        transition: {
            duration: 0.5, 
            ease: [0.42, 0, 1, 1] // Custom cubic-bezier for ease-in
        } 
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0,
            ease: [0, 0, 0.58, 1], // Custom cubic-bezier for ease-out
            staggerChildren: 0.15 // Stagger the children animations by 0.1 seconds
        }
    },
    exit: { 
        // y: '-100vh',
        opacity: 0, 
        transition: { 
            ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for fast start and slow end
            duration: .6,
            delay: 0.15, // Delay the start of the staggered exit animations
            staggerChildren: 0.15 // Stagger the children animations by 0.2 seconds on exit
        }
    }
};

const childVariants = {
    hidden: {
        opacity: 0, 
        y: '-100vh'
    },
    visible: { 
        opacity: 1, 
        y: 0,
        ease: easeOut,
        transition: { 
            duration: 0.6
        }
    },
    exit: {
        opacity: 0,
        y: '-100vh',
        transition: {
            opacity: {
                duration: 0.2
            },
            y: {
                duration: 0.6
            }
        }
    }
};

function Navbar({ setHomeKey }) {
    const navContainer = document.querySelector('.navContainer');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isLinkDisabled, setIsLinkDisabled] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [colorHome, setColorHome] = useState(false);
    const [colorAbout, setColorAbout] = useState(false);
    const [colorContact, setColorContact] = useState(false);
    const [colorSkills, setColorSkills] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation(); // Use the useLocation hook

    useEffect(() => {
        const navContainer = document.querySelector('.navContainer');
        if (menuVisible) {
            navContainer.style.backgroundColor = "transparent";
        }
    }, [menuVisible]);

    const toggleMenu = () => {
        setIsButtonDisabled(true);
        setMenuVisible(!menuVisible);
        setTimeout(() => {
            setIsButtonDisabled(false); // Re-enable the button after 500ms
        }, 800);
    };

    const handleLinkClick = (path) => {
        setIsLinkDisabled(true);
        if (location.pathname === path) {
            if (path === '/') {
                setHomeKey(prevKey => prevKey + 1); // Update the key to force re-render
            } else {
                window.scrollTo(0, 0);
            }
        }
        setMenuVisible(false);
        setTimeout(() => {
            setIsLinkDisabled(false); // Re-enable the links after 500ms
        }, 1200);
    };

    const isHomePage = location.pathname === '/';
    const isProjectsPage = location.pathname === '/projects';

    return (
        <div>
            <div className= 'navContainer'>
                <div className='navHome'>
                <button className='navHomeButton' onClick={toggleMenu} disabled={isButtonDisabled}>
                        {menuVisible ? 'Exit' : 'Menu'}
                    </button>
                </div>
                <div className='middleDiv'>
                <p className={`navTitle ${menuVisible || isHomePage || isProjectsPage ? 'visible' : ''}`}>An Nguyen</p>
                </div>
                <div className="rightDiv">
                    <a className="rightNavHomeIcon" href="mailto:your-email@example.com"><FaEnvelope /></a>
                    <a className="rightNavHomeIcon" href="https://github.com/your-username" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a className="rightNavHomeIcon" href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>

            <AnimatePresence>
                {menuVisible && (
                    <motion.div
                    className={`menuContainer ${colorHome ? 'colorHome' : ''} ${colorAbout ? 'colorAbout' : ''} ${colorContact ? 'colorContact' : ''} ${colorSkills ? 'colorSkills' : ''}`}
                        ref={menuRef}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                    >
                        <div className="innerMenu">
                            <motion.div
                                variants={childVariants}
                                className='menuCard menuHome'
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.95 }}
                                onMouseEnter={() => setColorHome(true)}
                                onMouseLeave={() => setColorHome(false)}
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <Link to="/" class="no-style" onClick={() => handleLinkClick('/')} disabled={isLinkDisabled}>
                                    <div className='menuItem'>Home</div>
                                </Link>
                            </motion.div>
                            <motion.div
                                variants={childVariants}
                                className='menuCard menuProjects'
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.95 }}
                                onMouseEnter={() => setColorAbout(true)}
                                onMouseLeave={() => setColorAbout(false)}
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <Link to="/projects" class="no-style" onClick={() => handleLinkClick('/projects')} disabled={isLinkDisabled}>
                                    <div className='menuItem'>Projects</div>
                                </Link>
                            </motion.div>
                            <motion.div
                                variants={childVariants}
                                className='menuCard menuContact'
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.95 }}
                                onMouseEnter={() => setColorContact(true)}
                                onMouseLeave={() => setColorContact(false)}
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <Link to="/contact" class="no-style" onClick={() => handleLinkClick('/contact')} disabled={isLinkDisabled}>
                                    <div className='menuItem'>Contact</div>
                                </Link>
                            </motion.div>
                            <motion.div
                                variants={childVariants}
                                className='menuCard menuSkills'
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.95 }}
                                onMouseEnter={() => setColorSkills(true)}
                                onMouseLeave={() => setColorSkills(false)}
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <Link to="/skills" class="no-style" onClick={() => handleLinkClick('/skills')} disabled={isLinkDisabled}>
                                    <div className='menuItem'>Skills</div>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Navbar;