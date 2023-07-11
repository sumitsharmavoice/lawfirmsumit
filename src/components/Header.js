import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import './style.css'
import { IoMdCall } from 'react-icons/io'
import { SiGmail } from 'react-icons/si'
import { RiArrowDownSLine } from "react-icons/ri"

export default function (props) {


    return (<div >
        {!props.fix ? <> <div style={{ backgroundColor: '#212D3A', color: 'white', height: 'auto', }}>
            <div className='header-maindivcomponent'>
                <img src='./assets/logolaw.jpeg' width={70} className='header-img' />
                <span className='header-logotxt'>
                    Beacon Legal
                </span>
                <div className='header-contact-container'>
                    <div className='header-contact-content'>
                        <span className='header-icon'>  <IoMdCall />  </span>
                        <a>  +1800-111-2222 </a>
                        <span className='header-icon'> <SiGmail /> </span>
                        <a>  contact@example.com </a>
                    </div>
                </div>
            </div>
        </div>
            <AppBar position='relative' style={{ backgroundColor: '#212D3A', height: '20%', marginBlockStart: 0 }} >
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
    </div>)

}
