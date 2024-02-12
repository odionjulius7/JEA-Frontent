import React from "react";

import "./SelectedProjVideo.css";

const SelectedProjVideo = () => {
  return (
    <div className="container-fluid SelectedProjVideo py-5">
      <div className="row gap-5 align-items-center">
        <div
          className="col-md-6 col-sm-12 px-3 pLeft"
          style={{
            marginLeft: "2rem",
          }}
        >
          <img
            src="./SelectedProjVideo.png"
            alt=""
            className=""
            style={{
              width: "100%",
            }}
          />
        </div>
        <div className="col-md-5 col-sm-12 ml-3 text-white">
          <p
            className="font_15 p-1"
            style={{
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Nestled in the heart of the vibrant and sought-after neighborhood of
            Osapa London, Lagos, this exquisite 4-bedroom terrace house presents
            an ideal family retreat that harmonizes modern elegance with the
            warmth of a welcoming home. As you step into this carefully crafted
            property, you'll immediately be captivated by its contemporary
            design, spacious layout, and a myriad of top-notch amenities, making
            it a true gem in the local real estate market.
          </p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "400",
            }}
            className="my-4 font_15 p-1"
          >
            Designed with meticulous attention to detail, this 4-bedroom terrace
            house boasts a unique architectural style that sets it apart from
            the rest. Its clean lines, large windows, and a tasteful color
            palette not only add to the property's curb appeal but also allow
            natural light to flood the interiors, creating an inviting and
            uplifting atmosphere throughout
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectedProjVideo;
