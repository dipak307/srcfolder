import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaDatabase, FaGit, FaSass,  FaJava } from 'react-icons/fa';
import "./Skills.css";
import { faC } from '@fortawesome/free-solid-svg-icons';
const skillsData = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3 },
  { name: 'JavaScript', icon: FaJs },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNode },
  { name: 'MongoDB', icon: FaDatabase },
  { name: 'Git', icon: FaGit },
  { name: 'Sass', icon: FaSass },
  // { name: 'MySQL', icon:FaDatabase  },
  { name: 'Java', icon: FaJava },
  // { name: 'TailwindCSS', icon: FaTailwind },
  
  





//   { name: 'Redux', icon: FaRedux },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 id="skill">Skills</h2>
      <div className="skills-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-badge">
            {React.createElement(skill.icon, { className: 'skill-icon' })}
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
