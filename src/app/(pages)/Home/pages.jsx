import React from "react"
import Navbar from "../../../components/molecules/navbar";
import Introduction from "@/components/molecules/introduction";
import About from "@/components/molecules/about";
import Course from "@/components/molecules/course";
import Letters from "@/components/molecules/letters";
import Testimonals from "@/components/molecules/testimonals";
import Access from "@/components/molecules/access";
import Link from "next/link";
import Image from "next/image";

const Landing = () => {
  return (
   <div className='w-[100%] h-screen bg-black relative overflow-hidden'>
      <div className="">
      <Navbar />
      <Introduction />
      <About />
      <Course />
      <Letters />
      <Testimonals />
      <Access />
      </div>
      <div className="w-[100%] h-[100%] fixed top-0 left-0 my-0 mx-auto flex justify-center items-center flex-col construction">
        <h1 className="text-white text-[2em] mb-4 text-center">Site is Currently under construction.</h1>
        <Image src={'/Image/construct.svg'} alt="Site under construction" width={700} height={300} className="lg:w-[60%] lg:h-[60%] w-[100%] p-6"/>
        <Link href={'http://localhost:3000/void'} className="text-white bg-primary py-3 px-4 rounded-md">Enroll Now</Link>
      </div>
   </div>
  )
}

export default Landing;

// http://localhost:3000/void
