import { useState } from "react";
import ArrowBottom from "../asset/arrowbottom";
import ArrowTop from "../asset/arrowtop";
import CustomBtn from "../asset/custombtn";
import SelectNum from "../asset/icons/selectNum";

export default function Controller(multiplier){
    const [active , setactive]=useState(true)
    const [number , setnumber] = useState(2);
    const [multiplierNum , setmultiplierNum]=useState(1.01);
    const numberHandler = (e)=>{
        const id = e.target.id
        if(active){
            if(id == 1 && number < 11){
                setnumber((prev)=> prev+1)
                setmultiplierNum(multiplier.multiplier.over[number+1])
            }else if(id == 2 && number > 2){
                setnumber((prev)=> prev-1)
                setmultiplierNum(multiplier.multiplier.over[number-1])
            }
        }else{
            if(id == 1 && number < 12){
                setnumber((prev)=> prev+1)
                setmultiplierNum(multiplier.multiplier.under[number+1])
            }else if(id == 2 && number > 3){
                setnumber((prev)=> prev-1)
                setmultiplierNum(multiplier.multiplier.under[number-1])
            }
        }
    }
    return(
        <div className="w-[70%] h-[80px] mx-auto flex justify-between px-3">
            <div className="w-[90px] flex flex-col justify-center">
                <button onClick={()=>{
                    setactive(true)
                    setnumber(2)
                    setmultiplierNum(multiplier.multiplier.over[2])
                }} 
                    className={` ${active ? 'bg-gradient-to-b from-[#2e6282] to-[#999999] font-bold ' : 'bg-white text-black '} w-[89px] h-[29px] text-center text-[15px] rounded-2xl`}
                    >
                    OVER
                </button>
                <button onClick={()=>{
                    setactive(false) 
                    setnumber(3)
                    setmultiplierNum(multiplier.multiplier.under[3])
                }} 
                    className={`${active ? 'bg-white text-black ' : 'bg-gradient-to-b from-[#2e6282] to-[#999999] font-bold '} w-[89px] h-[29px] mt-[6px] rounded-2xl text-center text-[15px]"`}
                    >
                    UNDER
                </button>
            </div>
            <div className="flex justify-center items-center relative">
                <div className="relative top-[5px] flex justify-center items-center">
                    <CustomBtn />
                    <span className="absolute top-6 text-black text-[32px] font-bold">{number}</span>
                </div>
                <div className='absolute bottom-[-35px] text-center'>
                    <div>
                        <SelectNum />
                    </div>
                    <p className="text-white">{multiplierNum}x</p>
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