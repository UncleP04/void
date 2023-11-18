import React from 'react';

export const ButtonS = (props) => {
  return (
    <button className="text-white bg-primary py-2 px-6 rounded-md w-[auto]">
      {props.label}
    </button>
  );
};
