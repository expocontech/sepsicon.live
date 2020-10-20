import React from "react";
import RotateGif from "./rotate.gif";

const RotateDevice = () => {
  return (
    <div
      style={{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "0",
        right: "0",
        transform: "translateY(-50%)",
        margin: "0 auto",
      }}
    >
      <img src={RotateGif} alt="Rotate Device" style={{ width: "200px" }} />
      <br />
      <h3>Please Rotate Your Device</h3>
    </div>
  );
};

export default RotateDevice;
