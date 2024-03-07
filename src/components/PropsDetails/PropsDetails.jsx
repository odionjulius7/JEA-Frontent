import React from "react";

import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

import "./PropsDetails.css";

const PropsDetails = ({ propsDetails, propertyDetail }) => {
  // console.log(propertyDetail?.property_details);
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
            <li className="font_15">Price: ₦140,000,000</li>
            <li className="font_15">Address: Osapa London, Lagos.</li>
            <li className="font_15">
              Additional fees (For only rent categories): Service charge (2.3M),
              Agency (5%), Power Deposit (1M), Legal (5%).
            </li>
            <li className="font_15">Property ID: 2023TERRACE456</li>
            <li className="font_15">Property Type: Terrace House</li>
            <li className="font_15">Year Built: 2017</li>
            <li className="font_15">Category: For Sale</li>
            <li className="font_15">Status: Active</li>
            <li className="font_15">Number of Stories: 2</li>
            <li className="font_15">Garage Capacity: 2 cars</li>
            <li className="font_15">
              Recent Renovations: Freshly painted interior, updated kitchen, and
              modern fixtures.
            </li>
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
            <li className="font_15">
              4 spacious bedrooms, including a master suite with a walk-in
              closet and en-suite bathroom.
            </li>
            <li className="font_15">
              A gourmet kitchen with top-of-the-line appliances and granite
              countertops.
            </li>
            <li className="font_15">
              Open-concept living and dining areas with large windows for
              natural light.
            </li>
            <li className="font_15">Cozy fireplace in the living room.</li>
            <li className="font_15">
              Private backyard garden with a patio, perfect for outdoor
              gatherings.
            </li>
            <li className="font_15">wo-car garage with ample storage space.</li>
            <li className="font_15">Central air conditioning and heating</li>
            <li className="font_15">
              Hardwood floors and elegant finishes throughout.
            </li>
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
            <li className="font_15">
              Osapa London is a highly sought-after neighborhood in Lagos, known
              for its tranquility and convenience.
            </li>
            <li className="font_15">
              Nearby schools, including XYZ School and ABC Academy
            </li>
            <li className="font_15">
              Shopping options at the Osapa Shopping Mall
            </li>
            <li className="font_15">
              Dining and entertainment choices within a short drive
            </li>
            <li className="font_15">
              Well-maintained parks and green spaces for leisure activities
            </li>
            <li className="font_15">Easy access to public transportation</li>
          </ul>
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
                <a href="tel:+2348125461587">
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
                <a
                  href="https://wa.me/2348125461587"
                  target="_blank"
                  rel="noreferrer"
                >
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
