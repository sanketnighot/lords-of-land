import React from "react";
import Slider from "react-slick";
import slider2 from "./images/slider2.jpg";
import slider5 from "./images/museum.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class SimpleSlider extends React.Component {
  
  render() {
    var settings = {
      dots: true,
autoplay:true,
pauseOnHover:false,

responsive: [{
  breakpoint: 600,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1
  }
}]
    };
    return (
      <>
      <div className="container">
        <div className="row">
        <Slider {...settings} className="slider-wrapper">
          <div className="slide-image-container">
          <img src={slider2}/>
          </div>
          <div className="slide-image-container">
          <img src={slider5}/>
          </div>
        </Slider>
      </div>
      </div>
      </>
    );
  }
}
export default SimpleSlider ;

