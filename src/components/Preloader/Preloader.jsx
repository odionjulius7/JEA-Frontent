import React, { useEffect } from "react";
import { Skeleton } from "antd";
import { Alert, Flex, Spin } from "antd";
import "./Preloader.css"; // Import your CSS file for styling

const Preloader = ({ content }) => {
  return (
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
            style={{
              visibility: "hidden",
            }}
          />
        </Spin>
      </Flex>
    </div>
  );

  // useEffect(() => {
  //   preloaderAnim()
  // }, [])
  // return (
  //   <div className="preloader-now">
  //     <div className="text-container">
  //       <span>Developer</span>
  //       <span>Curator</span>
  //       <span>Vibe</span>
  //     </div>
  //   </div>
  // );
};
export default Preloader;
