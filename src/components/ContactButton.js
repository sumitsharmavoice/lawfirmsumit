import React from 'react';
import "./style.css";

function ContactButton() {

    const handleClick = () => {
        alert("Open Popup")
    }
    return (
        <div className='cbtn-maincontainer'>
            <div className='cbtn-box'>
                <div className='cbtn-boxscnd'>
                    <div className='cbtn-boxthrd'>
                        <div className='cbtn-headingdiv'>
                            LEGEL SERVICES
                        </div>
                        <div className='cbtn-headingdiv-scnd'>
                            Did we mention first consultation is free?
                        </div>
                        <div className='cbtn-headingdiv-thrd'>
                            It appears that you are shrinking from them. The errors of the world to him,
                            mine to say to our abundant. We accuse him of choosing neither from And by the use of the game of Tritan's life,
                            the tenacity of his gentleness, and where The two were afraid of the average ex, he saw the stories that force them.                        </div>
                        <div className='cbtn-buttoncomponent'>
                            <span onClick={handleClick} >
                                <div className='cbtn-btn'>
                                    <div className='cbtn-btntext '>
                                        Make a Appoinment
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactButton
