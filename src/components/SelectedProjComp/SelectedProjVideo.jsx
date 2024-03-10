import React, { useEffect, useState } from "react";

import "./SelectedProjVideo.css";

const SelectedProjVideo = ({ projectDetail }) => {
  //
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
    <div className="container-fluid SelectedProjVideo py-5">
      <div className="row gap-5 align-items-center">
        <div
          className="col-md-6 col-sm-12 px-3 pLeft"
          style={{
            marginLeft: "2rem",
          }}
        >
          <img
            src={projectDetail?.images[0]}
            alt=""
            className=""
            style={{
              width: "100%",
              height: !isMobile ? "421px" : "312px",
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
            {projectDetail?.description}
          </p>
          {/* <p
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
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SelectedProjVideo;
