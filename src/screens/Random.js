// import React from 'react'
// import Header from '../components/Header'
import React,{useState} from "react";
import Contact from "../components/Contact";
import ContactButton from "../components/ContactButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Highlight1 from "../components/Highlight1";
import MainSlider from "../components/MainSlider";
import ScrollButton from "../components/ScrollButton";
import "../components/style.css"
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import ContactPage from "../components/ContactPage";
export default function Random() {
  var theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));


  const [fix, setFix] = useState(false)

  const setFixed = () => {
      if (window.scrollY >= 1 && sm==false ) 
      { setFix(true) }
      else 
       { setFix(false) }
  }
  window.addEventListener("scroll", setFixed)

  return (<div  >
      
  
      <div style={{ width: '100%', marginBlockEnd:fix?'1%':'0%' }}>
          <Header fix={fix} setFix={setFix} />
      </div>
      <div style={{marginBlockStart:!fix?'4%':'2%' }}>
          <ContactPage />
      </div>
      {/* <div>
          <Contact />
      </div> */}
      <div style={{ width: '100%', }}>
          <Footer />
      </div>
      
      
  </div>
  )
}