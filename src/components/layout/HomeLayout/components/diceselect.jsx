import ArrowBottom from "../../../icons/arrowbottom";
import ArrowTop from "../../../icons/arrowtop";
import notificationSound from "../../../../asset/sound/dice-142528.mp3";
import Dice1 from '../../../../asset/img/HomeImg/dices/1.png'
import Dice2 from '../../../../asset/img/HomeImg/dices/2.png'
import Dice3 from '../../../../asset/img/HomeImg/dices/3.png'
import Dice4 from '../../../../asset/img/HomeImg/dices/4.png'
import Dice5 from '../../../../asset/img/HomeImg/dices/5.png'
import Dice6 from '../../../../asset/img/HomeImg/dices/6.png'
import { useEffect, useRef, useState } from "react";
export default function DiceSelected(){
    const audio = new Audio(notificationSound);
    audio.volume = 0.2
    const [DiceNumber , setDiceNumber]=useState({
        number1 : 1,
        number2 : 1
    });
    const [Dicestatus , setDicestatus] = useState({})
    const [Dicestatus2 , setDicestatus2] = useState({})
    const [Voicecintroller , setVoicecintroller]=useState({
        dice1 : true ,
        dice : true
    });
    const DiceInfo = [
        {
            number : 1 ,
            img : Dice1
        },
        {
            number : 2 ,
            img : Dice2
        },
        {
            number : 3 ,
            img : Dice3
        },
        {
            number : 4 ,
            img : Dice4
        },
        {
            number : 5 ,
            img : Dice5
        },
        {
            number : 6 ,
            img : Dice6
        }
    ];
    
    const DiceNumberhandller = (e)=>{ 
        navigator.vibrate(40);
        audio.play().catch((error) => {
            console.error(error);
        });
        const id = e.target.id
        if(id === '1'){
            const num = DiceNumber.number1+1
            if(DiceNumber.number1 < 6){
                setDiceNumber({
                    ...DiceNumber,
                    number1 : num
                })
                setDicestatus(DiceInfo[num - 1]);
            }else{
                setDiceNumber({
                    ...DiceNumber,
                    number1 : 6
                })
            }
        }else if(id === "2"){
            const num = DiceNumber.number1-1
            if(DiceNumber.number1 > 1){
                setDiceNumber({
                    ...DiceNumber,
                    number1 : num
                })
                setDicestatus(DiceInfo[num - 1]);
            }else{
                setDiceNumber({
                    ...DiceNumber,
                    number1 : 1
                })
            }
        }else if(id === "3"){
            const num = DiceNumber.number2+1
            if(DiceNumber.number2 < 6){
                setDiceNumber({
                    ...DiceNumber,
                    number2 : num
                })
                setDicestatus2(DiceInfo[num - 1]);
            }else{
                setDiceNumber({
                    ...DiceNumber,
                    number2 : 6
                })
            }
        }else if(id === "4"){
            const num = DiceNumber.number2-1
            if(DiceNumber.number2 > 1){
                setDiceNumber({
                    ...DiceNumber,
                    number2 : num
                })
                setDicestatus2(DiceInfo[num - 1]);
            }else{
                setDiceNumber({
                    ...DiceNumber,
                    number2 : 1
                })
            }
        }
    }

    useEffect(()=>{
        setDicestatus(DiceInfo[0]);
        setDicestatus2(DiceInfo[0])
    },[])

    return(
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <div className="mr-[3px] relative" >
                    <ArrowTop/>
                    <span onClick={DiceNumberhandller} id="1" className="w-full h-full absolute top-0"></span>
                </div>
                <div className="flex ml-1">
                    <img className="w-[43.5px] h-[49px]" src={Dicestatus.img} alt=""/>
                </div>
                <div className="relative" >
                    <ArrowBottom />
                    <span  onClick={DiceNumberhandller} id="2" className="w-full h-full absolute top-0"></span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="mr-[3px] relative">
                    <ArrowTop />
                    <span onClick={DiceNumberhandller} id="3" className="w-full h-full absolute top-0"></span>
                </div>
                <div className="flex ml-1">
                    <img className="w-[43.5px] h-[49px]" src={Dicestatus2.img} alt=""/>
                </div>
                <div className="relative">
                    <ArrowBottom />
                    <span onClick={DiceNumberhandller} id="4" className="w-full h-full absolute top-0"></span>
                </div>
            </div>
        </div>
    )
}