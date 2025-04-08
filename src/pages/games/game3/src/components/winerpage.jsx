import axios from "axios";
import LeaveIcon from "./asset/icon/leave";
import WinerCard from "./winerCard";
import { useEffect, useState } from "react";
import {useStore} from "../store";
import LeaderBoardCard from "./leaderboardCard";
import { spiral } from 'ldrs'

spiral.register()

export default function WinerPage({modalHandler , countdown }){
    const [Data , setData]=useState([])
    const {player_id} = useStore()
    const [change , setchange]=useState(true);
    const [players,setplayers]=useState([]);
    const [loading , setoading]=useState(false)
    const winner =async()=>{

    }

    const leaderBoardHandler = async()=>{

      }
    

    useEffect(()=>{
        winner();
        leaderBoardHandler();
    },[player_id])
    return(
        <>
            <div className="fixed bg-black/75 w-[100vw] h-[100vh] top-0 overflow-y-scroll">
            {loading ? 
                <div className="min-h-svh min-w-[100vw] flex justify-center items-center">
                    <l-spiral
                      size="90"
                      speed="1" 
                      color="#1AE5A1" 
                    ></l-spiral>
                </div>
                :
                <div className="max-w-[360px] w-[90%] mx-auto my-5 bg-[#121724]/75  rounded-2xl border border-white/40">
                {change?
                    <div>
                        <div className="flex justify-between items-center px-3 my-4 ">
                            <p className="text-[#3bffff] text-sm font-extrabold text-BalooBhai ">{countdown}</p>
                            {/* <p className="mr-3 px-6 py-[3px]  rounded-lg border border-[#3bffff] text-[#3bffff] shadow-[inset_0_0_15px_0_rgba(0,255,128,0.4)]" onClick={()=>setchange(false)}>LeaderBoard</p> */}
                            <div className={"text-white flex w-[50%] justify-between rounded-lg border border-white/40"}>
                                <p className={"text-sm w-full  rounded-[7px] flex justify-center items-center bg-[#1AE5A1] text-black "}>Winners</p>
                                <p onClick={()=>setchange(false)} className={"text-sm w-full rounded-[7px] flex justify-center items-center"}>LeaderBoard</p>
                            </div>
                            <p onClick={modalHandler}><LeaveIcon /></p>
                        </div>
                        <div>
                            {
                                Data.map((data , index) =><WinerCard {...data} index={index+1}/>)
                            }

                        </div>
                    </div>
                    :
                    <div>
                        <div className="flex justify-between items-center px-3 my-4 ">
                            <p className="text-[#3bffff] text-sm font-extrabold text-BalooBhai ">{countdown}</p>
                            {/* <p className="mr-3 px-6 py-[3px]  rounded-lg border border-[#3bffff] text-[#3bffff] shadow-[inset_0_0_15px_0_rgba(0,255,128,0.4)]" onClick={()=>setchange(true)}>Winners</p> */}
                            <div className={"text-white flex w-[50%] justify-between rounded-lg border border-white/40"}>
                                <p onClick={()=>setchange(true)} className={"text-sm w-full rounded-[7px] flex justify-center items-center "}>Winners</p>
                                <p className={"text-sm w-full rounded-[7px] flex justify-center items-center bg-[#FFDE7B]/90 text-black"}>LeaderBoard</p>
                            </div>
                            <p onClick={modalHandler}><LeaveIcon /></p>
                        </div>
                        <div>
                            {
                                players.map((data , index) =><LeaderBoardCard {...data} index={index+1}/>)
                            }

                        </div>
                    </div>
                }
                </div>
            }
            </div>
        </>
    )
}