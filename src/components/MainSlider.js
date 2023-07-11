import React, { createRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function MainSlider() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 3000,
    arrows: false,
  };

  var images = ["bhbanner2.jpg", "bhbanner1.jpg", "bhbanner3.jpg"]

  function playImages() {
    return images.map((item) => {
      return <div  > <img src={`./assets/${item}`} style={{ height: 500, width: "100%" }} /></div>
    })
  }

  var slider = createRef()

  const handleLeftClick = () => {
    slider.current.slickPrev()

  }
  const handleRightClick = () => {
    slider.current.slickNext()
  }

  return (<div style={{ position: 'relative' }}>
    <KeyboardArrowLeftIcon onClick={handleLeftClick} style={{ position: 'absolute', left: 10, top: '45%', zIndex: 1, cursor: 'pointer', fontSize: 40, color: 'ghostwhite' }} />
    <Slider ref={slider} {...settings} >
      {playImages()}
    </Slider>
    <KeyboardArrowRightIcon onClick={handleRightClick} style={{ position: 'absolute', right: 10, top: '45%', zIndex: 1, cursor: 'pointer', fontSize: 40, color: 'white' }} />
  </div>)
}