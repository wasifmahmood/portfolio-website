import './contact.css'
import { MdEmail, MdSettingsPhone } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import { TextField } from '@mui/material';
import { COLORS } from '../constants/colors';
import { useState } from 'react';

const Contact = () => {
  const [userData, setUserData] = useState({
    FullName: '',
    PhoneNumber:'',
    Email: '',
    Message: '',
  });
  let name, value;
  const postuserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  // connect with firebase
  const SendMessage = async (e) => {
    e.preventDefault();
    const { FullName, PhoneNumber,Email, Message } = userData;
    const res = fetch('https://portfolio-wasif-mahmood-default-rtdb.firebaseio.com/userDataStore.json', {
      method: 'POST',
      headers: {
        'Content-Tpye': 'application/json',
      },
      body: JSON.stringify({
        FullName, PhoneNumber, Email, Message
      })
    }
    );
    if (res) {
      setUserData({ FullName: '', PhoneNumber:'', Email: '', Message: '', })
      alert('Data Stored');
    } else {
      alert('Please Fill the Data');
    }
  };
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
              <TextField
                id="Name"
                name='FullName'
                label="Enter Your Full Name"
                variant="standard"
                color='warning'
                value={userData.FullName}
                onChange={postuserData}
              />
              <label style={{ color: COLORS.primary, marginTop: '20px',fontWeight: 'bold' }}>Phone Number</label>
              <TextField
                id="PhoneNumber"
                name='PhoneNumber'
                label="Enter Your Phone Number"
                variant="standard"
                color='warning'
                value={userData.PhoneNumber}
                onChange={postuserData}
              />
              <label style={{ color: COLORS.primary, marginTop: '20px', fontWeight: 'bold' }}>Email Address</label>
              <TextField
                id="Email"
                name='Email'
                label="Enter Your Email Address"
                variant="standard"
                color='warning'
                value={userData.Email}
                onChange={postuserData}
              />

              <label style={{ color: COLORS.primary, marginTop: '20px', fontWeight: 'bold' }}>Your Message</label>
              <TextField
                id="Message"
                name='Message'
                label="Enter Your Details"
                variant="standard"
                color='warning'
                value={userData.Message}
                onChange={postuserData}
              />
            </div>
          </form>
          <div className='btn'
            style={{ paddingTop: '3rem', display: 'flex', justifyContent: 'center' }}>
            <button type="button" className="btn btn-dark"
              style={{ borderRadius: '30px', backgroundColor: COLORS.secondary }}
              onClick={SendMessage}
            >Send Message</button>
          </div>
        </div>
      </div >
    </div >
  );
}

export default Contact;
