import axios from "axios";
import { useEffect, useState } from "react";
import { useStore } from "../store";
import ArrowBottom from "./asset/icon/arrowbotton";
import ArrowTop from "./asset/icon/arrowtop";
import Dice1 from "./asset/icon/dice/dice1";
import Dice2 from "./asset/icon/dice/dice2";
import Dice3 from "./asset/icon/dice/dice3";
import Dice4 from "./asset/icon/dice/dice4";
import Dice5 from "./asset/icon/dice/dice5";
import Dice6 from "./asset/icon/dice/dice6";
// import sound from '../../public/asset/sound/mixkit-on-or-off-light-switch-tap-2585.mp4'

export const ShareText = (link) => {
  return `🔥 Predict the Dice Combo & Share $100 Daily! 🔥\n\n🎯 Guess the perfect combo and win your share of $100 every day!\n\n🙌 Invite your friends to submit more combos & boost your chances to win!\n\n💰 More entries = More wins! 🚀\n\n👉 Start predicting now! 🎲\n\n${link}`;
};

export default function Controller({
  values,
  setvalues,
  setlastPredict,
  lastPredict,
  setcontroller,
  sethistoryModal
}) {
  const DiceInfo = [
    {
      number: 1,
      img: <Dice1 />,
    },
    {
      number: 2,
      img: <Dice2 />,
    },
    {
      number: 3,
      img: <Dice3 />,
    },
    {
      number: 4,
      img: <Dice4 />,
    },
    {
      number: 5,
      img: <Dice5 />,
    },
    {
      number: 6,
      img: <Dice6 />,
    },
  ];

  const audio = new Audio(
    "https://mini.dicemaniacs.com/asset/sound/mixkit-on-or-off-light-switch-tap-2585.mp4"
  );
  const [DiceNumber, setDiceNumber] = useState({
    number1: 1,
    number2: 1,
  });
  const [Dicestatus, setDicestatus] = useState({});
  const [Dicestatus2, setDicestatus2] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    predictList,
    activePredict,
    slots,
    setActivePredict,
    player_id,
    setShareLink,
    shareLink,
  } = useStore();

  
  const DiceNumberhandller = (e) => {
    audio.play();

    if (navigator.vibrate) {
      navigator.vibrate(50);
    } else {
      console.log("Vibration API is not supported on this device.");
    }

    const id = e.target.id;
    if (id === "1") {
      const num = DiceNumber.number1 + 1;
      if (DiceNumber.number1 < 6) {
        setDiceNumber({
          ...DiceNumber,
          number1: num,
        });
        setDicestatus(DiceInfo[num - 1]);
        setvalues((prev) => {
          return {
            ...prev,
            number1: num,
          };
        });
      } else {
        setDiceNumber({
          ...DiceNumber,
          number1: 6,
        });
        setvalues((prev) => {
          return {
            ...prev,
            number1: 6,
          };
        });
      }
    } else if (id === "2") {
      const num = DiceNumber.number1 - 1;
      if (DiceNumber.number1 > 1) {
        setDiceNumber({
          ...DiceNumber,
          number1: num,
        });
        setDicestatus(DiceInfo[num - 1]);
        setvalues((prev) => {
          return {
            ...prev,
            number1: num,
          };
        });
      } else {
        setDiceNumber({
          ...DiceNumber,
          number1: 1,
        });
        setvalues((prev) => {
          return {
            ...prev,
            number1: 1,
          };
        });
      }
    } else if (id === "3") {
      const num = DiceNumber.number2 + 1;
      if (DiceNumber.number2 < 6) {
        setDiceNumber({
          ...DiceNumber,
          number2: num,
        });
        setDicestatus2(DiceInfo[num - 1]);
        setvalues((prev) => {
          return {
            ...prev,
            number2: num,
          };
        });
      } else {
        setDiceNumber({
          ...DiceNumber,
          number2: 6,
        });
        setvalues((prev) => {
          return {
            ...prev,
            number2: 6,
          };
        });
      }
    } else if (id === "4") {
      const num = DiceNumber.number2 - 1;
      if (DiceNumber.number2 > 1) {
        setDiceNumber({
          ...DiceNumber,
          number2: num,
        });
        setDicestatus2(DiceInfo[num - 1]);
        setvalues((prev) => {
          return {
            ...prev,
            number2: num,
          };
        });
      } else {
        setDiceNumber({
          ...DiceNumber,
          number2: 1,
        });
        setvalues((prev) => {
          return {
            ...prev,
            number2: 1,
          };
        });
      }
    }
  };

  

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  useEffect(() => {
    // if (lastPredict.diceNumber1 !== null && lastPredict.diceNumber2 !== null) {
    //   setDicestatus(DiceInfo[lastPredict.diceNumber1 - 1]);
    //   setDicestatus2(DiceInfo[lastPredict.diceNumber2 - 1]);
    //   setvalues({
    //     number1: lastPredict.diceNumber1,
    //     number2: lastPredict.diceNumber2,
    //   });
    //   setDiceNumber({
    //     number1: lastPredict.diceNumber1,
    //     number2: lastPredict.diceNumber2,
    //   });
    // } else {
    //   setDicestatus(DiceInfo[0]);
    //   setDicestatus2(DiceInfo[0]);
    // }

    if (
      activePredict &&
      activePredict?.dice_number1 !== null &&
      activePredict?.dice_number2 !== null
    ) {
      setDicestatus(
        DiceInfo.find((item) => item.number == activePredict.dice_number1)
      );
      setDicestatus2(
        DiceInfo.find((item) => item.number == activePredict.dice_number2)
      );
      setvalues({
        number1: activePredict.dice_number1,
        number2: activePredict.dice_number2,
      });
      setDiceNumber({
        number1: activePredict.dice_number1,
        number2: activePredict.dice_number2,
      });
    } else {
      setDicestatus(DiceInfo[0]);
      setDicestatus2(DiceInfo[0]);
    }
  }, [activePredict]);

  

  useEffect(() => {

  }, []);


  return (
    <div className="relative flex flex-col w-[90%] mx-auto rounded-3xl py-7 justify-center items-center shadow-[inset_0px_4px_26.600000381469727px_-7px_rgba(26,229,161,1.00)] border border-[#1ae5a1]">

      <div className="flex">
        <div className="flex flex-col justify-center items-center mr-7">
          <div className="mr-[5px] relative">
            <ArrowTop />
            <span
              onClick={DiceNumberhandller}
              id="1"
              className="w-full h-full absolute top-0"
            ></span>
          </div>
          <div className="flex ml-1 w-28 h-28 ">{Dicestatus.img}</div>
          <div className="relative">
            <ArrowBottom />
            <span
              onClick={DiceNumberhandller}
              id="2"
              className="w-full h-full absolute top-0"
            ></span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" mr-[5px] relative">
            <ArrowTop />
            <span
              onClick={DiceNumberhandller}
              id="3"
              className="w-full h-full absolute top-0"
            ></span>
          </div>
          <div className="flex ml-1 w-28 h-28 ">{Dicestatus2.img}</div>
          <div className="relative">
            <ArrowBottom />
            <span
              onClick={DiceNumberhandller}
              id="4"
              className="w-full h-full absolute top-0"
            ></span>
          </div>
        </div>
      </div>
      {isDialogOpen && (
        <div className="z-10 fixed inset-0 flex items-center justify-center transition-opacity duration-1000">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[80%] transition-transform duration-1000 border border-[#FFDE7B] bg-white/50 backdrop-blur-[6.5px] scale-100">
            <h2 className="text-center text-lg font-semibold text-black">
              Extra Chance!
            </h2>
            <p className="text-center text-gray-600 mt-2">
              Here you can add an extra chance logic or any content.
            </p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-[#1AE5A1] text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform"
                onClick={handleCloseDialog}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
