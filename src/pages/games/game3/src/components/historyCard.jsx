import Dice1 from "./asset/icon/dice/dice1";
import Dice2 from "./asset/icon/dice/dice2";
import Dice3 from "./asset/icon/dice/dice3";
import Dice4 from "./asset/icon/dice/dice4";
import Dice5 from "./asset/icon/dice/dice5";
import Dice6 from "./asset/icon/dice/dice6";

export default function HistoryCard({dice_number1 , dice_number2, slot}) {

      if(!dice_number1 && !dice_number2)return

      const DiceInfo = {
        1:<Dice1 />,
        2:<Dice2 />,
        3:<Dice3 />,
        4:<Dice4 />,
        5:<Dice5 />,
        6:<Dice6 />,
      }

    
    
    return (
        <div className="w-[85%] h-[50px] mx-auto flex justify-between items-center  border border-[#1AE5A1] rounded-2xl p-4 max-w-xl shadow-[inset_0_0_25px_0_rgba(0,255,128,0.4)] my-3">
            <div>
              <p className="border-[2px] flex justify-center items-center border-[#3bffff] rounded-full w-6 h-6 text-[#3bffff]">
                  {slot}
              </p>
            </div>
            <div className="flex">
              <div className="flex text-white text-[17px] text-BalooBhai ">
                <p className="me-2 font-extrabold text-white">{dice_number2}/{dice_number1} </p> <span className="text-[#1ae5a1]">|</span><p className="ms-2 font-extrabold text-white"> {dice_number1}/{dice_number2}</p>
              </div>
            </div>  
            <div className="flex">
                <div className="mr-[6px] w-8 h-8">
                    {DiceInfo[dice_number1]}
                </div>
                <div className="w-8 h-8">
                    {DiceInfo[dice_number2]}
                </div>
            </div>    
        </div>
    );
}
