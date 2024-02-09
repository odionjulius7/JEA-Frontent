import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
const Inputs = () => (
  <>
    <Input
      className="un-input"
      placeholder="Enter a property description or location"
      style={{
        background: "#E9E9E9",
      }}
      prefix={<SearchOutlined />}
    />
  </>
);
export default Inputs;
