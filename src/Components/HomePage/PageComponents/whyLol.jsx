import React from "react";
import box from "./images/Box.png";
import Coin1 from "./images/coin1.png";
import Coin2 from "./images/coin2.png";
import Coin3 from "./images/coin3.png";
import Coin4 from "./images/coin4.png";

export default function whyLol() {
  return (
    <>
      <section className="Main-lol">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="why-lol-wrapper">
                <h5>Why LOL</h5>
                <div className="why-lol-cont">
                  <p>
                    Ethereum is our main utility token that allows you to buy
                    and sell LANDS and ASSETS in The LOL metaverse.
                  </p>
                </div>
                <img
                  className="eth eth1 position-absolute"
                  src={Coin1}
                  alt=""
                />
                <img
                  className="eth eth2 position-absolute"
                  src={Coin2}
                  alt=""
                />
                <img
                  className="eth eth3 position-absolute"
                  src={Coin3}
                  alt=""
                />
                <img
                  className="eth eth4 position-absolute"
                  src={Coin4}
                  alt=""
                />
                <img className="box-img" src={box} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
