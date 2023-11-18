import React from "react";
import Image from "next/image";
import ImageAccess from "@/../../public/Image/access.png";
import ImageGrid from "@/../../public/Image/grid.png";
import Payment from "@/../../public/Image/payment.png";
import Whatsapp from "@/../../public/Image/w.png";
import Telgram from "@/../../public/Image/Te.png";
import LinkedIn from "@/../../public/Image/l.png";
import X from "@/../../public/Image/t.png";
import { ButtonS } from "../atoms/button";

const Access = () => {
  const imageArr = [
    { src: Whatsapp },
    { src: X },
    { src: LinkedIn },
    { src: Telgram },
  ];

  return (
    <div>
      <div className="w-[100%] h-auto flex flex-col justify-center items-center bg-[#040405] p-4">
        <div className="w-[100%] text-center flex flex-col justify-center items-center">
          <h1 className="text-[2.5em] py-4 text-white">
            You Will Get Access To
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src={ImageAccess}
            alt="access.png"
            width={700}
            height={300}
            className="w-[100%] h-[100%]"
          />
          <div className="w-[100%] text-start flex flex-col justify-center items-center">
            <h1 className="text-[2.3em] py-4 text-white text-start self-start">
              You Will Get Access To
            </h1>
            <p className="text-slate-100 text-[1.5em] text-start self-start">
              Our online community is a supportive, high-focus environment.
              Everyone is on the same mission
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-12">
          <div className="w-[100%] text-start flex flex-col justify-center items-center">
            <h1 className="text-[2.3em] py-4 text-white text-start self-start">
              Private community with expert
            </h1>
            <p className="text-slate-100 text-[1.5em] text-start self-start">
              Special guidance with experts to <br /> land a job in 60 days
            </p>
          </div>
          <Image
            src={ImageGrid}
            alt="access.png"
            width={700}
            height={300}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="flex flex-col justify-center items-center py-12">
          <div className="w-[100%] text-center flex flex-col justify-center items-center">
            <h1 className="text-[2.5em] py-4 text-white">
              THE CHOICE IS YOURS
            </h1>
          </div>
          <Image
            src={Payment}
            alt="Payment.png"
            width={700}
            height={300}
            className="w-[80%] h-[100%] self-center"
          />
        </div>
        <div className="w-[100%] text-center flex flex-col justify-center items-center">
          <h1 className="text-[2.3em] py-4 text-white text-center self-center">
            JOIN IN NOW
          </h1>
          <p className="text-slate-100 text-[1.5em] text-center self-center lg:w-[60%]">
            The Void Academy is for the Big Dreamers Dedicated to teaching you
            the skills of job hunting to find fulfilling, high-paying, and
            rewarding employment.
          </p>
          <span className="py-4 text-center self-center flex flex-col md:flex-row gap-4">
            <h1 className="text-[2.3em] font-semibold uppercase text-primary">
              Dream Big
            </h1>
            <h1 className="text-[2.3em] font-semibold uppercase text-green-500">
              Earn big
            </h1>
          </span>
          <ButtonS label="Enroll Now" />
          <div className="grid grid-cols-4 gap-8 pt-12">
            {imageArr.map((images, i) => (
              <Image
                key={i}
                src={images.src}
                alt="testimonale.png"
                width={700}
                height={300}
                className="w-[40px] h-[40px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
