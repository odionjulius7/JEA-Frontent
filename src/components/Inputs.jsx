import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
const Inputs = () => (
  <>
    {/* <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    <br />
    <br /> */}
    <Input
      placeholder="Enter a property description or location"
      style={{
        height: "50px",
        padding: "0 150px",
        background: "#E9E9E9",
      }}
      prefix={<SearchOutlined />}
    />
  </>
);
export default Inputs;
