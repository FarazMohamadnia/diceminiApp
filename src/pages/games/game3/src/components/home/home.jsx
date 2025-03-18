import { useTonWallet } from "@tonconnect/ui-react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../index.css";
import { useStore } from "../../store";
import AddIcon from "../asset/icon/add";
import DisableIcon from "../asset/icon/disable";
import JetIcon from "../asset/icon/jet";
import RepeatIcon from "../asset/icon/repeat";
import Button from "../button";
import Controller from "../controller";
import CupIcon from '../asset/icon/cup'
import WinerPage from "../../../components/winerpage";
import { Api } from "../../../../../../api/apiUrl";
import useTokenStore from "../../../../../../store/token";
import BackButton from "../../../../../../components/common/shared/BackButton";
const color = [
  {
    text: "SUBMIT",
    icon: <JetIcon />,
    className:
      "text-[#3BFFFF] border-[#3BFFFF] shadow-[0px_0px_8px_0px_rgba(59,255,255,1.00)]",
  },
  {
    text: "CHANGE",
    icon: <RepeatIcon />,
    className:
      "text-[#cafd7b] border-[#cafd7b] shadow-[0px_0px_8px_0px_rgba(202,253,123,1)]",
  },
  {
    text: "SUBMIT",
    icon: <DisableIcon />,
    className:
      "bg-[#454545]/60 shadow-[0px_0px_4px_0px_rgba(0,240,255,0.13)] border-[#454545] text-neutral-50/10",
  },
];

export const exampleData = {
  get: {
    predict: {
      slots: 3,
      predictions: [
        {
          slot: 1,
          dice_number1: 6,
          dice_number2: 6,
        },
        {
          slot: 3,
          dice_number1: 1,
          dice_number2: 1,
        },
        {
          slot: 2,
          dice_number1: 5,
          dice_number2: 5,
        },
      ],
    },

    "referral-code": {
      referral_link: "https://t.me/mini_dice_dev_bot?start=3CcNerRmam",
    },

    referrals: {
      count: 3,
      referral: [
        {
          referee: {
            telegram_username: "super_usr",
          },
        },
        {
          referee: {
            telegram_username: "pppppppp",
          },
        },
        {
          referee: {
            telegram_username: "okokokok",
          },
        },
      ],
    },

    missions: {
      has_invite: true,
      has_submit: true,
    },
  },

  post: {
    predict: {
      body: {
        dice_number1: 6,
        dice_number2: 6,
        slot: 1,
      },
      response: {
        /**
         * error is optional
         */
        error: "message",
      },
    },
  },
};

export default function Game3() {
  const {token}=useTokenStore()
  const [openModal, setopenModal] = useState(false);
  const [controller, setcontroller] = useState("submit");
  const [time, settime] = useState({});
  const [finish, setfinish] = useState("");
  const [values, setvalues] = useState({
    number1: 1,
    number2: 1,
  });
  const [countdown, setcountdown] = useState("");
  const [newDate , setnewDate ]=useState("")
  const [lastPredict, setlastPredict] = useState({
    diceNumber1: null,
    diceNumber2: null,
  });
  const [loading, setloading] = useState(true);
  const { player_id, setPlayer_id, setPredicts } = useStore();
  const wallet = useTonWallet();

  const modalHandler = () => {
    openModal ? setopenModal(false) : setopenModal(true);
  };

  const BTNhandler = async () => {
    try {                                      
      const response = await axios.get(Api[6].predict, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      
      if (response.data.slots) {
        setPredicts(response.data);
        setlastPredict({
          diceNumber1: response.data.predictions?.[0]?.dice_number1,
          diceNumber2: response.data.predictions?.[0]?.dice_number2,
        });
      }

      

      const number1 = response.data?.predictions?.[0]?.dice_number1 || null;

      if (finish) {
        setcontroller("disable");
        
      } else if (
        !finish &&
        number1 === null
      ) {
        setcontroller("submit");
        
      } else if (
        !finish &&
        number1 !== null
      ) {
        setcontroller("change");
        
      }
    } catch (err) {
      console.log(err.message);
      setloading(false);
    }
  };

  const timeHandler = async () => {
    try {
      const response = await axios.get(Api[6].luckydiceCountdown);
      const date = new Date(response.data.expire_dt);
      const date1 = new Date(response.data.expire_dt);
      date1.setDate(date.getDate() - 1);
      setnewDate(getFormattedDate(date1))
      setcountdown(getFormattedDate(date));
      setfinish(response.data.is_finished);
    
      startCountdown();
      const calculateRemainingTime = () => {
        const now = new Date();
        const diff = date - now;


        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
      };

      const remainingTime = calculateRemainingTime();
      settime(remainingTime);
    } catch (error) {
      console.error(error);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  function getFormattedDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${year}/${month}/${day}`;
  }

  const startCountdown = () => {
    clearInterval(window.countdownInterval); // اطمینان از پاک شدن تایمر قبلی
  
    window.countdownInterval = setInterval(() => {
      settime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
  
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(window.countdownInterval);
          return prevTime;
        }
  
        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          seconds = 59;
          minutes -= 1;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours -= 1;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days -= 1;
        }
  
        return { days, hours, minutes, seconds };
      });
    }, 1000);
  };
  

  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  useEffect(() => {
    timeHandler(); 
    BTNhandler();
    startCountdown();
  
    return () => clearInterval(window.countdownInterval); // پاک کردن تایمر هنگام خروج از صفحه
  }, []);

  return (
    <div>
      {openModal ? <WinerPage modalHandler={modalHandler} countdown={newDate} /> :
        <div className="home-layout">
            <div>
              <div className="mb-5 mx-6">
              <BackButton title="Back to Game" />
              </div>
              <div className="text-center text-white text-xl font-medium">
                <p>
                  Predict The Dice, <span className="text-[#FFDE7B]">100$</span>{" "}
                  For The Prize!
                  <br /> <span className=""> Cash in Your Wallet</span>
                </p>
              </div>
              <div className="mt-6">
                <div className="w-[90%] h-[60px] flex items-center justify-between px-3 mx-auto rounded-2xl shadow-[inset_0px_4px_26.600000381469727px_-7px_rgba(26,229,161,1.00)] border border-[#1ae5a1] ">
                  <div className="">
                    <AddIcon />
                  </div>
                  <span>
                    <p className="text-[#1ae5a1] text-xs font-semibold px-1">
                      JOIN DICE MANIACS CHANNEL TO WATCH
                      <br />
                      LATEST COMBINATIONS
                    </p>
                  </span>
                  <div className="flex justify-center items-center rounded-xl border border-[#1AE5A1] shadow-custom-inset">
                    <a
                      href="https://t.me/dicemaniacs"
                      className="text-white p-2"
                    >
                      JOIN NOW
                    </a>
                  </div>
                </div>
                <div
                  className=" w-[90%] h-[120px] flex flex-col justify-evenly mx-auto text-center rounded-[15px] border border-[#FFDE7B] bg-white/5 shadow-[inset_0px_4px_125px_-7px_#FFDE7B] backdrop-blur-[54.15px] mt-7"
                >
                  <p className="text-white text-md font-semibold ">
                    NEXT DICE COMBINATION WILL REVEAL IN :
                  </p>
                  <div className="flex justify-evenly items-center">
                    <div className="text-center flex flex-col items-center min-h-[50px]">
                      <p className="text-[#FFDE7B] text-sm font-medium min-h-[16px]">
                        DAYS
                      </p>
                      <p className="text-white text-2xl font-medium min-h-[32px] text-BalooBhai">
                        {formatNumber(time.days)}
                      </p>
                    </div>

                    <div className="text-center flex flex-col items-center min-h-[50px]">
                      <p className="text-[#FFDE7B] text-sm font-medium min-h-[16px]">
                        HOURS
                      </p>
                      <p className="text-white text-2xl font-medium min-h-[32px] text-BalooBhai">
                        {formatNumber(time.hours)}
                      </p>
                    </div>

                    <div className="text-center flex flex-col items-center min-h-[50px]">
                      <p className="text-[#FFDE7B] text-sm font-medium min-h-[16px]">
                        MINUTES
                      </p>
                      <p className="text-white text-2xl font-medium min-h-[32px] text-BalooBhai">
                        {formatNumber(time.minutes)}
                      </p>
                    </div>

                    <div className="text-center flex flex-col items-center min-h-[50px]">
                      <p className="text-[#FFDE7B] text-sm font-medium min-h-[16px]">
                        SECONDS
                      </p>
                      <p className="text-white text-2xl font-medium min-h-[32px] text-BalooBhai">
                        {formatNumber(time.seconds)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-9">
                <Controller
                  lastPredict={lastPredict}
                  setlastPredict={setlastPredict}
                  values={values}
                  setvalues={setvalues}
                  setcontroller={setcontroller}
                />
              </div>
              <div className="flex w-[90%] mx-auto justify-between items-center relative my-6">
                <div className="w-24"></div>
                {controller === "disable" && (
                  <Button
                    auth={player_id}
                    {...color[2]}
                    controller={controller}
                    values={values}
                  />
                )}
                {controller === "submit" && (
                  <Button
                    auth={player_id}
                    {...color[0]}
                    controller={controller}
                    values={values}
                    setcontroller={setcontroller}
                  />
                )}
                {controller === "change" && (
                  <Button
                    auth={player_id}
                    {...color[1]}
                    controller={controller}
                    values={values}
                  />
                )}
                <div
                  onClick={modalHandler}
                  className="relative flex items-start justify-start w-[100px] text-white py-[2px] rounded-[85px] border border-[#FFDE7B] bg-black/11 shadow-[0px_0px_8px_0px_#FFDE7B]"
                >
                  <span className="pl-4">WINNER</span>
                  <span className="absolute right-2 -top-3">
                    <CupIcon />
                  </span>
                </div>
              </div>
            </div>
        </div>
      }
    </div>
  );
}
