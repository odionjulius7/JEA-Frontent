import React from "react";
import { Radio } from "antd";
import "./Radios.css"; // Import the CSS file

const Radios = ({ name, onChange, value }) => (
  <Radio.Group name={name} className="d-flex gap-5x flex-wrap">
    <label className="radio-label">
      <span className="fs-6">Individual</span>
      <Radio
        value={"individual"}
        onChange={onChange}
        checked={value === "individual"}
      />
    </label>
    <label className="radio-label">
      <span className="fs-6">Agent</span>
      <Radio value={"agent"} onChange={onChange} checked={value === "agent"} />
    </label>
    <label className="radio-label">
      <span className="fs-6">Developer</span>
      <Radio value={"agent"} onChange={onChange} checked={value === "agent"} />
    </label>
  </Radio.Group>
);

export default Radios;
