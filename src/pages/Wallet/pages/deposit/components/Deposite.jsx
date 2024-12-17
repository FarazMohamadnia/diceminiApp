import React from "react";
import Navbar from "../../../../../components/global/Navbar/navbar";
import Bottonlink from "../../../../../components/global/BottonLink/bottonlink";
import BackButton from "../../../../../components/common/shared/BackButton";
import WalletIcon from "../../../../../components/icons/walletIcon";
import CustomButton from "../../../../../components/common/shared/CustomButton";
import DropDownMenu from "../../../components/DropdownMenu";
import ManualDeposit from "./ManualDeposit";

const Deposite = () => {
  return (
    <div>
      <Navbar />
      <main className="px-4">
        <div className="mt-6">
          <BackButton title="Back to wallet" />
        </div>
        <div className="flex justify-center items-center mt-4 gap-4">
          <WalletIcon />
          <span className="text-[#3BFFFF] text-lg font-extrabold">
            Manual Deposit
          </span>
        </div>
        <div className="flex w-full items-center gap-4 mt-5">
          <CustomButton title="Manual Deposit" active={true} />
          <CustomButton title="Express Deposit" active={false} />
        </div>
        <div className="mt-4 flex w-full gap-4">
          <DropDownMenu />
          <DropDownMenu title="Network" options={["ERC20", "BSC", "TON"]} />
        </div>
        <div className="w-full mt-6">
          <ManualDeposit />
        </div>
      </main>
      <Bottonlink />
    </div>
  );
};

export default Deposite;
