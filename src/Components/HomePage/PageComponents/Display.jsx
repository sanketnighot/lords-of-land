import React from 'react';
import cover from './images/cover.png';
import button from './images/button.png';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap/';
import './responsiveStyle.css';

const Display = () => {
    return (
        <div style={{backgroundColor: "black", height:"100vh", minHeight: "100vh"}}>
        <div className='display-comp' style={{background: "linear-gradient(84deg, rgb(0 0 0 / 36%), rgba(37, 36, 37, 0.3))", backgroundImage: 'url(' + cover + ')', backgroundSize: "cover",backgroundRepeat: "no-repeat", height: '100%', width:"100%", backgroundPosition: "75% 50%"}}>
        <Container>
            <Row>
                <Col xs={12} md={8}> 
            <ComingSoon className='coming-soon'>
                <strong><h1 className="coming-text" style={{color: "#5c3dc5", textShadow: "2px 2px 15px orange", fontSize: "300%"}}>COMING SOON</h1></strong>
                <Rest>
                <h2 style={{color: "#ffffff", textShadow: "2px 2px 5px black", fontSize: "100%"}}>World's first virtual land NFT's, giving its holders monthly rentals in ETHEREUM!</h2>
                <h3 className="metaverse-div" style={{color: "#ffffff",textShadow: "2px 2px 20px lime", fontSize: "205%"}}>Claim your Metaverse Lordship</h3>
                <div className="discord-btn">
                    <DiscordBtn  onClick = {()=> {console.log("clicked")}}>
                        <img style= {{  width: "25px", height: "17px"}} src={button} alt=""/> JOIN DISCORD
                    </DiscordBtn>
                </div></Rest>
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
        margin-bottom: 0%;
        fontsize: 100%;
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
    text-shadow: 2px 2px 8px black;
    @media screen and (max-width:768px){
        width: 220px;
        height: 80px;
    }
`;

export default Display;


const Rest = styled.div`
@media screen and (max-width:768px) {
    margin-top: 350px;
}
`