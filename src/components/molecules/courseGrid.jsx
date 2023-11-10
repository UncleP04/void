import React from "react";
import "../style.css";
import Scroll from "../../../public/Image/scroll.png";
import Srollbar from "../../../public/Image/scrollbar.png";
import Image1 from "../../../public/Image/time.png";
import Image2 from "../../../public/Image/earthcircle.png";
import Image3 from "../../../public/Image/connect.png";
import Image4 from "../../../public/Image/shake.png";
import Image5 from "../../../public/Image/front.png";
import Image6 from "../../../public/Image/announce.png";
import Image7 from "../../../public/Image/seat.png";
import Image8 from "../../../public/Image/home.png";
import Image from "next/image";

const CourseGrid = () => {
  const listOne = [
    {
      url: Image1,
      text: "Defining Career Objectives",
      paragraph:
        "Chart a clear path for your career, identify your goals, and create a roadmap for your professional journey",
    },
    {
      url: Image2,
      text: "Mastering the Art of Effective Networking",
      paragraph:
        "Build and expand your professional network, connecting with key industry players and like-minded individuals",
    },
    {
      url: Image3,
      text: "Mastering the Art of Effective Networking",
      paragraph:
        "Build and expand your professional network, connecting with key industry players and like-minded individuals",
    },
    {
      url: Image4,
      text: "Negotiating Your Ideal Salary",
      paragraph:
        "Gain the skills to negotiate compensation packages that align with your worth and expectations.",
    },
  ];

  const listTwo = [
    {
      url: Image5,
      text: "Thriving In The World Of Freelancing",
      paragraph:
        "Navigate the world of freelancing, from finding clients to delivering quality work and building a freelance career.",
    },
    {
      url: Image6,
      text: "Building Your Personal Brand",
      paragraph:
        "Craft a unique personal brand that makes you stand out in a crowded job market and establishes your expertise.",
    },
    {
      url: Image7,
      text: "Excelling in Job Interview Preparation",
      paragraph:
        "Prepare for interviews with confidence and finesse, leaving a lasting impression on potential employers.",
    },
    {
      url: Image8,
      text: "Achieving Success During Onboarding and in Your New Role",
      paragraph:
        "Ensure a smooth transition into new roles and set yourself up for long-term success.",
    },
  ];

  return (
    <div className="w-[100%] flex flex-col md:flex-row justify-center items-center gap-10 py-8 px-4 background">
      <div className="flex flex-col justify-center items-center gap-10">
        {listOne.map((itemOne, i) => (
          <div
            key={i}
            className="border border-light rounded-md w-[300px] h-[250px] gap-10 relative overflow-hidden"
          >
            <Image
              src={itemOne.url}
              alt="image.png"
              width={700}
              height={300}
              className="w-[100%] h-[100%] hover:scale-125 transition-all"
            />
            <div className="p-4 gridDiv text-center z-20 absolute bottom-0 left-0">
              <h2 className="text-white text-[15px]">{itemOne.text}</h2>
              <p className="text-[13px] text-white">{itemOne.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
      <Image
        src={Srollbar}
        alt="image.png"
        width={700}
        height={300}
        className="w-[10px] h-[100%] hidden md:block hover:scale-125 transition-all"
      />
      <div className="flex flex-col justify-center items-center gap-10">
        {listTwo.map((itemTwo, i) => (
          <div
            key={i}
            className="border border-light rounded-md w-[300px] h-[250px] gap-10 relative overflow-hidden"
          >
            <Image
              src={itemTwo.url}
              alt="image.png"
              width={700}
              height={300}
              className="w-[100%] h-[100%] hover:scale-125 transition-all"
            />
            <div className="p-4 gridDiv text-center z-20 absolute bottom-0 left-0">
              <h2 className="text-white text-[15px]">{itemTwo.text}</h2>
              <p className="text-[13px] text-white">{itemTwo.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
