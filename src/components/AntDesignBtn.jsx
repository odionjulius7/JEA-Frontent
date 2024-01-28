import React from "react";
import { Button, Flex } from "antd";
const AntDesignBtn = ({ text, icons }) => (
  <Flex wrap="wrap" gap="small">
    <Button
      style={{
        fontWeight: 600,
      }}
      icon={icons}
    >
      {text}
    </Button>
  </Flex>
);
export default AntDesignBtn;
