import React from "react";
import DiceIcon from "../../../components/icons/dice";
import FlashIcon from "../../../components/icons/flash";
import PersonIcon from "../../../components/icons/person";

const UserRewardCard = () => {
  return (
    <div
      className="flex items-center bg-[#1D222E] border border-green-500 rounded-2xl p-4 w-full max-w-xl shadow-[0_0_10px_0_rgba(0,255,128,0.4)]"
      style={{
        boxShadow: `${"inset 0 0 20px #04CCA7"}`,
      }}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-center space-x-2 text-white">
          <PersonIcon />
          <span className="font-bold text-white">Aysan</span>
        </div>
        <div className="flex items-center text-green-400">
            <span className="mr-1">
              <DiceIcon />
            </span>
            <span className="text-white">+ 24 DTS</span>
        </div>
        <div className="flex items-center text-green-400">
          <span className="mr-1">
            <FlashIcon />
          </span>
          <span className="text-white">+ 100 XP</span>
        </div>
      </div>
    </div>
  );
};

export default UserRewardCard;
