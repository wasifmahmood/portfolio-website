import Logo from '../image/Logo.png'
import { FaDownload } from 'react-icons/fa';
import './Navbar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import About from './about';
// import Resume from './Resume';
// import Portfolio from './Portfolio';
// import Contact from './Contact';

const Navbar = () => {
  return (
    <div className="Navbar m-5 p-2 rounded d-flex justify-content-between" style={{ backgroundColor: 'darkgray' }}>
      <div className='logo'>
        <img src={Logo} width="30" height="30" />
      </div>
      <div className='middle'>
        {/* <Router>
          <div>
            <Link to="/about">About</Link>
            <Link to="/about">Resume</Link>
            <Link to="/about">Portfolio</Link>
            <Link to="/about">Contact me</Link>
          </div>
          <Route path="/about" component={About} />
          <Route path="/about" component={Resume} />
          <Route path="/about" component={Portfolio} />
          <Route path="/about" component={Contact} />
        </Router> */}
        <span className="a" style={{color:'orange'}}>About me</span>
        <span className="b" style={{color:'navyblue'}}>Resume</span>
        <span className="c" style={{color:'navyblue'}}>Portfolio</span>
        <span className="d" style={{color:'navyblue'}}>Contact me</span>
      </div>
      <div className='Resume '>
        <button type="button" class="btn btn-outline-warning download">
          My Resume <FaDownload />
        </button>
      </div>

    </div>
  );
}

export default Navbar;
