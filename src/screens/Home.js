import React,{useState} from "react";
import Contact from "../components/Contact";
import ContactButton from "../components/ContactButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Highlight1 from "../components/Highlight1";
import MainSlider from "../components/MainSlider";
import ScrollButton from "../components/ScrollButton";
import "../components/style.css"


export default function () {
    const [fix, setFix] = useState(false)

    const setFixed = () => {
        if (window.scrollY >= 1 ) 
        { setFix(true) }
        else 
         { setFix(false) }
    }
    window.addEventListener("scroll", setFixed)

    return (<div  >
        
    
        <div style={{ width: '100%', marginBlockEnd:fix?'1%':'0%' }}>
            <Header fix={fix} setFix={setFix} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBlockStart:fix?'4.5%':'0%' }}>
            <div style={{ width: '100%', }}>
                <MainSlider />
            </div>
        </div>
        <div style={{ width: '100%', marginBlock: '3%' }}>
            <Highlight1 />
        </div>

        <div  >
            <ContactButton />
        </div>
        {/* <div className="home-scrollbtn-div">
            <ScrollButton />
        </div> */}
        <div>
            <Contact />
        </div>
        <div style={{ width: '100%', }}>
            <Footer />
        </div>
        
        
    </div>)
}