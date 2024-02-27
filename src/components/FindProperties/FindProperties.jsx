import React, { useEffect, useState } from "react";

import { Col, Nav, Row, Tab } from "react-bootstrap";
import SelectComp from "../Select";
import Inputs from "../Inputs";

import "./FindProp.css";
import SelectTwo from "../SelectTwo";
const FindProperties = () => {
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
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col
            xl={8}
            lg={10}
            md={12}
            sm={12}
            className="mx-auto d-flex justify-content-center"
            id="tab_1"
          >
            <Nav variant="pills" className="flex-row">
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  className="py-2 pb-3 px-5xr mx-2"
                  style={{
                    fontWeight: "400",
                  }}
                >
                  Buy
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  className="py-2 pb-3 px-5x mx-2"
                  style={{
                    fontWeight: "400",
                  }}
                >
                  Rent
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="third"
                  className="py-2 pb-3 px-5x mx-2"
                  style={{
                    fontWeight: "400",
                  }}
                >
                  Short Let
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="forth"
                  className="py-2 pb-3 px-5x mx-2"
                  style={{
                    fontWeight: "400",
                  }}
                >
                  Land
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col
            lg={8}
            md={12}
            sm={12}
            className="mx-auto text-dark"
            style={{
              padding: isMobile ? "0 0.8rem" : "0 3rem",
            }}
          >
            <Tab.Content
              style={{
                marginTop: "-0.5rem",
                backgroundColor: "#FFFFFF",
                minHeight: "260px",
                borderRadius: "9px",
              }}
            >
              <Tab.Pane eventKey="first" className="py-3 px-3x">
                <div
                  className="d-flex flex-row justify-content-center gap-4x align-items-center  mb-4 select_wrap_find"
                  style={{
                    paddingTop: !isMobile ? "1.6rem" : "",
                  }}
                >
                  <div className="select-width">
                    <SelectTwo
                      text={"No. of Bedrooms"}
                      widthx={"inherit"}
                      heightx={"inherit"}
                    />
                  </div>
                  <div
                    className="divider py-1 bg-dark display-none"
                    style={{ borderRight: "1px solid #9B9B9B", height: "35px" }}
                  ></div>
                  <div className="select-width">
                    <SelectTwo
                      text={"Min. Price"}
                      widthx={"inherit"}
                      heightx={"inherit"}
                    />
                  </div>
                  <div
                    className="divider py-1 bg-dark display-none"
                    style={{ borderRight: "1px solid #9B9B9B", height: "35px" }}
                  ></div>
                  <div className="select-width">
                    <SelectTwo
                      text={"Max Price"}
                      widthx={"inherit"}
                      heightx={"inherit"}
                    />
                    {/* <SelectComp widthx={"inherit"} heightx={"inherit"} /> */}
                  </div>
                </div>
                <div className="row mt-4 pt-1">
                  <div className="col-10 mx-auto">
                    <Inputs />
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-md-5 mx-auto search-home d-flex justify-content-center">
                    <button
                      id="search-btn"
                      className="button fit-content"
                      style={{
                        background: "#FBC344",
                        width: isMobile ? "80%" : "100%",
                        color: "#000000",
                        fontWeight: "400",
                        fontSize: "15px",
                        borderRadius: "9px",
                        padding: isMobile ? "10px" : "",
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second" className="py-4 px-3 ">
                Rent
              </Tab.Pane>
              <Tab.Pane eventKey="third" className="py-4 px-3 ">
                Short Let
              </Tab.Pane>
              <Tab.Pane eventKey="forth" className="py-4 px-3 ">
                Land
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default FindProperties;
