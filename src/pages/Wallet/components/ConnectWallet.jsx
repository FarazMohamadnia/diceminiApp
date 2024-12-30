import React from "react";
import WalletIcon from "../../../components/icons/walletIcon";

const ConnectWalletButton = () => {
  return (
    <button
      className="w-full flex justify-center items-center space-x-2 border border-[#00F0FF] rounded-xl px-6 py-4 text-[#00F0FF]"
      style={{
        background:
          "linear-gradient(117deg, #00F0FF -84.8%, rgba(40,39,70,0) 104.46%)",
      }}
    >
      <WalletIcon />
      <span className="font-bold">CONNECT YOUR WALLET</span>
    </button>
  );
};

export default ConnectWalletButton;
