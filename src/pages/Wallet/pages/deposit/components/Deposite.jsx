import React, { useState } from "react";
import Navbar from "../../../../../components/global/Navbar/navbar";
import Bottonlink from "../../../../../components/global/BottonLink/bottonlink";
import BackButton from "../../../../../components/common/shared/BackButton";
import CustomButton from "../../../../../components/common/shared/CustomButton";
import DropDownMenu from "../../../components/DropdownMenu";
import ManualDeposit from "./ManualDeposit";
import ExpressDeposit from "./ExpressDeposit";
import Wallet3 from "../../../../../components/icons/wallet3";

const Deposite = () => {
  const [activeTab, setActiveTab] = useState("manual");

  return (
    <div>
      <Navbar />
      <main className="px-4 pb-28">
        <div className="mt-6">
          <BackButton title="Back to wallet" />
        </div>
        <div className="flex justify-center items-center mt-4 gap-4">
          <div className="pt-1">
            <Wallet3 />
          </div>
          <span className="text-[#3BFFFF] text-lg font-extrabold">
            {activeTab === "manual" ? 'Manual Deposit ' : 'Express Deposit'}
          </span>
        </div>
        <div className="flex w-full items-center gap-4 mt-5">
          <CustomButton
            title="Manual Deposit"
            value="manual"
            active={activeTab === "manual" ? true : false}
            setActiveTab={setActiveTab}
          />
          <CustomButton
            title="Express Deposit"
            value="express"
            active={activeTab === "express" ? true : false}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className="mt-4 flex w-full gap-4">
          <DropDownMenu />
          <DropDownMenu title="Network" options={["ERC20", "BSC", "TON"]} />
        </div>
        <div className="w-full mt-6">
          {activeTab === "manual" ? <ManualDeposit /> : <ExpressDeposit />}
        </div>
      </main>
      <Bottonlink />
    </div>
  );
};

export default Deposite;
