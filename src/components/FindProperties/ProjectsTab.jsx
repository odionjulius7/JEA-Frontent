import React, { useEffect, useState } from "react";

import { Col, Nav, Row, Tab } from "react-bootstrap";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import { Link } from "react-router-dom";

import "./FindProp.css";

const ProjectsTab = () => {
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
      <Tab.Container
        className="text-white"
        id="left-tabs-example"
        defaultActiveKey="first"
      >
        <Row className="mt-3 mb-5">
          <Col sm={6} className="mx-auto text-white">
            <Nav variant="" className="flex-row justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey="first" className="text-white">
                  COMPLETED PROJECTS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="text-white">
                  ONGOING PROJECTS
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row className="px-0">
          <Col sm={12} className="text-dark">
            <Tab.Content className="p-0">
              <Tab.Pane eventKey="first" className=" text-white ">
                <div className="proj-tab-bg py-3">
                  <div className="row align-items-center p-5 justify-content-between">
                    <div className="col-md-6 col-sm-12 dflex_2nd px-3">
                      <h2>Megamound</h2>
                      <div className="d-flex gap-5x py-3 align-items-center wrap_flexx">
                        <div className="d-flex gap-2 align-items-center">
                          <img src="./bed_proj.svg" alt="" />
                          <span>5 Beds</span>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <img src="./new_releases.svg" alt="" />
                          <span>2017</span>
                        </div>

                        <div className="d-flex gap-2 align-items-center">
                          <img src="./cottage.svg" alt="" />
                          <span>Fully Detached</span>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <img src="./location_on.svg" alt="" />
                          <span>Ikota</span>
                        </div>
                      </div>
                      <hr
                        className="text-white my-3"
                        style={{
                          borderTop: "4px solid white",
                        }}
                      />
                      <div>
                        <span>
                          In a groundbreaking and imaginative leap forward in
                          real estate, the concept of "Floating Cities" is
                          taking the industry by storm. Imagine a world where
                          entire commu ...
                        </span>
                      </div>
                      <div className="row mt-5">
                        <div className="col-md-6 col-sm-12 btn_center">
                          <Link className="w-100" to="/selected-project">
                            <button
                              className="btn btn-outline-light px-5 btn_center font_15 mt-5 w-100"
                              style={{
                                fontWeight: "500",
                                paddingBottom: "1rem",
                                paddingTop: "1rem",
                              }}
                            >
                              VIEW MORE
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12 dflex_1st">
                      <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="./projs-side-img.png"
                              className="d-block w-100"
                              alt="..."
                              style={{
                                marginLeft: isMobile ? "1rem" : "",
                              }}
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="./projs-side-img.png"
                              className="d-block w-100"
                              alt="..."
                              style={{
                                marginLeft: isMobile ? "1rem" : "",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row pb-3 py-5x px-5 align-items-center d-md-flex">
                        <div className="col">
                          <button
                            className="btn btn-outline-light line-img "
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                          >
                            <img src="./arrow_left_svg.svg" alt="line-img" />
                            {/* <FaLongArrowAltLeft /> */}
                          </button>
                        </div>
                        <div className="col div_btn">01 - 03</div>
                        <div className="col">
                          <button
                            className="btn btn-outline-light line-img"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                          >
                            <img src="./arrow_right_svg.svg" alt="line-img" />
                            {/* <FaLongArrowAltRight /> */}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="proj-tab-bg py-3">
                  <div className="row align-items-center p-5 justify-content-between">
                    <div className="col-md-6 col-sm-12 dflex_2nd px-3">
                      <h2>Megamound</h2>
                      <div className="d-flex gap-5x py-3 align-items-center wrap_flexx">
                        <div className="d-flex gap-2 align-items-center">
                          <img src="./bed_proj.svg" alt="" />
                          <span>5 Beds</span>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <img src="./new_releases.svg" alt="" />
                          <span>2017</span>
                        </div>

                        <div className="d-flex gap-2 align-items-center">
                          <img src="./cottage.svg" alt="" />
                          <span>Fully Detached</span>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <img src="./location_on.svg" alt="" />
                          <span>Ikota</span>
                        </div>
                      </div>
                      <hr
                        className="text-white my-3"
                        style={{
                          borderTop: "4px solid white",
                        }}
                      />
                      <div>
                        <span>
                          In a groundbreaking and imaginative leap forward in
                          real estate, the concept of "Floating Cities" is
                          taking the industry by storm. Imagine a world where
                          entire commu ...
                        </span>
                      </div>
                      <div className="row mt-5">
                        <div className="col-md-6 col-sm-12 btn_center">
                          <Link className="w-100" to="/selected-project">
                            <button
                              className="btn btn-outline-light px-5 btn_center font_15 mt-5 w-100"
                              style={{
                                fontWeight: "500",
                                paddingBottom: "1rem",
                                paddingTop: "1rem",
                              }}
                            >
                              VIEW MORE
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12 dflex_1st">
                      <div id="carouselExample1" className="carousel slide">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="./projs-side-img.png"
                              className="d-block w-100"
                              alt="..."
                              style={{
                                marginLeft: isMobile ? "1rem" : "",
                              }}
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="./projs-side-img.png"
                              className="d-block w-100"
                              alt="..."
                              style={{
                                marginLeft: isMobile ? "1rem" : "",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row pb-3 py-5x px-5 align-items-center d-md-flex">
                        <div className="col">
                          <button
                            className="btn btn-outline-light line-img "
                            type="button"
                            data-bs-target="#carouselExample1"
                            data-bs-slide="prev"
                          >
                            <img src="./arrow_left_svg.svg" alt="line-img" />
                            {/* <FaLongArrowAltLeft /> */}
                          </button>
                        </div>
                        <div className="col div_btn">01 - 03</div>
                        <div className="col">
                          <button
                            className="btn btn-outline-light line-img"
                            type="button"
                            data-bs-target="#carouselExample1"
                            data-bs-slide="next"
                          >
                            <img src="./arrow_right_svg.svg" alt="line-img" />
                            {/* <FaLongArrowAltRight /> */}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="proj-tab-bg py-3">
                  <div className="row align-items-center p-5 justify-content-between">
                    <div className="col-md-6 col-sm-12 dflex_2nd px-3">
                      <h2>Megamound</h2>
                      <div className="d-flex gap-5x py-3 align-items-center wrap_flexx">
                        <div className="d-flex gap-2 align-items-center">
                          <img src="./bed_proj.svg" alt="" />
                          <span>5 Beds</span>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <img src="./new_releases.svg" alt="" />
                          <span>2017</span>
                        </div>

                        <div className="d-flex gap-2 align-items-center">
                          <img src="./cottage.svg" alt="" />
                          <span>Fully Detached</span>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <img src="./location_on.svg" alt="" />
                          <span>Ikota</span>
                        </div>
                      </div>
                      <hr
                        className="text-white my-3"
                        style={{
                          borderTop: "4px solid white",
                        }}
                      />
                      <div>
                        <span>
                          In a groundbreaking and imaginative leap forward in
                          real estate, the concept of "Floating Cities" is
                          taking the industry by storm. Imagine a world where
                          entire commu ...
                        </span>
                      </div>
                      <div className="row mt-5">
                        <div className="col-md-6 col-sm-12 btn_center">
                          <Link className="w-100" to="/selected-project">
                            <button
                              className="btn btn-outline-light px-5 btn_center font_15 mt-5 w-100"
                              style={{
                                fontWeight: "500",
                                paddingBottom: "1rem",
                                paddingTop: "1rem",
                              }}
                            >
                              VIEW MORE
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12 dflex_1st">
                      <div id="carouselExample2" className="carousel slide">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="./projs-side-img.png"
                              className="d-block w-100"
                              alt="..."
                              style={{
                                marginLeft: isMobile ? "1rem" : "",
                              }}
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="./projs-side-img.png"
                              className="d-block w-100"
                              alt="..."
                              style={{
                                marginLeft: isMobile ? "1rem" : "",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row pb-3 py-5x px-5 align-items-center d-md-flex">
                        <div className="col">
                          <button
                            className="btn btn-outline-light line-img "
                            type="button"
                            data-bs-target="#carouselExample2"
                            data-bs-slide="prev"
                          >
                            <img src="./arrow_left_svg.svg" alt="line-img" />
                            {/* <FaLongArrowAltLeft /> */}
                          </button>
                        </div>
                        <div className="col div_btn">01 - 03</div>
                        <div className="col">
                          <button
                            className="btn btn-outline-light line-img"
                            type="button"
                            data-bs-target="#carouselExample2"
                            data-bs-slide="next"
                          >
                            <img src="./arrow_right_svg.svg" alt="line-img" />
                            {/* <FaLongArrowAltRight /> */}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="proj-tab-bg py-3">
                  <div className="row align-items-center p-5 justify-content-between">
                    <div className="col-md-6 col-sm-12 dflex_2nd px-3">
                      <h2>Megamound</h2>
                      <div className="d-flex gap-5x py-3 align-items-center wrap_flexx">
                        <div className="d-flex gap-2 align-items-center">
                          <img src="./bed_proj.svg" alt="" />
                          <span>5 Beds</span>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <img src="./new_releases.svg" alt="" />
                          <span>2017</span>
                        </div>

                        <div className="d-flex gap-2 align-items-center">
                          <img src="./cottage.svg" alt="" />
                          <span>Fully Detached</span>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <img src="./location_on.svg" alt="" />
                          <span>Ikota</span>
                        </div>
                      </div>
                      <hr
                        className="text-white my-3"
                        style={{
                          borderTop: "4px solid white",
                        }}
                      />
                      <div>
                        <span>
                          In a groundbreaking and imaginative leap forward in
                          real estate, the concept of "Floating Cities" is
                          taking the industry by storm. Imagine a world where
                          entire commu ...
                        </span>
                      </div>
                      <div className="row mt-5">
                        <div className="col-md-6 col-sm-12 btn_center">
                          <Link className="w-100" to="/selected-project">
                            <button
                              className="btn btn-outline-light px-5 btn_center font_15 mt-5 w-100"
                              style={{
                                fontWeight: "500",
                                paddingBottom: "1rem",
                                paddingTop: "1rem",
                              }}
                            >
                              VIEW MORE
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 col-sm-12 dflex_1st">
                      <div id="carouselExample3" className="carousel slide">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="./projs-side-img.png"
                              className="d-block w-100"
                              alt="..."
                              style={{
                                marginLeft: isMobile ? "1rem" : "",
                              }}
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="./projs-side-img.png"
                              className="d-block w-100"
                              alt="..."
                              style={{
                                marginLeft: isMobile ? "1rem" : "",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row pb-3 py-5x px-5 align-items-center d-md-flex">
                        <div className="col">
                          <button
                            className="btn btn-outline-light line-img "
                            type="button"
                            data-bs-target="#carouselExample3"
                            data-bs-slide="prev"
                          >
                            <img src="./arrow_left_svg.svg" alt="line-img" />
                            {/* <FaLongArrowAltLeft /> */}
                          </button>
                        </div>
                        <div className="col div_btn">01 - 03</div>
                        <div className="col">
                          <button
                            className="btn btn-outline-light line-img"
                            type="button"
                            data-bs-target="#carouselExample3"
                            data-bs-slide="next"
                          >
                            <img src="./arrow_right_svg.svg" alt="line-img" />
                            {/* <FaLongArrowAltRight /> */}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 justify-content-center">
                  <div className="col-md-3 col-sm-6 mx-auto d-flex justify-content-center my-5 ">
                    <button
                      className="btn btn-outline-light px-5 font_15"
                      style={{
                        padding: isMobile ? "14px 30px" : "",
                      }}
                    >
                      SHOW MORE
                    </button>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second" className="py-3 text-white">
                Nothing Yet
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default ProjectsTab;
