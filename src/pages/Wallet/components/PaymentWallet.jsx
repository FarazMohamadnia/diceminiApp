import React from "react";
import BlueShadow from "../../../components/shadows/blueShadow";
import DepositIcon from "../../../components/icons/deposit";
import WithdrawIcon from "../../../components/icons/withdraw";
// Replace these with your actual icon components or SVGs.
// import { IoWalletOutline } from "react-icons/io5";
// import { IoCardOutline } from "react-icons/io5";

const PaymentWallet = () => {
  return (
    <div
      className="relative border border-[#00F0FF] rounded-xl p-6 w-full max-w-md flex items-center justify-between"
      style={{
        background:
          "linear-gradient(117deg, #00F0FF -100%, rgba(40,39,70,0) 104.46%)",
      }}
    >
      <div className="absolute top-[-8px] left-1/4">
        <BlueShadow />
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-6xl font-bold text-white leading-none text-center">
          25
        </span>
        <span className="mt-2 text-cyan-400 font-semibold">USDT/TON</span>
      </div>

      <div className="flex flex-col space-y-4 ml-6">
        <button className="flex items-center justify-between space-x-2 border border-[#00F0FF] rounded-2xl px-6 py-3 text-[#07CB8A]">
          <DepositIcon />
          <span className="font-semibold tracking-wide min-w-[93px] text-start">
            DEPOSIT
          </span>
        </button>
        <button className="flex  items-center justify-between space-x-2 border border-[#00F0FF] rounded-2xl px-6 py-3 text-[#07CB8A]">
          <span className="-mt-1.5">
            <WithdrawIcon />
          </span>
          <span className="font-semibold  tracking-wide min-w-[93px] text-start">
            WITHDRAW
          </span>
        </button>
        {/* <button className="flex items-center justify-between space-x-2 border border-[#00F0FF] rounded-2xl px-6 py-3 text-[#07CB8A]">
          <WithdrawIcon />
          <span className="font-semibold tracking-wide min-w-[93px] text-start">
            WITHDRAW
          </span>
        </button> */}
      </div>
    </div>
  );
};

export default PaymentWallet;
