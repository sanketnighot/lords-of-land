import React from 'react'
import {Container, Row, Col} from 'react-bootstrap/';
import './style.css';
import './responsiveStyle.css';
import styled from 'styled-components';
import Logo from './images/Whitelogo.png'


const Footer = () => {
    return (
        <>
            <Container style={{marginTop:"1%", textAlign:"center"}} > 
                <Row className="justify-content-lg-center">
                    <Col xs lg="8" className="wlogo">
                        <Image src={Logo} alt="" />
                        <h1 className="foot-h">Lords of Lands NFT Property</h1>
                    </Col>
                </Row>
                <Row className="justify-content-lg-center">
                  
                    <Col xs lg="8">
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
}

export default Footer

const Text = styled.h1`
    color: #5c3dc5;
    font-size: 250%;
    font-family: uni-regular sans;
    background: -webkit-linear-gradient(#2afff0, #7eff66);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    justify-content: center;
    
    @media screen and (max-width: 751px) {
        font-size: 150%;
        margin-bottom: 5%;
    }
`;

const Image = styled.img`
width: 50%;
    @media screen and (max-width: 751px) {
        width: 60%;
    }
`;