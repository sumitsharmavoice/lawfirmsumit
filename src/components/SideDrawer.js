import React, { useState, Fragment, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { RiArrowDownSLine } from "react-icons/ri"
import { useNavigate } from 'react-router-dom';


export default function SideDrawer(props) {
  
   var navigation=useNavigate()

  const [state, setState] = useState(false);

  useEffect(function () {
    setState(props.open)

  }, [props])

  const handleClose = () => {
    props.setOpen(false)

  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, background: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)', color: '#ffffff' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

        <ListItem disablePadding>
          <ListItemButton >
            <div className='header-appbar-maindiv' style={{display:'flex',flexDirection:"column",padding:'2px 2px 222% 0px'}}>

              <span className='header-appbar-btn' style={{padding:'5px 90px 1px 0px'}}>
                <div className='dropdown'>
                  <div className='dropbtn' onClick={()=>navigation("/")} >
                    <span  >HOME </span>
                  </div>

                </div>
              </span>

              <span className='header-appbar-btn' style={{padding:'5px 0px 5px 0px'}}>
                <div className='dropdown'>
                  <div className='dropbtn'>
                    <span  >PRACTICE AREAS </span>
                    <span className='dropbtn-arrow' ><RiArrowDownSLine /></span>
                  </div>
                  <div className='dropdown-content'>
                    <a href='#' >hii</a>
                    <a href='#'>hi</a>
                    <a href='#'>hello </a>
                    <a href='#'>byy</a>
                  </div>
                </div>
              </span>

              <span className='header-appbar-btn' style={{padding:'5px 15px 5px 0px'}}>
                <div className='dropdown'>
                  <div className='dropbtn'>
                    <span  >CASE STUDIES</span>
                    <span className='dropbtn-arrow'><RiArrowDownSLine /></span>
                  </div>
                  <div className='dropdown-content'>
                    <a href='#' >hii</a>
                    <a href='#'>hi</a>
                    <a href='#'>hello </a>
                    <a href='#'>byy</a>
                  </div>
                </div>
              </span>

              <span className='header-appbar-btn' style={{padding:'5px 70px 5px 0px'}}>
                <div className='dropdown'>
                  <div className='dropbtn'>
                    <span  >BLOG</span>
                    <span className='dropbtn-arrow'><RiArrowDownSLine /></span>
                  </div>
                  <div className='dropdown-content'>
                    <a href='#' >hii</a>
                    <a href='#'>hi</a>
                    <a href='#'>hello </a>
                    <a href='#'>byy</a>
                  </div>
                </div>
              </span>

              <span className='header-appbar-btn' style={{padding:'5px 40px 5px 0px'}}>
                <div className='dropdown'>
                  <div className='dropbtn'>
                    <span  >ABOUT US</span>
                    <span className='dropbtn-arrow'><RiArrowDownSLine /></span>
                  </div>
                  <div className='dropdown-content'>
                    <a href='#' >hii</a>
                    <a href='#'>hi</a>
                    <a href='#'>hello </a>
                    <a href='#'>byy</a>
                  </div>
                </div>
              </span>

              <span className='header-appbar-btn' style={{padding:'5px 60px 5px 0px'}}>
                <div className='dropdown'>
                  <div className='dropbtn'>
                    <span  >CONTACT</span>
                  </div>

                </div>
              </span>

            </div>{/* <ListItemText primary={text} /> */}
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div style={{ backgroundColor: '#030404' }}>
      <Fragment key={'right'}>
        {/* <Button onClick={toggleDrawer('left', true)}>Left</Button> */}
        <Drawer
          anchor={'right'}
          open={state}
          onClose={handleClose}
          onOpen={toggleDrawer('right', true)}
        >
          {list('right')}
        </Drawer>
      </Fragment>
    </div>
  );
}