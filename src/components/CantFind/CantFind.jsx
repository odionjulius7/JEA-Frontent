import React from "react";
import "./CantFind.css";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const CantFind = () => {
  return (
    <div className="container-fluid CantFind">
      <div className="row">
        <div
          className="col-md-6 col-sm-12 mx-auto mt-5"
          style={{
            textAlign: "center",
          }}
        >
          <h2 className="mt-3 mb-3">
            Can’t Find The Property You’re Looking For?
          </h2>
          <button
            id="search-btn"
            className="button fit-content my-4 make_req"
            style={{
              background: "#FBC344",
              fontSize: "15px",
              color: "#000000",
              fontWeight: "500",
            }}
          >
            <Link to="/property-reqed">MAKE A CUSTOM REQUEST</Link>
          </button>
        </div>
      </div>
      {/* <div className="row align-items-right mt-4 justify-content-end">
        <div className="col-md-4 col-sm-12 d-flex align-items-center gap-3 cant_D">
          {" "}
          <button
            id="search-btn"
            className="button fit-content my-4"
            style={{
              background: "#25D366",
              //   width: "50%",
              color: "#ffffff",
              fontWeight: "600",
              borderRadius: "90px",
            }}
          >
            CHAT WITH US
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
      </div> */}
    </div>
  );
};

export default CantFind;

// news-letter-img
