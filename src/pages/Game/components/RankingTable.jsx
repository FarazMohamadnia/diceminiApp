import React from "react";
import DiceIcon from "../../../components/icons/dice";
import FlashIcon from "../../../components/icons/flash";
import GoldCoin from "../../../components/icons/goldCoin";
import SilverCoin from "../../../components/icons/silverCoin";
import BronzeIcon from "../../../components/icons/bronzeCoin";

const items = [
  {
    icon: <GoldCoin />,
    name: "Diyar",
    dices: "4 DICES",
    level: "Level 35",
  },
  {
    icon: <SilverCoin />,
    name: "Diyar",
    dices: "4 DICES",
    level: "Level 35",
  },
  {
    icon: <BronzeIcon />,
    name: "Diyar",
    dices: "4 DICES",
    level: "Level 35",
  },
];

export function LeaderboardList() {
  return (
    <div
      className="bg-[#1D222E] border border-[#1AE5A1] rounded-xl  w-full"
      style={{
        boxShadow: `${"inset 0 0 20px #1AE5A1"}`,
      }}
    >
      <div className="flex flex-col divide-y divide-[#1AE5A1]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 px-4"
          >
            <div className={`flex items-center ${item.rankColor || ""}`}>
              <span className="text-2xl">{item.icon}</span>
            </div>

            <div className="flex items-center space-x-6 flex-grow justify-center text-white">
              <span className="font-semibold">{item.name}</span>
              <div className="flex items-center space-x-1 text-white">
                <span>
                  <DiceIcon />
                </span>
                <span>{item.dices}</span>
              </div>
            </div>

            <div className="flex items-center space-x-1 text-white">
              <span>
                <FlashIcon />
              </span>
              <span>{item.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
