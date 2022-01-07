import React from 'react';
import cover from './images/cover.png';
import button from './images/button.png';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap/';
// import './responsiveStyle.css';

const Display = () => {
    return (
        <div style={{backgroundColor: "black", height:"100vh", minHeight: "100vh"}}>
        <div className='display-comp' style={{background: "linear-gradient(84deg, rgb(0 0 0 / 36%), rgba(37, 36, 37, 0.3))", backgroundImage: 'url(' + cover + ')', backgroundSize: "100% 100%",backgroundRepeat: "no-repeat", height: '100%', width:"100%" }}>
        <Container>
            <Row>
                <Col xs={12} md={8}> 
            <ComingSoon className='coming-soon'>
                <strong><h1 style={{color: "#5c3dc5", textShadow: "2px 2px 15px orange", fontSize: "350%"}}>COMING SOON</h1></strong>
                <h2 style={{color: "#ffffff", textShadow: "2px 2px 5px black", fontSize: "150%"}}>World's first virtual land NFT's, giving its holders monthly rentals in ETHEREUM!</h2>
                <h3 className="metaverse-div" style={{color: "#ffffff",textShadow: "2px 2px 10px lime", fontSize: "225%"}}>Claim your Metaverse Lordship</h3>
                <div className="discord-btn">
                    <DiscordBtn  onClick = {()=> {console.log("clicked")}}>
                        <img style= {{  width: "30px", height: "21px"}} src={button} alt=""/> JOIN DISCORD
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
    text-shadow: 2px 2px 8px black
`;

export default Display;
