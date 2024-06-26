import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";

import { IoIosCall } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";
import ProjAndPropSlide from "../Slider/ProjAndPropSlide";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
{
  /* <div dangerouslySetInnerHTML={{ __html: propertyDetail?.property_details }} /> */
}
const PropsSelectedHero = ({ propertyDetail }) => {
  const [copied, setCopied] = useState(false);
  const copyLinkHandler = () => {
    setCopied(true);
    // You can show a notification or handle the copied state as needed
  };
  //
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow(false);

  //
  const [homePage, setHomePage] = useState(false);
  const [displayImg, setDisplayImg] = useState(0);

  //
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
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
  let phoneNumber;
  if (propertyDetail?.agent_whatsapp.startsWith("234")) {
    // If what_num contains a country code, use it as is
    phoneNumber = propertyDetail?.agent_whatsapp;
  } else {
    // If no country code is found, add 234 as the prefix
    phoneNumber = `234${propertyDetail?.agent_whatsapp}`;
  }

  const href = `https://wa.me/${phoneNumber}`;

  //
  let callNumber;
  if (propertyDetail?.agent_call.startsWith("234")) {
    // If what_num contains a country code, use it as is
    callNumber = propertyDetail?.agent_call;
  } else {
    // If no country code is found, add 234 as the prefix
    callNumber = `234${propertyDetail?.agent_call}`;
  }

  const hrefCall = `tel:+${callNumber}`;
  console.log(callNumber);
  return (
    <>
      <div className="App--props-selected text-white">
        <div>
          <div className="white-gradient" />
          <Header />
          <div className="container-fluid px-5no mt-4">
            <div className="row py-5x">
              <div
                className="col-md-7 col-sm-12 dflex_2nd"
                style={{
                  marginTop: isMobile ? "0px" : "",
                }}
              >
                <div
                  className="row my-4"
                  style={{
                    marginTop: isMobile ? "0px" : "",
                  }}
                >
                  <div className="col-md-6 col-sm-12">
                    <Link to="/properties">
                      <button
                        type="button"
                        class="btn btn-outline-dark px-4 font_15"
                        style={{
                          fontWeight: 500,
                          fontSize: "15px",
                          borderRadius: "90px",
                        }}
                      >
                        VIEW ALL PROPERTIES
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="row my-4">
                  <h2 className="fw-bold font_30">{propertyDetail?.title}</h2>
                  <div
                    className="input-styles w-50 my-3"
                    style={{
                      borderBottom: "2px solid grey",
                    }}
                  ></div>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/location_icon.svg"
                      alt="hehvs"
                      style={{
                        marginRight: "5px",
                      }}
                    />
                    {propertyDetail?.location} |{" "}
                    <b>
                      {new Intl.NumberFormat("en-NG", {
                        style: "currency",
                        currency: "NGN",
                        minimumFractionDigits: 0,
                      }).format(propertyDetail?.price)}
                    </b>
                  </span>
                </div>
                <div className="row d-flex my-4">
                  <div className="col-md-6 col-sm-12 d-flex gap-4">
                    <div className="row gap-3">
                      {" "}
                      <button
                        type="button"
                        className="btn btn-outline-dark fit-content font_15"
                        style={{
                          fontWeight: "600",
                        }}
                      >
                        <a href={hrefCall}>
                          <IoIosCall className="fs-4" /> Call Agent
                        </a>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-dark fit-content font_15"
                        style={{
                          // width: "50%",
                          fontWeight: "600",
                        }}
                      >
                        {" "}
                        <a href={href} target="_blank" rel="noreferrer">
                          <IoLogoWhatsapp className="fs-4" /> Message Agent
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <button
                    type="button"
                    className="btn btn-outline-dark fit-content font_15"
                    style={{
                      fontWeight: "600",
                    }}
                    onClick={handleShow}
                  >
                    <FaShareAlt className="fs-4 mx-4" /> Share this property
                  </button>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 dflex_1st px-5no">
                <div>
                  {propertyDetail?.images &&
                    propertyDetail.images.length > 0 && (
                      <img
                        src={propertyDetail.images[displayImg]}
                        className="fit-content main-selected-img"
                        alt=""
                        style={{
                          height: "560px",
                          width: "500px",
                        }}
                      />
                    )}
                </div>
                <div
                  id="slide_prop"
                  className="col d-flex  text-align-center justify-content-center"
                >
                  <ProjAndPropSlide
                    // widthxs={!isMobile ? "98%" : "62.9%"}
                    widthxs={!isMobile ? "98%" : ""}
                    propertyDetail={propertyDetail}
                    setDisplayImg={setDisplayImg}
                    handleShow1={handleShow1}
                  />
                </div>
              </div>
            </div>
            <div
              className="row mb-5 display-none"
              style={{
                marginTop: "-17.4%",
                marginRight: "-6%",
              }}
            >
              <div className="col d-flex  text-align-center justify-content-center">
                <ProjAndPropSlide
                  setDisplayImg={setDisplayImg}
                  propertyDetail={propertyDetail}
                  handleShow1={handleShow1}
                />
              </div>
            </div>
          </div>
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
                fontSize: !isMobile ? "13px" : "9px",
                color: "#7A7A7A",
              }}
            >
              https://joetoniruest.com/property/
              {propertyDetail?.slug}
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

export default PropsSelectedHero;
