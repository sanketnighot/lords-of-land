import React from "react";
import "./style.css";
import kunal from "./images/character.jpg";

export default function Teams() {
  return (
    <div>
      <section className="teams-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-3 col-xs-3">
              <h2 className="text-center Team-h"> Teams</h2>
              <div className="team-wrap">
                <div className="shubham">
                  <img src={kunal} alt="" />
                  <h4 className="text-center">shubhaum Guptha</h4>
                  <h5 className="text-center">
                    Founder Blockchain&Smart Contracts expert and developer
                  </h5>
                  <div
                    className="lin-icon"
                    onClick={() => {
                      window.location.href =
                        "https://www.linkedin.com/in/shubhaum-guptha-b57416b5";
                    }}
                  >
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
                <div className="kunal">
                  <img src={kunal} alt="" />
                  <br />
                  <h4 className="text-center">kunal bhatia</h4>

                  <h5 className="text-center">
                    Civil Engineer Btech IIT Delhi, Metaverse Architect,
                  </h5>
                  <div
                    className="lin-icon"
                    onClick={() => {
                      window.location.href =
                        "https://www.linkedin.com/in/kunalbhatiaiitd";
                    }}
                  >
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
