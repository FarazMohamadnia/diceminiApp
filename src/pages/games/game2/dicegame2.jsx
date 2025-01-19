import BackButton from "../../../components/common/shared/BackButton";
import useFetch from "../../../context/usefetch";
import Table from "./asset/table";
import SmalliceRoll from "./components/smalldiceroll";
import '../index.css'
import GoldBtn from "./components/goldbtn";
import ResultProgress from "./components/resultprogress";
import BTN from "./asset/btn";
export default function DiceGame2(){
    const { data, loading, error  , statusCode} = useFetch('https://jsonplaceholder.typicode.com/posts');
    console.log(data);


    const rollHandler = ()=>{

    }
    return(
        <div className=" min-h-[100vh] w-full flex justify-center items-center">
            <div className="dicegame2-container relative">
                <div className="mt-4 mx-7">
                    <BackButton title={'back to home'} color={true} />
                </div>
                <div class="w-[165px] py-1 h-[60px] bg-white/5 rounded-[10px] shadow-[0px_0px_4px_1px_rgba(0,255,43,1.00)] border border-[#42ec5e]/60 backdrop-blur-[24.40px] overflow-hidden mx-auto mt-9">
                    <p class="dicegame2-custom-text">YOU WON</p>
                    <p class="text-center text-white text-xs font-normal">+ 20.05 DTS</p>
                    <p class="text-center text-[#ffcf60] text-[10px] font-bold">3x BET</p>
                </div>
                <div className="mt-10">
                    <div className="flex justify-center items-center relative h-[132px]">
                        <div className='absolute'>
                            <Table />
                        </div>
                        <div className="mr-8 mb-6">
                            <SmalliceRoll rolling={false} targetNumber={2} />
                        </div>
                        <div>
                            <SmalliceRoll rolling={false} targetNumber={4} />
                        </div>
                    </div>
                    <div className="my-[10px] flex justify-center">
                        <ResultProgress />
                    </div>
                    <div className="flex justify-center items-center relative h-[132px]">
                    <div className='absolute'>
                            <Table />
                        </div>
                        <div className="mr-8 mb-6">
                            <SmalliceRoll rolling={false} targetNumber={6} />
                        </div>
                        <div>
                            <SmalliceRoll rolling={false} targetNumber={1} />
                        </div>
                    </div>
                </div>
                <div onClick={rollHandler} className="flex justify-center items-center h-[30px] w-[100px] mx-auto mt-8">
                    <div><GoldBtn /></div>
                    <p className="absolute text-black text-[15px] font-semibold">ROLL</p>
                </div>
                <div className="flex justify-between items-center px-6 absolute bottom-0 w-full">
                    <div className="flex">
                        <button className="flex justify-center items-center relative">
                            <BTN />
                            <span className="absolute text-white text-xs font-extrabold">MIN</span>
                            
                        </button>
                        <button className="flex justify-center items-center relative">
                            <BTN />
                            <span className="absolute">
                            <svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.850098" y="0.950012" width="15.3" height="6.375" rx="3.1875" fill="white" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div>
                        <p className="text-white text-[20px] font-bold">2.00 <span className="text-[#ffcf60]">DTS</span></p>
                    </div>
                    <div className="flex">
                        <button className="flex justify-center items-center relative">
                            <BTN />
                            <span className="absolute">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect y="4.95001" width="15.3" height="5" rx="2.5" fill="white" />
                                  <rect x="10.1499" width="15.3" height="5" rx="2.5" transform="rotate(90 10.1499 0)" fill="white" />
                                </svg>
                            </span>
                            
                        </button>
                        <button className="flex justify-center items-center relative">
                            <BTN />
                            <span className="absolute text-white text-xs font-extrabold">MAX</span>
                            
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}