import Navbar from './Navbar'
import About from './about'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Education from './education'
import Contact from './Contact'
import './Home.css'
// import React, { useEffect, useState } from 'react';
// import firebase from './firebase';

const Home = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const db = firebase.firestore();
  //     const dataRef = db.collection('myCollection');
  //     const snapshot = await dataRef.get();
  //     setData(snapshot.docs.map(doc => doc.data()));
  //   };

  //   fetchData();
  // }, []);

  return(
    <div className='home '>
      <div className="header" id='header' >
        <Navbar />
      </div>
      <div className='about' id='about'>
        <About />
      </div>
      <div className='resume' id='resume'>
        <Resume />
      </div>
      <div className='portfolio' id='portfolio'>
        <Portfolio />
      </div>
      <div className='education' id='education'>
        <Education />
      </div>
      <div className='contact' id='contact'>
        <Contact />
      </div>
    </div>

  );
}

export default Home;
