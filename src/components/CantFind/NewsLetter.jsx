import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import GetInTInput from "../GetInTInput/GetInTInput";
import "./CantFind.css";

const NewsLetter = ({ newLetterComp, blogPage, selectedProps }) => {
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
    <div className="container-fluid NewsLetter">
      <div className="row py-4">
        <div className="row mb-4">
          {newLetterComp ? (
            <div className="col-md-6 col-sm-12">
              <h4 className="pb-2">Subscribe to Our Newsletter</h4>

              <span>
                Stay ahead in the real estate game. Sign up for our newsletter
                to receive exclusive property listings, market insights, and
                expert advice right in your inbox
              </span>
            </div>
          ) : (
            <div className="col-md-6 col-sm-12">
              {selectedProps ? (
                <h4 className="pb-2">Get Latest Properties</h4>
              ) : (
                <h4 className="pb-2">Subscribe to Our Newslettter</h4>
              )}
              <span>
                Stay ahead in the real estate game. Sign up for our newsletter
                to receive exclusive property listings, market insights, and
                expert advice right in your inbox
              </span>
            </div>
          )}
        </div>
        <div className="row my-5">
          <div className="col-md-6 col-sm-12">
            <GetInTInput text={"First name"} bordr={"news-lett-input"} />
          </div>
          <div
            className="col-md-6 col-sm-12"
            style={{
              marginTop: isMobile ? "2rem" : "",
            }}
          >
            <GetInTInput text={"Email address"} bordr={"news-lett-input"} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <button type="button" class="btn btn-outline-light ">
            {newLetterComp ? "SUBSCRIBE" : "SUBMIT"}
          </button>
        </div>
      </div>
      {/* {newLetterComp && (
        <div className="row align-items-right justify-content-end">
          <div className="col-md-3 col-sm-6 d-flex align-items-center gap-3 mt-4">
            {" "}
            <button
              id="search-btn"
              className="button fit-content my-4 font_15"
              style={{
                background: "#25D366",
                //   width: "50%",
                color: "#ffffff",
                fontWeight: "600",
                borderRadius: "90px",
              }}
            >
              Chat with us
            </button>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                cursor: "pointer",
                padding: "10px",
                backgroundColor: "#075E54",
                borderRadius: "200px",
                fontSize: "32px",
              }}
            >
              <FaWhatsapp
                style={{
                  color: "",
                }}
              />
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default NewsLetter;
