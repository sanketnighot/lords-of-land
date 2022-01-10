import React from 'react';
import featuredback from './images/featuredback.png';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import './responsiveStyle.css';
import RoadmapPt1 from './RoadmapPt1';
import RoadmapPt2 from './images/RoadmapNew.png';
import LOLRoadmap from './images/LOL-Roadmap.png';
import {Container, Row, Col} from 'react-bootstrap/';

const Roadmap = () => {
    return (
        <>
        
            <div className='dislpay-comp' >
            <div>
                <Text>Roadmap</Text>
                    
                <Container className="roadmapclass">
                    <Row >
                        <Col style={{height: "40%", width:"40%"}}>
                            {/* <RoadmapPt1/> */}
                            {/* <img src={RoadmapPt2} alt=""style={{height: "70%", width:"70%", marginLeft:"15%"}}/> */}
                            <img src={LOLRoadmap} alt=""style={{height: "95%", width:"95%", marginLeft:"3%"}}/>
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
    padding: 7%;
    font-family: uni-regular sans;
    background: -webkit-linear-gradient(#2afff0, #66ffeb);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    text-shadow: 2px 2px 5px #12be29b7;
    @media screen and (max-width: 840px){
        font-size:250%;
`;