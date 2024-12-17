import React from "react";
import './index.css'
import {SucessFullIcon} from '../../../../../components/icons/successfull';
import {PendingIcon} from '../../../../../components/icons/pending';
import CalenderIcon from '../../../../../components/icons/calender'
const transactions = [
  {
    status: "Successful",
    icon: (
      <>
        <SucessFullIcon />
      </>
    ),
    statusColor: "#1AE5A1",
    amount: "-10 USDT",
    amountColor: "#1AE5A1",
    date: "2024/06/12",
  },
  {
    status: "Processing",
    icon: (
      <>
        <PendingIcon />
      </>
    ),
    statusColor: "#FFCF60",
    amount: "-10 USDT",
    amountColor: "#FFCF60",
    date: "2024/06/12",
  },
  {
    status: "Successful",
    icon: (
      <>
        <SucessFullIcon />
      </>
    ),
    statusColor: "#1AE5A1",
    amount: "+10 USDT",
    amountColor: "#1AE5A1",
    date: "2024/06/12",
  },
  {
    status: "Successful",
    icon: (
      <>
        <SucessFullIcon />
      </>
    ),
    statusColor: "#1AE5A1",
    amount: "+10 USDT",
    amountColor: "#1AE5A1",
    date: "2024/06/12",
  },
];

const WithDrawhistory = () => {
  return (
    <div
      className="
    relative
    border-[0.5px] border-[#1AE5A1]
    rounded-[10px]
    w-full max-w-m
    overflow-hidden
    Withdraw_backgroundColor
    backdrop-blur-[14.4px]
  "
    >
      {" "}
      <div className="Withdraw_shadow">
        <span className="absolute right-0 left-0 w-full text-xs font-extrabold text-center top-1.5">
          TRANSACTION HISTORY
        </span>
      </div>
      <div className="mt-8 flex flex-col divide-y divide-green-500">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 px-2"
          >
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{tx.icon}</span>

              <span
                className={`font-semibold`}
                style={{
                  color: `${tx.statusColor}`,
                }}
              >
                {tx.status}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <span
                className={`font-semibold`}
                style={{
                  color: `${tx.statusColor}`,
                }}
              >
                {tx.amount}
              </span>
              <div className="flex items-center space-x-1">
                <span>
                  <CalenderIcon color={tx.statusColor} />
                </span>
                <span
                  style={{
                    color: `${tx.statusColor}`,
                  }}
                >
                  {tx.date}
                </span>
              </div>
            </div>

            <span
              style={{
                color: `${tx.statusColor}`,
              }}
            >
              {"»"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WithDrawhistory;
