import { Link } from 'react-router-dom';
import './portfolio.css';
import MKLOGO from '../image/MK LOGO.png'
import LOGO3 from '../image/logo3.png'

const Portfolio = () => {
  return (
    <div className="Portfolio " >
      <h3 style={{ fontWeight:'bold' }}>Portfolio</h3>
      <div className='container d-flex'>
        <div className='card'>
          {/* <img src={MKLOGO} /> */}
          <h3 style={{ color: 'orange' }}>Mack's Kitchen</h3>
          <a style={{color: '#213b52'}}>https://github.com/wasifmahmood/MK-Restaurant-UI</a>
        </div>
        <div className='card'>
          {/* <img src={MKLOGO} /> */}
          <h3 style={{ color: 'orange' }}>GitHub</h3>
          <a style={{color: '#213b52'}}>https://github.com/wasifmahmood</a>
        </div>
        <div className='card'>
          {/* <img src={LOGO3} /> */}
          <h3 style={{ color: 'orange' }}>Project</h3>
          <a style={{color: '#213b52'}}>https://github.com/yousaf0811/I_learn</a>
        </div>
      </div>
        <hr className="solid-line" style={{ color: 'orange',border:'2px solid' }} ></hr>
    </div>
  );
}

export default Portfolio;
