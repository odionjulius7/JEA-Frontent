import React from "react";

import { FaWhatsapp } from "react-icons/fa";

import "./FloatWhatsapp.css";

const FloatWhatsapp = () => {
  return (
    // <div className="row align-items-right FloatWhatsapp">
    <div className="d-flex justify-content-end align-items-center gap-3 FloatWhatsapp p-0">
      {" "}
      <a
        // href="https://api.whatsapp.com/send?phone=2438125461587"
        href={`https://wa.me/2348125461587`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="button fit-content my-4"
          style={{
            background: "#25D366",
            color: "#ffffff",
            fontWeight: "600",
            borderRadius: "90px",
            fontSize: "13px",
          }}
        >
          Chat with us
        </button>
      </a>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          cursor: "pointer",
          padding: "10px",
          backgroundColor: "#075E54",
          borderRadius: "200px",
          fontSize: "32px",
          color: "#fff",
        }}
      >
        <FaWhatsapp
          style={{
            color: "",
          }}
        />
      </div>
    </div>
    // </div>
  );
};

export default FloatWhatsapp;
