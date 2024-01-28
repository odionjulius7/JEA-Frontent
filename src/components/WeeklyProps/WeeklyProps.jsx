import React from "react";

import "./WeeklyProps.css";
import { Button } from "react-bootstrap";
import Buttons from "../Buttons";
import MySwiper from "../Slider/Sliderjs";

const WeeklyProps = ({ blogPage, url_str }) => {
  return (
    <div className="container-fluid home-weekly-props">
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
              <div className="col-6 d-flex gap-3 my-5 row-btn">
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
        <div className="row ">
          <div className="col d-flex  text-align-center justify-content-center">
            <MySwiper blogPage={blogPage} url_str={url_str} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyProps;
