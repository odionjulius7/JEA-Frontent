import React from "react";

import "./WeeklyProps.css";
import { Button } from "react-bootstrap";
import Buttons from "../Buttons";
import MySwiper from "../Slider/Sliderjs";

const WeeklyProps = ({ blogPage, url_str, homeBg }) => {
  return (
    <div
      className="container-fluid home-weekly-props"
      style={{
        backgroundColor: homeBg ? "#e1e1e1" : "#ffffff",
      }}
    >
      <div className="row">
        {!blogPage && (
          <>
            <div className="col-12 d-flex justify-content-between align-items-center weekly-props-header">
              <h2>Properties of the Week</h2>
              <div className="">
                <Button variant="outline-dark py-2 px-5">
                  VIEW ALL PROPERTIES
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 d-flex gap-3 my-5 row-btn">
                <Buttons
                  text="Buy"
                  style={{
                    width: "100px",
                    background: "#FBC344",
                    color: "black",
                  }}
                  variant={"outline-light"}
                />
                <Buttons
                  text="Rent"
                  style={{ width: "100px", color: "black" }}
                  variant={"outline-dark"}
                />
                <Buttons
                  text="Short Let"
                  style={{ width: "100px", color: "black" }}
                  variant={"outline-dark"}
                />
                <Buttons
                  text="Lands"
                  style={{ width: "100px", color: "black" }}
                  variant={"outline-dark"}
                />
              </div>
            </div>
          </>
        )}
        <div className="row pt-3 pb-4">
          {homeBg && <h2 className="mb-5 mt-2">From Our Blog</h2>}
          <div className="col d-flex  text-align-center justify-content-center">
            <MySwiper blogPage={blogPage} url_str={url_str} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyProps;
