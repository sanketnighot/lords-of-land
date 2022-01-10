import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap/';
import mint from './images/mint.png'
import BusinessStanderds from './images/BusinessStanderds.png'
import zeenews from './images/zeenews.png'
import HindustanTimesLogo from './images/HindustanTimesLogo.png'
import styled from 'styled-components';

const Featured = () => {
    return (
        <div style={{margin: "auto", display:"flex", textAlign:"center"}}>
                <Container>
                <Row xs={1} md={2} className="justify-content-lg-center g-2">
                        <Col xs lg="3">
                        <Card style={{width:"250px", height:"100px", background: "transparent"}}>
                            <Card.Img variant="top" src={BusinessStanderds} />
                        </Card>
                        </Col>

                        <Col xs lg="3">
                        <Card style={{width:"250px", height:"100px", background: "transparent"}}>
                            <Card.Img variant="top" src={HindustanTimesLogo} />
                        </Card>
                        </Col>
                        <Col xs lg="3">
                        <Card style={{width:"250px", height:"100px", background: "transparent"}}>
                            <Card.Img variant="top" src={zeenews} />
                        </Card>
                        </Col>
                        <Col xs lg="3">
                        <Card style={{width:"250px", height:"100px", background: "transparent"}}>
                            <Card.Img variant="top" src={mint} />
                        </Card>
                        </Col>
                </Row>
                </Container> 
        </div>
    )
}

export default Featured
