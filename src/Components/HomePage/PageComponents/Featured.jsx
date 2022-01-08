import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap/';
import mint from './images/mint.png'
import BusinessStanderds from './images/BusinessStanderds.png'
import zeenews from './images/zeenews.png'
import HindustanTimesLogo from './images/HindustanTimesLogo.png'
import styled from 'styled-components';

const Featured = () => {
    return (
        <div>
                <Container>
                <Row xs={1} md={2} className="justify-content-lg-center g-4">
                        <Col>
                        <Card style={{width:"350px", height:"100px", background: "transparent"}}>
                            <Card.Img variant="top" src={BusinessStanderds} />
                        </Card>
                        </Col>

                        <Col>
                        <Card style={{width:"350px", height:"100px", background: "transparent"}}>
                            <Card.Img variant="top" src={HindustanTimesLogo} />
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{width:"350px", height:"100px", background: "transparent"}}>
                            <Card.Img variant="top" src={zeenews} />
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{width:"350px", height:"100px", background: "transparent"}}>
                            <Card.Img variant="top" src={mint} />
                        </Card>
                        </Col>
                </Row>
                </Container> 
        </div>
    )
}

export default Featured
