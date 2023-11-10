"use client";
import React, { useState } from "react";
import { ButtonS } from "../atoms/button";
import { MdNewspaper } from "react-icons/md";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import NewLetter from "./newsLetter";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#151519',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
    overflowY: 'scroll',
    height: '400px',
  };

const Letters = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="w-[100%] h-auto flex flex-col justify-center items-center bg-[#040405] p-4">
        <div className="lg:w-[600px] w-[100%] text-center">
          <h1 className="text-[2.5em] py-4 text-white">The Void NewsLetter</h1>
          <p className="text-[18px] py-2 text-white">
            A weekly publication providing valuable insights, resources, and
            opportunities to excel in your career.
          </p>
        </div>
        <div className="bg-[#35323DCC] lg:w-[80%] p-4 rounded-md shadow-md my-4">
          <h1 className="text-white text-[2.3em] pb-5">Newsletter Content</h1>
          <div>
            <div className="flex flex-col md:flex-row justify-around items-center">
              <ul className="flex flex-col gap-10">
                <li className="text-white text-[20px]">
                  Career development and job opportunities
                </li>
                <li className="text-white text-[20px]">
                  Emerging industries and startups
                </li>
                <li className="text-white text-[20px]">
                  Skills and knowledge acquisition
                </li>
              </ul>
              <ul className="flex flex-col gap-10">
                <li className="text-white text-[20px]">
                  Exclusive content and insights
                </li>
                <li className="text-white text-[20px]">
                  Career exploration and transitions
                </li>
                <button
                  onClick={handleOpen}
                  className="text-white py-2 px-4 rounded-md bg-primary text-[20px] flex justify-center items-center"
                >
                  <MdNewspaper />
                  Freemuim Newsletters
                </button>
              </ul>
            </div>
          </div>
        </div>
        <ButtonS label="Enroll Now" />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <NewLetter />
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Letters;
