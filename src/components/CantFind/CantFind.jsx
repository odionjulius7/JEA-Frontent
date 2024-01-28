import React from "react";
import "./CantFind.css";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const CantFind = () => {
  return (
    <div className="container-fluid CantFind">
      <div className="row">
        <div
          className="col-6 mx-auto"
          style={{
            textAlign: "center",
          }}
        >
          <h3 className="mt-3">Can’t Find The Property You’re Looking For?</h3>
          <button
            id="search-btn"
            className="button fit-content my-4"
            style={{
              background: "#FBC344",
              width: "50%",
              color: "#000000",
              fontWeight: "600",
            }}
          >
            <Link to="/property-reqed">MAKE A CUSTOM REQUEST</Link>
          </button>
        </div>
      </div>
      <div className="row align-items-right justify-content-end">
        <div className="col-4 d-flex align-items-center gap-3">
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
      </div>
    </div>
  );
};

export default CantFind;

// news-letter-img
