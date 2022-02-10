import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class SliderText extends React.Component {
  
  render() {
    var settings = {
        swipe:false,
      dots: true,
autoplay:true,
fade: true,
pauseOnHover:false,
    };
    return (
      <>
      <div className="container">
        <div className="row">
        <Slider {...settings} className="slider-text-wrapper">
          <div className="Slider-text">
        <h1>
        Hold Live Concerts & Events in the Lords Of The Lands
        </h1>
          </div>
          <div className="Slider-text">
          <h1>
          Virtual Auctions at the LOL NFT Museums
          </h1>
          </div>
        </Slider>
      </div>
      </div>
      </>
    );
  }
}
export default SliderText ;

