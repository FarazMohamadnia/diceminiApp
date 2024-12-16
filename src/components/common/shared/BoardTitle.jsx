import React from "react";

const BoardTitle = ({ title, icon }) => {
  return (
    <div className="flex flex-col my-4 gap-4 items-center">
      {icon}
      <span className="text-[#3BFFFF] text-lg font-extrabold">{title}</span>
    </div>
  );
};

export default BoardTitle;
