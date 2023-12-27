"use client";
import React, { useState } from "react";

const GirdLayout = () => {
  const offerArray = [
    {
      header:
        "Identifying Your Career Goals: Mapping Your Career Path to the C-Suite",
      paragraph1:
        " Gain insights into aligning your career goals with executive positions.",
      paragraph2:
        "Learn strategic planning to navigate the path towards leadership roles.",
    },
    {
      header:
        "Crafting a Resume and Cover Letter That Will Land You Your Dream Job",
      paragraph1:
        "Develop skills in creating compelling resumes and cover letters.",
      paragraph2:
        "Understand key elements that make you stand out to potential employers.",
    },
    {
      header:
        "Mastering the Art of Networking and Building Powerful Relationships",
      paragraph1:
        "Learn effective networking strategies to expand professional connections.",
      paragraph2:
        "Develop interpersonal skills for building and maintaining impactful relationships.",
    },
    {
      header: "Acing Your Job Interviews",
      paragraph1:
        "Acquire techniques to excel in various job interview formats.",
      paragraph2:
        "Boost confidence and present yourself as the ideal candidate.",
    },
    {
      header: "Negotiating Your Salary Like a Pro",
      paragraph1:
        "Master salary negotiation tactics to maximize your compensation.",
      paragraph2:
        "Understand the art of balancing assertiveness and collaboration during negotiations.",
    },
    {
      header:
        "Onboarding and Thriving in a New Role and Quickly Becoming a Valuable Asset",
      paragraph1:
        "Navigate the onboarding process seamlessly for a strong start.",
      paragraph2:
        "Learn how to contribute effectively and become an indispensable team member.",
    },
    {
      header: "Freelancing for Success: Building a 6-Figure Freelancing Career",
      paragraph1:
        "Explore strategies for establishing a lucrative freelancing career.",
      paragraph2:
        "Learn to manage clients, projects, and finances for sustained success.",
    },
    {
      header:
        "Building a Powerful Personal Brand and Becoming a Thought Leader in Your Industry",
      paragraph1:
        "Develop a distinctive personal brand that reflects your expertise.",
      paragraph2:
        "Learn to position yourself as a thought leader through content and engagement.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div>
      <div className="w-[100%] flex flex-col justify-center items-center text-center pt-12 bg-black">
        <h1 className="text-[1.5em] font-semibold uppercase text-white m-0">
          What You Will Learn
        </h1>
        <p className="text-[20px] py-2 text-white md:w-[75%] w-[100%]">
          At The Void Academy, we empower all learners to thrive in your
          Ecosystem. Explore transformative subjects and unlock limitless
          learning possibilities.
        </p>
      </div>
      <div className="w-[100%] px-[10%]">
        <div className="gridlayout mt-10">
          {offerArray.map((offers, index) => (
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              key={index}
              className={`relative p-4 rounded-md flex flex-col justify-center items-center border border-[#222] hover:border-primary bg-[#0f0f13] h-[300px] overflow-hidden`}
            >
              <h1 className="mt-5 font-semibold mb-2 text-[1.2em] text-white text-center">
                {offers.header}
              </h1>
              <div
                className={`${
                  index === hoveredIndex ? "top-[0]" : "top-[280px]"
                } text-white text-[18px] absolute bg-[#000000ec] w-[100%] left-0 h-[100%] text-center flex justify-start items-center p-4 transition-all`}
              >
                <div>
                  <span className="text-white bg-[#000000ec] w-[50px] h-[50px] rounded-full absolute top-[-20px] left-[40%]">
                    &#9650;
                  </span>
                  <ul className="flex flex-col justify-start items-center gap-4 relative">
                    <li className="text-start">{offers.paragraph1}</li>
                    <li className="text-start">{offers.paragraph2}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GirdLayout;
