import React from "react";
import styles from "./styles.module.css";

const transactions = [
  {
    status: "Successful",
    statusIcon: "✅",
    statusColor: "text-green-400",
    amount: "-10 USDT",
    amountColor: "text-red-400",
    date: "2024/06/12",
  },
  {
    status: "Processing",
    statusIcon: "⌛",
    statusColor: "text-yellow-400",
    amount: "-10 USDT",
    amountColor: "text-red-400",
    date: "2024/06/12",
  },
  {
    status: "Successful",
    statusIcon: "✅",
    statusColor: "text-green-400",
    amount: "+10 USDT",
    amountColor: "text-green-400",
    date: "2024/06/12",
  },
  {
    status: "Successful",
    statusIcon: "✅",
    statusColor: "text-green-400",
    amount: "+10 USDT",
    amountColor: "text-green-400",
    date: "2024/06/12",
  },
  {
    status: "Successful",
    statusIcon: "✅",
    statusColor: "text-green-400",
    amount: "-10 USDT",
    amountColor: "text-red-400",
    date: "2024/06/12",
  },
];

const TransactionHistory = () => {
  return (
    <div className="relative border border-green-500 rounded-xl w-full max-w-md bg-gradient-to-b from-[#0E1118] to-[#1D222E] p-4 overflow-hidden">
      {/* <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-green-500 text-black font-semibold px-4 py-1 rounded-b-full text-center ">
          TRANSACTION HISTORY
        </div>
      </div> */}
      <div className="trans"></div>

      <div className="mt-8 flex flex-col divide-y divide-green-500">
        {transactions.map((tx, index) => (
          <div key={index} className="flex items-center justify-between py-3">
            {/* Left Section: Icon + Status */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{tx.statusIcon}</span>
              <span className={`${tx.statusColor} font-semibold`}>
                {tx.status}
              </span>
            </div>

            {/* Middle: Amount and Date */}
            <div className="flex items-center space-x-4">
              <span className={`${tx.amountColor} font-semibold`}>
                {tx.amount}
              </span>
              <div className="flex items-center space-x-1">
                <span className="text-green-400">📅</span>
                <span className="text-white">{tx.date}</span>
              </div>
            </div>

            {/* Right Arrow */}
            <span className="text-cyan-400">{"»"}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
