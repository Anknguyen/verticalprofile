import React from 'react';

const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'CSS',
    'HTML',
    'Git',
    'SQL'
];

const Skills = () => {
    return (
        <div>
            <h1>My Skills</h1>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;