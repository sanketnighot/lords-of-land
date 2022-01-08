import React from 'react'
import {Container, Row, Col} from 'react-bootstrap/';
import './style.css';
import './responsiveStyle.css';
import styled from 'styled-components';
import Logo from './images/logo.png'


const Footer = () => {
    return (
        <>
            <Container className="footer-Responsive" style={{marginTop:"20%"}} > 
                <Row className="justify-content-sm-center">
                    <img src={Logo} alt="" style={{height:"300px", width:"300px"}}/>
                </Row>
                <Row >
                    <div>
                    <Col xl="auto">
                        <Text>Lords of Lands NFT Property</Text>
                    </Col>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Footer

const Text = styled.h1`
    color: #5c3dc5;
    font-size: 250%;
    text-align: center;
    padding: 5%;
    font-family: uni-regular sans;
    background: -webkit-linear-gradient(#2afff0, #66ffeb);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    text-shadow: 2px 2px 5px #12be29b7;
    justify-content: center;
`;