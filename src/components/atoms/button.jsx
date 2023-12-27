import React from "react";
import Link from "next/link";

export const ButtonS = (props) => {
  return (
    <button className="text-white bg-primary py-2 px-6 rounded-md w-[auto]">
      <Link href={process.env.NEXT_PUBLIC_PAYMENT_LINK} target="_blank">
        {props.label}
      </Link>
    </button>
  );
};