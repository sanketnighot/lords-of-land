import React, { useState, useEffect } from "react";
import featureback from "./images/blueglobe.png";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "./images/slider1.png";
import slider2 from "./images/slider2.jpg";
import slider3 from "./images/slider3.png";
import slider4 from "./images/slider4.png";
import slider5 from "./images/museum.png"
import fea01 from "./images/fea01.png";
import fea02 from "./images/fea02.png";
import fea03 from "./images/fea03.png";
import fea04 from "./images/fea04.png";
import PurpleGlobe from "./images/PurpleGlobe.png";
import styled from "styled-components";
import Featured from "./Featured";
import Roadmap from "./Roadmap";
import SimpleSlider from "./SimpleSlider"
import $ from 'jquery';
import SliderText from "./SliderText";
const Features = () => {
  
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

//   if (slider1.className=='active') {
//     document.getElementById('demo').innerHTML="helloword"
// }
// else{
//   document.getElementById('demo').innerHTML="helloword2"
// }


  return (
    <>
      <div>
        <div
          className="features"
          style={{
           
            // backgroundImage: "url(" + featureback + ")",
            // backgroundSize: "contain",
            // backgroundRepeat: "no-repeat",
            // height: "100%",
            // width: "100%",
            // backgroundPosition: "center right",
          }}
        >
          <h1>Features</h1>
         
            <SimpleSlider/>
           <SliderText/>
        
  
          <Parallax
            style={{ transform: `translateY(${offsetY * 0.3}px)` }}
          ></Parallax>

         
          {/* <Feature><strong>Featured in</strong></Feature>
                <div>
                    <Featured/>
                </div> */}
              
          <div>
            <Roadmap />
          </div>
        
         
       
        </div>
      </div>
    </>
  );
};

export default Features;

const Feature = styled.h1`
  color: #5c3dc5;
  font-size: 350%;
  text-align: center;
  padding: 2%;
  font-family: uni-regular sans;
  background: -webkit-linear-gradient(#2afff0, #66ffeb);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  text-shadow: 2px 2px 5px #12be29b7;
  @media screen and (max-width: 840px) {
    font-size: 250%;
  }
`;

const Carouseldiv = styled.div`
  width: 75%;
  margin:0 auto;

  @media screen and (max-width: 1000px) {
    width: 70%;
  }
`;
const Mobile = styled.div`
  @media screen and (min-width: 763px) {
    display: none;
    font-family: uni-heavy Sans;
    color: #fff;
    background: -webkit-linear-gradient(#fff, #fff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Parallax = styled.div`
  height: 600px;
  width: 600px;
  background-image: url(${PurpleGlobe});
  background-attachment: relative;
  background-position: left;
  background-repeat: no-repeat;
  background-size: 95%;
  background-color: transparent;
  z-index: 1;
  margin-top: -35%;
  @media screen and (max-width: 900px) {
    height: 400px;
    width: 400px;
    margin-top: -60%;
  }
  @media screen and (max-width: 900px) {
    height: 200px;
    width: 200px;
    margin-top: -40%;
  }
`;
