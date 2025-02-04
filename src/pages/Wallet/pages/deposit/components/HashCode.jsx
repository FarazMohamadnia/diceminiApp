import React from "react";
import useUserStore from "../../../../../store/user";
import Disconnect from "../../../../../components/icons/disconnect";

const AddressDisplay = ({ address, onCopy ,disconnectWallet}) => {
  const {user} = useUserStore()
  const style = {
    background: "linear-gradient(to bottom right,#00efff80 ,#28274600 60%)",
  };

  return (
    <div
      style={style}
      className="
        bg-gradient-to-br from-[#00efff] to-[#282746]
        flex items-center justify-between 
        rounded-xl px-4 py-[14px] font-medium 
        border border-[#00efff] w-full max-w-md
      "
    >
      <span className="text-[#3BFFFF]">Address</span>
      <span className="text-[#919191] px-4 whitespace-nowrap overflow-hidden text-sm overflow-ellipsis">
        {address}
      </span>
      <button className="text-[#3BFFFF] hover:underline" onClick={disconnectWallet}>
        <Disconnect  />
      </button>
    </div>
  );
};

export default AddressDisplay;
