import { useEffect, useState } from 'react'
import './index.css'
import useUserStore from '../../../../../store/user';
import useCounterStore from '../../../../../store/amount';
import axios from 'axios';
import { Api } from '../../../../../api/apiUrl';
import useTokenStore from '../../../../../store/token';
export default function Amount({type}){
    const {token } = useTokenStore();
    const [tonPrice , settonPrice]=useState(0)
    const { amount, setamount } = useCounterStore();
    const { user }=useUserStore();
    async function getWalletBalance(e){
        const id = e.target.id
        if(type === 'ton'){
            try {
                const response = await fetch(`https://tonapi.io/v2/accounts/${user.address}`);
                const data = await response.json();

                    if (data && data.balance) {
                    const balanceInTON = (data.balance / 1000000000).toFixed(4); 
                    const halfBalance = (balanceInTON/2).toFixed(4);
                    if(id == 1){
                        setamount(halfBalance);
                    }else if(id == 2){
                        setamount(balanceInTON);
                    }
                } else {
                    console.log("Wallet not found or balance unavailable.");
                    return null;
                }
            } catch (error) {
                console.error("Error fetching wallet balance:", error);
                return null;
            }
        }else if (type === 'dts'){
            const wallet = user.ton_balance
            const halfvalue = user.ton_balance/2
            if(id == 1){
                setamount(halfvalue);
            }else if(id == 2){
                setamount(wallet);
            }
            
        }
    }

    const tonPriceHandler =async ()=>{
        try{
            const response =await axios.get(Api[3].tonusd ,{
                headers :{
                    Authorization: `token ${token}`
                }
            })
            settonPrice(response.data.ton_to_usd)
            }catch(err){
                console.log(err)
            }
    }
    useEffect(()=>{
        tonPriceHandler();
    },[])
    return(
        <>
        <div className='relative '>
            <input onChange={(e)=>{
                if(/^\d*\.?\d*$/.test(e.target.value)){
                    setamount(e.target.value)
                }
                }} value={amount} placeholder='10 TON' className='AmountComponent-inputs-style' type='number'/>
            <p className='text-[#3bffff] text-[15px] font-light absolute top-[15px] left-5'>TON AMOUNT:</p>
            <div className='absolute top-[12px] right-2'>
                <button id='1' onClick={getWalletBalance} className='text-white/70 text-[15px] font-light h-6 w-11 px-1 py-[3px] bg-[#1ae5a1]/2 rounded-[7px] border border-[#1ae5a1] justify-center items-center gap-2.5 inline-flex mr-1'>%50</button>
                <button id='2' onClick={getWalletBalance} className='text-white/70 text-[15px] font-light h-6 w-11 px-1 py-[3px] bg-[#1ae5a1]/2 rounded-[7px] border border-[#1ae5a1] justify-center items-center gap-2.5 inline-flex mr-1'>%100</button>
            </div>
        </div>
        <div className='flex mt-1'>
            <p className='text-white ms-4'>USD AMOUNT :</p>
            <p className='text-[#3bffff] ms-1'>{(amount * tonPrice).toFixed(2)} $</p>
        </div>
        </>
    )
}
