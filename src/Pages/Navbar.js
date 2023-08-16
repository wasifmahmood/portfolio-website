import NLogo from '../image/NLogo.png'
import { FaDownload } from 'react-icons/fa';
import { CgMenuMotion } from 'react-icons/cg';
import './Navbar.css';
import React from "react";
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { COLORS } from '../constants/colors';

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
        <div className="drawer-data "
          style={{ padding: '40px' }}
        >
          <a style={{ color: COLORS.primary }} href="#about">About</a>
          <a style={{ color: COLORS.secondary }} href="#resume">Resume</a>
          <a style={{ color: COLORS.secondary }} href="#portfolio">Portfolio</a>
          <a style={{ color: COLORS.secondary }} href="#contact">Contact</a>
          <div className='my-resume '>
            <button type="button" >
              <FaDownload />
            </button>
          </div>
        </div>
      </List>
    </Box>
  );
  return (
    <div className="Navbar p-2 rounded d-flex justify-content-between" style={{ backgroundColor: COLORS.back }}>
      <div className='logo'  >
        <img src={NLogo} width="120" height="40" />
      </div>
      <div className='middle' >
        <span className="a active" ><a style={{ color: COLORS.primary }} href="#about">About</a></span>
        <span className="b"><a style={{ color: COLORS.secondary }} href="#resume">Resume</a></span>
        <span className="c"><a style={{ color: COLORS.secondary }} href="#portfolio">Portfolio</a></span>
        <span className="d"><a style={{ color: COLORS.secondary }} href="#contact">Contact me</a></span>
      </div>
      <div className='my-resume '>
        <button type="button" class="btn btn-outline-warning download">
          My Resume <FaDownload />
        </button>
      </div>
      <div className='menubtn'>
        <Button onClick={topDrawer('right', true)}>
          <div className='menu'><CgMenuMotion size={25} style={{ color: COLORS.primary }} /></div>
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
