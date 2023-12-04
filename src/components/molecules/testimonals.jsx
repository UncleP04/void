import Image from "next/image";
import React from "react";
import Screen1 from "../../../public/Image/1.png";
import Screen2 from "../../../public/Image/2.png";
import Screen3 from "../../../public/Image/3.png";
import Screen4 from "../../../public/Image/4.png";
import Screen5 from "../../../public/Image/5.png";
import Screen6 from "../../../public/Image/6.png";
import Screen7 from "../../../public/Image/7.png";
import Screen15 from "../../../public/Image/7.png";
import Screen8 from "../../../public/Image/8.png";
import Screen9 from "../../../public/Image/9.png";
import Screen10 from "../../../public/Image/10.png";
import Screen16 from "../../../public/Image/10.png";
import Screen11 from "../../../public/Image/11.png";
import Screen12 from "../../../public/Image/12.png";
import Screen13 from "../../../public/Image/13.png";
import Screen14 from "../../../public/Image/14.png";
import "../style.css";

const Testimonals = () => {
  const imageArr = [
    { src: Screen1 },
    { src: Screen2 },
    { src: Screen3 },
    { src: Screen4 },
    { src: Screen5 },
    { src: Screen6 },
    { src: Screen7 },
    { src: Screen8 },
    { src: Screen9 },
    { src: Screen10 },
    { src: Screen15 },
    { src: Screen16 },
    { src: Screen11 },
    { src: Screen12 },
    { src: Screen13 },
    { src: Screen14 },
  ];

  return (
    <div className="bg-[#000]">
      <div className="w-[100%] text-center flex flex-col justify-center items-center py-4">
        <h1 className="text-[2.5em] py-2 text-white">Our Student Reviews</h1>
        <p className="text-[18px] py-2 text-white">
          Testimonies from our students
        </p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-[100%] overflow-y-auto scrollbar h-[100svh]"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "transparent transparent",
        }}
      >
        {imageArr.map((images, i) => (
          <Image
            key={i}
            src={images.src}
            alt="testimonale.png"
            width={700}
            height={300}
            className="w-[100%] h-[100%]"
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonals;
