import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import './style.css'
import { IoMdCall } from 'react-icons/io'
import { SiGmail } from 'react-icons/si'
import { RiArrowDownSLine } from "react-icons/ri"
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BiMenu } from "react-icons/bi"
import SideDrawer from './SideDrawer';
import { useNavigate } from 'react-router-dom';




export default function (props) {
 
   var navigation=useNavigate()

    var theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));

   const [open,setOpen]=useState(false)
   
  const handleOpen=()=>{
    setOpen(true)
    // alert("hello sumit")
  }



    return (<div >
        {!sm ? <>

            {!props.fix ? <> <div style={{ backgroundColor: '#212D3A', color: 'white', height: 'auto', }}>
                <div className='header-maindivcomponent'>
                    <img src='./assets/logolaw.jpeg' width={sm ? 40 : 70} className='header-img' />
                    <span className='header-logotxt'>
                        Beacon Legal
                    </span>
                    {!md ? <>
                        <div className='header-contact-container'>
                            <div className='header-contact-content'>
                                <span className='header-icon'>  <IoMdCall />  </span>
                                <a>  +1800-111-2222 </a>
                                <span className='header-icon'> <SiGmail /> </span>
                                <a>  contact@example.com </a>
                            </div>
                        </div>
                    </> : <></>
                    }
                </div>
            </div>


                <AppBar position='relative' style={{ backgroundColor: '#212D3A', height: '20%', marginBlockStart: 0 }} >
                    <div className='header-appbar-maindiv'>

                        <span className='header-appbar-btn'>
                            <div className='dropdown'>
                                <div onClick={()=>navigation("/")} className='dropbtn'>
                                    <span   >HOME </span>
                                </div>

                            </div>
                        </span>

                        <span className='header-appbar-btn'>
                            <div className='dropdown'>
                                <div className='dropbtn'>
                                    <span  >PRACTICE AREAS </span>
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

                        <span className='header-appbar-btn'>
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

                        <span className='header-appbar-btn'>
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

                        <span className='header-appbar-btn'>
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

                        <span className='header-appbar-btn'>
                            <div className='dropdown'>
                                <div className='dropbtn'>
                                    <span  >CONTACT</span>
                                </div>

                            </div>
                        </span>

                    </div>
                </AppBar>
            </>
                :
                <AppBar position='fixed' style={{ backgroundColor: '#212D3A', height: '10%', marginBlockEnd: '0%' }} >
                    <div className='header-appbar-maindiv'>

                        <span className='header-appbar-btn'>
                            <div className='dropdown'>
                                <div className='dropbtn'>
                                    <span  >HOME </span>
                                </div>

                            </div>
                        </span>

                        <span className='header-appbar-btn'>
                            <div className='dropdown'>
                                <div className='dropbtn'>
                                    <span  >PRACTICE AREAS </span>
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

                        <span className='header-appbar-btn'>
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

                        <span className='header-appbar-btn'>
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

                        <span className='header-appbar-btn'>
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

                        <span className='header-appbar-btn'>
                            <div className='dropdown'>
                                <div className='dropbtn'>
                                    <span  >CONTACT</span>
                                </div>

                            </div>
                        </span>

                    </div>
                </AppBar>
            }
        </> :
            <>
                <div style={{ backgroundColor: '#212D3A', color: 'white', height: 'auto', }}>
                    <div className='header-maindivcomponent'>
                        <img src='./assets/logolaw.jpeg' width={sm ? 40 : 70} className='header-img' />
                        <span className='header-logotxt'>
                            Beacon Legal
                        </span>
                        {!md ? <>
                            <div className='header-contact-container'>
                                <div className='header-contact-content'>
                                    <span className='header-icon'>  <IoMdCall />  </span>
                                    <a>  +1800-111-2222 </a>
                                    <span className='header-icon'> <SiGmail /> </span>
                                    <a>  contact@example.com </a>
                                </div>
                            </div>
                        </> :
                            <>
                                <div className='header-menuicon'>
                                    <div>
                                        <BiMenu style={{cursor:'pointer'}} onClick={handleOpen} />
                                    </div>

                                </div>
                            </>
                        }
                    </div>
                </div>

            </>
        }  
        <>
        <SideDrawer open={open}  setOpen={setOpen} />
        </>
          </div>)

}
