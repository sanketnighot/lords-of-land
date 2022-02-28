import React from 'react';
import Display from './PageComponents/Display';
import Features from './PageComponents/Features';
import NFTComponent from './PageComponents/NFTComponent';
import Footer from './PageComponents/Footer';
import NavBar from './PageComponents/Navbar';
import style from './PageComponents/style.css';
import SimpleSlider from './PageComponents/SimpleSlider';
import RoadmapNew from './PageComponents/RoadmapNew';
import Teams from "./PageComponents/Teams"
import WhyLol from "./PageComponents/whyLol";
import Faq from "./PageComponents/Faq";
const Home = () => {
    return (
        <>
        <div>
            <div className="navDisplay" id="navDisplay">
                <Display/>
            </div>
            <div className="navFeatures" id="navFeatures" style={{marginTop:"10%"}}>
                <Features/>
            </div>
            <div className="why-sec">
                <WhyLol/>
            </div>
            <div className="navNFT" id="navNFT">
                <NFTComponent/>
            </div>
            {/* <div className="Faq">
                <Faq/>
            </div> */}
            <div className="navFooter" id="navFooter">
                <Footer/>
            </div>
        </div>
        </>
    )
}
export default Home;