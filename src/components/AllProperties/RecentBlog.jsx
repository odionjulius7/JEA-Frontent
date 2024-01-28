import React from "react";
import Card from "react-bootstrap/Card";

import "./AllProperties.css";
import { Link } from "react-router-dom";

const RecentBlog = ({ blogPage }) => {
  return (
    <div className="container-fluid AllProperties">
      <div className="row">
        <div className="col-12 py-2">
          <h2>Recent Blog Posts</h2>
        </div>
        <div className="row justify-content-between my-3">
          <div className="col-6 ">
            <Link to="/selected-blog">
              <Card>
                <Card.Img
                  variant="top"
                  src="./first-slide-img.png"
                  style={{
                    maxHeight: "360px",
                  }}
                />
                <Card.Body
                  className=" px-4"
                  style={{
                    backgroundColor: "#f9f9f9",
                    height: "200px",
                  }}
                >
                  <Card.Title>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      October 31, 2023
                    </span>
                  </Card.Title>
                  <div className="py-2">
                    <span>
                      <b>
                        How urban greening projects affect sustainable cities
                      </b>
                    </span>
                    <div
                      className="my-3"
                      style={{ borderBottom: "2px solid grey" }}
                    ></div>
                  </div>
                  <Card.Text className="fs-6 py-1">
                    <b>Features:</b> Nicely finished, Fully fitted Kitchen, All
                    rooms ensuite, Serene Neighbourhood , Secured Estate, BQ ...
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-6 ">
            <Link to="/selected-blog">
              <Card className="d-flex flex-row mb-3">
                <Card.Img
                  variant="top"
                  src="./first-slide-img.png"
                  className="fit-content"
                  style={{
                    width: "50%",
                  }}
                />
                <Card.Body
                  className=" px-4"
                  style={{
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  <Card.Title className="my-2">
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      October 31, 2023
                    </span>
                  </Card.Title>
                  <div className="py-2 my-2">
                    <span>
                      <b>
                        How urban greening projects affect sustainable cities
                      </b>
                    </span>
                  </div>
                  <div
                    className="my-3"
                    style={{ borderBottom: "2px solid grey" }}
                  ></div>
                  <Card.Text className="fs-6 py-1">
                    <b>Features:</b> Nicely finished, Fully fitted Kitchen, All
                    rooms ensuite, Serene Neighbourhood , Secured Estate, BQ ...
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
            <Link to="/selected-blog">
              <Card className="d-flex flex-row">
                <Card.Img
                  style={{
                    width: "50%",
                  }}
                  variant="top"
                  src="./first-slide-img.png"
                  className="fit-content"
                />
                <Card.Body
                  className=" px-4"
                  style={{
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  <Card.Title>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      October 31, 2023
                    </span>
                  </Card.Title>
                  <div className="py-2">
                    <span>
                      <b>
                        How urban greening projects affect sustainable cities
                      </b>
                    </span>
                  </div>
                  <div
                    className="my-3"
                    style={{ borderBottom: "2px solid grey" }}
                  ></div>
                  <Card.Text className="fs-6 py-1">
                    <b>Features:</b> Nicely finished, Fully fitted Kitchen, All
                    rooms ensuite, Serene Neighbourhood , Secured Estate, BQ ...
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
