import axios from "axios";
import LeaveIcon from "./asset/icon/leave";

import { useEffect, useState } from "react";
import {useStore} from "../store";
import HistoryCard from "./historyCard";


export default function HistoryPage({sethistoryModal , countdown}){
    const [Data , setData]=useState(null)
    const {player_id} = useStore()

    const winner =async()=>{

    }

    useEffect(()=>{
        if(player_id) winner()
    },[player_id])



    return(
        <div className="fixed bg-black/85 w-[100vw] h-[100vh] top-0 overflow-y-scroll z-40">
            <div className="max-w-[360px] w-[90%] mx-auto my-5 bg-[#121724]/85 rounded-2xl border border-white/40 ">
                <div className="flex justify-between items-center px-3 my-4 ">
                    <p className="text-[#3bffff] text-sm font-extrabold text-BalooBhai ">{countdown}</p>
                    <p onClick={()=>sethistoryModal(false)}><LeaveIcon /></p>
                </div>
                <div>
                    {
                        Data ? Data.map((data) =><HistoryCard key={data.slot} {...data}/>) : null
                    }
                </div>
            </div>
        </div>
    )
}