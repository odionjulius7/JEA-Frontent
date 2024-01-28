import React from "react";

import "./PropReqForm.css";
import Radios from "../Radios";
import SelectComp from "../Select";
import { Input } from "antd";

const PropReqForm = () => {
  return (
    <div className="container-fluid PropReqForm">
      <div className="row">
        <div className="col-8">
          <h4>
            Please complete the form below with the details of your request and
            we will get back to you as soon as possible
          </h4>
          <div className="row py-5">
            <h5 className="py-2">Inquirer Category</h5>
            <Radios />
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h5 className="py-2">Property Category</h5>
              <SelectComp widthx={"80%"} />
            </div>
            <div className="col-sm-12 col-md-6">
              <h5 className="py-2">Number of Bedrooms</h5>
              <SelectComp widthx={"80%"} />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-sm-12 col-md-6">
              <h5 className="py-2">Maximum Budget (N)</h5>
              <Input
                style={{
                  width: "80%",
                  height: "50px",
                }}
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <h5 className="py-2">Location</h5>
              <Input
                style={{
                  width: "80%",
                  height: "50px",
                }}
              />
            </div>
          </div>
          {/* textarea */}
          {/* textarea */}
          <div className="row my-5">
            <div className="col-sm-12 col-md-6">
              <h5 className="py-2">Full Name</h5>
              <Input
                style={{
                  width: "80%",
                  height: "50px",
                }}
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <h5 className="py-2">Country</h5>
              <Input
                style={{
                  width: "80%",
                  height: "50px",
                }}
              />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-sm-12 col-md-6">
              <h5 className="py-2">Phone Number</h5>
              <Input
                style={{
                  width: "80%",
                  height: "50px",
                }}
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <h5 className="py-2">Email Address</h5>
              <Input
                style={{
                  width: "80%",
                  height: "50px",
                }}
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col-3">
              <button
                id="search-btn"
                className="button fit-content"
                style={{
                  background: "#FBC344",
                  width: "100%",
                  color: "#000000",
                  fontWeight: "600",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropReqForm;
