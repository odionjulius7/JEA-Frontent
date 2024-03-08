import { useState } from "react";
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

  //
  const [homePage, setHomePage] = useState(false);
  return (
    <>
      <div className="App--props-selected text-white">
        <div>
          <div className="white-gradient" />
          <Header />
          <div className="container-fluid px-5no mt-4">
            <div className="row py-5x">
              <div className="col-md-7 col-sm-12 dflex_2nd">
                <div className="row my-4">
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
                        <a href={`tel:+${propertyDetail?.agent_call}`}>
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
                        <a
                          href={`https://wa.me/${propertyDetail?.agent_whatsapp}`}
                          target="_blank"
                          rel="noreferrer"
                        >
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
                        src={propertyDetail.images[0]}
                        className="fit-content"
                        alt=""
                        style={{
                          height: "590px",
                          width: "500px",
                        }}
                      />
                    )}
                </div>
              </div>
            </div>
            <div
              className="row mb-5 display-none"
              style={{
                marginTop: "-18%",
                marginRight: "-11%",
              }}
            >
              <div className="col d-flex  text-align-center justify-content-center">
                <ProjAndPropSlide propertyDetail={propertyDetail} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Pop Up */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className=" mb-3">Share this property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <span>Share this link via</span>
          </div>
          <div className="row mt-5 gap-4">
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
            <div className="col-1 share_modal">
              {/* Add similar links for other social media platforms */}
              <FaInstagram style={{ color: "#D04B7B", fontSize: "22px" }} />
            </div>
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
              {/* Add similar links for other social media platforms */}
              <FaTelegramPlane style={{ color: "#0689C4", fontSize: "22px" }} />
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
              jea-frontent.vercel.app/property-selected/
              {propertyDetail?._id}
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
