import React from "react";
import FooterList from "./FooterList";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import { ArrowUpOutlined } from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  const List = ["Home", "Properties", "Projects", "Blog"];
  return (
    <div className="container-fluid f-wrapper px-5 py-2">
      <div className="row">
        <div className="col-10">
          <div className="row justify-content-center align-align-items-center footer-1st-row py-4">
            <div className="col-4">
              <img src="./logo-equinix.png" alt="logo" width={70} />
            </div>
            <div className="col-4 mt-3">
              <h5>Quick Links</h5>
            </div>
            <div className="col-4 mt-3">
              <h5>Company</h5>
            </div>
          </div>
          <hr
            className="divider mx-1 my-0"
            style={{ border: "1px solid #fff" }}
          />
          <div className="row footer-2nd-row pt-5 pb-2">
            <div className="col-4">
              <span>
                {" "}
                Copyright © 2020 <br />
                Joe Etoniru & Associates. <br />
                All rights reserved.
              </span>
            </div>
            <div className="col-4">
              <FooterList List={List} />
            </div>
            <div className="col-4">
              <FooterList List={["About Us", "Get in touch", "Live Chat"]} />
            </div>
          </div>
        </div>
        <div className="col-2 mt-5 back-wrap">
          <div className=" back-top">
            <ArrowUpOutlined />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3 social-icon-wrap">
          <p className="">Follow us</p>
          <div className="social-icon">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
