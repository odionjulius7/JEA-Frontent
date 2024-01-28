import React from "react";
import { Radio } from "antd";
import "./Radios.css"; // Import the CSS file

const Radios = () => (
  <Radio.Group name="radiogroup" className="d-flex gap-5">
    <label className="radio-label">
      <span className="fs-6">Individual</span>
      <Radio value={"Individual"} />
    </label>
    <label className="radio-label">
      <span className="fs-6">Agent</span>
      <Radio value={"Agent"} />
    </label>
    <label className="radio-label">
      <span className="fs-6">Developer</span>
      <Radio value={"Developer"} />
    </label>
  </Radio.Group>
);

export default Radios;
