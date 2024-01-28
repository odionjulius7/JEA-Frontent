import React from "react";

import { Col, Nav, Row, Tab } from "react-bootstrap";
import SelectComp from "../Select";
import Inputs from "../Inputs";

import "./FindProp.css";
const FindProperties = () => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={6} className="mx-auto">
            <Nav variant="pills" className="flex-row">
              <Nav.Item>
                <Nav.Link
                  eventKey="first"
                  className="py-2 px-5 mx-1"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Buy
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="second"
                  className="py-2 px-5 mx-1"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Rent
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="third"
                  className="py-2 px-5 mx-1"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Short Let
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="forth"
                  className="py-2 px-5 mx-1"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Land
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col sm={8} className="mx-auto text-dark">
            <Tab.Content
              style={{
                marginTop: "-0.5rem",
                backgroundColor: "#FFFFFF",
                minHeight: "260px",
                borderRadius: "9px",
              }}
            >
              <Tab.Pane eventKey="first" className="py-3">
                <div className="d-flex flex-row justify-content-center gap-5 align-items-center pt-4">
                  <div>
                    <SelectComp widthx={"180px"} />
                  </div>
                  <div
                    className="divider py-1 bg-dark"
                    style={{ borderRight: "1px solid #000000", height: "20px" }}
                  ></div>
                  <div>
                    <SelectComp widthx={"180px"} />
                  </div>
                  <div
                    className="divider py-1 bg-dark"
                    style={{ borderRight: "1px solid #000000", height: "20px" }}
                  ></div>
                  <div>
                    <SelectComp widthx={"180px"} />
                  </div>
                </div>
                <div className="row mt-4">
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
