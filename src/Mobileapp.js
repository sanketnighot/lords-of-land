import React from 'react'
import styled from "styled-components";

export default function Mobileapp() {
    return (
        <>
            <div className="m-b-c">
                <h4>
                    World's first virtual land nfts, giving its holders monthly rentals in ethereum !
                </h4>
                <h5>
                Own Land in the LOL Metaverse
                </h5>
                <DiscordBtn className='btn'
                style={{}}
                    onClick={() => {
                     window.location.href = '#';
                    }}
                  >
                  EXPLORE
                  </DiscordBtn>
            </div>
        </>




    )
}

const DiscordBtn = styled.button`
  ${"" /* width: 65%; */}
  width:auto;
  vertical-align: middle;
  text-transform: uppercase;
  padding: 5px 15px;;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  border:1px solid #fff;
  background:linear-gradient(#2afff0, #7eff66);
  border-radius: 25px !important;
  cursor: pointer;`