import React from "react";
import { Input } from "antd";

import "./GetInTInput.css";

const { TextArea } = Input;

const Textareas = () => {
  return (
    <div className="input-styles">
      <span className="py-4">Message</span>
      <TextArea
        placeholder="Write your message ..."
        rows={4}
        className="pt-4"
      />
    </div>
  );
};

export default Textareas;
