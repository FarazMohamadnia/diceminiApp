import React, { useEffect, useState } from "react";
import DiceIcon from "../../../components/icons/dice";
import FlashIcon from "../../../components/icons/flash";
import GoldCoin from "../../../components/icons/goldCoin";
import SilverCoin from "../../../components/icons/silverCoin";
import BronzeIcon from "../../../components/icons/bronzeCoin";
import axios from "axios";
import { Api } from "../../../api/apiUrl";
import useUserStore from "../../../store/user";

export function LeaderboardList() {
  const [item , setitem]=useState([{
    icon: <GoldCoin />,
    name: "",
    dices: "",
    level: "",
  },
  {
    icon: <SilverCoin />,
    name: "",
    dices: "",
    level: "",
  },
  {
    icon: <BronzeIcon />,
    name: "",
    dices: "",
    level: "",
  },
  ])
  const [player, setplayer]=useState({})

  const playerRankhandler = async()=>{
      try{
          const response = await axios.get(Api[3].GamePage, {
              headers :{
                  Authorization: "token 3"
              }
          });
          setitem([{
            icon: <GoldCoin />,
            name: response.data.lucky_board.rank1.telegram_id,
            dices: response.data.lucky_board.rank1.dice_balance,
            level: response.data.lucky_board.rank1.level,
          },
          {
            icon: <SilverCoin />,
            name: response.data.lucky_board.rank2.telegram_id,
            dices: response.data.lucky_board.rank2.telegram_id,
            level: response.data.lucky_board.rank2.telegram_id,
          },
          {
            icon: <BronzeIcon />,
            name: response.data.lucky_board.rank3.telegram_id,
            dices:response.data.lucky_board.rank3.telegram_id,
            level:response.data.lucky_board.rank3.telegram_id,
          },
          ])
          setplayer(response.data.lucky_board.player)
      }catch(err){
          console.log(err)
      }
  }
  useEffect(()=>{
      playerRankhandler()
  },[])

  return (
    <div
      className="bg-[#1D222E] border border-[#1AE5A1] rounded-xl  w-full"
      style={{
        boxShadow: `${"inset 0 0 20px #1AE5A1"}`,
      }}
    >
      <div className="flex flex-col divide-y divide-[#1AE5A1]">
        {item.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 px-10"
          >
            <div className={`flex items-center ${item.rankColor || ""}`}>
              <span className="text-2xl">{item.icon}</span>
            </div>
            <span className="text-white text-[16px] font-medium">{item.name}</span>
            <div className="flex items-center space-x-1 text-white">
                <span>
                  <DiceIcon />
                </span>
                <span className="text-[14px]">{item.dices}</span>
              </div>
            <div className="flex items-center space-x-1 text-white">
              <span>
                <FlashIcon />
              </span>
              <span className="text-[12px]">{item.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
