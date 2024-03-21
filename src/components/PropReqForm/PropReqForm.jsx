import React, { useEffect, useState } from "react";

import "./PropReqForm.css";
import Radios from "../Radios";
import { Input } from "antd";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  postPropertyRequest,
  resetState,
} from "../../features/Property/propertySlice";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  inquirer_category: yup.string().required(),
  property_category: yup.string(),
  number_of_room: yup.number(), // Updated to expect a number
  maximum_budget: yup.string(),
  location: yup.string(),
  additional_details: yup.string(),
  fullName: yup.string(),
  country: yup.string(),
  phoneNumber: yup.string(),
  email: yup.string().email(),
});

const PropReqForm = () => {
  const dispatch = useDispatch();
  const propertyState = useSelector((state) => state.property);
  // console.log(propertyState);
  const formik = useFormik({
    initialValues: {
      inquirer_category: "",
      property_category: "",
      number_of_room: "",
      maximum_budget: "",
      location: "",
      additional_details: "",
      fullName: "",
      country: "",
      phoneNumber: "",
      email: "",
    },
    validationSchema: schema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const data = values;
      // console.log(ids);

      try {
        await dispatch(postPropertyRequest(data));
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
  //
  // const [age, setAge] = useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  useEffect(() => {
    if (propertyState?.isSuccess2 && propertyState?.postRequests) {
      toast.success("Property Request Sent! We'll get in touch with you.");
    }
  }, [propertyState?.isSuccess2, propertyState?.postRequests]);

  return (
    <div className="container-fluid PropReqForm">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <h4>
              Please complete the form below with the details of your request
              and we will get back to you as soon as possible
            </h4>

            <div className="row py-5x">
              <h5 className="py-2">Inquirer Category</h5>
              <Radios
                name="inquirer_category"
                onChange={formik.handleChange}
                value={formik.values.inquirer_category}
              />
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 ">
                <h5 className="py-2">Property Category</h5>
                <div
                  style={{
                    width: isMobile ? "250px" : "385px",
                    height: "50px",
                  }}
                >
                  <FormControl
                    sx={{
                      width: "inherit",
                      height: "inherit",
                    }}
                  >
                    <Select
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      name="property_category"
                      onChange={formik.handleChange}
                      value={formik.values.property_category}
                    >
                      <MenuItem value="">
                        <span className="sale">{"Sale"}</span>
                      </MenuItem>
                      <MenuItem value={"rent"}>Rent</MenuItem>
                      <MenuItem value={"short let"}>Short Let</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 ">
                <h5 className="py-2">Number of Bedrooms</h5>
                <div
                  style={{
                    width: isMobile ? "250px" : "385px",
                    height: "50px",
                  }}
                >
                  <FormControl
                    sx={{
                      width: "inherit",
                      height: "inherit",
                    }}
                  >
                    <Select
                      // value={number_of_room}
                      name="number_of_room"
                      onChange={formik.handleChange}
                      value={formik.values.number_of_room}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <span className="1">{"1"}</span>
                      </MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={8}>8</MenuItem>
                      <MenuItem value={9}>9</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-md-6 col-sm-12">
                <h5 className="py-2">Maximum Budget (N)</h5>
                <div
                  style={{
                    width: isMobile ? "250px" : "385px",
                    height: "50px",
                  }}
                >
                  {" "}
                  <Input
                    name="maximum_budget"
                    onChange={formik.handleChange}
                    value={formik.values.maximum_budget}
                    style={{
                      width: "inherit",
                      height: "inherit",
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <h5 className="py-2">Location</h5>
                <div
                  style={{
                    width: isMobile ? "250px" : "385px",
                    height: "50px",
                  }}
                >
                  {" "}
                  <Input
                    name="location"
                    onChange={formik.handleChange}
                    value={formik.values.location}
                    style={{
                      width: "inherit",
                      height: "inherit",
                    }}
                  />
                </div>
              </div>
            </div>
            {/* textarea */}
            <div className="row my-4">
              <div className="">
                <h5 className="py-2">Additional Details</h5>
                <div
                  style={{
                    width: isMobile ? "250px" : "92%",
                    height: "118px",
                  }}
                >
                  {" "}
                  <textarea
                    name="additional_details"
                    onChange={formik.handleChange}
                    value={formik.values.additional_details}
                    id=""
                    className="w-100"
                    style={{
                      height: "inherit",
                      padding: "0.3rem 0.5rem",
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
            {/* textarea */}
            <div className="row my-4">
              <div className="col-md-6 col-sm-12">
                <h5 className="py-2">Full Name</h5>
                <div
                  style={{
                    width: isMobile ? "250px" : "385px",
                    height: "50px",
                  }}
                >
                  {" "}
                  <Input
                    name="fullName"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                    style={{
                      width: "inherit",
                      height: "inherit",
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <h5 className="py-2">Country</h5>
                <div
                  style={{
                    width: isMobile ? "250px" : "385px",
                    height: "50px",
                  }}
                >
                  <Input
                    name="country"
                    onChange={formik.handleChange}
                    value={formik.values.country}
                    style={{
                      width: "inherit",
                      height: "inherit",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-md-6 col-sm-12">
                <h5 className="py-2">Phone Number</h5>
                <div
                  style={{
                    width: isMobile ? "250px" : "385px",
                    height: "50px",
                  }}
                >
                  {" "}
                  <Input
                    name="phoneNumber"
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                    style={{
                      width: "inherit",
                      height: "inherit",
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <h5 className="py-2">Email Address</h5>
                <div
                  style={{
                    width: isMobile ? "250px" : "385px",
                    height: "50px",
                  }}
                >
                  <Input
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    style={{
                      width: "inherit",
                      height: "inherit",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-3 col-sm-6">
            <button
              id="search-btn"
              className="button fit-content"
              style={{
                background: "#FBC344",
                width: "88%",
                color: "#000000",
                fontWeight: "600",
              }}
            >
              {propertyState?.isLoading2 ? (
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PropReqForm;
