import Navbar from './Navbar'
import About from './about'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Education from './education'
import contact from './Contact'
import './Home.css'
import Contact from './Contact'

const Home = () => {
  return (
    <div className='home '>
      <div className="header" id='header' >
        <Navbar />
      </div>
      <div className='about' id='about'>
        <About />
      </div>
      <div className='resume'id='resume'>
        <Resume />
      </div>
      <div className='portfolio'id='portfolio'>
        <Portfolio />
      </div>
      <div className='education'id='education'>
        <Education />
      </div>
      <div className='contact'id='contact'>
        <Contact />
      </div>
      
    </div>

  );
}

export default Home;
