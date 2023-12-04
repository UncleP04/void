import React from "react";
import Image from "next/image";
import Logo from "@/../../public/Image/logo.png";
import Link from "next/link";
import { ButtonS } from "@/components/atoms/button";

const Intro = () => {
  return (
    <div className="pt-12">
      <div className="w-[100%] flex flex-col justify-center items-center text-center">
        <Link href="/" className="font-bold text-black self-center">
          <Image
            src={Logo}
            alt="logo.png"
            width={700}
            height={300}
            className="w-[100px] h-[100px]"
          />
        </Link>
        <h1 className="text-[2.5em] py-4 text-white font-semibold">
          JOB HUNTING IS A <span className="text-primary">SKILL</span>
        </h1>
        <p className="text-[24px] py-2 text-white">
          Job Hunting Is A Skill, We will teach you how to master it
        </p>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center text-center pt-12 bg-black hidden">
        <span className="text-center self-center flex flex-col md:flex-row gap-2">
          <h1 className="text-[2em] font-semibold uppercase text-white m-0">
            The Void MasterClass
          </h1>
          <h1 className="text-[2em] font-semibold uppercase text-primary m-0">
            2.0
          </h1>
        </span>
        <p className="text-[24px] py-2 text-white md:w-[75%] w-[100%]">
          A comprehensive job search training program designed to help you find
          your dream HIGH-PAYING JOB.
        </p>
        <div className="flex gap-4">
          <ButtonS label="Enroll Now" />
          <button className="text-white bg-transparent border-2 border-slate-50 py-2 px-6 rounded-md w-[auto] hover:bg-slate-50 hover:text-black  ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
