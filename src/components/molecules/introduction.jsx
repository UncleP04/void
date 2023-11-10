import React from "react";
import '../style.css';
import { ButtonS } from "../atoms/button";
import { MdCheck } from "react-icons/md";

const Introduction = () => {

    return (
        <div className="bgImage">
            <div>
                <h1 className="text-white text-[3em]">The Void Academy</h1>
                <p className="text-white text-[20px]">Job Hunting Is A Skill, We will teach you how to master it</p>
                <ul className="py-4">
                    <li className="text-slate-300 py-1 flex justify-start items-start text-start self-start"><MdCheck size={30} className="text-primary"/> The Future of Your Career Starts Here</li>
                    <li className="text-slate-300 py-1 flex justify-start items-start text-start self-start"><MdCheck size={30} className="text-primary"/>Unlock the Secrets of High-Paying Jobs and Fulfilling Employment</li>
                    <li className="text-slate-300 py-1 flex justify-start items-start text-start self-start"><MdCheck size={30} className="text-primary"/>You are removing Financial Blocks</li>
                </ul>
                <ButtonS label="Enroll Now"/>
            </div>
        </div>
    )
}

export default Introduction;