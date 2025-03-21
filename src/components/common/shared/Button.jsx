import React from "react";

const Button = ({ title, icon , color}) => {
  return (
    <div className="flex items-center cursor-pointer">
      {icon} <span className={`ml-2 text-[${color ? color : '#1AE5A1'}] text-xl`}>{title}</span>
    </div>
  );
};

export default Button;
