import React from "react";

import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

import "./PropsDetails.css";

const PropsDetails = ({ propsDetails, propertyDetail }) => {
  console.log(propertyDetail);
  return (
    <div className="container-fluid PropsDetails">
      {propsDetails && (
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <h5>
              Property <br className="brk_none" /> Description
            </h5>
          </div>
          <div className="col-md-8 col-sm-12">
            <p className="font_15">{propertyDetail?.description}</p>
          </div>
        </div>
      )}
      {propsDetails && (
        <div
          className={`my-3 ${propsDetails ? "grey-border" : "white-border"}`}
        ></div>
      )}
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <h5>
            Property
            <br className="brk_none" /> Details
          </h5>
        </div>
        <div className="col-md-8 col-sm-12">
          {/* <ul> */}
          {/* <li className="font_15"> */}
          <span
            className="font_15 text-white"
            dangerouslySetInnerHTML={{
              __html: propertyDetail?.property_details,
            }}
          />
          {/* </li> */}
          {/* </ul> */}
        </div>
      </div>
      <div
        className={`my-3 ${propsDetails ? "grey-border" : "white-border"}`}
      ></div>
      <div className="row">
        <div className="col-md-3 col-sm-15">
          <h5>
            Amenities &
            <br className="brk_none" /> Features
          </h5>
        </div>
        <div className="col-md-8 col-sm-15">
          {/* <ul>
            <li className="font_15">
              4 spacious bedrooms, including a master suite with a walk-in
              closet and en-suite bathroom.
            </li></ul> */}
          <span
            className="font_15"
            dangerouslySetInnerHTML={{
              __html: propertyDetail?.features,
            }}
          />
        </div>
      </div>
      <div
        className={`my-3 ${propsDetails ? "grey-border" : "white-border"}`}
      ></div>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <h5>
            Neighborhood
            <br className="brk_none" /> Information
          </h5>
        </div>
        <div className="col-md-8 col-sm-12">
          <span
            className="font_15"
            dangerouslySetInnerHTML={{
              __html: propertyDetail?.neighborhood_info,
            }}
          />
        </div>
      </div>
      {propsDetails && (
        <div className="row py-4 my-4 ">
          <div className="col-md-5 col-sm-12 d-flex justify-content-center gap-4 mx-auto">
            <div className="row gap-3">
              <button
                type="button"
                className="btn btn-outline-dark fit-content font_15"
                style={{
                  fontWeight: "600",
                }}
              >
                <IoIosCall className="fs-4" /> Call Agent
              </button>

              <button
                type="button"
                className="btn btn-outline-dark fit-content font_15"
                style={{
                  // width: "50%",
                  fontWeight: "600",
                }}
              >
                <IoLogoWhatsapp className="fs-4 " /> Message Agent
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropsDetails;
