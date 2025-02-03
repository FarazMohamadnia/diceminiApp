import { useState } from 'react'
import './index.css'
export default function Amount({setamount}){
    return(
        <div className='relative'>
                <input onChange={(e)=> setamount(e.target.value)} placeholder='10 TON' className='AmountComponent-inputs-style' type='number'/>
                <p className='text-[#3bffff] text-[15px] font-light absolute top-[15px] left-5'>USD AMOUNT:</p>
                <div className='absolute top-[12px] right-2'>
                    <button className='text-white/70 text-[15px] font-light h-6 w-11 px-1 py-[3px] bg-[#1ae5a1]/2 rounded-[7px] border border-[#1ae5a1] justify-center items-center gap-2.5 inline-flex mr-1'>%50</button>
                    <button className='text-white/70 text-[15px] font-light h-6 w-11 px-1 py-[3px] bg-[#1ae5a1]/2 rounded-[7px] border border-[#1ae5a1] justify-center items-center gap-2.5 inline-flex mr-1'>%100</button>
                </div>
           
            </div>
    )
}
