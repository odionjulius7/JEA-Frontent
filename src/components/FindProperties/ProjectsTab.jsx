import React from "react";

import { Col, Nav, Row, Tab } from "react-bootstrap";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import { Link } from "react-router-dom";

import "./FindProp.css";

const ProjectsTab = () => {
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
                <div className="my-5 proj-tab-bg py-3">
                  <div className="row align-items-center p-5 justify-content-between">
                    <div className="col-md-5 col-sm-12 dflex_2nd px-3">
                      <h2>Megamound</h2>
                      <div className="d-flex gap-4x py-3">
                        <span>5 Beds</span>
                        <span>2017</span>
                        <span>Fully Detached</span>
                        <span>Fully Detached</span>
                        <span>Ikota</span>
                      </div>
                      <hr
                        className="text-white my-3"
                        style={{
                          borderTop: "3px solid white !important",
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
                        <div className="col-md-8 col-sm-12 btn_center">
                          <Link to="/selected-project">
                            <button className="btn btn-outline-light px-5 btn_center">
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
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="./projs-side-img.png"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row pb-3 pt-5 px-5 align-items-center d-md-flex d-sm-none d-xs-none div_btn">
                        <div className="col">
                          <button
                            className="btn btn-outline-light line-img "
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                          >
                            <FaLongArrowAltLeft />
                          </button>
                        </div>
                        <div className="col">01 - 03</div>
                        <div className="col">
                          <button
                            className="btn btn-outline-light line-img"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                          >
                            <FaLongArrowAltRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-5 proj-tab-bg py-3">
                  <div className="row align-items-center p-5 justify-content-between">
                    <div className="col-md-5 col-sm-12 dflex_2nd px-3">
                      <h2>Megamound</h2>
                      <div className="d-flex gap-4x py-3">
                        <span>5 Beds</span>
                        <span>2017</span>
                        <span>Fully Detached</span>
                        <span>Fully Detached</span>
                        <span>Ikota</span>
                      </div>
                      <hr
                        className="text-white my-3"
                        style={{
                          borderTop: "3px solid white !important",
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
                        <div className="col-md-8 col-sm-12 btn_center">
                          <Link to="/selected-project">
                            <button className="btn btn-outline-light px-5 btn_center">
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
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="./projs-side-img.png"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row pb-3 pt-5 px-5 align-items-center d-md-flex d-sm-none d-xs-none div_btn">
                        <div className="col">
                          <button
                            className="btn btn-outline-light line-img "
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                          >
                            <FaLongArrowAltLeft />
                          </button>
                        </div>
                        <div className="col">01 - 03</div>
                        <div className="col">
                          <button
                            className="btn btn-outline-light line-img"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                          >
                            <FaLongArrowAltRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-5 proj-tab-bg py-3">
                  <div className="row align-items-center p-5 justify-content-between">
                    <div className="col-md-5 col-sm-12 dflex_2nd px-3">
                      <h2>Megamound</h2>
                      <div className="d-flex gap-4x py-3">
                        <span>5 Beds</span>
                        <span>2017</span>
                        <span>Fully Detached</span>
                        <span>Fully Detached</span>
                        <span>Ikota</span>
                      </div>
                      <hr
                        className="text-white my-3"
                        style={{
                          borderTop: "3px solid white !important",
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
                        <div className="col-md-8 col-sm-12 btn_center">
                          <Link to="/selected-project">
                            <button className="btn btn-outline-light px-5 btn_center">
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
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="./projs-side-img.png"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row pb-3 pt-5 px-5 align-items-center d-md-flex d-sm-none d-xs-none div_btn">
                        <div className="col">
                          <button
                            className="btn btn-outline-light line-img "
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                          >
                            <FaLongArrowAltLeft />
                          </button>
                        </div>
                        <div className="col">01 - 03</div>
                        <div className="col">
                          <button
                            className="btn btn-outline-light line-img"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                          >
                            <FaLongArrowAltRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 justify-content-center">
                  <div className="col-md-3 col-sm-6 mx-auto d-flex justify-content-center">
                    <button className="btn btn-outline-light px-5">
                      Show MORE
                    </button>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second" className="py-3 text-white">
                Rent
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default ProjectsTab;
