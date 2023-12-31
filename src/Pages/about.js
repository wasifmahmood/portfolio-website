import picd from '../image/picd.png'
import './about.css';
import {COLORS} from '../constants/colors';


const About = () => {
  return (
    <div className="About d-flex " >
      <div className='detail'>
        <div className='Top'>
          <h3 style={{ color:COLORS.primary }}>Hi,i'm</h3>
          <h2>
            <span style={{ color:COLORS.primary,paddingRight: '10px' }}>Wasif</span>
            <span style={{ color:COLORS.secondary }}>Mahmood</span>
          </h2>
        </div>
        <h1 className='desgination' style={{ color:COLORS.secondary }}>ForntEnd React Developer </h1>
        <span className='description' style={{ color:COLORS.secondary }} >A web developer is a professional who specializes in creating and maintaining websites and web applications. They are responsible for writing code using programming languages such as HTML, CSS, and JavaScript to implement the design and functionality of websites. Web developers collaborate with designers, project managers, and clients to ensure that the websites they build meet the desired specifications and user requirements. They are also proficient in troubleshooting and debugging issues to ensure smooth performance and optimal user experience.</span>
      </div>
      <div className='pic'>
        <img className='image' src={picd} />
      </div>
    </div>
  );
}

export default About;
