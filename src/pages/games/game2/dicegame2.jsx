import BackButton from "../../../components/common/shared/BackButton";
import Table from "./asset/table";
import SmalliceRoll from "./components/smalldiceroll";
import "../index.css";
import GoldBtn from "./components/goldbtn";
import ResultProgress from "./components/resultprogress";
import BTN from "./asset/btn";
import ShowList from "./asset/showList";
import ShowListArrow from "./asset/showListArrow";
import Question from "./asset/question";
import React, {useEffect, useState} from "react";
import MuteSound from "./asset/muteSound";
import InfoTable from "./components/InfoTable";
import axios from "axios";
import { Api } from "../../../api/apiUrl";
import useTokenStore from "../../../store/token";
import Modal from "./components/modal";
import Swal from "sweetalert2";
import Loading  from '../../../pages/loading'
import useUpgradeData from "../../../store/updateData";
import ModalComponent from "../global/Qmodal";
import diceAudio from '../../../asset/sound/dice-142528.mp3';

const questionData = [
    'Dice Clash – Beat the House, Take the Win!' ,
    'Enter your DTS, roll the dice, and face off against the House! You get two dice, the House also gets two. Whoever has the higher total wins.',
    'If you win, your DTS gets multiplied by 1.8. If it`s a draw, your DTS is returned.But if the House wins—you lose your stake.'
  ]
export default function DiceGame2() {
    let audio = new Audio(diceAudio);
    const [disableBtn, setdisableBtn] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const {toggleUpgrade } = useUpgradeData();
    const {token} = useTokenStore();
    const [resultDice, setresultDice] = useState([
        {
            number1: 6,
            number2: 6,
        },
        {
            number1: 6,
            number2: 6,
        },
    ]);
    const [winer, setwiner] = useState(true);
    const [rollTime, setrollTime] = useState(false);
    const [dts, setdts] = useState(1);
    const [userData1, setuserData1] = useState({
        username: "",
        img: "",
    });
    const [userData2, setuserData2] = useState({
        username: "Bot",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRseRj5MjxLYtgPrmGHS01YBytPjIkGKk8Zaw&s",
    });
    const [userResult, setuserResult] = useState([0, 0]);
    const [IsTableOpen, setIsTableOpen] = useState(false);
    const [history , sethistory]=useState([])
    const [dtsAmount , setdtsAmount]=useState({})
    const [ModalStatus, setModalStatus]=useState({
        0 : {
            title : 'YOU WON',
            color : '#42ec5e'
        },
        1 : {
            title : 'YOU LOSE',
            color : '#FF000099'
        },
        2 : {
            title : 'TIE',
            color : '#FFFFFF99'
        }
    })
    const [openModal , setopenModal]=useState(null)
    const [amount , setamount]=useState(0)
    const [loading , setloading]=useState(true)
    function vibratePhone() {
        setTimeout(() => {
            audio.play()
            if ("vibrate" in navigator) {
                navigator.vibrate(50)
            } else {
                console.log("Device does not support vibration.");
            }
        }, 700);
    }
    const rollHandler = async() => {
        try{
            setdisableBtn(true);
            setrollTime(true);
            const response = await axios.post(Api[5].DiceClash ,{
                dts : dts
            }, {
                headers:{
                   "Authorization" : `token ${token}`
                }
            })

            setresultDice([
                {
                    number1: response.data.opponent_dices[0],
                    number2: response.data.opponent_dices[1],
                },
                {
                    number1: response.data.dices[0],
                    number2: response.data.dices[1],
                },
            ]);

            // setdts(1)
            setTimeout(() => {
                setuserResult([
                    response.data.dices[0] + response.data.dices[1],
                    response.data.opponent_dices[0] + response.data.opponent_dices[1],
                ]);
    
                if(response.data.dices[0] + response.data.dices[1] < response.data.opponent_dices[0] + response.data.opponent_dices[1]) {
                    setwiner(true);
                } else {
                    setwiner(false);
                }
                setopenModal(response.data.game_record.result)
                setamount(response.data.game_record.win_dots_amount)
                setrollTime(false);
                setdisableBtn(false);
                toggleUpgrade(prv => prv ? false : true)
                vibratePhone()
            }, 4000);

           
        }catch(err){
            console.log(err)
            Swal.fire({
                icon : 'error',
                title : err.response.data.error
            })
            setrollTime(false);
            setdisableBtn(false);
        }
    };

    const Loadedhandler =async()=>{
        try{
            const response = await axios.get(Api[5].DiceClash , {
                headers:{
                   "Authorization" : `token ${token}`
                }
            })
            setdtsAmount(response.data.user_dts)
            sethistory(response.data.game_history)
            setuserData1({
                username : response.data.player.first_name ,
                img : response.data.player.picture
            })
            setloading(false)
        }catch(err){
            setloading(false)
            console.log(err)
        }
    }

    useEffect(()=>{
        if(token)Loadedhandler() 
    },[token , resultDice])
    return (
        <>
        {
            loading ?  <Loading />
            :
        <div className=" min-h-[100vh] w-full flex justify-center items-center dicegame2-container">
            <div className="h-[650px] w-full relative">
                <div className="mt-4 mx-7 flex justify-between items-center">
                    <BackButton title={"back to home"} color={true}/>
                    <div className="flex ">
                        <div>
                            {/* <MuteSound/> */}
                        </div>
                        <div onClick={()=>setIsOpen(true)}>
                            <Question/>
                            <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} questionData={questionData}/>
                        </div>
                    </div>
                </div>
                <div className="min-h-16">
                    {openModal === 1 &&  <Modal {...ModalStatus[0]} amount={amount}/>}
                    {openModal === 2 &&  <Modal {...ModalStatus[1]} amount={amount}/>}
                    {openModal === 3 &&  <Modal {...ModalStatus[2]} amount={amount}/>}
                </div>
                <div className="mt-10">

                    <div className="flex justify-center items-center relative h-[132px]">
                        <div
                            class="z-10 absolute top-[-9px] w-20 h-3 bg-white/30 rounded-lg shadow-[0px_0px_1.600000023841858px_0px_rgba(255,188,66,1.00)] border border-[#ffbc42] backdrop-blur-sm flex justify-between items-center">
                            <img
                                className="rounded-full w-[10px] h-[10px] absolute"
                                src={userData2.img}
                                alt=""
                            />
                            <span></span>
                            <p className="text-[#3a3a3a] text-[9px] font-normal">
                                {userData2.username}
                            </p>
                            <span></span>
                        </div>
                        <div className="absolute">
                            <Table/>
                        </div>
                        <div className="mr-8 mb-6">
                            <SmalliceRoll
                                rolling={rollTime}
                                targetNumber={resultDice[0].number1}
                            />
                        </div>
                        <div>
                            <SmalliceRoll
                                rolling={rollTime}
                                targetNumber={resultDice[0].number2}
                            />
                        </div>
                    </div>


                    <div className="my-[10px] flex justify-center">
                        <ResultProgress
                            img1={userData1.img}
                            img2={userData2.img}
                            winer={winer}
                            userResult={userResult}
                        />
                    </div>
                    <div className="flex justify-center items-center relative h-[132px]">
                        <div
                            class="flex justify-between items-center absolute z-10 bottom-[-9px] w-16 h-3 bg-white/30 rounded-lg shadow-[0px_0px_1.600000023841858px_0px_rgba(255,188,66,1.00)] border border-[#ffbc42] backdrop-blur-sm">
                            <img
                                className="rounded-full w-[10px] h-[10px] absolute"
                                src={userData1.img}
                                alt=""
                            />
                            <span></span>
                            <p className="text-[#3a3a3a] text-[9px] font-normal">
                                {userData1.username}
                            </p>
                            <span></span>
                        </div>
                        <div className="absolute">
                            <Table/>
                        </div>
                        <div className="mr-8 mb-6">
                            <SmalliceRoll
                                rolling={rollTime}
                                targetNumber={resultDice[1].number1}
                            />
                        </div>
                        <div>
                            <SmalliceRoll
                                rolling={rollTime}
                                targetNumber={resultDice[1].number2}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <button onClick={() => setIsTableOpen(true)}
                            className="ml0 mt-20 items-center absolute top-[200px]">
                        <ShowList/>
                        <div className="absolute top-[26px]">
                            <ShowListArrow/>
                        </div>
                    </button>
                    <InfoTable history={history} isTableOpen={IsTableOpen} onClose={() => setIsTableOpen(false)}/>
                </div>

                <button
                    disabled={disableBtn}
                    onClick={rollHandler}
                    className="flex justify-center items-center h-[30px] w-[100px] mx-auto mt-8"
                >
                    <div>
                        <GoldBtn/>
                    </div>
                    <p className="absolute text-black text-[15px] font-semibold">ROLL</p>
                </button>
                <div className="mt-8 flex justify-between items-center px-6 absolute -bottom-4 w-full">
                    <div className="flex">
                        <button
                            onClick={() => {
                                setdts(dtsAmount.min_dts)
                            }}
                            className="flex justify-center items-center relative"
                        >
                            <BTN/>
                            <span className="absolute text-white text-xs font-extrabold">
                              MIN
                            </span>
                        </button>
                        <button
                            onClick={() =>setdts((prv) => (prv > 1 ? Number(prv)-1 : prv))}
                            className="flex justify-center items-center relative"
                        >
                            <BTN/>
                            <span className="absolute">
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
                            </span>
                        </button>
                    </div>
                    <div>
                        <input onChange={(e)=>{
                            let value = parseInt(e.target.value);
                            if (value > 377) value = 377;
                            setdts(value);
                        }} className="text-[20px] font-bold w-[100%] text-center text-white bg-white/0" type="number" value={dts} placeholder="100 DTS" />
                    </div>
                    <div className="flex">
                        <button
                            onClick={() =>{
                                if(dts <=377){
                                    setdts((prv) => (prv < 377 ? Number(prv)+1 : prv))
                                }else{
                                    setdts(377)
                                }
                            }
                            }
                            className="flex justify-center items-center relative"
                        >
                            <BTN/>
                            <span className="absolute">
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
                        </span>
                        </button>
                        <button
                            onClick={() => {
                                if (!dts || dts <= 377) {
                                    setdts(Math.min(dtsAmount.max_dts, 377));
                                  } else {
                                    setdts(377);
                                  }
                            }}
                            className="flex justify-center items-center relative"
                        >
                            <BTN/>
                            <span className="absolute text-white text-xs font-extrabold">
                              MAX
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    );
}
