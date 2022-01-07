import React from 'react'
import Lords1 from './images/Lords01.png';
import Lords2 from './images//Lords02.png';
import Lords3 from './images//Lords03.png';
import {Container, Row, Col} from 'react-bootstrap/';
import JoinDiscord from './images/JoinDiscord.png';
import styled from 'styled-components';
import './style.css';
const NFTComponent = () => {
    return (
        <>
            <section className="nft" style={{marginTop: "4%", height:"100vh"}}>
                    <Container>
                    <Row>
                        <div className="nft-text">
                        <svg width="100%" height="auto">
                            <defs>
                            <linearGradient id="gradient" y1="0" y2="1">
                                <stop stop-color="#EEF85B" offset="0" />
                                <stop stop-color="#09E5C3" offset="1" />
                            </linearGradient>
                            </defs>
                            <g>
                            <text id="text" y="100" font-family=" 'uni-heavy sans', cursive" font-size="120" font-weight="400"
                                stroke-width="2" stroke="url(#gradient)" fill="#232d2d" style={{boxShadow: "inset 14px -16px 20px 20px #000" }}>NFT'S</text>
                            </g>
                        </svg>
                        </div>
                    </Row>
                    </Container>
            </section>
            <section>
                    <Container>
                        <Row>
                        <div className="nft-para">
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
            <section className="hut">
                <Container>
                <Row>
                    <div className="blur-box">
                    <p>Power of Digital Land </p>
                    <p>Lords of the virtual world</p>
                    <h3>The MetaLords to the Metalands</h3>
                    </div>
                </Row>
                </Container>
            </section>
            <section className="meta">
                <Container>
                <Row>
                    <div className="metaverse">
                    <img src={JoinDiscord} alt=""/>
                    </div>
                </Row>
                </Container>
            </section>
            <section className="teams">
                <Container>
                <Row>
                    <div className="play-team">
                    <Text>Lords</Text>
                        <ul className="player">
                        <Container fluid="xl">
                            <Row className="justify-content-xl-center">
                                <Col xl={{span: 3, offset: 1}}>
                                <div className="bg-gradient">
                                    <li className="play"><img src={Lords1} alt=""/>
                                    
                                    <p></p>
                                    </li>
                                </div>
                                </Col>
                                <Col xl={{span: 3, offset: 1}}>
                                    <div className="bg-gradient">
                                        <li className="play"><img src={Lords2} alt=""/>
                                       
                                        <p></p>
                                        </li>
                                    </div>
                                </Col>
                                <Col xl={{span: 3, offset: 1}}>
                                    <div className="bg-gradient">
                                        <li className="play"><img src={Lords3} alt=""/>
                                        
                                        <p></p>
                                        </li>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        </ul>
                    <button className="more-play">Reveal soon</button>
                    </div>
                </Row>
                </Container>
            </section>
        </>
    )
}

export default NFTComponent

const Text = styled.h1`
    color: #5c3dc5;
    font-size: 350%;
    text-align: center;
    padding: 5%;
    font-family: uni-regular sans;
    background: -webkit-linear-gradient(#2afff0, #66ffeb);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    text-shadow: 2px 2px 5px #12be29b7;
`;