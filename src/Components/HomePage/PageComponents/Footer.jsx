import React from 'react'
import {Container, Row, Col} from 'react-bootstrap/';
import './style.css';
import './responsiveStyle.css';
import styled from 'styled-components';
import Logo from './images/logo.png'


const Footer = () => {
    return (
        <>
            <Container style={{marginTop:"1%", textAlign:"center"}} > 
                <Row className="justify-content-lg-center">
                    <Col xs lg="8">
                        <img style={{width:"50%", height:"70%"}} src={Logo} alt="" />
                    </Col>
                </Row>
                <Row className="justify-content-lg-center">
                  
                    <Col xs lg="8">
                        <Text>Lords of Lands NFT Property</Text>
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
    background: -webkit-linear-gradient(#2afff0, #66ffeb);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    text-shadow: 2px 2px 5px #12be29b7;
    justify-content: center;
    margin-top: -20%;
`;