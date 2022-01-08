import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FutureGlobe from './images/FutureGlobe.png';
import gems from './images/gems.png';
import imports from './images/imports.png';
import rentdistribution from './images/rentdistribution.png';
import Book from './images/Book.png';
import Candle from './images/Candle.png';
// import './style.css'
import logotop from './images/logo-top.png';

const RoadmapPt1 = () => {
    return (
        <>
            <section className="roadmap" >
                <div class="container">
                <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                <span className="half-cir"></span>
                <div className="circle">
                <div className="inner-circle">
                <img src={logotop} alt=""/>
                </div>
                </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="main-info" >
                
                <ul className="tri-info">
                    <span className="s-cir">
                    <div className="img-icon"><img src={FutureGlobe} alt=""/></div>
                    </span>
                    <li className="text">
                    <h5>
                        NFT Lords & Lands Presale
                    </h5><p>Unveiling the fresh look of  500 Lords & 500 Lands
                    </p></li>
                
                </ul>
                <span id="player">
                    <div id="outer">
                    <div id="inner"></div>
                    </div>
                </span>
                </div>
                <div className="main-info-2">
                <ul className="tri-info">
                    <span className="s-cir">
                    <div className="img-icon"><img src={Candle} alt=""/></div>
                    </span>
                    <li className="text"><h5>
                    NFT Full-Stack Sale
                    </h5><p>Full Stack sale of +2000 Lord, +2500 Lands, Mobility, Clothes & Accessories & gadgets</p></li>
                
                </ul>
                <span id="player">
                    <div id="outer">
                    <div id="inner"></div>
                    </div>
                </span>
                </div>
                
                <div className="main-info-3">
                <ul className="tri-info">
                    <span className="s-cir">
                    <div className="img-icon"><img src={rentdistribution} alt=""/></div>
                    </span>
                    <li className="text"><h5>
                    Rent distribution
                    </h5><p>First monthly rental distribution amongst all Land Lords</p></li>
                </ul>
                <span id="player">
                    <div id="outer">
                    <div id="inner"></div>
                    </div>
                </span>
                </div>
                <div className="main-info-4">
                <ul className="tri-info">
                    <span className="s-cir">
                    <div className="img-icon"><img src={imports} alt=""/></div>
                    </span>
                    <li className="text"><h5>
                    Import
                    </h5><p>Import of all NFTs into the ProperTland Metaverse, where Lords & their Lands will rule 
                    </p></li>
                </ul>
                <span id="player">
                    <div id="outer">
                    <div id="inner"></div>
                    </div>
                </span>
                </div>
                <div className="main-info-5">
                <ul className="tri-info">
                    <span className="s-cir">
                    <div className="img-icon"><img src={gems} alt=""/></div>
                    </span>
                    <li className="text"><h5>
                    Special powers
                    </h5><p>Special powers to Lords & Features to Lands</p></li>
                
                </ul>
                <span id="player">
                    <div id="outer">
                    <div id="inner"></div>
                    </div>
                </span>
                </div>
                <div className="main-info-6">
                <ul className="tri-info">
                    <span className="s-cir">
                    <div className="img-icon"><img src={Book} alt=""/></div>
                    </span>
                    <li className="text"><h5>
                    DEFI Launch
                    </h5>
                    <p>Where our landlords will be rewarded with something BIG!</p></li>
                
                </ul>
              
                </div>

                </div>
                        </div>
                        </div>
            </section>
        </>
    )
}

export default RoadmapPt1
