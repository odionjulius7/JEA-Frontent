import React from "react";
import { Skeleton } from "antd";
import { Alert, Flex, Spin } from "antd";
import "./Preloader.css"; // Import your CSS file for styling

const Preloader = ({ content }) => (
  <div className="full-width">
    <Flex
      gap="small"
      vertical
      style={
        {
          // height: "100vh",
          // width: "100vw",
        }
      }
    >
      <Spin
        tip="Loading..."
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Alert
          //   message={<Skeleton active />}
          //   description="Further details about the context of this alert."
          type="info"
          style={
            {
              // height: "100vh",
              // width: "100vw",
            }
          }
        />
      </Spin>
    </Flex>
  </div>
);
export default Preloader;
