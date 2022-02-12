import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap/";
import Logo from "./images/logo-top.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavBar = () => {
  function onClickMenu() {
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
  }

  const [activeHome, setActiveHome] = useState(true);
  const [activeFeatures, setActiveGame] = useState(false);
  const [activeNFT, setActiveMarket] = useState(false);

  const toggleClass = (e) => {
    if (e.target.childNodes[0].data === "HOME") {
      setActiveHome(true);
      setActiveGame(false);
      setActiveMarket(false);
      onClickMenu();
    } else if (e.target.childNodes[0].data === "GAMES") {
      setActiveHome(false);
      setActiveGame(true);
      setActiveMarket(false);
      onClickMenu();
    } else {
      setActiveHome(false);
      setActiveGame(false);
      setActiveMarket(true);
      onClickMenu();
    }
  };
  return (
    <>
      <Desktop>
        <header>
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-6 col-sm-6 col-xs-2">
                <div id="navigation">
                  <div class="logo-top">
                    <img src={Logo} alt="" />
                  </div>
                  <div
                    id="menu"
                    onClick={() => {
                      onClickMenu();
                    }}
                  >
                    <div id="bar1" class="bar"></div>
                    <div id="bar2" class="bar"></div>
                    <div id="bar3" class="bar"></div>
                  </div>
                  <div id="nav">
                    <ul class="navul">
                      <li
                        class="navli"
                        id={activeHome ? "selected" : null}
                        onClick={toggleClass}
                      >
                        <a href="#navDisplay">Home</a>
                      </li>
                      <li
                        class="navli"
                        id={activeFeatures ? "selected" : null}
                        onClick={toggleClass}
                      >
                        <a href="#navFeatures">Features</a>
                      </li>
                      <li
                        class="navli"
                        id={activeNFT ? "selected" : null}
                        onClick={toggleClass}
                      >
                        <a href="#navNFT">NFT</a>
                      </li>
                      {/* <li class="navli" id={activeFooter ? 'selected' : null} onClick={toggleClass}><a href="#nftcomponent">NFT Collections</a></li> */}
                      {/* <li class="navli"><a href="#">gallery</a></li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-md-6 col-lg-6 col-sm-6 col-xs-2">
                <div class="social">
                  <ul>
                    <li>
                      <a
                        className="insta"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          window.location.href =
                            "https://www.instagram.com/lords_ofthe_lands/";
                        }}
                      >
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          window.location.href =
                            "https://twitter.com/LordsOfTheLands";
                        }}
                      >
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <a href="#" className="btn-s">
                      open sea
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Desktop>
      <Mobile>
        <Navbar style={{}} expand={false}>
          <Container fluid>
            <Navbar.Brand href="#" style={{}}>
              <Img src={Logo} alt="" />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Mobile>
    </>
  );
};

export default NavBar;

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

const Img = styled.img`
  // width: 40%;

  // @media screen and (max-width: 520px) {
  //   width: 60%;
  //   margin-left: 5%;
  // }

  // @media screen and (max-width: 320px) {
  //   width: 70%;
  //   margin-left: 5%;
  // }
  //
`;
