import React, { useEffect, useState } from "react";

const TableWithDiv = (history) => {
  
  console.log(history.history)

  useEffect(()=>{
    
  },[])
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
      {history.history.map((row, index) => (
        <div
          key={index}
          className={`grid grid-cols-5 items-center text-center`}
        >
          <div className="text-left pl-3">{row.play_dots_amount}</div>
          <div className="">{row.details.multiplier}x</div>
          <div className="">{row.game}</div>
          <div
            className=''
          >
            {row.details.roll}
          </div>
          <div
            className={` px-3 my-1 rounded-2xl ${
              row.profit < 0 ? "bg-red-500 text-white" : "bg-green-500"
            }`}
          >
            {row.win_dots_amount ? row.win_dots_amount.toFixed(2) : 0}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableWithDiv;
