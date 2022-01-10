import React from 'react'
import {Container, Row, Col} from 'react-bootstrap/';
import Logo from './images/logo-top.png';

const Navbar = () => {

    function onClickMenu(){
        document.getElementById("menu").classList.toggle("icon");
        document.getElementById("nav").classList.toggle("change");
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
                                <li class="navli"><a href="#">home</a></li>
                                <li class="navli"><a href="#">about</a></li>
                                <li class="navli"><a href="#">blog</a></li>
                                <li class="navli"><a href="#">contact</a></li>
                                <li class="navli"><a href="#">gallery</a></li>
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
