import React from "react";
import BackIcon from "../../icons/back";
import {useNavigate} from 'react-router-dom'

const BackButton = ({ title }) => {

  const navigate  = useNavigate()

  return (
    <div className="flex items-center cursor-pointer" onClick={()=>navigate(-1)}>
      <span className="mt-0.5">
        <BackIcon />
      </span>{" "}
      <span className="ml-1 text-[#CAFD7B] text-sm">{title}</span>
    </div>
  );
};

export default BackButton;
