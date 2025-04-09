import React from "react";
import DiceIcon from "../../../components/icons/dice";
import FlashIcon from "../../../components/icons/flash";
import PersonIcon from "../../../components/icons/person";
import CalenderReffral from "../../../components/icons/calenderreferral";

const UserRewardCard = ({xp , dts , referee ,chance ,insert_dt}) => {
  return (
    <div
      className="flex items-center bg-[#1D222E] border border-green-500 rounded-2xl p-4 w-full max-w-xl shadow-[0_0_10px_0_rgba(0,255,128,0.4)]"
      style={{
        boxShadow: `${"inset 0 0 20px #04CCA7"}`,
      }}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-center space-x-2 text-white max-w-28 overflow-x-hidden">
          <PersonIcon />
          <span className="font-bold text-white">{referee.telegram_username}</span>
        </div>
        <div className="flex items-center text-green-400">
            <span className="text-green-400 font-bold ">+ <span className="text-white">{chance}</span> Lucky Chance</span>
        </div>
        <div className="flex items-center text-green-400">
          <span className="text-white flex items-center"><CalenderReffral /><span className="text-[15px] ms-1">{insert_dt}</span></span>
        </div>
      </div>
    </div>
  );
};

export default UserRewardCard;
