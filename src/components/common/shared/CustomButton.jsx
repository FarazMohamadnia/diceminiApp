import React from "react";

const CustomButton = ({ title, active = false, value, setActiveTab }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-4 py-3 font-medium border transition-colors duration-150";

  const activeClasses = active
    ? "bg-[#0F2B3E] text-white border-[#3BFFFF]"
    : "bg-transparent text-[#919191] border-[#1AE5A1] hover:bg-[#0F2B3E] hover:text-white";

  const inactiveStyle = {
    background: "radial-gradient(circle at center, #0F2B3E 40%, #000000 90%)",
    boxShadow: "inset 0 0 20px 0 rgba(26,229,161,0.5)",
  };

  return (
    <button
      style={!active ? inactiveStyle : {}}
      className={`w-full ${baseClasses} ${activeClasses}`}
      onClick={() => setActiveTab(value)}
    >
      {title}
    </button>
  );
};

export default CustomButton;
