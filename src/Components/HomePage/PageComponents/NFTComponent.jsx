import React from 'react'
// import Lords1 from './images/Lords01.png';
// import Lords2 from './images//Lords02.png';
// import Lords3 from './images//Lords03.png';
import {Container, Row, Col, Card, CardGroup} from 'react-bootstrap/';
import JoinDiscord from './images/JoinDiscord.png';
import styled from 'styled-components';
// import './style.css';
import NFTs from './images/NFTs.png'
const NFTComponent = () => {
    return (
        <>
            <NFTDiv className="nftcomponent" style={{marginTop: "4%", height:"40%"}}>
            <section className="nft">
                    <Container>
                    <Row className="justify-content-center">
                    <Col style={{textAlign: "center"}}>
                        <img style={{width:"65%"}} src={NFTs} alt=""/>
                    </Col>
                    </Row>
                    </Container>
            </section>
            <section>
                    <Container>
                        <Row>
                        <div className="nft-para" >
                            <p>Lords of Lands are a prestigious collection of unique Avatars #Lords, and virtual #Lands.
                            #LOL allows users to mint NFTs as avatars, gadgets, wearables, skins as well as buy a space of future real
                            estate.
                            Enter the metaverse of Online Real Estate Development
                            Unlock your Virtual Abundance : Avatar, Digilands, Communities & more...
                            </p>
                        </div>
                        </Row>
                    </Container>
            </section>
            <section className="hut" >
                <Container style={{width:"50%", minWidth:"90%"}}>
                <Row>
                    <div className="blur-box">
                    <strong>
                        <p style={{fontSize:"180%"}}>Power of Digital Land </p>
                        <p style={{fontSize:"180%"}}>Lords of the virtual world</p>
                        <h3>The MetaLords to the Metalands</h3>
                    </strong>
                    </div>
                </Row>
                </Container>
            </section></NFTDiv>
            <section className="meta">
                <Container>
                <Row>
                    <div className="metaverse">
                    <img src={JoinDiscord} alt=""/>
                    </div>
                </Row>
                </Container>
            </section>
            {/* <section className="teams">
                    <div className="play-team">
                    <Text>Lords</Text>
                        <ul className="player">
                        <Container fluid="xl">
                            <Row className="justify-content-lg-center g-4">
                                <CardGroup>
                                <Col>
                                <Card style= {{width:"89%", alignItems:"center", background:"transparent"}}>
                                <div className="bg-gradient">
                                    <li className="play"><Card.Img variant="top" src={Lords1} alt=""/>
                                    <p></p>
                                    </li>
                                </div>
                                </Card>
                                </Col>
                                <Col>
                                <Card style= {{width:"89%", alignItems:"center", background:"transparent"}}>
                                    <div className="bg-gradient">
                                        <li className="play"><Card.Img variant="top" src={Lords2} alt=""/>
                                        <p></p>
                                        </li>
                                    </div>
                                </Card>
                                </Col>
                                <Col>
                                <Card style= {{width:"89%", alignItems:"center", background:"transparent"}}>
                                    <div className="bg-gradient">
                                        <li className="play"><Card.Img variant="top" src={Lords3} alt=""/>
                                        <p></p>
                                        </li>
                                    </div>
                                </Card>
                                </Col>
                                </CardGroup>
                                
                            </Row>
                            <Row className="justify-content-md-center">
                            <Col md="4">
                                <Reveal>Reveal soon</Reveal>
                            </Col>   
                            </Row>
                        </Container>
                        </ul>
                    
                    </div>
            </section> */}
        </>
    )
}

export default NFTComponent

const Text = styled.h1`
    color: #5c3dc5;
    font-size: 350%;
    text-align: center;
    margin: 2%;
    font-family: uni-regular sans;
    background: -webkit-linear-gradient(#2afff0, #66ffeb);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    text-shadow: 2px 2px 5px #12be29b7;
`;

const Reveal = styled.button`
    width: 165px;
    height: 40px;
    text-align: center;
    text-transform: uppercase;
    margin: 25%;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    border: none;
    background: linear-gradient(#2afff0, #7eff66);
    border-radius: 25px !important;
    cursor: pointer;
    text-shadow: 2px 2px 8px black
`;


const NFTDiv = styled.div`
align-items: center;
@media screen and (max-width:1000px) {
}

@media screen and (max-width: 760px) {
    padding-top: 0%;
}

`