import React from "react";
// import show from './images/cover.png';
import { Location } from "react-router-dom";
import hide from "./images/Mainbackgroundhero.png";
import styled from "styled-components";
import NavBar from "./Navbar"
import { Container, Row, Col } from "react-bootstrap/";
import "./responsiveStyle.css";


const Display = () => {
  return (
    <div
      style={{ }}
    >
      <div
        className="home"
        style={{

          background:
            "linear-gradient(84deg, rgb(0 0 0 / 36%), rgba(37, 36, 37, 0.3))",
          backgroundImage: "url(" + hide + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          backgroundPosition: "center",
        }}
      >
                
                
                <NavBar/>
        <Container>
          <Row className="">
            <Col xs={12} md={8} sm={12}>
              <ComingSoon className="coming-soon">
                <h2
                  style={{
                    color: "#ffffff",
                    textShadow: "2px 2px 5px black",
                    fontSize: "190%",
                  }}
                >
                  <span
                    style={{
                      color: "#FC67FF",
                      textShadow: "2px 2px 10px black",
                      fontSize: "120%",
                      fontWeight: 700,
                    }}
                  >
                    COMING SOON!{" "}
                  </span>
                  WORLD'S FIRST VIRTUAL LAND NFTS, GIVING ITS HOLDERS MONTHLY
                  RENTALS IN ETHEREUM !
                </h2>
                <h2
                  className="metaverse-div"
                  style={{
                    marginTop: "40px",
                    color: "white",
                    fontSize: "150%",
                  }}
                >
                  Own Land in the <strong>LOL Metaverse</strong>
                </h2>
                <div className="discord-btn" style={{ marginTop: "25px" }}>
                  <DiscordBtn
                    style={{}}
                    onClick={() => {
                     window.location.href = '#';
                    }}
                  >
                     EXPLORE
                  </DiscordBtn>
                </div>
              </ComingSoon>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

const ComingSoon = styled.div`
  width: 70%;
  margin-top: 25%;
  @media screen and (max-width: 780px) {
    width: 100%;
    display: none;
    align-items: center;
    text-align: center;
    margin-top: 75%;
    vertical-align: middle;
    font-size: 80%;
  }

  @media (max-width: 300px) {
    font-size: 70%;
  }
`;
const DiscordBtn = styled.button`
  ${"" /* width: 65%; */}
  width:auto;
  vertical-align: middle;
  display: initial;
  text-transform: uppercase;
  padding: 5px 15px;;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border:1px solid #fff;
  background:transparent;
  border-radius: 25px !important;
  cursor: pointer;
  ${
    "" /* @media screen and (max-width:768px){
        width: 220px;
        height: 80px;
    } */
  }
`;

export default Display;
