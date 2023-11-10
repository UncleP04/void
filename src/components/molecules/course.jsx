import React from "react";
import "../style.css";
import { ButtonS } from "../atoms/button";
import { MdCheck } from "react-icons/md";
import CourseGrid from "./courseGrid";

const Course = () => {
  return (
    <div className="w-[100%] h-auto flex flex-col justify-center items-center bg-[#040405] p-4">
      <div className="lg:w-[600px] text-center">
        <h1 className="text-[2.5em] py-4 text-white">What You Will Learn</h1>
        <p className="text-[18px] py-2 text-white">
          At The Void Academy, we empower all learners to thrive in your
          Ecosystem. Explore transformative subjects and unlock limitless
          learning possibilities.
        </p>
      </div>
      <CourseGrid />
      <ButtonS label="Enroll Now" />
    </div>
  );
};

export default Course;
