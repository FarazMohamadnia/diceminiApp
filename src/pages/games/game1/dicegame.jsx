import { useState } from 'react';
import CrapsGame from '../../../components/layout/HomeLayout/components/rolldice';
import '../index.css'
import Controller from './components/controller'
import Table from './components/table'
import RollBtn from './asset/rollbtn';


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
            <div></div>
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
        </div>
    )
}