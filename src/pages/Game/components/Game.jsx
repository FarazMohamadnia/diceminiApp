import React, { useEffect, useState } from "react";
import Navbar from "../../../components/global/Navbar/navbar";
import Bottonlink from "../../../components/global/BottonLink/bottonlink";
import BoardTitle from "../../../components/common/shared/BoardTitle";
import LeaderIcon from "../../../components/icons/leader";
import BackButton from "../../../components/common/shared/BackButton";
import DropdownMenu from "../../../components/common/shared/DropdownMenu";
import RankingIcon from "../../../components/icons/ranking";
import DiceIcon from "../../../components/icons/dice";
import FlashIcon from "../../../components/icons/flash";
import WinnerIcon from "../../../components/icons/winner";
import { LeaderboardList } from "./RankingTable";
import axios from "axios";
import { Api } from "../../../api/apiUrl";
import useTokenStore from "../../../store/token";

const Game = () => {
  return (
    <div>
      <Navbar />
      <main className="px-4 pb-28">
        <div className="flex items-center gap-5 mt-3">
          <BackButton title="Back to Games" />
        </div>
        <div className="flex justify-center items-center">
            <BoardTitle title="Leader Board" icon={<LeaderIcon />} />
          </div>
        <div className="flex justify-center items-center gap-3">
          <DropdownMenu title="All Game" />
          <DropdownMenu title="All Time" />
        </div>

        <div className="flex justify-center mt-2">
          <BoardTitle icon={<RankingIcon />} title="Your Rank" />
        </div>

        <div className="mt-2">
          <LeaderboardCard />
        </div>

        <div className="mt-2">
          <BoardTitle icon={<WinnerIcon />} title="Ranking" />
        </div>

        <div>
          <LeaderboardList />
        </div>
      </main>
      <Bottonlink />
    </div>
  );
};

export default Game;

function LeaderboardCard() {
  const {token } = useTokenStore();
  const[player , setplayer]=useState({})
  const playerRankhandler = async()=>{
    try{
        const response = await axios.get(Api[0].luckyBoard, {
            headers :{
                Authorization: `token ${token}`
            }
        });
        setplayer(response.data.player)
        console.log(response)
    }catch(err){
        console.log(err)
    }
}
useEffect(()=>{
    playerRankhandler()
},[])

  return (
    <div
      className="flex items-center justify-between bg-[#1D222E] border border-[#CAFD7B] rounded-2xl pl-6 pr-10 py-4 mx-auto max-w-2xl"
      style={{
        boxShadow: `${"inset 0 0 20px #CAFD7B"}`,
      }}
    >
      <div className="flex items-center">
        <span className="text-[#CAFD7B] font-bold text-2xl">#{player.rank}</span>
      </div>
      <div>
        <span className="text-white font-semibold">{player.first_name}</span>
      </div>
      <div>
        <div className="flex items-center text-white space-x-1">
          <span className="text-white text-lg">
            <DiceIcon />
          </span>
          <span className="text-white">{player.dice_balance} Dice</span>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center text-white space-x-1">
          <span className="text-white text-lg">
            <FlashIcon />
          </span>
          <span className="text-white">Level {player.level}</span>
        </div>
      </div>
    </div>
  );
}
