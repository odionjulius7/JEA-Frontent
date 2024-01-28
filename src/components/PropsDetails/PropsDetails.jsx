import React from "react";

import { IoMdCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

import "./PropsDetails.css";
import AntDesignBtn from "../AntDesignBtn";

const PropsDetails = ({ propsDetails }) => {
  return (
    <div className="container-fluid PropsDetails">
      {propsDetails && (
        <div className="row">
          <div className="col-3">
            <h5>
              Property <br />
              Description
            </h5>
          </div>
          <div className="col-8">
            <p>
              Nestled in the heart of Osapa London, Lagos, this exquisite
              4-bedroom terrace house presents an ideal family retreat. With its
              contemporary design, spacious layout, and top-notch amenities,
              this property offers the perfect blend of comfort, style, and
              convenience.
            </p>
          </div>
        </div>
      )}
      {propsDetails && (
        <div
          className={`my-3 ${propsDetails ? "grey-border" : "white-border"}`}
        ></div>
      )}
      <div className="row">
        <div className="col-3">
          <h5>
            Property
            <br />
            Details
          </h5>
        </div>
        <div className="col-8">
          <ul>
            <li>Price: ₦140,000,000</li>
            <li>Address: Osapa London, Lagos.</li>
            <li>
              Additional fees (For only rent categories): Service charge (2.3M),
              Agency (5%),
            </li>
            <li>Deposit (1M), Legal (5%).</li>
            <li>Property ID: 2023TERRACE456</li>
            <li>Property Type: Terrace House</li>
            <li>Year Built: 2017</li>
            <li>Category: For Sale</li>
            <li>Status: Active</li>
            <li>Number of Stories: 2</li>
            <li>Garage Capacity: 2 cars</li>
            <li>
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
        <div className="col-3">
          <h5>
            Amenities &
            <br />
            Features
          </h5>
        </div>
        <div className="col-8">
          <ul>
            <li>
              4 spacious bedrooms, including a master suite with a walk-in
              closet and en-suite bathroom.
            </li>
            <li>
              A gourmet kitchen with top-of-the-line appliances and granite
              countertops.
            </li>
            <li>
              Open-concept living and dining areas with large windows for
              natural light.
            </li>
            <li>Cozy fireplace in the living room.</li>
            <li>
              Private backyard garden with a patio, perfect for outdoor
              gatherings.
            </li>
            <li>Two-car garage with ample storage space.</li>
            <li>Central air conditioning and heating.</li>
            <li>Hardwood floors and elegant finishes throughout.</li>
          </ul>
        </div>
      </div>
      <div
        className={`my-3 ${propsDetails ? "grey-border" : "white-border"}`}
      ></div>
      <div className="row">
        <div className="col-3">
          <h5>
            Neighborhood
            <br />
            Information
          </h5>
        </div>
        <div className="col-8">
          <ul>
            <li>
              Osapa London is a highly sought-after neighborhood in Lagos, known
              for its tranquility and convenience.
            </li>
            <li>Nearby schools, including XYZ School and ABC Academy</li>
            <li>Shopping options at the Osapa Shopping Mall</li>
            <li>Dining and entertainment choices within a short drive</li>
            <li>
              Well-maintained parks and green spaces for leisure activities
            </li>
            <li>Easy access to public transportation</li>
          </ul>
        </div>
      </div>
      {propsDetails && (
        <div className="row py-4 my-4 ">
          <div className="col-5 d-flex gap-4 mx-auto">
            <AntDesignBtn text={"CALL AGENT"} icons={<IoMdCall />} />

            <AntDesignBtn text={"MESSAGE AGENT"} icons={<IoLogoWhatsapp />} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PropsDetails;
