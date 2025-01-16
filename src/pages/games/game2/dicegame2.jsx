import BackButton from "../../../components/common/shared/BackButton";
import useFetch from "../../../context/usefetch";
import Table from "./asset/table";
import SmalliceRoll from "./components/smalldiceroll";
import '../index.css'
import GoldBtn from "./components/goldbtn";
import ResultProgress from "./components/resultprogress";
export default function DiceGame2(){
    const { data, loading, error  , statusCode} = useFetch('https://jsonplaceholder.typicode.com/posts');
    console.log(data);


    const rollHandler = ()=>{

    }
    return(
        <div className=" min-h-[100vh] w-full flex justify-center items-center">
            <div className="dicegame2-container">
                <div>
                    <BackButton title={'back to home'} color={true} />
                </div>
                <div className="text-center">
                    <button className="w-[176px] h-[40px] shadow-[0_0_3px_1px_#FFCF60] rounded-2xl bg-white/20 border border-[#FFCF60] text-white text-[15px] font-bold">RESULT</button>
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
            </div>
        </div>
    )
}