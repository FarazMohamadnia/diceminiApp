import BackButton from "../../../components/common/shared/BackButton";
import useFetch from "../../../context/usefetch";
import Table from "./asset/table";
import SmalliceRoll from "./components/smalldiceroll";
import '../index.css'
import GoldBtn from "./components/goldbtn";
import ResultProgress from "./components/resultprogress";
import BTN from "./asset/btn";
import { useState } from "react";
export default function DiceGame2(){
    const { data, loading, error  , statusCode} = useFetch('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
    const [disableBtn , setdisableBtn]=useState(false);
    const [resultDice , setresultDice]=useState([
        {
            number1:6,
            number2 :6
        },
        {
            number1:6,
            number2 :6
        }
    ]);
    const [winer , setwiner]=useState(true); 
    const[rollTime , setrollTime]=useState(false);
    const[dts , setdts]=useState(2.00);
    const [userData1, setuserData1]=useState(
        {
            username : 'alireza',
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRseRj5MjxLYtgPrmGHS01YBytPjIkGKk8Zaw&s',
            dts : 1507
        }
    );
    const [userData2 , setuserData2]=useState({
        username : 'mohammad',
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNE37Tut2H4DkjwdUaSupJh1cy7a7x2bBTQ&s',
        dts : 2194
    });
    const [userResult , setuserResult]= useState([0,0])


    const rollHandler = ()=>{
        setdisableBtn(true)
        setrollTime(true)
        setresultDice([
            {
                number1: 5,
                number2: 2
            },
            {
                number1: 6,
                number2: 5,
            }
        ]);

        setuserResult([resultDice[0].number1 + resultDice[0].number2 , resultDice[1].number1 + resultDice[1].number2])
        if(userResult[0] < userResult[1] ){
            setwiner(true)
        }else{
            setwiner(false)
        }

        setTimeout(() => {
            setrollTime(false);
            setdisableBtn(false)
        }, 4000);
    }
    return(
        <div className=" min-h-[100vh] w-full flex justify-center items-center">
            <div className="dicegame2-container relative">
                <div className="mt-4 mx-7 flex justify-between items-center">
                    <BackButton title={'back to home'} color={true} />
                    <div className="flex ">
                        <div>1</div>
                        <div>2</div>
                    </div>
                </div>
                <div class="w-[165px] py-1 h-[60px] bg-white/5 rounded-[10px] shadow-[0px_0px_4px_1px_rgba(0,255,43,1.00)] border border-[#42ec5e]/60 backdrop-blur-[24.40px] overflow-hidden mx-auto mt-9">
                    <p class="dicegame2-custom-text">YOU WON</p>
                    <p class="text-center text-white text-xs font-normal">+ 20.05 DTS</p>
                    <p class="text-center text-[#ffcf60] text-[10px] font-bold">3x BET</p>
                </div>
                <div className="mt-10">
                    <div className="flex justify-center items-center relative h-[132px]">
                        <div class="z-10 absolute top-[-9px] w-20 h-3 bg-white/30 rounded-lg shadow-[0px_0px_1.600000023841858px_0px_rgba(255,188,66,1.00)] border border-[#ffbc42] backdrop-blur-sm flex justify-between items-center">
                            <img className="rounded-full w-[10px] h-[10px] absolute" src={userData2.img} alt=""/>
                            <span></span>
                            <p className="text-[#3a3a3a] text-[9px] font-normal">{userData2.username}</p>
                            <span></span>
                        </div>
                        <div className='absolute'>
                            <Table />
                        </div>
                        <div className="mr-8 mb-6">
                            <SmalliceRoll rolling={rollTime} targetNumber={resultDice[0].number1} />
                        </div>
                        <div>
                            <SmalliceRoll rolling={rollTime} targetNumber={resultDice[0].number2} />
                        </div>
                    </div>
                    <div className="my-[10px] flex justify-center">
                        <ResultProgress img1={userData1.img} img2={userData2.img} winer={winer} userResult={userResult}/>
                    </div>
                    <div className="flex justify-center items-center relative h-[132px]">
                        <div class="flex justify-between items-center absolute z-10 bottom-[-9px] w-16 h-3 bg-white/30 rounded-lg shadow-[0px_0px_1.600000023841858px_0px_rgba(255,188,66,1.00)] border border-[#ffbc42] backdrop-blur-sm">
                            <img className="rounded-full w-[10px] h-[10px] absolute" src={userData1.img} alt=""/>
                            <span></span>
                            <p className="text-[#3a3a3a] text-[9px] font-normal">{userData1.username}</p>
                            <span></span>
                        </div>
                        <div className='absolute'>
                            <Table />
                        </div>
                        <div className="mr-8 mb-6">
                            <SmalliceRoll rolling={rollTime} targetNumber={resultDice[1].number1} />
                        </div>
                        <div>
                            <SmalliceRoll rolling={rollTime} targetNumber={resultDice[1].number2} />
                        </div>
                    </div>
                </div>
                <button disabled={disableBtn} onClick={rollHandler} className="flex justify-center items-center h-[30px] w-[100px] mx-auto mt-8">
                    <div><GoldBtn /></div>
                    <p className="absolute text-black text-[15px] font-semibold">ROLL</p>
                </button>
                <div className="flex justify-between items-center px-6 absolute bottom-0 w-full">
                    <div className="flex">
                        <button onClick={()=> setdts(2)} className="flex justify-center items-center relative">
                            <BTN />
                            <span className="absolute text-white text-xs font-extrabold">MIN</span>
                            
                        </button>
                        <button onClick={()=> setdts((prv) =>prv > 2 ? prv - 1 : prv)} className="flex justify-center items-center relative">
                            <BTN />
                            <span className="absolute">
                                <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.850098" y="0.950012" width="15.3" height="6.375" rx="3.1875" fill="white" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div>
                        <p className="text-white text-[20px] font-bold">{dts} <span className="text-[#ffcf60]">DTS</span></p>
                    </div>
                    <div className="flex">
                        <button onClick={()=> setdts((prv) =>prv < userData1.dts ? prv + 1 : prv)} className="flex justify-center items-center relative">
                            <BTN />
                            <span className="absolute">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect y="4.95001" width="15.3" height="5" rx="2.5" fill="white" />
                                  <rect x="10.1499" width="15.3" height="5" rx="2.5" transform="rotate(90 10.1499 0)" fill="white" />
                                </svg>
                            </span>
                            
                        </button>
                        <button onClick={()=> setdts(userData1.dts)} className="flex justify-center items-center relative">
                            <BTN />
                            <span className="absolute text-white text-xs font-extrabold">MAX</span>
                            
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}