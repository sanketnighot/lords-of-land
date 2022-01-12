import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap/';
import mint from './images/mint.png'
import BusinessStanderds from './images/BusinessStanderds.png'
import zeenews from './images/zeenews.png'
import HindustanTimesLogo from './images/HindustanTimesLogo.png'

const Featured = () => {
    return ( 
        <div className="featured" style={{margin: "auto", textAlign:"center"}}>
                <Container>
                <Row xs={1} md={2} className="justify-content-center g-2">
                        <Col xs lg="3" sm="6">
                        <Card style={{background: "transparent", width:"70%", marginLeft:"20%"}}>
                            <Card.Img style={{width:"100%"}} variant="top" src={BusinessStanderds} />
                        </Card>
                        </Col>

                        <Col xs lg="3" sm="6">
                        <Card style={{background: "transparent", width:"70%", marginLeft:"20%"}}>
                            <Card.Img style={{width:"100%"}} variant="top" src={HindustanTimesLogo} />
                        </Card>
                        </Col>
                        <Col xs lg="3" sm="6">
                        <Card style={{background: "transparent", width:"70%", marginLeft:"20%"}}>
                            <Card.Img style={{width:"100%"}} variant="top" src={zeenews} />
                        </Card>
                        </Col>
                        <Col xs lg="3" sm="6">
                        <Card style={{background: "transparent", width:"70%", marginLeft:"20%"}}>
                            <Card.Img style={{width:"100%"}} variant="top" src={mint} />
                        </Card>
                        </Col>
                </Row>
                </Container> 
        </div>
    )
}

export default Featured
