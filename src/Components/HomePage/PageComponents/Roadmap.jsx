import React from 'react';
import featuredback from './images/featuredback.png';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import RoadmapPt1 from './RoadmapPt1';
import RoadmapPt2 from './images/RoadmapLol.png';

const Roadmap = () => {
    return (
        <>
        <div>
            <div className='dislpay-comp' style={{backgroundImage: 'url(' + featuredback + ')', backgroundSize: "cover", height: '100vh', minHeight: '100vh', margin: 0, display: 'block',  justifyContent:'center', alignItems:'center' }} >
                <Text>Roadmap</Text>
                    <RoadmapPt1/>
                    {/* <img src={RoadmapPt2} alt=""style={{height: "80%", width:"50%", marginLeft:"15%"}}/> */}
              
            </div>
            
        </div>
        </>
    )
}

export default Roadmap

const Text = styled.h1`
    color: #5c3dc5;
    font-size: 350%;
    text-align: center;
    padding: 2%;
    font-family: uni-regular sans;
    background: -webkit-linear-gradient(#2afff0, #66ffeb);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    text-shadow: 2px 2px 5px #12be29b7;
`;