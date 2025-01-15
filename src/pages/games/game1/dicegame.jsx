import { useState } from 'react';
import CrapsGame from '../../../components/layout/HomeLayout/components/rolldice';
import '../index.css'
import Controller from './components/controller'
import Table from './components/table'
import RollBtn from './asset/rollbtn';
import GreenBtn from './asset/greenbtn';
import WhiteBtn from './asset/whitebtn';
import BackButton from '../../../components/common/shared/BackButton';


export default function DiceGame1(){
    const [loading , setloading]=useState(false);
    const [numbers , setnumbers]=useState({
        number1: 2,
        number2 : 3
    })

    const rollHnadler = ()=>{
        setloading(true);
        setnumbers({
            number1 : 2 ,
            number2 : 5
        })
        setTimeout(() => {
            setloading(false);
        }, 4000);
    }
    return(
        <div className='DiceGame1-container'>
            <div className='mx-7 my-5'>
                <BackButton color={true} title={'Back To Home'}/>
            </div>
            <div>
                <Table />
            </div>
            <div className='mt-5 '>
                <Controller />
            </div>
            <div className="flex justify-center items-center ml-5 my-10">
                <div className='mr-[52px]'>
                    <CrapsGame targetNumber={numbers.number1} rolling={loading}/>
                </div>
                <div className='mr-3'>
                    <CrapsGame targetNumber={numbers.number2} rolling={loading}/>
                </div>               
            </div>
            <div className="flex justify-center items-center rounded-full">
                <div className='w-[70px] h-[70px] relative'>
                    <RollBtn />
                    <span onClick={rollHnadler} className='w-full h-full absolute top-0 rounded-full'></span>
                    <p className='text-white text-[20px] mt-1 text-center font-normal'>Roll</p>
                </div>
            </div>
            <div className='flex justify-between items-center mx-3 mt-8'>
                <div className='flex'>
                    <div className='flex justify-center items-center relative'>
                        <WhiteBtn />
                        <p className='absolute text-black text-xs font-extrabold'>
                            Min
                        </p>
                    </div>
                    <div className='flex justify-center items-center relative mx-1'>
                        <GreenBtn />
                        <p className='absolute'>
                            <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.850098" y="0.950012" width="15.3" height="6.375" rx="3.1875" fill="white" />
                            </svg>
                        </p>
                    </div>
                </div>
                <div>
                    <p className='text-white text-[15px] font-bold'>2.00<span className='text-[#1ae5a1] ms-1'>DTS</span></p>
                </div>
                <div className='flex'>
                    <div className='flex justify-center items-center relative mx-1'>
                        <GreenBtn />
                        <p className='absolute'>
                            2
                        </p>
                    </div>
                    <div className='flex justify-center items-center relative'>
                        <WhiteBtn />
                        <p className='absolute text-black text-xs font-extrabold'>
                            Max
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}