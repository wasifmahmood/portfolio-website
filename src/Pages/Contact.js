import './contact.css'
import { MdEmail, MdSettingsPhone } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import { TextField } from '@mui/material';


const Contact = () => {
  return (
    <div className="Contact" >
      <div className='heading'>
        <h3 style={{ fontWeight:'bold' }}>Contact me</h3>
        <h2 style={{ color: 'orange', paddingTop: '4rem', paddingBottom: '4rem' }}>What did you have for me?</h2><br></br>
      </div>
      <div className='footer d-flex'>
        <div className='left col-5' style={{ paddingRight: '20px' }}>
          <div>
            <h3 style={{ color: '#213b52' }}  >Get a questionor perposal,or just want to say Hello?Please go ahead</h3>
          </div>
          <div  style={{ paddingTop: '50px' }}>
            <span><MdEmail size={30} style={{ color: 'orange' }} /></span>
            <span style={{ padding: '55px', color: '#213b52', fontWeight: 'bold' }}>wasifarain057@gmail.com</span></div>
          <div style={{ paddingTop: '30px' }}>
            <span><ImLocation2 size={30} style={{ color: 'orange' }} /></span>
            <span style={{ paddingLeft: '55px', color: '#213b52', fontWeight: 'bold' }}>Lahore,Pakistan</span>
          </div>
          <div style={{ paddingTop: '30px' }}>
            <span><MdSettingsPhone size={30} style={{ color: 'orange' }} /></span>
            <span style={{ paddingLeft: '55px', color: '#213b52', fontWeight: 'bold' }}>+92 301-3963678</span>
          </div>
        </div>
        <div className='form right col-5'>
          <form>
            <label style={{ color: 'orange', marginBottom: '10px' }}>Full Name</label><br></br>
            <TextField id="Name" label="Enter Your Full Name" variant="standard" color='warning' /><br></br>
            <label style={{ color: 'orange', marginTop: '20px' }}>Email Address</label><br></br>
            <TextField id="Email" label="Enter Your Email Address" variant="standard" color='warning' /><br></br>
            <label style={{ color: 'orange', marginTop: '20px' }}>Your Message</label><br></br>
            <TextField id="Message" label="Enter Your Details" variant="standard" color='warning' />
          </form>
          <div className='btn' style={{ paddingTop: '30px' }}>
            <button type="button" className="btn btn-dark" style={{ borderRadius: '30px', backgroundColor: '#213b52' }} >Send Message</button>
          </div>
        </div>
      </div >
    </div >
  );
}

export default Contact;
