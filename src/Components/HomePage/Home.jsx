import React from 'react';
import Display from './PageComponents/Display';
import Features from './PageComponents/Features';
import Roadmap from './PageComponents/Roadmap';
import NFTComponent from './PageComponents/NFTComponent';
import Footer from './PageComponents/Footer';
import Test from './PageComponents/Test';
const Home = () => {
    return (
        <>
        <div>
            <Display/>
            <Features/>
            <Roadmap/>
            <NFTComponent/>
            {/* <Footer/> */}
            {/* <Test/> */}
        </div>

        </>
    )
}
export default Home;
