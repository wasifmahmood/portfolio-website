import picd from '../image/picd.png'
import './about.css';


const About = () => {
  return (
    <div className="About d-flex " >
      <div className='detail'>
        <h3 style={{ color: 'orange' }}>Hi,i'm</h3>
        <h2>
          <span style={{ color: 'orange',paddingRight:'10px' }}>Wasif</span>
          <span style={{ color: '#213b52'}}>Mahmood</span>
        </h2>
        <h1 className='desgination' style={{ color: '#213b52' }}>ForntEnd React Developer </h1>
        <span className='description'style={{ color: '#213b52'}} >A web developer is a professional who specializes in creating and maintaining websites and web applications. They are responsible for writing code using programming languages such as HTML, CSS, and JavaScript to implement the design and functionality of websites. Web developers collaborate with designers, project managers, and clients to ensure that the websites they build meet the desired specifications and user requirements. They are also proficient in troubleshooting and debugging issues to ensure smooth performance and optimal user experience.</span>
      </div>
      <div className='pic'>
        <img className='image' src={picd} />
      </div>
    </div>
  );
}

export default About;
