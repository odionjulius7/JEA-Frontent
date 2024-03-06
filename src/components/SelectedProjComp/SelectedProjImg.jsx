import React, { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SelectedProjImg = ({ projectDetail }) => {
  // console.log(projectDetail);
  //
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
    <div className="container-fluid SelectedPorjImg">
      <div className="row my-5">
        {projectDetail?.images?.slice(0, 3).map((item, index) => {
          return (
            <div key={index} className="col-4">
              <img
                src={item}
                alt=""
                className="w-100"
                style={{
                  height: "322px",
                  minWidth: "392px",
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="row my-5">
        {projectDetail?.images?.slice(3, 6).map((item, index) => {
          return (
            <div key={index} className="col-4 mb-5">
              <img
                src={item}
                alt=""
                className=""
                style={{
                  height: "322px",
                  width: "412px",
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="row align-items-center ">
        <div className="row">
          <div
            className="col-md-6 col-sm-12 mx-auto"
            style={{
              textAlign: "center",
              marginTop: "3rem",
              marginBottom: "4.5rem",
            }}
          >
            <div className="d-flex gap-3 justify-content-center call_mess_btn">
              <button
                type="button"
                className="btn btn-outline-light fit-content my-4"
                style={{
                  width: "26%",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                <IoIosCall className="fs-4 mr-1" /> Call Agent
              </button>
              <button
                type="button"
                className="btn btn-outline-light fit-content my-4"
                style={{
                  width: "28%",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                <IoLogoWhatsapp className="fs-4 mr-1" /> Message Agent
              </button>
            </div>
            <button
              type="button"
              className="btn btn-outline-light fit-content my-2 share_btn"
              style={{
                width: "40%",
                color: "#fff",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              <FaShareAlt className="fs-4 mx-3" /> Share this property
            </button>
          </div>
          <div
            className="row my-4"
            style={{
              textAlign: "center",
            }}
          >
            <div className="col-md-8 col-sm-12 mx-auto mb-5">
              <Link to="/projects">
                <button
                  type="button"
                  className="btn btn-outline-light fit-content my-2 share_btn"
                  style={{
                    width: "50%",
                    color: "#fff",
                    fontWeight: "600",
                    borderRadius: "200px",
                    marginTop: "2rem",
                    // marginBottom: "6rem",
                  }}
                >
                  {/* <FaLongArrowAltLeft className="fs-4 mx-4" /> */}
                  <img
                    src="./proj_left_arr.svg"
                    alt=""
                    className="mx-4 display-none"
                  />
                  Back to Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="row align-items-right justify-content-end">
          <div className="col-md-4 col-sm-12 d-flex align-items-center gap-3">
            {" "}
            <button
              id="search-btn"
              className="button fit-content my-4 "
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
        </div> */}
      </div>
    </div>
  );
};

export default SelectedProjImg;
