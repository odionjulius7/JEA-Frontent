import React from "react";

import { Col, Nav, Row, Tab } from "react-bootstrap";
import SelectComp from "../Select";
import Inputs from "../Inputs";

import "./FindProp.css";
import SelectTwo from "../SelectTwo";
const FindProperties = () => {
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
                  className="py-2 pb-3 px-5xr mx-2"
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
                  className="py-2 pb-3 px-5xr mx-2"
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
                  className="py-2 pb-3 px-5xr mx-2"
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
          <Col lg={7} md={12} sm={12} className="mx-auto text-dark ">
            <Tab.Content
              style={{
                marginTop: "-0.5rem",
                backgroundColor: "#FFFFFF",
                minHeight: "260px",
                borderRadius: "9px",
              }}
            >
              <Tab.Pane eventKey="first" className="py-3 ">
                <div className="d-flex flex-row justify-content-center gap-4x align-items-center pt-4 mb-4">
                  <div className="select-width">
                    <SelectTwo
                      text={"No. of Bedrooms"}
                      widthx={"inherit"}
                      heightx={"inherit"}
                    />
                  </div>
                  <div
                    className="divider py-1 bg-dark"
                    style={{ borderRight: "1px solid #000000", height: "35px" }}
                  ></div>
                  <div className="select-width">
                    <SelectTwo
                      text={"Min. Price"}
                      widthx={"inherit"}
                      heightx={"inherit"}
                    />
                  </div>
                  <div
                    className="divider py-1 bg-dark"
                    style={{ borderRight: "1px solid #000000", height: "35px" }}
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
                  <div className="col-5 mx-auto search-home">
                    <button
                      id="search-btn"
                      className="button fit-content"
                      style={{
                        background: "#FBC344",
                        width: "100%",
                        color: "#000000",
                        fontWeight: "400",
                        fontSize: "15px",
                        borderRadius: "9px",
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">Rent</Tab.Pane>
              <Tab.Pane eventKey="third">Short Let</Tab.Pane>
              <Tab.Pane eventKey="forth">Land</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default FindProperties;
