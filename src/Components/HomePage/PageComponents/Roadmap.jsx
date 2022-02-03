import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import whitelogo from "./images/Whitelogo.png"
import "./responsiveStyle.css";
import RoadmapPt1 from "./RoadmapPt1"
import LOLRoadmap from "./images/LOL-Roadmap.png";
import { Container, Row, Col } from "react-bootstrap/";
import RoadmapResponsive from "./RoadmapResponsive";

const Roadmap = () => {
  return (
    <>
      <div className="roadmap">
        <div>
           
          <h1>Roadmap</h1>

          <Container className="roadmapclass">
            <Row>
            <div className="logo1">
                <img src={whitelogo} alt="" style={{
                   
                }}/>
            </div>
              <Col style={{ width: "40%" }}>
                {/* <RoadmapPt1/> */}
                {/* <img src={RoadmapPt2} alt=""style={{height: "70%", width:"70%", marginLeft:"15%"}}/> */}
                <Desktop>
                  <RoadmapPt1/>
                </Desktop>
                <Mobile>
                  <RoadmapResponsive />
                </Mobile>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Roadmap;

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
  @media screen and (max-width: 840px) {
    font-size: 250%;
  }
`;

const Desktop = styled.div`
  @media screen and (max-width: 763px) {
    display: none;
  }
`;

const Mobile = styled.div`
  @media screen and (min-width: 763px) {
    display: none;
  }
`;
