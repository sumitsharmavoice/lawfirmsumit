import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'
export default function Highlight1() {




  var settings = {

    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };



  return (<div className="highlight-container">
    <div className="highlight-box" >
    <div className="highlight-mainheading"> Why Us?</div>
    <Slider {...settings}  >
      <div >
        <img style={{width:'20px',opacity:0.5}} src="./assets/quote1.svg"  />
        <div className="highlight-heading">
          Expertise
        </div>
        <div style={{ width: '90%' }} >
          We boast a team of highly skilled Advocates with extensive experience in their respective areas of law.
          Their expertise ensures you receive top-notch legal guidance tailored to your specific needs
        </div>
        <img className="highlight-scndquote" src="./assets/quote2.svg" />
      </div>


      <div>
        <img style={{ width: '20px',opacity:0.5 }} src="./assets/quote1.svg" />
        <div className="highlight-heading">
          Track Record of Success
        </div>
        <div style={{ width: '90%' }}>
          We have a proven track record of achieving favourable outcomes for our clients.
          Our history of successful cases demonstrates their ability to navigate complex legal issues effectively.
        </div>
        <img className="highlight-scndquote" src="./assets/quote2.svg" />
      </div>


      <div>
        <img style={{ width: '20px' ,opacity:0.5}} src="./assets/quote1.svg" />
        <div className="highlight-heading">
          Client-Centred Approach
        </div>
        <div style={{ width: '90%' }}>
          We prioritise client satisfaction and aim to build long-lasting relationships.
          We provide personalised attention, taking the time to understand your unique circumstances and develop strategies that align with your goals.
        </div>
        <img className="highlight-scndquote" src="./assets/quote2.svg" />
      </div>


      <div>
        <img style={{ width: '20px',opacity:0.5 }} src="./assets/quote1.svg" />
        <div className="highlight-heading">
          Comprehensive Services
        </div>
        <div style={{ width: '90%' }}>
          We offer a wide range of legal services, covering diverse practice areas.
          Whether you require assistance with business law, personal injury, family law, or any other legal matter, we have the expertise to handle it effectively.
        </div>
        <img className="highlight-scndquote" src="./assets/quote2.svg" />
      </div>



      <div>
        <img style={{ width: '20px',opacity:0.5 }} src="./assets/quote1.svg" />
        <div className="highlight-heading">
          Strong Reputation
        </div>
        <div style={{ width: '90%' }}>
          We enjoy a strong reputation within the legal community and among past clients. We are known for our professionalism,
           integrity, and commitment for achieving the best possible results for their clients.
        </div>
        <img className="highlight-scndquote" src="./assets/quote2.svg" />
      </div>


    </Slider>
</div>
  </div>)
}






