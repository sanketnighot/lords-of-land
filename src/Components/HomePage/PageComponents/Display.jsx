import React from 'react';
import show from './images/cover.png';
import hide from './images/unrevealed.png';
import button from './images/button.png';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap/';
import './responsiveStyle.css';
import Navbar from './Navbar'

const Display = () => {
    return (
        <div style={{backgroundColor: "black", height:"100vh", minHeight: "100vh"}}>
        <div className='display-comp' style={{background: "linear-gradient(84deg, rgb(0 0 0 / 36%), rgba(37, 36, 37, 0.3))", backgroundImage: 'url(' + hide + ')', backgroundSize: "cover",backgroundRepeat: "no-repeat", height: '100%', width:"100%", backgroundPosition: "75% 50%"}}>
        <Navbar/>
        <Container>
            <Row className="">
                <Col xs={12} md={8}> 
            <ComingSoon className='coming-soon'>
                {/* <strong><h1 style={{color: "#5c3dc5", textShadow: "2px 2px 15px orange"}}>COMING SOON !</h1></strong> */}
            
                <h2 style={{color: "#ffffff", textShadow: "2px 2px 5px black", fontSize: "100%"}}>
                <span style={{color: "#5c3dc5", textShadow: "2px 2px 15px orange"}}>COMING SOON !</span>
                WORLD'S FIRST VIRTUAL LAND NFTS, GIVING ITS HOLDERS MONTHLY RENTALS IN ETHEREUM !</h2>
                <h3 className="metaverse-div" style={{color: "#ffffff",textShadow: "2px 2px 20px lime"}}>Own Land in the <strong>ProperT Land Metaverse</strong></h3>
                <div className="discord-btn">
                    <DiscordBtn  onClick = {()=> {console.log("clicked")}}>
                        <img style= {{  width: "25px", height: "17px"}} src={button} alt=""/> JOIN DISCORD
                    </DiscordBtn>
                </div>
            </ComingSoon>
        </Col>
            </Row>
        </Container>
        </div>
        </div>
    )
}

const ComingSoon = styled.div`
    width: 70%;
    margin-top: 35%;
    @media screen and (max-width:780px) {
        width: 100%;
        display: block;
        align-items: center;
        text-align: center;
        margin-top: 50%;
        vertical-align: middle;
    }
`;
const DiscordBtn = styled.button`
    ${'' /* width: 65%; */}
    vertical-align: middle;
    display: initial;
    text-transform: uppercase;
    padding: 5%;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    border: none;
    background: linear-gradient(#2afff0, #7eff66);
    border-radius: 25px !important;
    cursor: pointer;
    ${'' /* @media screen and (max-width:768px){
        width: 220px;
        height: 80px;
    } */}
`;

export default Display;



