import React from "react";
import Image from "next/image";
import Logo from "@/../../public/Image/logo.png";
import Whatsapp from "@/../../public/Image/w.png";
import Telgram from "@/../../public/Image/Te.png";
import LinkedIn from "@/../../public/Image/l.png";
import X from "@/../../public/Image/t.png";
import Link from "next/link";
import { ButtonS } from "@/components/atoms/button";

const Connect = () => {
    const imageArr = [
        { src: Whatsapp },
        { src: X },
        { src: LinkedIn },
        { src: Telgram },
      ];
  return (
    <div className="pt-12 flex flex-col justify-center items-center w-full px-4">
      <div className="md:w-[50%] flex flex-col justify-center items-center text-center bg-[#0c0c0fe3] p-4 rounded-lg">
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
        <input type="email" name="email" id="email" placeholder="EMAIL" className="border outline-slate-700 hover:outline-slate-800 hover:border-slate-800 py-2 px-4 rounded-md w-full bg-transparent my-4" />
        <ButtonS label="JOIN THE MASTERCLASS" />
      </div>
      <div className="grid grid-cols-4 gap-8 py-12">
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
  );
};

export default Connect;
