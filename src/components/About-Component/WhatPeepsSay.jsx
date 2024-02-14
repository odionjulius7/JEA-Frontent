import React from "react";

import Buttons from "../Buttons";

const WhatPeepsSay = () => {
  return (
    <div className="container-fluid WhatPeepsSay">
      <div className="row py-5">
        <div className="col-12 d-flex justify-content-center">
          <h2 className="mb-5">What People Say About Us</h2>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-4 col-sm-6">
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
        <div className="col-md-4 col-sm-6">
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
        <div className="col-md-4 col-sm-6">
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
