"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../style.css";
import Image from "next/image";
import Logo from "../../../public/Image/logo.png";
import { MdMenu } from 'react-icons/md'
import { ButtonS } from "../atoms/button";

const Navbar = () => {
  const router = useRouter();
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show);
  }

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <div>
      <nav className="flex justify-between items-center py-4 shadow-md bg-transparent z-10 px-[5%] sticky top-0 left-0 w-[100%]">
        <Link href="/void" className="font-bold text-black self-start">
          <Image
            src={Logo}
            alt="logo.png"
            width={700}
            height={300}
            className="w-[80px] h-[80px]"
          />
        </Link>
        <div className={`${show ? 'block' : "hidden lg:flex"} responsive`}>
          <ul className="flex lg:space-x-[30px] flex-col lg:flex-row text-center self-center justify-between items-center">
            <Link
              href="/void"
              className={`font-medium links ${
                isActive("/void") ? "text-black" : ""
              }`}
            >
              Home
            </Link>

            <Link
              href="/void"
              className={`font-medium links ${
                isActive("/void") ? "text-black" : ""
              }`}
            >
              About
            </Link>

            <Link
              href="/void"
              className={`font-medium links ${
                isActive("/void") ? "text-black" : ""
              }`}
            >
              Courses
            </Link>
            <Link
              href="/void"
              className={`font-medium links ${
                isActive("/void") ? "text-black" : ""
              }`}
            >
              NewsLetters
            </Link>
            <Link
              href="/void"
              className={`font-medium links ${
                isActive("/void") ? "text-black" : ""
              }`}
            >
              Community
            </Link>
          <ButtonS label="Enroll Now" />
          </ul>
        </div>
        <button onClick={handleShow} className="mx-8 w-[30px] h-[30px] fixed lg:relative top-3 right-3 lg:hidden z-30">
          <MdMenu size={34} className="text-white"/>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
