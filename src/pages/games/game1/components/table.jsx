import React from "react";

const TableWithDiv = () => {
  const data = [
    { bet: "5.00", multiplier: "35.3x", game: "over11", roll: 6, profit: 5.0 },
    { bet: "5.00", multiplier: "35.3x", game: "over11", roll: 6, profit: -5.0 },
    { bet: "5.00", multiplier: "35.3x", game: "over11", roll: 6, profit: 5.0 },
    { bet: "5.00", multiplier: "35.3x", game: "over11", roll: 6, profit: -5.0 },
  ];

  return (
    <div className=" text-white w-[70%] mx-auto text-[13px] font-light box-border">
      {/* Header */}
      <div className="relative">
        <div className="grid grid-cols-5 text-center  ">
            <div className="">Bet(DTS)</div>
            <div className="">Multiplier</div>
            <div className="">Game</div>
            <div className="">Roll</div>
            <div className="">Profit(DTS)</div>
        </div>
        <div className="w-[99%] my-2 mx-auto h-[1px] bg-white/50"></div>
      </div>

      {/* Rows */}
      {data.map((row, index) => (
        <div
          key={index}
          className={`grid grid-cols-5 items-center text-center`}
        >
          <div className="text-left pl-3">{row.bet}</div>
          <div className="">{row.multiplier}</div>
          <div className="">{row.game}</div>
          <div
            className=''
          >
            {row.roll}
          </div>
          <div
            className={` px-3 my-1 rounded-2xl ${
              row.profit < 0 ? "bg-red-500 text-white" : "bg-green-500"
            }`}
          >
            {row.profit.toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableWithDiv;
