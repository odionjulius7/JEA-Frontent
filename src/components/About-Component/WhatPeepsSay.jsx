import React, { useEffect, useState } from "react";

import Buttons from "../Buttons";

const WhatPeepsSay = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 460);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container-fluid WhatPeepsSay">
      <div className="row py-5x">
        <div className="col-12 d-flex justify-content-center">
          <h2 className="mb-5">What People Say About Us</h2>
        </div>
      </div>
      <div
        className="row my-4x"
        style={{
          marginTop: isMobile ? "-22px" : "",
        }}
      >
        <div className="col-md-4 col-sm-6 my-5">
          <div className="what_peep_wrap-1">
            <div className="top-img">
              <img src="./what_peep.jpg" alt="" />
            </div>
            <div className="text-align-center">
              <span className="">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                dapibus justo nec mi tincidunt, ac sollicitudin nunc cursus.
                Curabitur facilisis, purus et congue blandit, orci est fermentum
                libero, vel efficitur urna sapien ac sapien”
              </span>
              <p className="my-4 fw-bold">Ciroma Chukwuma</p>
              <span className="">Realtor</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 my-5">
          <div className="what_peep_wrap-1">
            <div className="top-img">
              <img src="./what_peep.jpg" alt="" />
            </div>
            <div className="text-align-center">
              <span className="">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                dapibus justo nec mi tincidunt, ac sollicitudin nunc cursus.
                Curabitur facilisis, purus et congue blandit, orci est fermentum
                libero, vel efficitur urna sapien ac sapien”
              </span>
              <p className="my-4 fw-bold">Ciroma Chukwuma</p>
              <span className="">Realtor</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 my-5">
          <div className="what_peep_wrap-1">
            <div className="top-img">
              <img src="./what_peep.jpg" alt="" />
            </div>
            <div className="text-align-center">
              <span className="">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                dapibus justo nec mi tincidunt, ac sollicitudin nunc cursus.
                Curabitur facilisis, purus et congue blandit, orci est fermentum
                libero, vel efficitur urna sapien ac sapien”
              </span>
              <p className="my-4 fw-bold">Ciroma Chukwuma</p>
              <span className="">Realtor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatPeepsSay;
