import React from 'react';
import '../cssMobile/MobileSkills.css';

const MobileSkills = () => {
    return (
        
        
            <div className='skillsContainerMobile'>
                <div className='frontendContainerMobile'>
                    <div className='frontendTitle'>Frontend</div>
                    <div className='frontend mobile'>
                        <i className="devicon-css3-plain icon"> 
                            <div className='iconLine'></div> 
                            <p className='iconName'>CSS</p> 
                        </i>
                        <i className="devicon-html5-plain icon"> 
                            <div className='iconLine'></div> 
                            <p className='iconName'>HTML</p> 
                        </i>
                        <i className="devicon-react-plain icon"> 
                            <div className='iconLine'></div> 
                            <p className='iconName'>React</p> 
                        </i>
                        <i className="devicon-bootstrap-plain icon"> 
                            <div className='iconLine'></div> 
                            <p className='iconName'>Bootstrap</p> 
                        </i>
                        <i className="devicon-tailwindcss-plain icon"> 
                            <div className='iconLine'></div> 
                            <p className='iconName'>Tailwind</p> 
                        </i>
                    </div>
                </div>
                <div className='backendContainerMobile'>
                    <div className='backendTitle'>Backend</div>
                    <div className='backend mobile'>
                        <i className="devicon-javascript-plain icon"> 
                            <div className='iconLine'></div> 
                            <p className='iconName'>JavaScript</p> 
                        </i>
                        <i className="devicon-nodejs-plain icon"> 
                            <div className='iconLine'></div> 
                            <p className='iconName'>Node.js</p> 
                        </i>
                        <i className="devicon-python-plain icon"> 
                            <div className='iconLine'></div> 
                            <p className='iconName'>Python</p> 
                        </i>
                        <i className="devicon-java-plain icon"> 
                            <div className='iconLine'></div> 
                            <p className='iconName'>Java</p> 
                        </i>
                        <i className="devicon-mysql-plain icon"> 
                            <div className='iconLine'></div> 
                            <p className='iconName'>MySQL</p> 
                        </i>
                        <i className="devicon-php-plain icon"> 
                            <div className='iconLine'></div> 
                            <p className='iconName'>PHP</p> 
                        </i>
                        <i className="devicon-docker-plain icon"> 
                            <div className='iconLine'></div> 
                            <p className='iconName'>Docker</p> 
                        </i>
                        <i className="devicon-numpy-plain icon"> 
                            <div className='iconLine'></div> 
                            <p className='iconName'>NumPy</p> 
                        </i>
                        <i className="devicon-matplotlib-plain icon"> 
                            <div className='iconLine'></div> 
                            <p className='iconName'>Matplotlib</p> 
                        </i>
                    </div>
                </div>
                
            </div>
        
        
    );
};

export default MobileSkills;