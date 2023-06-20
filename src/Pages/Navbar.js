import Logow from '../image/Logow.png'
import { FaDownload } from 'react-icons/fa';
import { CgMenuMotion } from 'react-icons/cg';
import './Navbar.css';
import React, { useState } from "react";
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [state, setState] = React.useState({
    right: false,
  });
  const topDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={topDrawer(anchor, false)}
      onKeyDown={topDrawer(anchor, false)}
    >
      <List>
        <div className="drawer-data "  style={{ padding: '40px' }}>
          <span className="a" style={{ color: 'orange', fontWeight: 'bold' }}>About me</span><br></br>
          <span className="b" style={{ color: '#213b52', fontWeight: 'bold',paddingTop:'85px' }}>Resume</span><br></br>
          <span className="c" style={{ color: '#213b52', fontWeight: 'bold' }}>Portfolio</span><br></br>
          <span className="d" style={{ color: '#213b52', fontWeight: 'bold' }}>Contact me</span><br></br>
        </div>
      </List>
    </Box>
  );
  return (
    <div className="Navbar p-2 rounded d-flex justify-content-between" style={{ backgroundColor: '#cfd9f8 ' }}>
      <div className='logo'  >
        <img src={Logow} width="120" height="40" />
      </div>
      <div className='middle'>
        <span className="a active" ><a href="#about">About</a></span>
        <span className="b " ><a href="#resume">Resume</a></span>
        <span className="c" ><a href="#portfolio">Portfolio</a></span>
        <span className="d" ><a href="#contact">Contact me</a></span>
      </div>
      <div className='my-resume '>
        <button type="button" class="btn btn-outline-warning download">
          My Resume <FaDownload />
        </button>
      </div>
      <div className='menubtn'>
        <Button onClick={topDrawer('right', true)}>
          <div className='menu'><CgMenuMotion size={25} style={{ color: 'orange' }} /></div>
        </Button>
        <Drawer
          anchor="right"
          open={state['right']}
          onClose={topDrawer('right', false)}
        >
          {list('right')}
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
