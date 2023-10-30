import React from 'react';

export const Button = (props) => {
  return (
    <button className="text-white bg-primary py-2 px-6 rounded-md w-[200px]">
      {props.label}
    </button>
  );
};
