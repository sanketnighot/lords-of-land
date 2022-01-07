import React from 'react';
import featureback from './images/featureback.png';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from './images/slider1.png';
import slider2 from './images/slider2.png';
import slider3 from './images/slider3.png';
import slider4 from './images/slider4.png';

import mint from './images/mint.png'
import BusinessStanderds from './images/BusinessStanderds.png'
import zeenews from './images/zeenews.png'
import HindustanTimesLogo from './images/HindustanTimesLogo.png'

const Features = () => {
    return (
        <>
        <div>
            <div className='dislpay-comp' style={{backgroundImage: 'url(' + featureback + ')', backgroundSize: "cover", height: '100vh', minHeight: '100vh', margin: 0, display: 'block',  justifyContent:'center', alignItems:'center' }}>
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
            <Feature><strong>Featured in</strong></Feature>
                <Gallary>
                    <img className="" src={BusinessStanderds} alt="Two"/>
                    <img className="" src={mint} alt="One"/>
                    <img className="" src={zeenews} alt="Two"/>
                    <img className="" src={HindustanTimesLogo} alt="Two"/>
                </Gallary>    
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
`;

const Carouseldiv = styled.div`
    width: 50%;
    margin auto
`;

const Gallary = styled.div`
    height: 10%;
    width: 60%;
    align-items: center;
    display: flex;
    margin: auto;
`;