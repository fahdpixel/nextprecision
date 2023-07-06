import React from "react";

const Button = ({ children, className, spanColor }) => {
  return (
    <button className={`relative capitalize ease-in-out duration-300 font-sans flex items-center hover:rounded-full ${className}`}>
      <span
        className={`rounded-full w-8 h-8 md:w-12 md:h-12 inline-block ${spanColor}`}
      ></span>
      <span className="inline-block z-10 absolute ml-[18px] md:ml-[26px]">{children}</span>
    </button>
  );
};

export default Button;
