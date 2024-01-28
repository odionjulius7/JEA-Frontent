import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const SelectedProjImg = () => {
  return (
    <div className="container-fluid SelectedPorjImg">
      <div className="row my-5">
        <div className="col">
          <img src="./selected-proj-ig.png" alt="" className="fit-content" />
        </div>
        <div className="col">
          <img src="./selected-proj-ig.png" alt="" className="fit-content" />
        </div>
        <div className="col">
          <img src="./selected-proj-ig.png" alt="" className="fit-content" />
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <img src="./selected-proj-ig.png" alt="" className="fit-content" />
        </div>
        <div className="col">
          <img src="./selected-proj-ig.png" alt="" className="fit-content" />
        </div>
        <div className="col">
          <img src="./selected-proj-ig.png" alt="" className="fit-content" />
        </div>
      </div>

      <div className="row align-items-center ">
        <div className="row">
          <div
            className="col-6 mx-auto"
            style={{
              textAlign: "center",
            }}
          >
            <div className="d-flex gap-3 justify-content-center">
              <button
                type="button"
                className="btn btn-outline-light fit-content my-4"
                style={{
                  width: "30%",
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                <IoIosCall className="fs-4" /> Call Agent
              </button>
              <button
                type="button"
                className="btn btn-outline-light fit-content my-4"
                style={{
                  width: "30%",
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                <IoLogoWhatsapp className="fs-4" /> Message Agent
              </button>
            </div>
            <button
              type="button"
              className="btn btn-outline-light fit-content my-2"
              style={{
                width: "50%",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              <FaShareAlt className="fs-4 mx-4" /> Share this property
            </button>
          </div>
          <div
            className="row my-5"
            style={{
              textAlign: "center",
            }}
          >
            <div className="col-8 mx-auto">
              <button
                type="button"
                className="btn btn-outline-light fit-content my-2"
                style={{
                  width: "60%",
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                <FaLongArrowAltLeft className="fs-4 mx-4" /> Back to Projects
              </button>
            </div>
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
                backgroundColor: "rgb(37, 211, 102)",
                borderRadius: "200px",
                fontSize: "32px",
              }}
            >
              <FaWhatsapp
                style={{
                  color: "white",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProjImg;
