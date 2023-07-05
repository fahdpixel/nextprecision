import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`rounded-full border-2 hover:scale-105 px-6 py-2 capitalize ease-in-out duration-300 font-sans ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
