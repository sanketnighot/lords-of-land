import React from 'react';
import Display from './PageComponents/Display';
import Features from './PageComponents/Features';
import NFTComponent from './PageComponents/NFTComponent';
import Footer from './PageComponents/Footer';

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
            <div className="navNFT" id="navNFT">
                <NFTComponent/>
            </div>
            <div className="navFooter" id="navFooter">
                <Footer/>
            </div>  
            {/* <Test/> */}
        </div>

        </>
    )
}
export default Home;
