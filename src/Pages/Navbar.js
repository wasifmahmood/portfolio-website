import Logow from '../image/Logow.png'
import { FaDownload } from 'react-icons/fa';
import { CgMenuMotion } from 'react-icons/cg';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="Navbar p-2 rounded d-flex justify-content-between" style={{ backgroundColor: '#cfd9f8 ' }}>
      <div className='logo' >
        <img src={Logow} width="120" height="40" />
      </div>
      <div className='middle'>
        <span className="a" style={{ color: 'orange',fontWeight:'bold'}}>About me</span>
        <span className="b" style={{ color: '#213b52',fontWeight:'bold'}}>Resume</span>
        <span className="c" style={{ color: '#213b52',fontWeight:'bold'}}>Portfolio</span>
        <span className="d" style={{ color: '#213b52',fontWeight:'bold'}}>Contact me</span>
      </div>
      <div className='my-resume '>
        <button type="button" class="btn btn-outline-warning download">
          My Resume <FaDownload />
        </button>
      </div>
      <div className='menu'><CgMenuMotion size={40} style={{ color: 'orange' }} /></div>
    </div>
  );
}

export default Navbar;
