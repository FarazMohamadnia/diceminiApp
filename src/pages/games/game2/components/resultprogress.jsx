import { useState } from "react"

export default function ResultProgress({img1 , img2 , winer , userResult}){
    return(
        <div className="w-[145px] relative z-20 rounded-full h-[22px] flex bg-[#d9d9d9]">
            <div className={`${winer ? 'bg-[#d9d9d9]' : 'bg-[#FFC300]'} w-1/2 h-full rounded-full flex justify-between items-center px-[2px]`}>
                <img className="w-5 h-5 rounded-full" src={img1} alt=""/>
                <p>{userResult[0]}</p>
            </div>
            <div className={`${!winer ? 'bg-[#d9d9d9]' : 'bg-[#FFC300]'} w-1/2 h-full flex justify-between items-center px-[2px] rounded-full`}>
                <p>{userResult[1]}</p>
                <img className="w-5 h-5 rounded-full" src={img2} alt=""/>
            </div>
        </div>
    )
}