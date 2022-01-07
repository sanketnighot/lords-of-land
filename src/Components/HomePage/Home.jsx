import React from 'react';
import Display from './PageComponents/Display';
import Features from './PageComponents/Features';
import Roadmap from './PageComponents/Roadmap';
import NFTComponent from './PageComponents/NFTComponent';

const Home = () => {
    return (
        <>
        <div>
            <Display/>
            <Features/>
            <Roadmap/>
            <NFTComponent/>
        </div>

        </>
    )
}

export default Home;
