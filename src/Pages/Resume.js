import './resume.css';
import { SiHtml5 } from 'react-icons/si';
import { FaCss3Alt, FaJava, FaReact, FaGithub, FaNodeJs } from 'react-icons/fa';
import {COLORS} from '../constants/colors';

const Resume = () => {
  return (
    <div className="Resume" >
      <h3 style={{ fontWeight: 'bold' }}>Experience</h3>
      <div className='container' >
        <div className='card' style={{ backgroundColor:COLORS.back, borderColor:COLORS.primary }}>
          <h3>Techlift Bootcamp Trainee</h3>
          <span style={{ color:COLORS.primary }}>Mern Stack Developer</span>
          <span style={{ color:COLORS.primary}}>(Oct2022-Jan2023)</span><br></br>
          <p style={{ fontSize: '14px', color: COLORS.secondary }}>
            <h6> MERN Stack Bootcamp Learning Experience:</h6>
            <h6>ForntEnd</h6>
            • Basics of JavaScript,HTML and CSS<br></br>
            • Bootstrap/MUI<br></br>
            • React / Redux Toolkit,Hook<br></br>
            <h6>BackEnd</h6>
            • NodeJS,ExpressJS<br></br>
            • Version Control Tool Git & GitHub<br></br>
            • Best Programming Practices & MVC Pattern<br></br>
            <h6>DataBase</h6>
            • MongoDB, MySQL, Firebase<br></br>
            <br></br>
            • Communication Skills(verbal and written)<br></br>
          </p>
        </div>
        <div className='card' style={{ backgroundColor:COLORS.back, borderColor:COLORS.primary }}>
          <h3>Cybex Solution</h3>
          <span style={{ color:COLORS.primary }}>REACT-JS Forntend Developer</span>
          <span style={{ color: COLORS.primary }}>(Mar2023-Present)</span><br></br>
          <p style={{ fontSize: '14px', color:COLORS.secondary }}>As a React JS Developer, my main responsibility is to develop user interface components using React.js. i collaborate with the team to implement features, optimize performance, and ensure code quality. Strong proficiency in JavaScript, knowledge of React.js principles, and familiarity with front-end tools are essential for success in this role.<br></br>
            • Develop and implement user interface components using React.js and related technologies.<br></br>
            • Collaborate with the development team to design and enhance features, ensuring code quality and best practices.<br></br>
            • Optimize application performance by identifying and resolving bottlenecks and implementing efficient coding practices.<br></br>
            • Troubleshoot and debug issues, providing timely resolution to ensure smooth user experience.<br></br>
            • Stay updated with the latest trends and advancements in React.js and front-end development, applying them to improve development processes and enhance the application.<br></br>
          </p>
        </div>
      </div>
      <hr className="solid-line" style={{ color: COLORS.primary, border: '2px solid' }} ></hr>
      <div className='tech'>
        <div className='text'>
          <h3 style={{ fontWeight: 'bold' }}>Technology</h3>
        </div>
        <div className='icon '>
          <div className='item '>
            <SiHtml5 size={50} style={{ color: COLORS.primary }} />
            <span>HTML</span>
          </div>
          <div className='item'>
            <FaCss3Alt size={50} style={{ color: COLORS.primary }} />
            <span>CSS</span>
          </div>
          <div className='item'>
            <FaJava size={50} style={{ color: COLORS.primary }} />
            <span>JavaScript</span>
          </div>
          <div className='item'>
            <FaNodeJs size={50} style={{ color: COLORS.primary }} />
            <span>Node-JS</span>
          </div>
          <div className='item'>
            <FaReact size={50} style={{ color: COLORS.primary }} />
            <span>React-JS</span>
          </div>
          <div className='item'>
            <FaGithub size={50} style={{ color: 'orange' }} />
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Resume;
