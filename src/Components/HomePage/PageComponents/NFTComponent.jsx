import React from 'react'
import Lords1 from './images/Lords01.png';
import Lords2 from './images//Lords02.png';
import Lords3 from './images//Lords03.png';

const NFTComponent = () => {
    return (
        <>
            <section class="nft">

                    <div class="container">
                    <div class="row">
                        <div class="nft-text">
                        <svg width="100%" height="auto">
                            <defs>
                            <linearGradient id="gradient" y1="0" y2="1">
                                <stop stop-color="#EEF85B" offset="0" />
                                <stop stop-color="#09E5C3" offset="1" />
                            </linearGradient>
                            </defs>
                            <g>
                            <text id="text" y="100" font-family=" 'uni-heavy sans', cursive" font-size="120" font-weight="400"
                                stroke-width="2" stroke="url(#gradient)" fill="#232d2d" style={{boxShadow: "inset 14px -16px 20px 20px #000" }}>NFT'S</text>
                            </g>

                        </svg>

                        </div>

                    </div>
                    </div>
            </section>
            <section>
                    <div class="container">
                        <div class="row">
                        <div class="nft-para">
                            <p>Lords of Lands are a prestigious collection of unique Avatars #Lords, and virtual #Lands.
                            #LOL allows users to mint NFTs as avatars, gadgets, wearables, skins as well as buy a space of future real
                            estate.
                            Enter the metaverse of Online Real Estate Development
                            Unlock your Virtual Abundance : Avatar, Digilands, Communities & more...
                            </p>
                        </div>
                        </div>
                    </div>
            </section>
            <section class="hut">
                <div class="container">
                <div class="row">
                    <div class="blur-box">
                    <p>Power of Digital Land </p>
                    <p>Lords of the virtual world</p>
                    <h3>The MetaLords to the Metalands</h3>

                    </div>
                </div>
                </div>
            </section>
            <section class="meta">
                <div class="container">
                <div class="row">
                    <div class="metaverse">
                    <img src="./assets/images/Join Discord in miled Bigest Metaverse Community.png" alt=""/>
                    </div>
                </div>
                </div>
            </section>
            <section class="teams">
                <div class="container">
                <div class="row">
                    <div class="play-team">
                        <h2>Lords</h2>
                        <ul class="player">
                        <div class="bg-gradient">
                            <li class="play"><img src={Lords1} alt=""/>
                            <h3></h3>
                            <p></p>
                            </li>
                        </div>
                        <div class="bg-gradient">
                            <li class="play"><img src={Lords2} alt=""/>
                            <h3></h3>
                            <p></p>
                            </li>
                        </div>
                        <div class="bg-gradient">
                            <li class="play"><img src={Lords3} alt=""/>
                            <h3></h3>
                            <p></p>
                            </li>
                        </div>
                        </ul>
                    <button class="more-play">Reveal soon</button>
                    </div>
                </div>
                </div>
            </section>
            <section class="logo">
                <div class="container">
                <div class="row">
                    <div class="last">
                    <h3>Lords of Lands NFT Property</h3>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default NFTComponent
