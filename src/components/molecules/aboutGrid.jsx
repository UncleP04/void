import React from "react";
import "../style.css";
import Scroll from "../../../public/Image/scroll.png";
import Logo from "../../../public/Image/Academy.png";
import Image from "next/image";

const AboutGrid = () => {
  const listOne = [
    {
      url: Scroll,
      text: "Defining Career Objectives",
    },
    {
      url: Scroll,
      text: "Mastering the Art of Effective Networking",
    },
    {
      url: Scroll,
      text: "Mastering the Art of Effective Networking",
    },
  ];

  return (
    <div className="lg:w-[60%] grid md:grid-cols-2 justify-center items-center text-center py-8 px-4">
      <div className="self-end text-end">
        <Image
          src={Logo}
          alt="image.png"
          width={700}
          height={300}
          className="md:w-[300px] md:h-[300px] rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 py-4 md:py-0">
        {listOne.map((itemOne, i) => (
          <div key={i} className="flex justify-start items-center">
            <Image
              src={itemOne.url}
              alt="image.png"
              width={700}
              height={300}
              className="w-[50px] h-[50px]"
            />
            <div className="p-4 text-white shadow-2xl">
              <h2 className="text-start">{itemOne.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutGrid;
