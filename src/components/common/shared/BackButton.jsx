import React from "react";
import BackIcon from "../../icons/back";

const BackButton = ({ title }) => {
  return (
    <div className="flex items-center cursor-pointer">
      <BackIcon /> <span className="ml-2 text-[#CAFD7B]">{title}</span>
    </div>
  );
};

export default BackButton;
