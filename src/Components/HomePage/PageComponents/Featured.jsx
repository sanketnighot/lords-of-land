import React from 'react'
import {Container, Row, Col} from 'react-bootstrap/';
import mint from './images/mint.png'
import BusinessStanderds from './images/BusinessStanderds.png'
import zeenews from './images/zeenews.png'
import HindustanTimesLogo from './images/HindustanTimesLogo.png'
import styled from 'styled-components';

const Featured = () => {
    return (
        <div>
            <Gallary>
                <Container>
                <Row lg={{span:12, offset:4}}>
                <Col lg={{ span: 4, offset: 4 }} style={{margin:"5%"}}>
                    <img className="" src={BusinessStanderds} alt="Two"/>
                    
                </Col>
                <Col lg={{ span: 4, offset: 4 }} style={{margin:"5%"}}>
                <img className="" src={HindustanTimesLogo} alt="Two"/> 
                </Col>
                </Row>
                <Row lg={{span:12, offset:4}}>
                <Col lg={{ span: 4, offset: 4 }} style={{margin:"5%"}}>
                <img className="" src={zeenews} alt="Two"/>
                </Col>
                <Col lg={{ span: 4, offset: 4 }} style={{margin:"5%"}}>
                    <img className="" src={mint} alt="One"/>
                </Col>
                </Row>
                </Container>
                </Gallary>    
        </div>
    )
}

export default Featured

const Gallary = styled.div`
    height: 10%;
    width: 60%;
    align-items: center;
    display: flex;
    margin: auto;
    @media screen and (min-width:1000px){
        margin-top: auto;
    }
`;