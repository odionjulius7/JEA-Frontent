import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
const Inputs = ({ text }) => {
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

  return (
    <>
      <Input
        className="un-input"
        placeholder={text}
        style={{
          background: "#E9E9E9",
        }}
        prefix={<SearchOutlined className="display-none" />}
      />
    </>
  );
};

export default Inputs;
