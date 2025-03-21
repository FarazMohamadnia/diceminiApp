import './GameLayout2.css'
import Dicesellcard from '../../../common/GameComponents/DiceSellCard/dicesellcard'
import basicImg from '../../../../asset/img/GameImg/Section2/basicCombo.png'
import silverImg from '../../../../asset/img/GameImg/Section2/silverCombo.png'
import goldImg from '../../../../asset/img/GameImg/Section2/goldCombo.png'
import platinumImg from '../../../../asset/img/GameImg/Section2/platinumCombo.png'
import TwoWhiteDice from '../../../icons/change/game/twowhiteDice'
import { useEffect, useState } from 'react'
import DollerCoin from '../../../icons/change/Dcoin'
import Amount from '../../../../pages/Wallet/pages/withdrawPage/components/AmountComponent'
import SwapIcon from '../../../icons/swapicon'
import WalletMoney from '../../../icons/walletmoney'
import { useTonConnectUI} from '@tonconnect/ui-react'
import useUserStore from '../../../../store/user'
import Swal from 'sweetalert2'
import useCounterStore from '../../../../store/amount'
import axios from 'axios'
import { Api } from '../../../../api/apiUrl'
import useTokenStore from '../../../../store/token'
import { spiral } from 'ldrs'
import useUpgradeData from '../../../../store/updateData'
spiral.register()



export default function GameLayout2(){
    const {toggleUpgrade } = useUpgradeData();
    const [Select , setSelect]=useState(true);
    const { amount , setamount} = useCounterStore();
    const { user }=useUserStore();
    const [dtsAmount , setdtsAmount]=useState(0);
    const {token } = useTokenStore();
    const [data, setdata]=useState([])
    const [loading , setloading]=useState(true)

    const SelectHandler = ()=>{
        Select ? setSelect(false) : setSelect(true)
    }

    const getCombos = async()=>{
        try{
            const response = await axios.get(Api[0].combos , 
            {
              headers:{
                 "Authorization" : `token ${token}`
              }
            })
            console.log(response.data[0].name)
            setdata([
                {
                    id:1,
                    Title : response.data[0].name,
                    Img : basicImg,
                    Color : 'Green',
                    Dices : '',
                    DTS : response.data[0].dts_amount,
                    className : ' top-[-50px] ',
                    Price : response.data[0].ton_amount.toFixed(3)
                },
                {
                    id:2,
                    Title : response.data[1].name,
                    Img : silverImg,
                    Color : 'Red',
                    Dices : '20 + 2',
                    DTS : response.data[1].dts_amount,
                    className : 'top-[-35px]',
                    Price : response.data[1].ton_amount.toFixed(3)
                },
                {
                    id:3,
                    Title : response.data[2].name,
                    Img : goldImg,
                    Color : 'Yellow',
                    Dices : '20 + 2',
                    DTS : response.data[2].dts_amount,
                    className : 'top-[6px]',
                    Price : response.data[2].ton_amount.toFixed(3)
                },
                {
                    id:4,
                    Title :  response.data[3].name,
                    Img : platinumImg,
                    Color : 'Gold',
                    Dices : '20 + 2',
                    DTS : response.data[3].dts_amount,
                    className : 'top-[-50px]',
                    Price : response.data[3].ton_amount.toFixed(3)
                }
            ]
            )
            setloading(false)

        }catch(err){
            setloading(false)
            console.log(err)
        }
    }



    const sendTransaction = async() => {
        if(dtsAmount > amount){
            Swal.fire({
                title: "Error",
                text: "At least 1 DTS needs to be purchased",
                icon: "error"
            });
            return console.log('you should buy 1 DTS')
        }
        try{
            const response = await axios.post(Api[3].PostBuyDts ,  {
                dots_amount : amount/dtsAmount
              }, 
              {
                headers:{
                   "Authorization" : `token ${token}`
                }
              })

              Swal.fire({
                title: `Transaction was successful`,
                icon: "successful"
                });
                toggleUpgrade(prv => prv ? false : true)
                setamount(0)
        }catch(err){
            Swal.fire({
                title: `Error !`,
                text: err.response.data.error,
                icon: "error"
            });
            console.log(err)
        }
    }

    const dtsamounthandler = async()=>{
        try{
        const response =await axios.get(Api[3].tondts ,{
            headers :{
                Authorization: `token ${token}`
            }
        })
        setdtsAmount(response.data.dots_to_ton)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        dtsamounthandler();
        getCombos()
    },[Select])
      
    return(
        <div>
            <div className='mt-3 GameLayout2-background'>
                <div className='flex justify-center items-center font-bold text-[20px] text-[#1AE5A1]'><TwoWhiteDice /><span>Get Your Dice</span><TwoWhiteDice /></div>
            </div>
            <div>
                <div className='mt-4 flex justify-center items-center w-full px-4 text-white text-[13px] font-medium'>
                    <button className={`w-[175px]  h-[45px] mx-2 relative
                        ${!Select ? `rounded-[15px] shadow-[inset_0px_4px_23.5px_-7px_rgba(26,229,161,1.00)] border border-[#1ae5a1]` : `bg-[#00ffe9]/20 border border-[#00ffe9] rounded-[15px]`}`}>
                        COMOBOS
                        <span onClick={SelectHandler} className='absolute w-full h-full top-0 right-0 rounded-lg'></span>
                    </button>
                    <button className={`w-[175px] h-[45px] mx-2 relative
                        ${Select ? `rounded-[15px] shadow-[inset_0px_4px_23.5px_-7px_rgba(26,229,161,1.00)] border border-[#1ae5a1]` : `bg-[#00ffe9]/20 border border-[#00ffe9] rounded-[15px]`}`}>
                        Manual 
                        <span onClick={SelectHandler} className='absolute w-full h-full top-0 right-0 rounded-lg'></span>
                    </button>
                </div>
            </div>
            {!Select ?
            <div className='block mt-4 w-[95%] h-[350px] mx-auto'>
                <div className='flex justify-around items-center'>
                    <div className='w-[45%] h-[70px] flex'>
                        <div className='w-[35%] h-full'>
                            <div className='GameLayout2-DtsCoin'></div>
                        </div>
                        <div className='w-[65%]'>
                            <p className='text-white text-[13px] font-bold'>DTS Balance :</p>
                            <p className='text-white text-[5.5vw] w-full font-bold text-end'>{(((user.inactive_dots_balance + user.active_dots_balance)+user.dice_balance * 21))}<span className='text-[#00ffa9] ms-1'>DTS</span> </p>
                        </div>
                    </div>
                </div>
                <div className='pb-28 w-[95%] mx-auto mt-5'>
                    <Amount type={'dts'}/>
                    <div className='w-full h-[1px] bg-slate-500 my-6 relative flex justify-center items-center'>
                        <div className='bg-[#121724]'>
                            <SwapIcon />
                        </div>
                    </div>
                    <div className='GameLayout2-input-style'>
                        <div className='flex items-center'>
                            <p className='text-[#3bffff] text-[15px] font-light'>AMOUNT OF DTS : </p>
                            <p className='text-neutral-50 text-[15px] font-light ml-1'>{(amount/dtsAmount).toFixed(3)}</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={sendTransaction} className='py-3 px-6 w-40 h-[43px] bg-white/0 flex justify-around items-center rounded-[15px] shadow-[inset_0px_4px_20.399999618530273px_-7px_rgba(0,240,255,1.00)] border border-[#3bffff] backdrop-blur-[108.30px]'>
                            <WalletMoney /><p className='text-[#3bffff] text-base font-semibold'>BUY DTS</p>
                        </button>
                    </div>
                </div>
                
            </div>
            :
            <div className='flex justify-center items-center flex-wrap min-h-60'>
                {
                    loading ? 
                    <div className='my-10'>
                        <l-spiral
                            size="120"
                            speed="0.9"
                            color="white" 
                        ></l-spiral> 
                    </div>
                    :
                    data.map(data=> 
                    <div key={data.id} >
                        <div><Dicesellcard  {...data}/></div>
                    </div>
                    )
                }
            </div>
            }
        </div>
    )
}