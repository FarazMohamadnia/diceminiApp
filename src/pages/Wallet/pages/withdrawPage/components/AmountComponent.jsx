import { useEffect, useState } from 'react'
import './index.css'
import useUserStore from '../../../../../store/user';
export default function Amount({setamount}){
    const { user }=useUserStore();
    async function getWalletBalance() {
        try {
            const response = await fetch(`https://tonapi.io/v2/accounts/${user.address}`);
            const data = await response.json();
            console.log(data)
            if (data && data.balance) {
                const balanceInTON = data.balance / 1000000000; 
                console.log(`Balance: ${balanceInTON} TON`);
                return balanceInTON;
            } else {
                console.log("Wallet not found or balance unavailable.");
                return null;
            }
        } catch (error) {
            console.error("Error fetching wallet balance:", error);
            return null;
        }
    }
    useEffect(()=>{
        getWalletBalance()
    },[])
    return(
        <div className='relative'>
                <input onChange={(e)=> setamount(e.target.value)} placeholder='10 TON' className='AmountComponent-inputs-style' type='number'/>
                <p className='text-[#3bffff] text-[15px] font-light absolute top-[15px] left-5'>USD AMOUNT:</p>
                <div className='absolute top-[12px] right-2'>
                    <button onClick={getWalletBalance} className='text-white/70 text-[15px] font-light h-6 w-11 px-1 py-[3px] bg-[#1ae5a1]/2 rounded-[7px] border border-[#1ae5a1] justify-center items-center gap-2.5 inline-flex mr-1'>%50</button>
                    <button onClick={getWalletBalance} className='text-white/70 text-[15px] font-light h-6 w-11 px-1 py-[3px] bg-[#1ae5a1]/2 rounded-[7px] border border-[#1ae5a1] justify-center items-center gap-2.5 inline-flex mr-1'>%100</button>
                </div>
           
            </div>
    )
}
