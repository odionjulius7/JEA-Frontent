import React, { useEffect, useState } from "react";

import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

import "./PropsDetails.css";

const PropsDetails = ({ propsDetails, propertyDetail }) => {
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

  // console.log(propertyDetail);

  let phoneNumber;
  if (propertyDetail?.agent_whatsapp.startsWith("234")) {
    // If what_num contains a country code, use it as is
    phoneNumber = propertyDetail?.agent_whatsapp;
  } else {
    // If no country code is found, add 234 as the prefix
    phoneNumber = `234${propertyDetail?.agent_whatsapp}`;
  }

  const href = `https://wa.me/${phoneNumber}`;

  //
  let callNumber;
  if (propertyDetail?.agent_call.startsWith("234")) {
    // If what_num contains a country code, use it as is
    callNumber = propertyDetail?.agent_call;
  } else {
    // If no country code is found, add 234 as the prefix
    callNumber = `234${propertyDetail?.agent_call}`;
  }

  const hrefCall = `tel:+${callNumber}`;

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
          <ul>
            {propertyDetail?.price && (
              <li className="font_15">
                Price:{" "}
                {new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                  minimumFractionDigits: 0,
                }).format(propertyDetail?.price)}
              </li>
            )}
            {propertyDetail?.address && (
              <li className="font_15">Address: {propertyDetail?.address}.</li>
            )}
            {propertyDetail?.additional_fees && (
              <li className="font_15">
                Additional fees (For only rent categories):{" "}
                {propertyDetail?.additional_fees}
              </li>
            )}
            {propertyDetail?.property_id && (
              <li className="font_15">
                Property ID: {propertyDetail?.property_id}
              </li>
            )}
            {propertyDetail?.property_type && (
              <li className="font_15">
                Property Type: {propertyDetail?.property_type}
              </li>
            )}
            {propertyDetail?.year_built && (
              <li className="font_15">
                Year Built: {propertyDetail?.year_built}
              </li>
            )}
            {propertyDetail?.details_category && (
              <li className="font_15">
                Category: {propertyDetail?.details_category}
              </li>
            )}
            {propertyDetail?.status && (
              <li className="font_15">Status: {propertyDetail?.status}</li>
            )}
            {propertyDetail?.number_of_room && (
              <li className="font_15">
                Number of Rooms: {propertyDetail?.number_of_room}
              </li>
            )}
            {propertyDetail?.Number_of_Stories && (
              <li className="font_15">
                Number of Stories: {propertyDetail?.Number_of_Stories}
              </li>
            )}
            {propertyDetail?.garage_capacity && (
              <li className="font_15">
                Garage Capacity: {propertyDetail?.property_id}
              </li>
            )}
            {propertyDetail?.recent_renovations && (
              <li className="font_15">
                Recent Renovations: {propertyDetail?.recent_renovations}
              </li>
            )}
          </ul>
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
          <ul>
            {propertyDetail?.feature_1 && (
              <li className="font_15">{propertyDetail?.feature_1}</li>
            )}
            {propertyDetail?.feature_2 && (
              <li className="font_15">{propertyDetail?.feature_2}</li>
            )}
            {propertyDetail?.feature_4 && (
              <li className="font_15">{propertyDetail?.feature_4}</li>
            )}
            {propertyDetail?.feature_5 && (
              <li className="font_15">{propertyDetail?.feature_5}</li>
            )}
            {propertyDetail?.feature_6 && (
              <li className="font_15">{propertyDetail?.feature_6}</li>
            )}
            {propertyDetail?.feature_7 && (
              <li className="font_15">{propertyDetail?.feature_7}</li>
            )}
            {propertyDetail?.feature_8 && (
              <li className="font_15">{propertyDetail?.feature_8}</li>
            )}
          </ul>
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
          <ul>
            {propertyDetail?.neighborhood_info1 && (
              <li className="font_15">{propertyDetail?.neighborhood_info1}</li>
            )}
            {propertyDetail?.neighborhood_info2 && (
              <li className="font_15">{propertyDetail?.neighborhood_info2}</li>
            )}
            {propertyDetail?.neighborhood_info3 && (
              <li className="font_15">{propertyDetail?.neighborhood_info3}</li>
            )}
            {propertyDetail?.neighborhood_info4 && (
              <li className="font_15">{propertyDetail?.neighborhood_info4}</li>
            )}
            {propertyDetail?.neighborhood_info5 && (
              <li className="font_15">{propertyDetail?.neighborhood_info5}</li>
            )}
            {propertyDetail?.neighborhood_info6 && (
              <li className="font_15">{propertyDetail?.neighborhood_info6}</li>
            )}
          </ul>
        </div>
      </div>
      {propertyDetail?.youtube_url && (
        <div className="row mt-5 mb-2">
          <div
            className=" video d-flex justify-content-center"
            style={{
              padding: isMobile ? "5px 0 5px 23px" : "",
            }}
          >
            <iframe
              // width="50%"
              // height="400"
              style={{
                width: !isMobile ? "50%" : "100%",
                height: "300px",
              }}
              src={`https://www.youtube-nocookie.com/embed/${propertyDetail?.youtube_url}`}
              // src={`https://www.youtube-nocookie.com/embed/g-TYUdM0rjk`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;controls=0;showinfo=0;mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;"
              allowfullscreen
            ></iframe>
                      
          </div>
        </div>
      )}
      {/*  */}
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
                <a href={hrefCall}>
                  <IoIosCall className="fs-4" /> Call Agent
                </a>
              </button>

              <button
                type="button"
                className="btn btn-outline-dark fit-content font_15"
                style={{
                  // width: "50%",
                  fontWeight: "600",
                }}
              >
                <a href={href} target="_blank" rel="noreferrer">
                  <IoLogoWhatsapp className="fs-4 " /> Message Agent
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropsDetails;
