import React from 'react';
import Display from './PageComponents/Display';
import Features from './PageComponents/Features';
import NFTComponent from './PageComponents/NFTComponent';
import Footer from './PageComponents/Footer';
import Test from './PageComponents/Test';
const Home = () => {
    return (
        <>
        <div>
            <Display/>
            <Features/>
            <NFTComponent/>
            <Footer/>
            {/* <Test/> */}
        </div>

        </>
    )
}
export default Home;
