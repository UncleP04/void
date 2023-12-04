import { ButtonS } from "@/components/atoms/button";
import CourseGrid from "@/components/molecules/courseGrid";
import Intro from "@/components/molecules/void/intro";
import React from "react";
import ImageSecret from "@/../../public/Image/secret.png";
import Payment from "@/../../public/Image/payment.png";
import Image from "next/image";
import Testimonals from "@/components/molecules/testimonals";
import Connect from "@/components/molecules/void/connect";
import Navbar from "@/components/molecules/navbar";
import GirdLayout from "@/components/molecules/void/girdLayout";

const Void = () => {
  return (
    <div className="w-[100%] h-screen bg-black">
      <div className="w-[100%]">
        <Navbar />
      </div>
      <Intro />
      <div className="bg-[#040405]">
        <GirdLayout />
      </div>
      <div className="w-[100%] bg-black flex flex-col justify-center items-center text-center pt-12">
        <h1 className="text-[2em] font-semibold uppercase text-white">
          Led by experienced career coaches and industry experts.
        </h1>
        <p className="text-[18px] py-2 text-white">
          Tutors will be unveiled upon the launch of the website.
        </p>
        <Image
          src={ImageSecret}
          alt="secret.png"
          width={700}
          height={300}
          className="w-full md:w-[70%] h-[100%] pt-8"
        />
      </div>
      <Testimonals />
      <div className="flex flex-col justify-center items-center py-12 bg-black px-4">
        <div className="w-[100%] text-center flex flex-col justify-center items-center">
          <h1 className="text-[2.5em] text-white">Join In Now</h1>
          <h1 className="text-[2.5em] py-4 text-white">THE CHOICE IS YOURS</h1>
        </div>
        <Image
          src={Payment}
          alt="Payment.png"
          width={700}
          height={300}
          className="w-full md:w-[30%] h-[100%] self-center"
        />
        <p className="text-[18px] py-2 text-white self-center text-center md:w-[60%]">
          Gain the skills and knowledge you need to succeed in the job market.
          Network with other job seekers and receive personalized feedback.
          Enroll today and start your journey to career success!
        </p>
        <span className="py-4 text-center self-center flex gap-4">
          <h1 className="text-[2.3em] font-semibold uppercase text-primary">
            Dream Big
          </h1>
          <h1 className="text-[2.3em] font-semibold uppercase text-green-500">
            Earn big
          </h1>
        </span>
        <ButtonS label="Enroll Now" />
      </div>
      <div className="bg-[#040405]">
        <Connect />
      </div>
    </div>
  );
};

export default Void;
