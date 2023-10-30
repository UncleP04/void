import React from "react";
import "../style.css";
import { Button } from "../atoms/button";
import { MdCheck } from "react-icons/md";
import AboutGrid from "./aboutGrid";

const About = () => {
  return (
    <div
      className="w-[100%] h-auto flex flex-col justify-center items-center bg-[#040405] p-4">
      <div className="lg:w-[600px] text-center">
        <h1 className="text-[2.5em] py-4 text-white">The Void Academy</h1>
        <p className="text-[18px] py-2 text-white">
          At The Void Academy, we exist at the intersection of cutting-edge Web3
          technology and boundless learning opportunities. As pioneers in the
          realm of digital education, we have harnessed the power of the void,
          creating a space where knowledge knows no bounds
        </p>
      </div>
      <AboutGrid />
      <Button label="Enroll Now" />
    </div>
  );
};

export default About;
