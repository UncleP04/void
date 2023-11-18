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
            className="w-[80px] h-[80px]"
          />
        </Link>
        <h1 className="text-[2.5em] py-4 text-white">JOB HUNTING IS A SKILL</h1>
        <p className="text-[18px] py-2 text-white">
          Job Hunting Is A Skill, We will teach you how to master it
        </p>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center text-center pt-12 bg-black">
        <span className="py-4 text-center self-center flex flex-col md:flex-row gap-2">
          <h1 className="text-[2em] font-semibold uppercase text-white">
            The Void MasterClass
          </h1>
          <h1 className="text-[2em] font-semibold uppercase text-primary">
            2.0
          </h1>
        </span>
        <p className="text-[18px] py-2 text-white">
          A comprehensive job search training program designed to help you find <br />
          your dream HIGH-PAYING JOB.
        </p>
        <ButtonS label="JOIN THE MASTERCLASS" />
      </div>
    </div>
  );
};

export default Intro;
