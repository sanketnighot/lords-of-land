import React from 'react';
import featuredback from './images/featuredback.png';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import './responsiveStyle.css';
import RoadmapPt1 from './RoadmapPt1';
import RoadmapPt2 from './images/RoadmapLol.png';
import {Container, Row, Col} from 'react-bootstrap/';

const Roadmap = () => {
    return (
        <>
        <div>
            <div className='dislpay-comp' style={{backgroundImage: 'url(' + featuredback + ')', backgroundSize: "100% 100%", height: '100vh', minHeight: '100vh', margin: 0, display: 'block',  justifyContent:'center', alignItems:'center' }} >
                <Text>Roadmap</Text>
                    
                <Container className="roadmapclass">
                    <Row >
                        <Col style={{height: "40%", width:"40%"}}>
                            {/* <RoadmapPt1/> */}
                            <img src={RoadmapPt2} alt=""style={{height: "70%", width:"70%", marginLeft:"15%"}}/>
                        </Col>
                    </Row>
                </Container>
              
            </div>

        </div>
        </>
    )
}

export default Roadmap

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