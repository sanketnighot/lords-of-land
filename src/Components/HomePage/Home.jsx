import React from 'react';
import Display from './PageComponents/Display';
import Features from './PageComponents/Features';
import NFTComponent from './PageComponents/NFTComponent';
import Footer from './PageComponents/Footer';
import NavBar from './PageComponents/NavBar';
import style from './PageComponents/style.css';
const Home = () => {
    return (
        <>
        <div>
               
            <div className="navDisplay" id="navDisplay">
            <NavBar/>
                <Display/>
            </div>
            <div className="navFeatures" id="navFeatures" style={{marginTop:"10%"}}>
                <Features/>
            </div>
            <div className="navNFT" id="navNFT">
                <NFTComponent/>
            </div>
            <div className="navFooter" id="navFooter">
                <Footer/>
            </div>
        </div>

        </>
    )
}
export default Home;