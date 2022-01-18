import React from 'react';
// import show from './images/cover.png';
import hide from './images/unrevealed.png';
import button from './images/button.png';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap/';
import './responsiveStyle.css';
import Navbar from './NavBar'

const Display = () => {
    return (
        <div style={{backgroundColor: "black", height:"100vh", minHeight: "100vh"}}>
        <div className='home' style={{background: "linear-gradient(84deg, rgb(0 0 0 / 36%), rgba(37, 36, 37, 0.3))", backgroundImage: 'url(' + hide + ')', backgroundSize: "cover",backgroundRepeat: "no-repeat", height: '100%', width:"100%", backgroundPosition: "75% 50%"}}>
                   
        <Container>
            <Row className="">
                <Col xs={12} md={8}> 
                    <ComingSoon className='coming-soon'>
                        <h2 style={{color: "#ffffff", textShadow: "2px 2px 5px black", fontSize: "220%"}}>
                        <span style={{color: "#BE7DFF", textShadow: "2px 2px 10px black", fontSize: "120%", fontWeight: 700}}>COMING SOON! </span>
                        WORLD'S FIRST VIRTUAL LAND NFTS, GIVING ITS HOLDERS MONTHLY RENTALS IN ETHEREUM !</h2>
                        <h2 className="metaverse-div" style={{color: "white", fontSize:"150%"}}>Own Land in the <strong>ProperT Land Metaverse</strong></h2>
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
    margin-top: 25%;
    @media screen and (max-width:780px) {
        width: 100%;
        display: block;
        align-items: center;
        text-align: center;
        margin-top: 75%;
        vertical-align: middle;
        font-size:80%;
    }

    @media (max-width: 300px) {
        font-size: 70%;
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