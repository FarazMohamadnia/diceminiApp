import { useState } from "react"

export default function ResultProgress(){
    const [winer , setwiner]=useState(false);
    return(
        <div className="w-[145px] rounded-full h-[22px] flex bg-[#d9d9d9]">
            <div className={`${winer ? 'bg-[#d9d9d9]' : 'bg-[#FFC300]'} w-1/2 h-full rounded-full flex justify-between items-center px-[2px]`}>
                <img className="w-5 h-5 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRseRj5MjxLYtgPrmGHS01YBytPjIkGKk8Zaw&s" alt=""/>
                <p>7</p>
            </div>
            <div className={`${!winer ? 'bg-[#d9d9d9]' : 'bg-[#FFC300]'} w-1/2 h-full flex justify-between items-center px-[2px] rounded-full`}>
                <p>12</p>
                <img className="w-5 h-5 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNE37Tut2H4DkjwdUaSupJh1cy7a7x2bBTQ&s" alt=""/>
            </div>
        </div>
    )
}