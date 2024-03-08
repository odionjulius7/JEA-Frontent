import React, { useEffect, useState } from "react";

import GetInTInput from "../GetInTInput/GetInTInput";
import Textareas from "../GetInTInput/Textareas";

import "./GetInTouch.css";

import * as yup from "yup";

import { useFormik } from "formik";
import { toast } from "react-toastify";
import { getIntouch, resetState } from "../../features/Property/propertySlice";
import { useDispatch, useSelector } from "react-redux";

const schema = yup.object().shape({
  phoneNumber: yup.string(),
  additional_details: yup.string(),
  last_Name: yup.string(),
  fisrt_Name: yup.string(),
  email: yup.string().email(),
});

const GetInTouch = ({ homePage }) => {
  const dispatch = useDispatch();
  const propertyState = useSelector((state) => state.property);
  // console.log(propertyState);
  const formik = useFormik({
    initialValues: {
      additional_details: "",
      last_Name: "",
      fisrt_Name: "",
      phoneNumber: "",
      email: "",
    },
    validationSchema: schema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const data = values;
      // console.log(ids);

      try {
        await dispatch(getIntouch(data));
        formik.resetForm();
      } catch (error) {
        resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
        console.error("Error submitting form:", error);
      } finally {
        setSubmitting(false);
      }
    },
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

  useEffect(() => {
    if (propertyState?.isSuccess2 && propertyState?.postIntouchData) {
      toast.success("Details Sent! We'll get in touch with you.");
    }
  }, [propertyState?.isSuccess2, propertyState?.postIntouchData]);

  return (
    <div
      id="getInto"
      className="container-fluid get-in-touch"
      style={{
        backgroundColor: homePage ? "#ffffff" : "#E3E3E3",
        padding: isMobile ? "15px" : "",
      }}
    >
      <div className="row">
        <div className="col-md-5 col-sm-12 display_none p-0">
          <img
            src="/get-in-touch.png"
            alt=""
            className="w-100"
            // className="fit-content"
            style={{
              height: "100%",
            }}
          />
        </div>
        <div className="col-md-7 col-sm-12 input-side d-flex flex-column justify-content-center">
          <form onSubmit={formik.handleSubmit}>
            {/* <div className="container"> */}
            <div className="row">
              <h2
                style={{
                  fontWeight: "600",
                }}
              >
                Get in Touch
              </h2>
              <p className="">
                Have an inquiry or some feedback for us?
                <br />
                Fill out the form below and our team will get in touch with you.
              </p>
            </div>
            <div className="row py-4">
              <div className="col-md-6 col-sm-12">
                <GetInTInput
                  text={"First name"}
                  bordr={"input-styles"}
                  name="fisrt_Name"
                  onChange={formik.handleChange}
                  value={formik.values.fisrt_Name}
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <GetInTInput
                  text={"Last name"}
                  bordr={"input-styles"}
                  name="last_Name"
                  onChange={formik.handleChange}
                  value={formik.values.last_Name}
                />
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-6 col-sm-12">
                <GetInTInput
                  text={"Email address"}
                  bordr={"input-styles"}
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              <div className="col-md-6 col-sm-12 ">
                <GetInTInput
                  text={"Phone number"}
                  bordr={"input-styles"}
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-12">
                <Textareas />
              </div>
            </div>
            <div className="row my-4">
              <div className="col-md-4 col-sm-6">
                <button
                  type="submit"
                  class="btn btn-outline-dark font_15"
                  style={{
                    fontWeight: 500,
                    fontSize: "15px",
                    padding: "10px 20px",
                  }}
                >
                  {propertyState?.isLoading2 ? (
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "GET IN TOUCH"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
