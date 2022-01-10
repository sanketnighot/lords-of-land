import React from 'react';
import featureback from './images/blueglobe.png';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from './images/slider1.png';
import slider2 from './images/slider2.png';
import slider3 from './images/slider3.png';
import slider4 from './images/slider4.png';
import PurpleGlobe from './images/PurpleGlobe.png'
import styled from 'styled-components';
import Featured from './Featured';
import Roadmap from './Roadmap'
const Features = () => {
    return (
        <>
        <div>
            <div className='dislpay-comp' style={{background: "linear-gradient(84deg, rgb(0 0 0 / 36%), rgba(37, 36, 37, 0.3))", backgroundImage: 'url(' + featureback + ')', backgroundSize: "contain",backgroundRepeat: "no-repeat", height: '100%', width:"100%", backgroundPosition: "center right"}}>
                <Feature>Features of LOL</Feature>
                <Carouseldiv>
                    <Carousel>
                        <Carousel.Item interval={1500}>
                            <img className="d-block w-100" src={slider1} alt="One"/>
                            {/* <Carousel.Caption>
                                <h3>Label for first slide</h3>
                                <p>Sample Text for Image One</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img className="d-block w-100" src={slider2} alt="Two"/>
                         
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img className="d-block w-100" src={slider3} alt="Two"/>
                          
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img className="d-block w-100" src={slider4} alt="Two"/>
                           
                        </Carousel.Item>
                    </Carousel>
                </Carouseldiv>
                <div>
                    <img src={PurpleGlobe} alt="" style={{height: '30%', width: '30%', marginTop:"-10%",position: "relative", zIndex:1}}/>
                </div>
            <Feature><strong>Featured in</strong></Feature>
                <div style={{}}>
                    <Featured/>
                </div>
                <div>
                    <Roadmap/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Features

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
    @media screen and (max-width: 840px){
        font-size:250%
    }
`;

const Carouseldiv = styled.div`
    width: 95%;
    margin: auto;

    @media screen and (max-width:1000px) {
        width: 70%;
        margin: 15%;
    }
`;

