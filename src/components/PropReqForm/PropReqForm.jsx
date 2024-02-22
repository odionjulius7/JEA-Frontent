import React, { useEffect, useState } from "react";

import "./PropReqForm.css";
import Radios from "../Radios";
import SelectComp from "../Select";
import { Input } from "antd";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PropReqForm = () => {
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
  //
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="container-fluid PropReqForm">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <h4>
            Please complete the form below with the details of your request and
            we will get back to you as soon as possible
          </h4>
          <div className="row py-5x">
            <h5 className="py-2">Inquirer Category</h5>
            <Radios />
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 ">
              <h5 className="py-2">Property Category</h5>
              <div
                style={{
                  width: isMobile ? "250px" : "385px",
                  height: "50px",
                }}
              >
                <FormControl
                  sx={{
                    width: "inherit",
                    height: "inherit",
                  }}
                >
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <span className="">{"Sale"}</span>
                    </MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 ">
              <h5 className="py-2">Number of Bedrooms</h5>
              <div
                style={{
                  width: isMobile ? "250px" : "385px",
                  height: "50px",
                }}
              >
                <FormControl
                  sx={{
                    width: "inherit",
                    height: "inherit",
                  }}
                >
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <span className="">{"1"}</span>
                    </MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-6 col-sm-12">
              <h5 className="py-2">Maximum Budget (N)</h5>
              <div
                style={{
                  width: isMobile ? "250px" : "385px",
                  height: "50px",
                }}
              >
                {" "}
                <Input
                  style={{
                    width: "inherit",
                    height: "inherit",
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <h5 className="py-2">Location</h5>
              <div
                style={{
                  width: isMobile ? "250px" : "385px",
                  height: "50px",
                }}
              >
                {" "}
                <Input
                  style={{
                    width: "inherit",
                    height: "inherit",
                  }}
                />
              </div>
            </div>
          </div>
          {/* textarea */}
          <div className="row my-4">
            <div className="">
              <h5 className="py-2">Additional Details</h5>
              <div
                style={{
                  width: isMobile ? "250px" : "385px",
                  height: "118px",
                }}
              >
                {" "}
                <textarea
                  name=""
                  id=""
                  className="w-100"
                  style={{
                    height: "inherit",
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          {/* textarea */}
          <div className="row my-4">
            <div className="col-md-6 col-sm-12">
              <h5 className="py-2">Full Name</h5>
              <div
                style={{
                  width: isMobile ? "250px" : "385px",
                  height: "50px",
                }}
              >
                {" "}
                <Input
                  style={{
                    width: "inherit",
                    height: "inherit",
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <h5 className="py-2">Country</h5>
              <div
                style={{
                  width: isMobile ? "250px" : "385px",
                  height: "50px",
                }}
              >
                <Input
                  style={{
                    width: "inherit",
                    height: "inherit",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-6 col-sm-12">
              <h5 className="py-2">Phone Number</h5>
              <div
                style={{
                  width: isMobile ? "250px" : "385px",
                  height: "50px",
                }}
              >
                {" "}
                <Input
                  style={{
                    width: "inherit",
                    height: "inherit",
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <h5 className="py-2">Email Address</h5>
              <div
                style={{
                  width: isMobile ? "250px" : "385px",
                  height: "50px",
                }}
              >
                <Input
                  style={{
                    width: "inherit",
                    height: "inherit",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-3 col-sm-6">
          <button
            id="search-btn"
            className="button fit-content"
            style={{
              background: "#FBC344",
              width: "88%",
              color: "#000000",
              fontWeight: "600",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropReqForm;
