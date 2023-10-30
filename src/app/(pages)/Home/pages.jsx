import React from "react"
import Navbar from "../../../components/molecules/navbar";
import Introduction from "@/components/molecules/introduction";
import About from "@/components/molecules/about";
import Course from "@/components/molecules/course";

const Landing = () => {
  return (
   <div className='w-[100%] h-screen bg-black'>
      <Navbar />
      <Introduction />
      <About />
      <Course />
   </div>
  )
}

export default Landing;
