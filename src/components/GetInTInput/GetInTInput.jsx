import React from "react";
import { Input } from "antd";

const GetInTInput = ({ text, bordr, name, onChange, value }) => {
  return (
    <div className={`${bordr}`}>
      <span>{text}</span>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        style={{
          color: "inherit",
        }}
      />
    </div>
  );
};

export default GetInTInput;
