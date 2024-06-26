import React, { useEffect, useState } from "react";

import { Col, Nav, Row, Tab } from "react-bootstrap";

import moment from "moment";

import { Link } from "react-router-dom";

import "./FindProp.css";

const ProjectsTab = ({ projs }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleSlideChange = () => {
    setActiveIndex((prev) => prev + 1);
  };
  const handleSlideReduce = () => {
    setActiveIndex((prev) => prev - 1);
  };
  //
  const projsComp = projs.filter((property) => {
    return property.category === "completed";
  });
  const projsON = projs.filter((property) => {
    return property.category === "ongoing";
  });

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

  console.log(projs[0]);

  return (
    <>
      <Tab.Container
        className="text-white"
        id="left-tabs-example"
        defaultActiveKey="first"
      >
        <Row className="mt-1 mb-5">
          <Col md={6} sm={8} className="mx-auto text-white mb-5">
            <Nav variant="" className="flex-row justify-content-center mb-5">
              <Nav.Item className=" w-50">
                <Nav.Link
                  eventKey="first"
                  className="text-white  d-flex justify-content-center"
                >
                  COMPLETED PROJECTS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="w-50">
                <Nav.Link
                  eventKey="second"
                  className="text-white d-flex justify-content-center"
                >
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
                {projsComp?.map((projDet, index) => (
                  <div key={index} className="proj-tab-bg py-3">
                    <div className="row align-items-center p-5 justify-content-between">
                      <div className="col-md-6 col-sm-12 dflex_2nd px-3">
                        <h2>{projDet?.title}</h2>
                        <div className="d-flex gap-5x py-3 align-items-center wrap_flexx">
                          <div className="d-flex gap-2 align-items-center">
                            <img src="./bed_proj.svg" alt="" />
                            <span>{projDet?.number_of_room}</span>
                          </div>
                          <div className="d-flex gap-2 align-items-center">
                            <img src="./new_releases.svg" alt="" />
                            <span>
                              {/* {moment(projDet?.createdAt)
                                .format("l")
                                .slice(5, 9)} */}
                              {moment(projDet?.createdAt).format("YYYY")}
                            </span>
                          </div>

                          <div className="d-flex gap-2 align-items-center">
                            <img src="./cottage.svg" alt="" />
                            <span>
                              {projDet?.property_type
                                ? projDet?.property_type
                                : "Fully Detached"}
                            </span>
                          </div>
                          <div className="d-flex gap-2 align-items-center">
                            <img src="./location_on.svg" alt="" />
                            <span>{projDet?.location}</span>
                          </div>
                        </div>
                        <hr
                          className="text-white my-3"
                          style={{
                            borderTop: "4px solid white",
                          }}
                        />
                        <div>
                          <span>{projDet?.description?.slice(0, 185)}...</span>
                        </div>
                        <div
                          className="row"
                          style={{
                            marginTop: isMobile ? "0.4rem" : "3rem",
                          }}
                        >
                          <div className="col-md-6 col-sm-12 btn_center">
                            <Link
                              className="w-100"
                              to={`/project/${projDet?.slug}`}
                            >
                              <button
                                className="btn btn-outline-light px-5 btn_center font_15 mt-5 w-100"
                                style={{
                                  fontWeight: "500",
                                  paddingBottom: !isMobile ? "1rem" : "0.5rem",
                                  paddingTop: !isMobile ? "1rem" : "0.5rem",
                                }}
                              >
                                VIEW MORE
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 col-sm-12 dflex_1st">
                        <div
                          id={`carouselExample${projDet?._id}`}
                          className="carousel slide"
                        >
                          <div className="carousel-inner">
                            {projDet?.images[0] && (
                              <div
                                className="carousel-item active"
                                style={{
                                  width: !isMobile ? "510px" : "325px",
                                  height: "330px",
                                }}
                              >
                                <img
                                  src={projDet?.images[0]}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    marginLeft: isMobile ? "1rem" : "",
                                    height: "inherit",
                                  }}
                                />
                              </div>
                            )}
                            {projDet?.images[1] && (
                              <div
                                className="carousel-item"
                                style={{
                                  width: "510px",
                                  height: "330px",
                                }}
                              >
                                <img
                                  src={projDet?.images[1]}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    marginLeft: isMobile ? "1rem" : "",
                                    height: "inherit",
                                  }}
                                />
                              </div>
                            )}
                            {projDet?.images[2] && (
                              <div
                                className="carousel-item"
                                style={{
                                  width: "510px",
                                  height: "330px",
                                }}
                              >
                                <img
                                  src={projDet?.images[2]}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    marginLeft: isMobile ? "1rem" : "",
                                    height: "inherit",
                                  }}
                                />
                              </div>
                            )}
                            {projDet?.images[3] && (
                              <div
                                className="carousel-item"
                                style={{
                                  width: "510px",
                                  height: "330px",
                                }}
                              >
                                <img
                                  src={projDet?.images[3]}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    marginLeft: isMobile ? "1rem" : "",
                                    height: "inherit",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="row pb-3 py-5x px-5 align-items-center d-md-flex">
                          <div className="col">
                            <button
                              className="btn btn-outline-light line-img "
                              type="button"
                              data-bs-target={`#carouselExample${projDet?._id}`}
                              data-bs-slide="prev"
                              onClick={handleSlideReduce}
                              disabled={activeIndex === 1}
                            >
                              <img src="./arrow_left_svg.svg" alt="line-img" />
                            </button>
                          </div>
                          <div className="col div_btn d-flex gap-1 align-align-items-center">
                            {/* {activeIndex} - {" " + projDet?.images?.length} */}

                            <span>{activeIndex}</span>
                            <img src="/div_line.svg" alt="" />
                            {projDet?.images?.length}
                            {/* <span>{featuredPrj[0]?.images.length}</span> */}
                          </div>
                          <div className="col">
                            <button
                              className="btn btn-outline-light line-img"
                              type="button"
                              data-bs-target={`#carouselExample${projDet?._id}`}
                              data-bs-slide="next"
                              onClick={handleSlideChange}
                              disabled={activeIndex === projDet?.images?.length}
                            >
                              <img src="./arrow_right_svg.svg" alt="line-img" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Tab.Pane>
              <Tab.Pane eventKey="second" className="text-white">
                {projsON?.map((projDet, index) => (
                  <div key={index} className="proj-tab-bg py-3">
                    <div className="row align-items-center p-5 justify-content-between">
                      <div className="col-md-6 col-sm-12 dflex_2nd px-3">
                        <h2>{projDet?.title}</h2>
                        <div className="d-flex gap-5x py-3 align-items-center wrap_flexx">
                          <div className="d-flex gap-2 align-items-center">
                            <img src="./bed_proj.svg" alt="" />
                            <span>{projDet?.number_of_room}</span>
                          </div>
                          <div className="d-flex gap-2 align-items-center">
                            <img src="./new_releases.svg" alt="" />
                            <span>
                              {/* {moment(projDet?.createdAt)
                                .format("l")
                                .slice(5, 9)} */}

                              {moment(projDet?.createdAt).format("YYYY")}
                            </span>
                          </div>

                          <div className="d-flex gap-2 align-items-center">
                            <img src="./cottage.svg" alt="" />
                            <span>
                              {projDet?.property_type
                                ? projDet?.property_type
                                : "Fully Detached"}
                            </span>
                          </div>
                          <div className="d-flex gap-2 align-items-center">
                            <img src="./location_on.svg" alt="" />
                            <span>{projDet?.location}</span>
                          </div>
                        </div>
                        <hr
                          className="text-white my-3"
                          style={{
                            borderTop: "4px solid white",
                          }}
                        />
                        <div>
                          <span>{projDet?.description?.slice(0, 185)}...</span>
                        </div>
                        <div
                          className="row"
                          style={{
                            marginTop: isMobile ? "0.4rem" : "3rem",
                          }}
                        >
                          <div className="col-md-6 col-sm-12 btn_center">
                            <Link
                              className="w-100"
                              to={`/project/${projDet?.slug}`}
                            >
                              <button
                                className="btn btn-outline-light px-5 btn_center font_15 mt-5 w-100"
                                style={{
                                  fontWeight: "500",
                                  paddingBottom: !isMobile ? "1rem" : "0.5rem",
                                  paddingTop: !isMobile ? "1rem" : "0.5rem",
                                }}
                              >
                                VIEW MORE
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 col-sm-12 dflex_1st">
                        <div
                          id={`carouselExample${projDet?._id}`}
                          className="carousel slide"
                        >
                          <div className="carousel-inner">
                            {projDet?.images[0] && (
                              <div
                                className="carousel-item active"
                                style={{
                                  width: !isMobile ? "510px" : "325px",
                                  height: "330px",
                                }}
                              >
                                <img
                                  src={projDet?.images[0]}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    marginLeft: isMobile ? "1rem" : "",
                                    height: "inherit",
                                  }}
                                />
                              </div>
                            )}
                            {projDet?.images[1] && (
                              <div
                                className="carousel-item"
                                style={{
                                  width: "510px",
                                  height: "330px",
                                }}
                              >
                                <img
                                  src={projDet?.images[1]}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    marginLeft: isMobile ? "1rem" : "",
                                    height: "inherit",
                                  }}
                                />
                              </div>
                            )}
                            {projDet?.images[2] && (
                              <div
                                className="carousel-item"
                                style={{
                                  width: "510px",
                                  height: "330px",
                                }}
                              >
                                <img
                                  src={projDet?.images[2]}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    marginLeft: isMobile ? "1rem" : "",
                                    height: "inherit",
                                  }}
                                />
                              </div>
                            )}
                            {projDet?.images[3] && (
                              <div
                                className="carousel-item"
                                style={{
                                  width: "510px",
                                  height: "330px",
                                }}
                              >
                                <img
                                  src={projDet?.images[3]}
                                  className="d-block w-100"
                                  alt="..."
                                  style={{
                                    marginLeft: isMobile ? "1rem" : "",
                                    height: "inherit",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="row pb-3 py-5x px-5 align-items-center d-md-flex">
                          <div className="col">
                            <button
                              className="btn btn-outline-light line-img "
                              type="button"
                              data-bs-target={`#carouselExample${projDet?._id}`}
                              data-bs-slide="prev"
                              onClick={handleSlideReduce}
                              disabled={activeIndex === 1}
                            >
                              <img src="./arrow_left_svg.svg" alt="line-img" />
                            </button>
                          </div>
                          <div className="col div_btn d-flex gap-1 align-align-items-center">
                            {/* {activeIndex} - {" " + projDet?.images?.length} */}

                            <span>{activeIndex}</span>
                            <img src="/div_line.svg" alt="" />
                            {projDet?.images?.length}
                            {/* <span>{featuredPrj[0]?.images.length}</span> */}
                          </div>
                          <div className="col">
                            <button
                              className="btn btn-outline-light line-img"
                              type="button"
                              data-bs-target={`#carouselExample${projDet?._id}`}
                              data-bs-slide="next"
                              onClick={handleSlideChange}
                              disabled={activeIndex === projDet?.images?.length}
                            >
                              <img src="./arrow_right_svg.svg" alt="line-img" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default ProjectsTab;
