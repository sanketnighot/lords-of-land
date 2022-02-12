import React from "react";
import "./style.css";
export default function Avtar() {
  return (
    <>
      <section className="avtar-main">
        <div className="container">
          <div className="row">
            <div className="bg-blur">
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <div className="avtar-content">
                  <h3>Avtar Name</h3>
                  <h5>MAINSALE</h5>
                  <div className="mint">
                    <input type="text" />
                    <a href="#" className="btn btn-primary" role="button">
                      MINT
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                  <div className="avtar-img">
                      <img src="" alt="" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
