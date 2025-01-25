import "./GameLayout2.css";
import Dicesellcard from "../../../common/GameComponents/DiceSellCard/dicesellcard";
import FakeDiceImg from "../../../../asset/img/GameImg/Section2/TestDice.png";
import TwoWhiteDice from "../../../icons/change/game/twowhiteDice";
import { useState } from "react";
import DollerCoin from "../../../icons/change/Dcoin";
import Amount from "../../../../pages/Wallet/pages/withdrawPage/components/AmountComponent";
import SwapIcon from "../../../icons/swapicon";
import WalletMoney from "../../../icons/walletmoney";
import { useTonConnectUI } from "@tonconnect/ui-react";

const FakeData = [
  {
    Title: "BASIC COMBO",
    Img: FakeDiceImg,
    Color: "Green",
    Dices: "20 + 2",
    DTS: "42",
    Price: 1.99,
  },
  {
    Title: " COMBO",
    Img: FakeDiceImg,
    Color: "Red",
    Dices: "20 + 2",
    DTS: "42",
    Price: 3.99,
  },
  {
    Title: "BASIC COMBO",
    Img: FakeDiceImg,
    Color: "Yellow",
    Dices: "20 + 2",
    DTS: "42",
    Price: 10.99,
  },
  {
    Title: "BASIC COMBO",
    Img: FakeDiceImg,
    Color: "Gold",
    Dices: "20 + 2",
    DTS: "42",
    Price: 15.99,
  },
];

// const transaction = {
//   validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes
//   messages: [
    // {
    //   address: "UQACNxrqm1R8-hNaARw8SXBkCjOdLNnlvYh5thE60ICfXJIE", // message destination in user-friendly format
    //   amount: "20000000", // Toncoin in nanotons,
    // },
//   ],
// };
export default function GameLayout2() {
  const [tonConnectUI, setOptions] = useTonConnectUI();
  const [Select, setSelect] = useState(true);

  const sendTether =async ()=>{
    try{
        const data =await tonConnectUI.sendTransaction({
            validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes,
            messages : [{
                to: "UQACNxrqm1R8-hNaARw8SXBkCjOdLNnlvYh5thE60ICfXJIE", // Recipient address
                value: "1", // Amount in the smallest unit of the Jetton
                asset: "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs", // Smart contract address of the Jetton
                data: "RXhhbXBsZSBUb2tlbiBUcmFuc2FjdGlvbg==" 
            }]
          });
          console.log('data : ' , data)
    }catch(err){
        console.log(err)
    }
  }
  return (
    <div>
      <div className="mt-3 GameLayout2-background">
        <div className="flex justify-center items-center font-bold text-[20px] text-[#1AE5A1]">
          <TwoWhiteDice />
          <span>Get Your Dice</span>
          <TwoWhiteDice />
        </div>
      </div>
      <div>
        <div
          id="targetDiv"
          className="mt-4 flex justify-center items-center w-full px-4 text-white text-[13px] font-medium"
        >
          <button
            onClick={() => setSelect(true)}
            className={`w-[175px]  h-[45px] mx-2
                        ${
                          !Select
                            ? `rounded-[15px] shadow-[inset_0px_4px_23.5px_-7px_rgba(26,229,161,1.00)] border border-[#1ae5a1]`
                            : `bg-[#00ffe9]/20 border border-[#00ffe9] rounded-[15px]`
                        }`}
          >
            COMOBOS
          </button>
          <button
            onClick={() => setSelect(false)}
            className={`w-[175px] h-[45px] mx-2
                        ${
                          Select
                            ? `rounded-[15px] shadow-[inset_0px_4px_23.5px_-7px_rgba(26,229,161,1.00)] border border-[#1ae5a1]`
                            : `bg-[#00ffe9]/20 border border-[#00ffe9] rounded-[15px]`
                        }`}
          >
            Manual
          </button>
        </div>
      </div>
      <div className={Select ? "hidden" : "block mt-4 w-[95%] h-6 mx-auto"}>
        <div className="flex justify-around items-center">
          <div className="w-[45%] h-[70px] flex">
            <div className="w-[35%] h-full">
              <div>
                <DollerCoin />
              </div>
            </div>
            <div className="w-[65%] h-full">
              <p className="text-white text-[13px] font-bold">Cash Balance :</p>
              <p className="text-white text-[5.5vw] font-bold text-end">
                31 <span className="text-[#1ae5a1]">USD</span>
              </p>
            </div>
          </div>
          <div className="w-[45%] h-[70px] flex">
            <div className="w-[35%] h-full">
              <div className="GameLayout2-DtsCoin"></div>
            </div>
            <div className="w-[65%]">
              <p className="text-white text-[13px] font-bold">DTS Balance :</p>
              <p className="text-white text-[5.5vw] w-full font-bold text-end">
                3756.25 <span className="text-[#00ffa9]">DTS</span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="pb-28 w-[95%] mx-auto mt-5">
          <Amount />
          <div className="w-full h-[1px] bg-slate-500 my-6 relative flex justify-center items-center">
            <div className="bg-[#121724]">
              <SwapIcon />
            </div>
          </div>
          <div className="GameLayout2-input-style">
            <div className="flex items-center">
              <p className="text-[#3bffff] text-[15px] font-light">
                AMOUNT OF DTS :{" "}
              </p>
              <p className="text-neutral-50 text-[15px] font-light ml-1">
                1121212121212
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={sendTether}
              className="py-3 px-6 w-40 h-[43px] bg-white/0 flex justify-around items-center rounded-[15px] shadow-[inset_0px_4px_20.399999618530273px_-7px_rgba(0,240,255,1.00)] border border-[#3bffff] backdrop-blur-[108.30px]"
            >
              <WalletMoney />
              <p className="text-[#3bffff] text-base font-semibold">BUY DTS</p>
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          Select ? "flex justify-center items-center flex-wrap" : "hidden"
        }
      >
        {FakeData.map((data) => (
          <Dicesellcard {...data} />
        ))}
      </div>
    </div>
  );
}
