import React from "react";
import DepositIcon from "../../../../../components/icons/deposit";
import HistoryTable from "./HistoryTable";

const inactiveStyle = {
  background: "radial-gradient(circle at center, #0F2B3E 40%, #000000 90%)",
  boxShadow: "inset 0 0 20px 0 rgba(26,229,161,0.5)",
};

const ExpressDeposit = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <button
          style={inactiveStyle}
          className="flex items-center justify-between space-x-2 border border-[#1AE5A1] rounded-2xl px-8 py-2 text-[#07CB8A]"
        >
          <DepositIcon />
          <span className="font-semibold tracking-wide">DEPOSIT</span>
        </button>
      </div>
      <div className="mt-6">
        <HistoryTable />
      </div>
    </>
  );
};

export default ExpressDeposit;
