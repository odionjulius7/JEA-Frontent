import React from "react";
import { Select, Space } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SelectComp = ({ widthx, heightx }) => (
  <Select
    defaultValue="lucy"
    style={{
      width: widthx,
      height: heightx,
    }}
    onChange={handleChange}
    options={[
      {
        value: "Yiminghe",
        label: "yiminghe",
      },
      {
        value: "Hiiip",
        label: "Hiiip",
        // disabled: true,
      },
    ]}
  />
);
export default SelectComp;
