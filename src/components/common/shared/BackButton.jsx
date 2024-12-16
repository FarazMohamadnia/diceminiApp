import React from "react";
import BackIcon from "../../icons/back";

const BackButton = ({ title }) => {
  return (
    <div className="flex items-center cursor-pointer">
      <span className="mt-0.5">
        <BackIcon />
      </span>{" "}
      <span className="ml-1 text-[#CAFD7B] text-sm">{title}</span>
    </div>
  );
};

export default BackButton;
