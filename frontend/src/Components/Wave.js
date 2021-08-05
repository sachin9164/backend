import React from "react";
import Wave from "react-wavify";
import Footer from "./Footer";

const Wavefooter = () => (
  <>
    <Footer />
    <Wave
      fill="#1cc06d"
      paused={false}
      options={{
        height: 20,
        amplitude: 20,
        speed: 0.15,
        points: 3
      }}
    ></Wave>
  </>
);

export default Wavefooter;
