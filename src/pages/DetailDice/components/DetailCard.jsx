import React from "react";
import PlusIcon from "../../../components/icons/plus";
import DiceIcon from "../../../components/icons/dice";
import FlashIcon from "../../../components/icons/flash";

const RewardCard = ({ type }) => {
  return (
    <div
      className={`flex items-center justify-between bg-[#1D222E] border ${
        type === "error" ? "border-[#F55059]" : "border-[#3BFFFF]"
      } rounded-3xl p-4 w-full max-w-xl`}
      style={{
        boxShadow: `${
          type === "error" ? "inset 0 0 20px #F55059" : "inset 0 0 20px #3BFFFF"
        }`,
      }}
    >
      {/* Left Icon (Plus Sign) */}
      <div className="flex items-center justify-center text-cyan-300 text-2xl font-bold mr-4">
        <PlusIcon
          color={type === "error" ? "#F55059" : "#3BFFFF"}
          width={30}
          height={30}
        />
      </div>

      {/* Text and Rewards */}
      <div
        className={`flex flex-col ${
          type === "error" ? "text-[#F55059]" : "text-[#3BFFFF]"
        } flex-grow`}
      >
        <span
          className={`font-semibold ${
            type === "error" ? "text-[#F55059]" : "text-[#3BFFFF]"
          } `}
        >
          PLAY ON PLAYZI <span className="text-xs">test tes test test</span>
        </span>
        <div className="flex items-center space-x-4 mt-1 text-sm">
          <div className="flex items-center">
            <span className="mr-1">
              <DiceIcon />
            </span>
            <span className="text-white">
              <span
                className={`font-semibold ${
                  type === "error" ? "text-[#F55059]" : "text-[#3BFFFF]"
                }`}
              >
                +
              </span>
              24{" "}
              <span
                className={`font-semibold ${
                  type === "error" ? "text-[#F55059]" : "text-[#3BFFFF]"
                }`}
              >
                DTS
              </span>
            </span>
          </div>
          <div className="flex items-center">
            <span className="mr-1">
              <FlashIcon />
            </span>
            <span className="text-white">
              <span
                className={`font-semibold ${
                  type === "error" ? "text-[#F55059]" : "text-[#3BFFFF]"
                }`}
              >
                +
              </span>
              100{" "}
              <span
                className={`font-semibold ${
                  type === "error" ? "text-[#F55059]" : "text-[#3BFFFF]"
                }`}
              >
                XP
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Claim Button */}
      <button
        className={`w-[63px] font-bold cursor-pointer ml-4 px-3 py-1 bg-transparent border ${
          type === "error" ? "border-[#F55059]" : "border-[#3BFFFF]"
        } text-white rounded-xl text-sm`}
      >
        CLAIM
      </button>
    </div>
  );
};

export default RewardCard;
