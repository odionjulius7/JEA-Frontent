import React from "react";
import { Input } from "antd";

import "./GetInTInput.css";

const GetInTInput = ({ text, bordr }) => {
  return (
    <div className={`${bordr}`}>
      <span>{text}</span>
      <Input
        style={{
          color: "inherit",
        }}
        // onChange={onChange}
      />
    </div>
  );
};

export default GetInTInput;
