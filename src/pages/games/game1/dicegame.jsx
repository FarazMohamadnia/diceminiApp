import { useEffect, useState } from "react";
import CrapsGame from "../../../components/layout/HomeLayout/components/rolldice";
import "../index.css";
import Controller from "./components/controller";
import Table from "./components/table";
import RollBtn from "./asset/rollbtn";
import GreenBtn from "./asset/greenbtn";
import WhiteBtn from "./asset/whitebtn";
import BackButton from "../../../components/common/shared/BackButton";
import axios from "axios";
import { Api } from "../../../api/apiUrl";
import useTokenStore from "../../../store/token";
import Swal from "sweetalert2";
import useUpgradeData from "../../../store/updateData";

export default function DiceGame1() {
  const {toggleUpgrade } = useUpgradeData();
  const {token}=useTokenStore()
  const [dts, setdts] = useState(1);
  const [history ,sethistory]=useState([]);
  const [multiplier , setmultiplier]=useState({});
  const [userDts , setuserDts]=useState({})
  const [loading, setloading] = useState(false);
  const [numbers, setnumbers] = useState({
    number1: 2,
    number2: 3,
  });
  const [data , setdata]=useState({
    roll : 2,
    guess : 'Over',
    dts:0,
    multiplier :0
  })
  const [refresh , setrefresh]=useState(true)
  const rollHnadler = async() => {
    setdata({
      ...data ,
      dts : dts
    })
    try{
      setloading(true);
      const response = await axios.post(Api[5].RocketGame , {
        roll : data.roll,
        guess : data.guess,
        dts : dts ,
        // multiplier : data.multiplier
      } ,{
        headers:{ 
           "Authorization" : `token ${token}`
        }
      })
      setnumbers({
        number1: response.data.dices[0],
        number2: response.data.dices[1],
      });
      setdts(0)
      setTimeout(() => {
        setloading(false);
        setTimeout(() => {
          if(response.data.is_win){
            Swal.fire({
              icon:'success',
              title : 'The Dice have spoken; You won!'
            })
          }else{
            Swal.fire({
              icon:'error',
              title : 'The Dice have spoken; You lost!'
            })
          }
          toggleUpgrade(prv => prv ? false : true)
          setrefresh(refresh ? false : true)
        }, 700);
      }, 4000);

      console.log(response)
    }catch(err){
      setTimeout(() => {
        setloading(false);
        console.log(err)
        setTimeout(() => {
          Swal.fire({
            icon:'error',
            title : err.response.data.error
          })
        }, 700);
      }, 4000);
      console.log(err)
    }
  };

  const LoadedData = async()=>{
    try{
      const response = await axios.get(Api[5].RocketGame , {
        headers:{
           "Authorization" : `token ${token}`
        }
      })
      sethistory(response.data.game_history)
      setmultiplier(response.data.multipliers)
      setuserDts(response.data.user_dts)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    if(token)LoadedData()
  },[token ,refresh ])
  return (
    <div className="min-h-[100vh] w-full flex justify-center items-center DiceGame1-container">
      <div className="">
        <div className="mx-7 my-5">
          <BackButton color={true} title={"Back To Home"} />
        </div>
        <div>
          <Table history={history}/>
        </div>
        <div className="mt-5">
          <Controller multiplier={multiplier} setdata={setdata} data={data}/>
        </div>
        <div className="flex justify-center items-center ml-5 mt-14 mb-8">
          <div className="mr-[52px]">
            <CrapsGame targetNumber={numbers.number1} rolling={loading} />
          </div>
          <div className="mr-3">
            <CrapsGame targetNumber={numbers.number2} rolling={loading} />
          </div>
        </div>
        <div className="flex justify-center items-center rounded-full">
          <div className="w-[70px] h-[70px] relative">
            <RollBtn />
            <span
              onClick={rollHnadler}
              className="w-full h-full absolute top-0 rounded-full"
            ></span>
            <p className="text-white text-[20px] mt-1 text-center font-normal">
              Roll
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mx-3 mt-8">
          <div className="flex">
            <button
              onClick={() => setdts(userDts.min_dts)}
              className="flex justify-center items-center relative"
            >
              <WhiteBtn />
              <p className="absolute text-black text-xs font-extrabold">Min</p>
            </button>
            <button
              onClick={() => (dts > 1 ? setdts((prev) => prev - 1) : setdts(1))}
              className="flex justify-center items-center relative mx-1"
            >
              <GreenBtn />
              <p className="absolute">
                <svg
                  width="17"
                  height="8"
                  viewBox="0 0 17 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.850098"
                    y="0.950012"
                    width="15.3"
                    height="6.375"
                    rx="3.1875"
                    fill="white"
                  />
                </svg>
              </p>
            </button>
          </div>
          <div>
            <input placeholder="100 DTS" className="bg-white/0 text-white text-[20px] font-bold text-center max-w-[100px]" type="number" value={dts} onChange={(e)=>{setdts(e.target.value)}}/>
          </div>
          <div className="flex">
            <button
              onClick={() =>
                dts < userDts.max_dts ? setdts((prev) => Number(prev) + 1) : userDts.max_dts
              }
              className="flex justify-center items-center relative mx-1"
            >
              <GreenBtn />
              <p className="absolute">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="4.95001"
                    width="15.3"
                    height="5"
                    rx="2.5"
                    fill="white"
                  />
                  <rect
                    x="10.1499"
                    width="15.3"
                    height="5"
                    rx="2.5"
                    transform="rotate(90 10.1499 0)"
                    fill="white"
                  />
                </svg>
              </p>
            </button>
            <button
              onClick={() => setdts(userDts.max_dts)}
              className="flex justify-center items-center relative"
            >
              <WhiteBtn />
              <p className="absolute text-black text-xs font-extrabold">Max</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
