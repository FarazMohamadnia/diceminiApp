import React from "react";
import WalletIcon from "../../../components/icons/walletIcon";

const ConnectWalletButton = () => {
  return (
    <button
      className="flex items-center space-x-2 border border-[#00F0FF] rounded-xl px-6 py-3 text-[#00F0FF]"
      style={{
        background:
          "linear-gradient(117deg, #00F0FF -84.8%, rgba(40,39,70,0) 104.46%)",
      }}
    >
      <WalletIcon />
      <span className="font-semibold">CONNECT YOUR WALLET</span>
    </button>
  );
};

export default ConnectWalletButton;
