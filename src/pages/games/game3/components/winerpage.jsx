import axios from "axios";
import LeaveIcon from "../src/components/asset/icon/leave";
import WinerCard from "./winerCard";
import { useEffect, useState } from "react";
import { spiral } from 'ldrs'
import { useStore } from "zustand";
import useTokenStore from "../../../../store/token";
import { Api } from "../../../../api/apiUrl";

spiral.register()

export default function WinerPage({modalHandler , countdown }){
    const {token} = useTokenStore()
    const [Data , setData]=useState([])
   
    const [change , setchange]=useState(true);
    const [loading , setoading]=useState(false)

    const winner =async()=>{
        try{
            const response = await axios.get(Api[6].luckydiceWinners,{
                headers:{
                    Authorization: `token ${token}`
                }
            });
            setData(response.data.winners);
            
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        winner();
    },[])
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
                    </div>
                }
                </div>
            }
            </div>
        </>
    )
}