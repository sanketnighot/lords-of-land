import React from "react";
import "./style.css";
import Avtar from "./Avtar";
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap/";
import footerlogo from "./images/footer-logo.png";
function Footer() {
  return (
    <>
      <section class="Footer-main">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <div className="footer-logo">
                <img src={footerlogo} alt="" />
              </div>
              <div className="copy-right">
               
                <p>
                    <span className="fw-bold d-block">
                    © 2022 by Lords of the lands.
                    </span>
                  Lords of the Lands Logo are trademarks of Lords of the Lands.
                  All other trademarks are the property of their respective
                  owners. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <div className="page-list">
                <ul>
                  <li>
                    <a href="#">home</a>
                  </li>
                  <li>
                    <a href="#">news</a>
                  </li>
                  <li>
                  <a href="#">Avtar</a>
                  </li>
                  <li>
                    <a href="#">Avtar</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">careers</a>
                  </li>
                  <li>
                    <a href="#">map</a>
                  </li>
                  <li>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    <a href="#">term of use</a>
                  </li>
                  <li>
                    <a href="#">Licenses</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-12 col-sm-12 col-xs-12">
              <div className="social-media">
                <ul className="socio-wrap">
                  <li><a ><i class="fa-brands fa-instagram" onClick={() => {
                     window.location.href = 'https://www.instagram.com/lords_ofthe_lands/';
                    }}></i></a></li>
                  <li><a ><i class="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a onClick={() => {
                     window.location.href = 'https://twitter.com/LordsOfTheLands';
                    }}><i class="fa-brands fa-twitter"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-12 col-sm-12 col-xs-12">
              <ul className="bottom-footer">
                <li>
                  <a href="#">@ Lords of the Lands</a>
                </li>
                <li>
                  <a href="#">Terms and Conditions </a>
                </li>
                <li>
                  <a href="#">Privacy Policy </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
