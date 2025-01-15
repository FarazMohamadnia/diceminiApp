import React from "react";
import BackIcon from "../../icons/back";
import {useNavigate} from 'react-router-dom'
import ArrowLeft from "../../icons/arrowleft";

const BackButton = ({ title , color }) => {

  const navigate  = useNavigate()

  return (
    <div className="flex items-center cursor-pointer mt-2" onClick={()=>navigate(-1)}>
      <span className="mt-0.5">
        {
          color ? <ArrowLeft /> :<BackIcon />
        }
      </span>{" "}
      <span className={`ml-1 ${color ? 'text-white' :  'text-[#CAFD7B]'} text-sm`}>{title}</span>
    </div>
  );
};

export default BackButton;
