import React, { useState, useRef, useEffect } from 'react';
import '../cssMobile/MobileNavbar.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const childVariants = {
    hidden: {
        opacity: 0, 
        y: '-10vh',
        transition: {
            ease: 'easeOut'
        }
    },
    visible: { 
        opacity: 1,
        y: 0,
        transition: {
            opacity: {
                duration: 0.31,
                ease: 'easeOut'
            },
            y: {
                duration: 0.31,
                ease: 'easeOut'
            }
        }
    },
    exit: {
        opacity: 0,
        y: '-10vh',
        transition: {
            opacity: {
                duration: 0.18
            },
            y: {
                duration: 0.18
            }
        }
    }
};

const topBarVariants = {
    initial: { y: 0 },
    animate: { 
        y: 11, 
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
        y: -11, 
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

function MobileNavbar({ setHomeKey }) {
    const [isTitleVisible, setIsTitleVisible] = useState(true);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isLinkDisabled, setIsLinkDisabled] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [clipPath, setClipPath] = useState(null);
    const [exitClipPath, setExitClipPath] = useState(null);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const navHomeContainerRef = useRef(null);
    const menuRef = useRef(null);
    const location = useLocation();

    useEffect(() => {

        
        if (menuVisible) {
            setIsNavbarVisible(true);
            return;
        }
    
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const top15Percent = document.documentElement.scrollHeight * 0.05;
            if (scrollTop <= top15Percent) {
                // is at the top 15% of the page
                setIsNavbarVisible(true);
            } else if (scrollTop > lastScrollTop) {
                // Scrolling down
                setIsNavbarVisible(false);
            } else {
                // Scrolling up
                setIsNavbarVisible(true);
            }
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop, menuVisible]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollThreshold = windowHeight * 0.05; // 5% of the window height
    
            if (scrollPosition > scrollThreshold) {
                setIsTitleVisible(false);
            } else {
                setIsTitleVisible(true);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const updateClipPath = () => {
        if (navHomeContainerRef.current) {
            const rect = navHomeContainerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const radius = Math.max(rect.width, rect.height) / 2;
            
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
                duration: 0.8,
                ease: 'easeInOut',
                staggerChildren: .15,
                delayChildren: 0.25
            }
        },
        exit: { 
            clipPath: exitClipPath,
            opacity: 0, 
            transition: { 
                clipPath: {
                    duration: .6,
                    delay: 0.1
                },
                opacity: {
                    duration: .5,
                    ease: 'easeInOut',
                    delay: 0.3 //this keeps the opacity from fading as fast
                },
                staggerChildren: 0.1
            }
        }
    };

    useEffect(() => {
        updateClipPath();
        window.addEventListener('resize', updateClipPath);
        return () => window.removeEventListener('resize', updateClipPath);
    }, []);

    const smoothScrollToTop = (duration) => {
        const start = window.scrollY;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    
        const documentHeight = Math.max(document.body.scrollHeight);
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const destinationOffset = 0;
        const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
    
        const scroll = (currentTime) => {
            const time = Math.min(1, ((currentTime - startTime) / duration));
            const timeFunction = 1 - Math.pow(1 - time, 3); // y= 1-(x-1)^3
            window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
    
            if (window.scrollY === destinationOffsetToScroll) {
                return;
            }
            requestAnimationFrame(scroll);
        };
    
        scroll(startTime);
    };

    const toggleMenu = () => {
        if (isButtonDisabled) return;

        updateClipPath();
        setMenuVisible(prevMenuVisible => {
            const newMenuVisible = !prevMenuVisible;
            return newMenuVisible;
        });
        setIsButtonDisabled(true);

        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 1000);
    };

    const handleLinkClick = (path) => {
        console.log('handleLinkClick');
        setMenuVisible(false);
        window.scrollTo(0, 0);
    };

    const isHomePage = location.pathname === '/';
    const isProjectsPage = location.pathname === '/projects';
    const isSkillsPage = location.pathname === '/skills';

    return (
        <div>
            <div className={`navContainerMobile ${isNavbarVisible ? 'visible' : 'hidden'} ${menuVisible ? '' : 'boxShadow'}`}>
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
                    <p className={`navTitle ${(menuVisible || (isTitleVisible && (isHomePage || isProjectsPage || isSkillsPage))) ? 'visible' : 'visible'}`}>An Nguyen</p>
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
                                // whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <Link to="/" class="no-style" onClick={() => handleLinkClick('/')} disabled={isLinkDisabled}>
                                    <div className='menuItem'>Home</div>
                                </Link>
                            </motion.div>
                            <motion.div
                                variants={childVariants}
                                className='menuCard menuProjects'
                                // whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <Link to="/projects" class="no-style" onClick={() => handleLinkClick('/projects')} disabled={isLinkDisabled}>
                                    <div className='menuItem'>Projects</div>
                                </Link>
                            </motion.div>
                            <motion.div
                                variants={childVariants}
                                className='menuCard menuContact'
                                // whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <Link to="/contact" class="no-style" onClick={() => handleLinkClick('/contact')} disabled={isLinkDisabled}>
                                    <div className='menuItem'>Contact</div>
                                </Link>
                            </motion.div>
                            <motion.div
                                variants={childVariants}
                                className='menuCard menuSkills'
                                // whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                
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

export default MobileNavbar;