import React, { useEffect, useState } from "react";
import FooterList from "./FooterList";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import { ArrowUpOutlined } from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
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

  const List = ["Home", "Properties", "Projects", "Blog"];
  const url_links1 = ["home", "properties", "projects", "blogs"];
  const url_links2 = ["about-us"];
  return (
    <div className="container-fluid f-wrapper px-5x py-2">
      {!isMobile && (
        <div className="row justify-content-between">
          <div className="col-md-10 col-sm-12">
            <div className="row justify-content-center align-align-items-center footer-1st-row py-4">
              <div className="col-5">
                <img src="/Logo-svg.svg" alt="logo" width={70} />
              </div>

              <div className="col-4 mt-3">
                <h5>Quick Links</h5>
              </div>
              <div className="col-3 mt-3">
                <h5>Company</h5>
              </div>
            </div>
            <hr className="divider my-0" style={{ border: "1px solid #fff" }} />
            <div className="row footer-2nd-row pt-5 pb-2">
              <div className="col-5">
                <span>
                  {" "}
                  Copyright © 2020 <br />
                  Joe Etoniru & Associates. <br />
                  All rights reserved.
                </span>
              </div>

              <div className="col-4">
                <FooterList List={List} url_links={url_links1} />
              </div>
              <div className="col-3">
                <FooterList
                  List={["About Us", "Get in touch", "Live Chat"]}
                  url_links={url_links2}
                />
              </div>
            </div>
          </div>
          <div className="col-2 mt-5 back-wrap ">
            <img
              src="/footer-up-svg.svg"
              alt="img"
              className="img-fluid"
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            />
          </div>
        </div>
      )}

      {isMobile && (
        <>
          {" "}
          <div className="row justify-content-between pt-4 pb-2">
            <div className="col-5">
              <img src="/Logo-svg.svg" alt="logo" width={70} />
            </div>
            <div className="col-5 d-flex flex-column align-items-center gap-2">
              <img
                src="/footer-up-svg.svg"
                alt="img"
                className="img-fluid"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              />
              <p style={{ fontSize: "12px" }}>Back to top</p>
            </div>
          </div>
          <div className="row pt-1 pb-5">
            <div className="col-5">
              <span>
                {" "}
                Copyright © 2020 <br />
                Joe Etoniru & Associates. <br />
                All rights reserved.
              </span>
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-5 mt-3">
              <h5>Quick Links</h5>
            </div>
            <div className="col-5 mt-3">
              <h5>Company</h5>
            </div>
          </div>
          {isMobile && (
            <hr className="divider my-4" style={{ border: "1px solid #fff" }} />
          )}
          <div className="row footer-2nd-row justify-content-start mb-5">
            <div
              className="col-5"
              style={{
                marginLeft: "-0.5rem",
              }}
            >
              <FooterList List={List} url_links={url_links1} />
            </div>
            <div className="col-5">
              <FooterList
                List={["About Us", "Get in touch", "Live Chat"]}
                url_links={url_links2}
              />
            </div>
          </div>
        </>
      )}
      {isMobile && (
        <hr className="divider my-0" style={{ border: "1px solid #fff" }} />
      )}
      <div className="row">
        <div className="col-md-3 col-sm-12 social-icon-wrap">
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
