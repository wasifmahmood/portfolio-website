import './resume.css';
import { SiHtml5 } from 'react-icons/si';
import { FaCss3Alt, FaJava, FaNode, FaReact, FaGithub, FaNodeJs } from 'react-icons/fa';
import { DiGithubFull, DiJavascript1 } from 'react-icons/di';
import { MdOutlineCss, MdOutlineHtml } from 'react-icons/md';

const Resume = () => {
  return (
    <div className="Resume" >
      <h3 style={{ fontWeight:'bold' }}>Experience</h3>
      <div className='container' >
        <div className='card' >
          <h2>Techlift Bootcamp Trainee</h2>
          <span style={{ color: 'orange' }}>Mern Stack Developer</span>
          <span style={{ color: 'orange' }}>(Oct2022-Jan2023)</span><br></br>
          <p style={{ fontSize: '14px', color: '#213b52' }}>
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
        <div className='card'>
          <h3>Cybex Solution</h3>
          <span style={{ color: 'orange' }}>REACT-JS Forntend Developer</span>
          <span style={{ color: 'orange' }}>(Mar2023-Present)</span><br></br>
          <p style={{ fontSize: '14px', color: '#213b52' }}>As a React JS Developer, my main responsibility is to develop user interface components using React.js. i collaborate with the team to implement features, optimize performance, and ensure code quality. Strong proficiency in JavaScript, knowledge of React.js principles, and familiarity with front-end tools are essential for success in this role.<br></br>
            • Develop and implement user interface components using React.js and related technologies.<br></br>
            • Collaborate with the development team to design and enhance features, ensuring code quality and best practices.<br></br>
            • Optimize application performance by identifying and resolving bottlenecks and implementing efficient coding practices.<br></br>
            • Troubleshoot and debug issues, providing timely resolution to ensure smooth user experience.<br></br>
            • Stay updated with the latest trends and advancements in React.js and front-end development, applying them to improve development processes and enhance the application.<br></br>
          </p>
        </div>
      </div>
      <hr className="solid-line" style={{ color: 'orange',border:'2px solid' }} ></hr>
      <div className='tech'>
        <div className='text'>
          <h3 style={{ fontWeight:'bold' }}>Technology</h3>
        </div>
        <div className='icon' style={{ color: 'orange' }}>
          <div><SiHtml5 size={50} /></div>
          <div><FaCss3Alt size={50} /></div>
          <div><FaJava size={50} /></div>
          <div><FaNodeJs size={50} /></div>
          <div><FaReact size={50} /></div>
          <div><FaGithub size={50} /></div>
        </div >
        <div className='icontext' >
          <div><MdOutlineHtml size={50} /></div>
          <div><MdOutlineCss size={50} /></div>
          <div><DiJavascript1 size={40} /></div>
          <div><FaNode size={50} /></div>
          <div style={{ fontWeight: 'bold', paddingTop: '10px' }}>React</div>
          <div><DiGithubFull size={50} /></div>
        </div>
      </div>
    </div >
  );
}

export default Resume;
