import React from "react";
import useUserStore from "../../../../../store/user";
import Copy from "../../../../../components/icons/copy";

const AddressDisplay = ({ address, onCopy }) => {
  const {user} = useUserStore()
  const style = {
    background: "linear-gradient(to bottom right,#00efff80 ,#28274600 60%)",
  };

  const handleCopy = () => {
    if (onCopy) {
      onCopy(address);
    } else {
      navigator.clipboard.writeText(address).then(() => {
        console.log("Address copied to clipboard!");
      });
    }
  };

  return (
    <div
      style={style}
      className="
        bg-gradient-to-br from-[#00efff] to-[#282746]
        flex items-center justify-between 
        rounded-xl px-4 py-2 font-medium 
        border border-[#00efff] w-full max-w-md
      "
    >
      <span className="text-[#3BFFFF]">Address</span>
      <span className="text-[#919191] px-4 whitespace-nowrap overflow-hidden text-sm overflow-ellipsis">
        {address}
      </span>
      <button className="text-[#3BFFFF] hover:underline" onClick={handleCopy}>
        <Copy />
      </button>
    </div>
  );
};

export default AddressDisplay;
