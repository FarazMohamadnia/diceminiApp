import { useState } from "react";
import ArrowBottom from "../asset/arrowbottom";
import ArrowTop from "../asset/arrowtop";
import CustomBtn from "../asset/custombtn";

export default function Controller(){
    const [number , setnumber] = useState(2);
    const [active , setactive]=useState(true)
    const numberHandler = (e)=>{
        const id = e.target.id
        if(id == 1 && number < 12){
            setnumber((prev)=> prev+1)
        }else if(id == 2 && number > 2){
            setnumber((prev)=> prev-1)
        }
    }
    return(
        <div className="w-[70%] h-[80px] mx-auto flex justify-between px-3">
            <div className="w-[90px] flex flex-col justify-center">
                <button onClick={()=>setactive(true)} className={` ${active ? 'bg-gradient-to-b from-[#2e6282] to-[#999999] font-bold ' : 'bg-white text-black '} w-[89px] h-[29px] text-center text-[15px] rounded-2xl`}>
                    OVER
                </button>
                <button onClick={()=>setactive(false)} className={`${active ? 'bg-white text-black ' : 'bg-gradient-to-b from-[#2e6282] to-[#999999] font-bold '} w-[89px] h-[29px] mt-[6px] rounded-2xl text-center text-[15px]"`}>
                    UNDER
                </button>
            </div>
            <div className="flex justify-center items-center">
                <div className="relative top-[5px] flex justify-center items-center">
                    <CustomBtn />
                    <span className="absolute top-6 text-black text-[32px] font-bold">{number}</span>
                </div>
            </div>
            <div className="flex flex-col justify-around">
                <div className="relative" onClick={numberHandler} id="top">
                    <ArrowTop />
                    <span id="1" className="w-[30px] h-[30px] absolute top-0 rounded-full"></span>
                </div>
                <div className="relative" onClick={numberHandler} id="bottom">
                    <ArrowBottom />
                    <span id="2" className="w-[30px] h-[30px] absolute top-0 rounded-full"></span>
                </div>
            </div>
        </div>
    )
}