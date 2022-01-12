import React from 'react'
import {Container, Row, Col} from 'react-bootstrap/';
import one from './images/one.png';
import two from './images/two.png';
import three from './images/three.png';
import four from './images/four.png';
import five from './images/five.png';
import six from './images/six.png';


const RoadmapResponsive = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center" style={{textAlign:"center"}}>
                    <Col xs lg="2">
                     <img style={{width:"15%"}} src={one} alt=""/>
                        
                    </Col>
                    <Col md="auto">
                        <h1>1. NFT Lords and Land Presale</h1>
                        <p style={{fontSize:"110%", color:"white"}}>Unveiling the fresh look of 500 Lords & 500 Lands</p>
                        <br/> </Col>
                    
                </Row>
                <Row className="justify-content-md-center" style={{textAlign:"center"}}>
                    <Col xs lg="2">
                        <img style={{width:"15%"}} src={two} alt=""/>
                        
                    </Col>
                    <Col md="auto">
                        <h1>2. NFT Full-Stack Sale</h1>
                        <p style={{fontSize:"110%", color:"white"}}>Full Stake sale of 2000+ Lords, 2500+ Lands, Mobility, Cloths and Accessories and gadgets</p>
                    </Col>
                        <br/>    
                </Row>
                <Row className="justify-content-md-center" style={{textAlign:"center"}}>
                    <Col xs lg="2">
                        <img style={{width:"15%"}} src={three} alt=""/>
                        
                    </Col>
                    <Col md="auto">
                        <h1>3. Rent Distribution</h1>
                        <p style={{fontSize:"110%", color:"white"}}>First monthly rental distribution amongst all Land Lords</p>
                    </Col>
                        <br/>    
                </Row>
                <Row className="justify-content-md-center" style={{textAlign:"center"}}>
                    <Col xs lg="2">
                        <img style={{width:"15%"}} src={four} alt=""/>
                        
                    </Col>
                    <Col md="auto">
                        <h1>4. Import</h1>
                        <p style={{fontSize:"110%", color:"white"}}>Import all NFT’s in ProperT Land Metaverse, where Lords & their Lands will Rule</p>
                    </Col>
                        <br/>    
                </Row>
                <Row className="justify-content-md-center" style={{textAlign:"center"}}>
                    <Col xs lg="2">
                        <img style={{width:"15%"}} src={five} alt=""/>
                        
                    </Col>
                    <Col md="auto">
                        <h1>5. Special Powers</h1>
                        <p style={{fontSize:"110%", color:"white"}}>Special Powers to Lords and Features to Lands</p>
                    </Col>
                        <br/>    
                </Row>
                <Row className="justify-content-md-center" style={{textAlign:"center"}}>
                    <Col xs lg="2">
                        <img style={{width:"10%"}} src={six} alt=""/>
                        
                    </Col>
                    <Col md="auto">
                        <h1>6. Defi Launch</h1>
                        <p style={{fontSize:"110%", color:"white"}}>Where our landlords will be rewarded with something big</p>
                    </Col>
                        <br/>    
                </Row>
            </Container>
        </>
    )
}

export default RoadmapResponsive
