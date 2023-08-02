import './contact.css'
import { MdEmail, MdSettingsPhone } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import { TextField } from '@mui/material';
import { COLORS } from '../constants/colors';

const Contact = () => {
  return (
    <div className="Contact" >
      <div className='heading'>
        <h3 style={{ fontWeight: 'bold' }}>Contact me</h3>
        <h2 style={{ color: COLORS.primary, paddingTop: '10px' }}>What did you have for me?</h2><br></br>
      </div>
      <div className='footer d-flex'>
        <div className='left' >
          <div className='header'>
            <span >Get a question or perposal, or just want to say Hello? Please go ahead</span>
          </div>
          <div className='email' >
            <span><MdEmail size={30} style={{ color: COLORS.primary }} /></span>
            <span className='f-text' >wasifarain057@gmail.com</span></div>
          <div className='address' >
            <span><ImLocation2 size={30} style={{ color: COLORS.primary }} /></span>
            <span className='f-text' >Lahore,Pakistan</span>
          </div>
          <div className='phone' >
            <span><MdSettingsPhone size={30} style={{ color: COLORS.primary }} /></span>
            <span className='f-text' >+92 301-3963678</span>
          </div>
        </div>
        <div className='form right'>
          <form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ color: COLORS.primary, fontWeight: 'bold' }}>Full Name</label>
              <TextField id="Name" label="Enter Your Full Name" variant="standard" color='warning' />

              <label style={{ color: COLORS.primary, marginTop: '20px', fontWeight: 'bold' }}>Email Address</label>
              <TextField id="Email" label="Enter Your Email Address" variant="standard" color='warning' />

              <label style={{ color: COLORS.primary, marginTop: '20px', fontWeight: 'bold' }}>Your Message</label>
              <TextField id="Message" label="Enter Your Details" variant="standard" color='warning' />
            </div>
          </form>
          <div className='btn' style={{ paddingTop: '3rem', display: 'flex', justifyContent: 'center' }}>
            <button type="button" className="btn btn-dark" style={{ borderRadius: '30px', backgroundColor: COLORS.secondary }} >Send Message</button>
          </div>
        </div>
      </div >
    </div >
  );
}

export default Contact;
