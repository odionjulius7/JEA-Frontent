import React, { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

const SelectedProjImg = ({ projectDetail }) => {
  // console.log(projectDetail);

  const [copied, setCopied] = useState(false);
  const copyLinkHandler = () => {
    setCopied(true);
    // You can show a notification or handle the copied state as needed
  };
  //
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    <>
      {" "}
      <div className="container-fluid SelectedPorjImg">
        <div
          className="row my-5"
          style={{
            marginLeft: "-10px",
          }}
        >
          {projectDetail?.images?.slice(0, 3).map((item, index) => {
            return (
              <div
                key={index}
                className="col-md-4 col-sm-10 mx-auto"
                style={{
                  margin: isMobile ? "5px 0 5px 0px" : "",
                }}
              >
                <img
                  src={item}
                  alt=""
                  className="w-100"
                  style={{
                    height: "322px",
                    maxWidth: "390px",
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="row my-5">
          {projectDetail?.images?.slice(3, 6).map((item, index) => {
            return (
              <div key={index} className="col-md-4 col-sm-12 mb-5">
                <img
                  src={item}
                  alt=""
                  className="w-100"
                  style={{
                    height: !isMobile ? "322px" : "312px",
                    minWidth: !isMobile ? "392px" : "370px",
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
                <a
                  href={`tel:+${projectDetail?.agent_call}`}
                  style={{
                    width: !isMobile ? "26%" : "97",
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-outline-light fit-content my-4"
                    style={{
                      width: "100%",
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: "15px",
                    }}
                  >
                    {" "}
                    <IoIosCall className="fs-4 mr-1" /> Call Agent
                  </button>
                </a>
                <a
                  href={`https://wa.me/${projectDetail?.agent_whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: !isMobile ? "28%" : "97",
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-outline-light fit-content my-4"
                    style={{
                      width: "100%",
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: "15px",
                    }}
                  >
                    <IoLogoWhatsapp className="fs-4 mr-1" /> Message Agent
                  </button>
                </a>
              </div>
              <button
                type="button"
                className="btn btn-outline-light fit-content mt-3 mb-5 share_btn"
                style={{
                  width: "40%",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
                onClick={handleShow}
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
                      src="/proj_left_arr.svg"
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
      {/*  Pop Up */}
      <Modal
        show={show}
        onHide={handleClose}
        style={{
          backgroundColor: "#FFFFFFD6",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title
            className=" mb-2"
            style={{
              fontSize: "22px",
              color: "#121212",
              fontWeight: "700",
            }}
          >
            Share this property
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <span
              style={{
                color: "#121212",
                size: "15px",
                fontWeight: "400",
              }}
            >
              Share this link via
            </span>
          </div>
          <div className="row mt-5 gap-5">
            <div className="col-1 share_modal">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF style={{ color: "#2774DC", fontSize: "22px" }} />
              </a>
            </div>
            <div className="col-1 share_modal">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter style={{ color: "#46C2F8", fontSize: "22px" }} />
              </a>
            </div>
            {/* <div className="col-1 share_modal">
              <FaInstagram style={{ color: "#D04B7B", fontSize: "22px" }} />
            </div> */}
            <div className="col-1 share_modal">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp style={{ color: "#5BB681", fontSize: "22px" }} />
              </a>
            </div>
            <div className="col-1 share_modal">
              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane
                  style={{ color: "#0689C4", fontSize: "22px" }}
                />
              </a>
            </div>
          </div>
          <div className="row my-4">
            <span>Or copy link</span>
          </div>
          <div
            className="d-flex gap-4  flex-row"
            style={{
              border: "1px solid #D7D7D7",
              borderRadius: "5px",
              padding: "5px",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img src="/link.svg" alt="hh" />
            <span
              style={{
                fontSize: "13px",
                color: "#7A7A7A",
              }}
            >
              jea-frontent.vercel.app/selected-project/
              {projectDetail?._id}
            </span>
            <CopyToClipboard
              text={window.location.href}
              onCopy={copyLinkHandler}
            >
              <Button
                style={{
                  color: "#000000",
                  backgroundColor: "#FBC344",
                  borderColor: "#FBC344",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px 10px",
                  paddingBottom: "8px",
                }}
              >
                {copied ? "Copied!" : "Copy"}
              </Button>
            </CopyToClipboard>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SelectedProjImg;
