import React, { useEffect, useState } from "react";
import DiceIcon from "../../../components/icons/dice";
import FlashIcon from "../../../components/icons/flash";
import GoldCoin from "../../../components/icons/goldCoin";
import SilverCoin from "../../../components/icons/silverCoin";
import BronzeIcon from "../../../components/icons/bronzeCoin";
import axios from "axios";
import { Api } from "../../../api/apiUrl";
import useUserStore from "../../../store/user";
import useTokenStore from "../../../store/token";

export function LeaderboardList() {
  const {token } = useTokenStore();
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
  const [items , setitems]=useState([])

  const playerRankhandler = async()=>{
      try{
          const response = await axios.get(Api[0].luckyBoard, {
              headers :{
                  Authorization: `token ${token}`
              }
          });
          setitem([{
            icon: <GoldCoin />,
            name: response.data.lucky_board[0].first_name,
            dices: response.data.lucky_board[0].dice_balance,
            level: response.data.lucky_board[0].level,
          },
          {
            icon: <SilverCoin />,
            name: response.data.lucky_board[1].first_name,
            dices: response.data.lucky_board[1].dice_balance,
            level: response.data.lucky_board[1].level,
          },
          {
            icon: <BronzeIcon />,
            name: response.data.lucky_board[2].first_name,
            dices:response.data.lucky_board[2].dice_balance,
            level:response.data.lucky_board[2].level,
          }
          ])
          setitems(response.data.lucky_board.slice(3));
          console.log(response.data.lucky_board[1].first_name)
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
            <span className="text-white text-[16px] font-medium w-16 h-6 overflow-x-scroll">{item.name}</span>
            <div className="flex items-center space-x-1 text-white">
                <span>
                  <DiceIcon />
                </span>
                <span className="text-[14px]">{item.dices} Dice</span>
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
      {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 px-10 border border-[#1AE5A1] rounded-lg"
          >
            <div className={`flex items-center ${item.rankColor || ""}`}>
              <span className="text-2xl text-[#1AE5A1]">#{item.rank}</span>
            </div>
            <span className="text-white text-[16px] font-medium w-16 h-6 overflow-hidden">{item.first_name}</span>
            <div className="flex items-center space-x-1 text-white">
                <span>
                  <DiceIcon />
                </span>
                <span className="text-[14px]">{item.dice_balance} Dice</span>
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
  );
}
