import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap/';
import Logo from './images/logo-top.png';
import { Link } from "react-router-dom";

const Navbar = () => {

    function onClickMenu(){
        document.getElementById("menu").classList.toggle("icon");
        document.getElementById("nav").classList.toggle("change");
    }

    const [activeHome, setActiveHome] = useState(true)
    const [activeFeatures, setActiveGame] = useState(false)
    const [activeNFT, setActiveMarket] = useState(false)

    const toggleClass = (e) => {
        if (e.target.childNodes[0].data === "HOME") {
            setActiveHome(true); setActiveGame(false); setActiveMarket(false);
        } else if (e.target.childNodes[0].data === "GAMES") {
            setActiveHome(false); setActiveGame(true); setActiveMarket(false);
        } else {
            setActiveHome(false); setActiveGame(false); setActiveMarket(true);
        }
    }
    return (
        <>
            <header>
                <div class="container">
                <div class="row">
                <div class="col-md-6 col-lg-6 col-sm-6 col-xs-2">

                <div id="navigation">
                    <div class="logo-top">
                    <img src={Logo} alt=""/>
                            </div>
                            <div id="menu" onClick={()=> {onClickMenu()}}>
                            <div id="bar1" class="bar"></div>
                            <div id="bar2" class="bar"></div>
                            <div id="bar3" class="bar"></div>
                            </div>
                            <div id="nav">
                            <ul class="navul">
                                <li class="navli" id={activeHome ? 'selected' : null} onClick={toggleClass}><a href="#navDisplay">Home</a></li>
                                <li class="navli" id={activeFeatures ? 'selected' : null} onClick={toggleClass}><a href="#navFeatures">Features</a></li>
                                <li class="navli" id={activeNFT ? 'selected' : null} onClick={toggleClass}><a href="#navNFT">NFT</a></li>
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
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-telegram-plane"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </li>
                            <a href="#" class="btn-s">join discord</a>
                            </ul>
                        </div>
                        </div>
                        </div>
                        </div>
            </header>
        </>
    )
}

export default Navbar
