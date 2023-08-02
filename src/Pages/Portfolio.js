import { Link } from 'react-router-dom';
import './portfolio.css';
import port from '../image/port.png'
import pro from '../image/pro.png';
import git from '../image/git.png';
import { COLORS } from '../constants/colors';


const Portfolio = () => {
  return (
    <div className="Portfolio " >
      <h3 style={{ fontWeight: 'bold' }}>Portfolio</h3>
      <div className='container d-flex'>
        <div className='card'>
          <img src={port} style={{height:'300px'}}/>
          <h3 style={{ color: COLORS.primary }}>Mack's Kitchen</h3>
          <a style={{ color: COLORS.secondary }}>https://github.com/wasifmahmood/MK-Restaurant-UI</a>
        </div>
        <div className='card justify-content-around'>
          <img src={git} style={{height:'150px'}}/>
          <div>
          <h3 style={{ color: COLORS.primary, paddingTop: '4.5rem' }}>GitHub</h3>
          <a className='' style={{ color: COLORS.secondary }}>https://github.com/wasifmahmood</a>
          </div>
        </div>
        <div className='card justify-content-around'>
          <img src={pro} style={{height:'170px'}}/>
          <div className='align-items-start'>
            <h3 style={{ color: COLORS.primary, paddingTop: '3rem' }}>Project</h3>
            <a style={{ color: COLORS.secondary }}>https://github.com/yousaf0811/I_learn</a>
          </div>
        </div>
      </div>
      <hr className="solid-line" style={{ color: COLORS.primary, border: '2px solid' }} ></hr>
    </div>
  );
}

export default Portfolio;
