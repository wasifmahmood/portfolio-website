import Navbar from './Navbar'
import About from './about'
import Logo from '../image/Logo1.png'

const Home = () => {
  return (
    <div className='home'>
      <div className="nav" >
        <Navbar />
      </div>
      <div className='d-flex'>
        <div className='about'> <About /></div>
        <div className='pic'><img src={Logo} width="30" height="30" /></div>
      </div>

    </div>

  );
}

export default Home;
