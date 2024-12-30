import React from "react";
import './index.css'
import CalenderIcon from '../../../components/icons/calender'
import DiceIcon from "../../../components/icons/dice";
const transactions = [
  {
    status: "9 Dices",
    icon: (
      <>
        <DiceIcon />
      </>
    ),
    amount: "20",
    amountColor: "#1AE5A1",
    date: "2024/06/12",
  },
  {
    status: "4 Dices",
    icon: (
      <>
         <DiceIcon />
      </>
    ),
    amount: "30",
    amountColor: "#FFCF60",
    date: "2024/06/12",
  },
  {
    status: "10 Dices",
    icon: (
      <>
         <DiceIcon />
      </>
    ),
    amount: "10",
    amountColor: "#1AE5A1",
    date: "2024/06/12",
  },
  {
    status: "5 Dices",
    icon: (
      <>
        <DiceIcon />
      </>
    ),
    amount: "15",
    amountColor: "#1AE5A1",
    date: "2024/06/12",
  },
];

const Dicehistory = () => {
  return (
    <div
      className="
    relative
    border-[0.5px] border-[#1AE5A1]
    rounded-[10px]
    w-full max-w-m
    overflow-hidden
    linear-gradient-table
    backdrop-blur-[14.4px]
  "
    >
      {" "}
      <div className="flex justify-center items-center">
        <div className="DiceHistory_shadow">
          <span className="absolute right-0 left-0 w-full text-[15px] font-extrabold text-center top-1">
            Dice HISTORY
          </span>
        </div>
      </div>
      <div className="mt-8 flex flex-col divide-y divide-green-500">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 px-[10%]"
          >
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{tx.icon}</span>

              <span
                className={`font-semibold`}
                style={{
                  color: 'white',
                }}
              >
                {tx.status}
              </span>
            </div>

            <div
                className={`font-semibold text-center text-[13px]`}
                style={{
                  color: '#1AE5A1',
                }}
              >
                {tx.amount} <span className="text-white">USD</span>
              </div>

            <div className="flex items-center space-x-4">

              <div className="flex items-center space-x-1">
                <span>
                  <CalenderIcon color='#1AE5A1' />
                </span>
                <span
                  style={{
                    color: 'white',
                  }}
                >
                  {tx.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dicehistory;
