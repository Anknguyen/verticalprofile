import React, { useRef, useEffect, useState } from 'react';
import '../css/Navbar.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, easeOut } from 'framer-motion';


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
                duration: 0.3
            }
        }
    }
};

const topBarVariants = {
    initial: { y: 0 },
    animate: { 
        y: 15, 
        rotate: 45, 
        transition: { 
            y: { duration: 0.3 },
            rotate: { duration: 0.3, delay: 0.3 }
        } 
    },
    reverse: {
        rotate: 0,
        y: 0,
        transition: {
            rotate: { duration: 0.3 },
            y: { duration: 0.3, delay: 0.3 }
        }
    },
};

const middleBarVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 0, transition: { duration: 0.6 } },
    reverse: { opacity: 1, transition: { duration: 0.6 } }
};

const bottomBarVariants = {
    initial: { y: 0 },
    animate: { 
        y: -15, 
        rotate: -45,
        transition: { 
            y: { duration: 0.3 },
            rotate: { duration: 0.3, delay: 0.3 },
            
        } 
    },
    reverse: {
        rotate: 0,
        y: 0,
        transition: {
            rotate: { duration: 0.3 },
            y: { duration: 0.3, delay: 0.3 }
        }
    }
};

function Navbar({ setHomeKey }) {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isLinkDisabled, setIsLinkDisabled] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [clipPath, setClipPath] = useState(null);
    const [exitClipPath, setExitClipPath] = useState(null);
    const navHomeContainerRef = useRef(null);
    const menuRef = useRef(null);
    const location = useLocation();

    const updateClipPath = () => {
        if (navHomeContainerRef.current) {
            const rect = navHomeContainerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const radius = Math.max(rect.width, rect.height) / 2;
            console.log(`circle(${radius}px at ${centerX}px ${centerY}px)`);
            setClipPath(`circle(${radius}px at ${centerX}px ${centerY}px)`);
            setExitClipPath(`circle(${radius}px at ${centerX}px ${centerY}px)`);
        }
    };

    useEffect(() => {
        updateClipPath();
        window.addEventListener('resize', updateClipPath);
        return () => window.removeEventListener('resize', updateClipPath);
    }, []);

    const menuVariants = {
        hidden: {
            clipPath: clipPath,
            opacity: 1,
            transition: {
                duration: 0,
                ease: 'easeInOut'
            }
        },
        visible: {
            clipPath: 'circle(150% at 50% 50%)',
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: 'easeInOut'
            }
        },
        exit: { 
            clipPath: exitClipPath,
            opacity: 0, 
            transition: { 
                clipPath: {
                    duration: 1,
                },
                opacity: {
                    duration: .7,
                    ease: 'easeInOut',
                    delay: 0.2 //this keeps the opacity from fading as fast
                },
                staggerChildren: 0.1
            }
        }
    };

    useEffect(() => {
        const navContainer = document.querySelector('.navContainer');
        if (menuVisible) {
            navContainer.style.backgroundColor = "transparent";
        } else {
            if (location.pathname === '/' || location.pathname === '/contact') {
                navContainer.style.backgroundColor = "transparent";
                navContainer.classList.remove('blurred-nav');
            } else if (location.pathname === '/projects') {
                
            } else {
                navContainer.style.backgroundColor = 'transparent';
                navContainer.classList.remove('blurred-nav');
            }
        }
    }, [menuVisible, location.pathname]);

    const toggleMenu = () => {
        if (isButtonDisabled) return;

        updateClipPath(); // Update the clipPath before toggling the menu
        setMenuVisible(prevMenuVisible => {
            const newMenuVisible = !prevMenuVisible;
            return newMenuVisible;
        });
        setIsButtonDisabled(true);

        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 1200); // Adjust the timeout duration to match the animation duration
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
                    <div className='navHomeContainer' ref={navHomeContainerRef}>
                        <button
                            className={`navHomeButton ${menuVisible ? 'menuVisible' : 'menuInvisible'}`}
                            onClick={toggleMenu}
                            disabled={isButtonDisabled}
                        >
                            <motion.div
                            className="bar topBar"
                            variants={topBarVariants}
                            initial="initial"
                            animate={menuVisible ? 'animate' : 'reverse'}
                            
                            />
                            <motion.div
                            className="bar"
                            variants={middleBarVariants}
                            initial="initial"
                            animate={menuVisible ? 'animate' : 'reverse'}
                            
                            />
                            <motion.div
                            className="bar botBar"
                            variants={bottomBarVariants}
                            initial="initial"
                            animate={menuVisible ? 'animate' : 'reverse'}
                            />
                        </button>
                    </div>
                </div>
                <div className='middleDiv'>
                <p className={`navTitle ${menuVisible || isHomePage || isProjectsPage ? 'visible' : ''}`}>An Nguyen</p>
                </div>
                <div className="rightDiv">
                    <a className="rightNavHomeIcon" href="mailto:akimnguyen1999@gmail.com"><FaEnvelope /></a>
                    <a className="rightNavHomeIcon" href="https://github.com/Anknguyen" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a className="rightNavHomeIcon" href="https://linkedin.com/in/aknguyen1999" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>

            <AnimatePresence>
                {menuVisible && (
                    <motion.div
                    className='menuContainer'
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