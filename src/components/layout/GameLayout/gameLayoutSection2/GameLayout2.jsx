import axios from "axios";
import { spiral } from "ldrs";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Api } from "../../../../api/apiUrl";
import buttonImage from "../../../../asset/img/GameImg/layout2/button.svg";
import catiIcon from "../../../../asset/img/GameImg/layout2/cati.svg";
import dogsIcon from "../../../../asset/img/GameImg/layout2/dogs.svg";
import hamsterIcon from "../../../../asset/img/GameImg/layout2/hamster.svg";
import notIcon from "../../../../asset/img/GameImg/layout2/not.svg";
import tonIcon from "../../../../asset/img/GameImg/layout2/ton.svg";
import usdtIcon from "../../../../asset/img/GameImg/layout2/usdt.svg";
import basicImg from "../../../../asset/img/GameImg/Section2/basicCombo.png";
import goldImg from "../../../../asset/img/GameImg/Section2/goldCombo.png";
import platinumImg from "../../../../asset/img/GameImg/Section2/platinumCombo.png";
import silverImg from "../../../../asset/img/GameImg/Section2/silverCombo.png";
import DropDownMenu from "../../../../pages/Wallet/components/DropdownMenu";
import Amount from "../../../../pages/Wallet/pages/withdrawPage/components/AmountComponent";
import useCounterStore from "../../../../store/amount";
import useTokenStore from "../../../../store/token";
import useUpgradeData from "../../../../store/updateData";
import useUserStore from "../../../../store/user";
import Dicesellcard from "../../../common/GameComponents/DiceSellCard/dicesellcard";
import CloseModal from "../../../icons/change/game/closemodal";
import TwoWhiteDice from "../../../icons/change/game/twowhiteDice";
import WalletMoney from "../../../icons/walletmoney";

import "./GameLayout2.css";
import { useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
export const OwnerAddress = 'UQBWImgZl7ryAwZE0gCr8e7kFfyB06XZgZTQ-87qQexcYSmS'

spiral.register();

export default function GameLayout2() {
  const { toggleUpgrade } = useUpgradeData();
  const [Select, setSelect] = useState(true);
  const { amount, setamount } = useCounterStore();
  const { user } = useUserStore();
  const [dtsAmount, setdtsAmount] = useState(0);
  const { token } = useTokenStore();
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);

  const SelectHandler = () => {
    Select ? setSelect(false) : setSelect(true);
  };

  const getCombos = async () => {
    try {
      const response = await axios.get(Api[0].combos, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      setdata([
        {
          id: 1,
          Title: response.data[0].name,
          Img: basicImg,
          Color: "Green",
          Dices: "",
          DTS: response.data[0].dts_amount,
          className: " top-[-50px] ",
          Price: response.data[0].amount.toFixed(3),
          discount_value : response.data[0].discount_value
        },
        {
          id: 2,
          Title: response.data[1].name,
          Img: silverImg,
          Color: "Red",
          Dices: "20 + 2",
          DTS: response.data[1].dts_amount,
          className: "top-[-35px]",
          Price: response.data[1].amount.toFixed(3),
          discount_value : response.data[1].discount_value
        },
        {
          id: 3,
          Title: response.data[2].name,
          Img: goldImg,
          Color: "Yellow",
          Dices: "20 + 2",
          DTS: response.data[2].dts_amount,
          className: "top-[6px]",
          Price: response.data[2].amount.toFixed(3),
          discount_value : response.data[2].discount_value
        },
        {
          id: 4,
          Title: response.data[3].name,
          Img: platinumImg,
          Color: "Gold",
          Dices: "20 + 2",
          DTS: response.data[3].dts_amount,
          className: "top-[-50px]",
          Price: response.data[3].amount.toFixed(3),
          discount_value : response.data[3].discount_value
        },
      ]);
      console.log(response.data)
      setloading(false);
    } catch (err) {
      setloading(false);
      console.log(err);
    }
  };

  const sendTransaction = async () => {
    if (dtsAmount > amount) {
      Swal.fire({
        title: "Error",
        text: "At least 1 DTS needs to be purchased",
        icon: "error",
      });
      return console.log("you should buy 1 DTS");
    }
    try {
      const response = await axios.post(
        Api[3].PostBuyDts,
        {
          dots_amount: amount / dtsAmount,
        },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );

      Swal.fire({
        title: `Transaction was successful`,
        icon: "successful",
      });
      toggleUpgrade((prv) => (prv ? false : true));
      setamount(0);
    } catch (err) {
      Swal.fire({
        title: `Error !`,
        text: err.response.data.error,
        icon: "error",
      });
      console.log(err);
    }
  };

  const dtsamounthandler = async () => {
    try {
      const response = await axios.get(Api[3].tondts, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      setdtsAmount(response.data.dots_to_ton);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dtsamounthandler();
    getCombos();
  }, [Select]);

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
        <div className="mt-4 flex justify-center items-center w-full px-4 text-white text-[13px] font-medium">
          <button
            className={`w-[175px]  h-[45px] mx-2 relative
                        ${
                          !Select
                            ? `rounded-[15px] shadow-[inset_0px_4px_23.5px_-7px_rgba(26,229,161,1.00)] border border-[#1ae5a1]`
                            : `bg-[#00ffe9]/20 border border-[#00ffe9] rounded-[15px]`
                        }`}
          >
            COMOBOS
            <span
              onClick={SelectHandler}
              className="absolute w-full h-full top-0 right-0 rounded-lg"
            ></span>
          </button>
          <button
            className={`w-[175px] h-[45px] mx-2 relative
                        ${
                          Select
                            ? `rounded-[15px] shadow-[inset_0px_4px_23.5px_-7px_rgba(26,229,161,1.00)] border border-[#1ae5a1]`
                            : `bg-[#00ffe9]/20 border border-[#00ffe9] rounded-[15px]`
                        }`}
          >
            Manual
            <span
              onClick={SelectHandler}
              className="absolute w-full h-full top-0 right-0 rounded-lg"
            ></span>
          </button>
        </div>
      </div>
      {!Select ? (
        <div className="block mt-4 w-[95%] h-[350px] mx-auto">
          <div className="flex justify-around items-center">
            <div className="w-[45%] h-[70px] flex">
              <div className="w-[35%] h-full">
                <div className="GameLayout2-DtsCoin"></div>
              </div>
              <div className="w-[65%]">
                <p className="text-white text-[13px] font-bold">
                  DTS Balance :
                </p>
                <p className="text-white text-[5.5vw] w-full font-bold text-end">
                  {user.inactive_dots_balance +
                    user.active_dots_balance +
                    user.dice_balance * 21}
                  <span className="text-[#00ffa9] ms-1">DTS</span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="pb-28 w-[95%] mx-auto mt-5">
            <Amount type={"dts"} />
            <div className="flex justify-center items-center mt-10">
              <button
                onClick={() => {
                  // sendTransaction()
                  setIsOpenConfirm(true);
                }}
                disabled={amount === undefined || amount === ""}
                className="py-3 px-6 w-40 h-[43px] bg-white/0 flex justify-around items-center rounded-[15px] shadow-[inset_0px_4px_20.399999618530273px_-7px_rgba(0,240,255,1.00)] border border-[#3bffff] backdrop-blur-[108.30px]"
              >
                <WalletMoney />
                <p className="text-[#3bffff] text-base font-semibold">
                  BUY DTS
                </p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-wrap min-h-60">
          {loading ? (
            <div className="my-10">
              <l-spiral size="120" speed="0.9" color="white"></l-spiral>
            </div>
          ) : (
            data.map((data) => {
              return (
                <div key={data.id}>
                  <div>
                    <Dicesellcard {...data} />
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
      <Modal
        isOpen={isOpenConfirm}
        onConfirm={(options) => {
         
        }}
        setIsOpen={setIsOpenConfirm}
        amount={amount}
      />
    </div>
  );
}

const icons = {
  TON: tonIcon,
  USDT: usdtIcon,
  NOT: notIcon,
  DOGS: dogsIcon,
  HMSTR: hamsterIcon,
  CATI: catiIcon,
};

export const Modal = ({ isOpen, setIsOpen, onConfirm, amount }) => {
  const wallet = useTonWallet();
  const [selectedCoin, setSelectedCoin] = useState();
  const [coinAmount, setCoinAmount] = useState('');
  const [Currency , setCurrency]=useState('')
  const { token } = useTokenStore();
  const [tonConnectUI] = useTonConnectUI();
  const TonWeb = new window.TonWeb(new window.TonWeb.HttpProvider("https://toncenter.com/api/v2/jsonRPC"));

  const getCoinAmount = async (coin) => {
    try {
      console.log('post getcoindts 1')
      const result = await axios.post(
        Api[6].getCoinDts,
        {
          dts_amount: amount,
          currency: coin.toLocaleLowerCase(),
        },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      setCoinAmount(result.data?.amount);
      setCurrency(coin.toLocaleLowerCase())
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = "hidden";
      if (selectedCoin) {
        getCoinAmount(selectedCoin);
      }
    } else {
      window.document.body.style.overflow = "auto";
    }

    return () => {
      window.document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`z-30 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`bg-[#090b0b] text-white min-h-64 w-[90%] max-w-80 px-6 rounded-[15px] shadow-[inset_0px_4px_30px_-7px_rgba(26,229,161,1.00)] border border-[#1ae5a1]  py-8 transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-50"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex justify-center items-center">
          <p className="text-white text-xl font-bold">Select Your Currency</p>
          <span
            onClick={() => setIsOpen(false)}
            className="absolute right-0 top-[-6px]"
          >
            <CloseModal />
          </span>
        </div>
        <div className="text-justify mt-7 space-y-4 w-full">
          <DropDownMenu
            title="Currency"
            options={["TON", "USDT", "NOT", "DOGS", "HMSTR", "CATI"]}
            disableList={["USDT", "NOT", "DOGS", "HMSTR", "CATI"]}
            onSelect={(value) => {
              setSelectedCoin(value);
              getCoinAmount(value);
            }}
          />
          <div className="flex items-center gap-2">
            Amount: {coinAmount}
            {icons[selectedCoin] && (
              <img src={icons[selectedCoin]} alt="" width={16} height={16} />
            )}
          </div>
          <div className="flex justify-center">
            <button
              className="relative w-[130px] h-9"
              disabled={coinAmount === undefined}
              onClick={async() => {
                setIsOpen(false);
                onConfirm({ coinAmount, amount, selectedCoin });
    
                try{
                  console.log('coinAmount' , coinAmount);
                  console.log('amount' , amount)
                if(!wallet?.account?.address){
                  return Swal.fire({
                    icon:'error',
                    title : 'Please Connect Your Wallet'
                  })
                }
                
                const response1 = await axios.post(Api[6].PostBuyDts,{
                    currency:Currency,
                    dts_amount : amount
                },{
                    headers: {
                      Authorization: `token ${token}`,
                    },
                  });
                 const newid =response1.data.id
                const myTransaction = {
                    validUntil: Math.floor(Date.now() / 1000) + 120, // 120 sec
                    messages: [
                      {
                        address: OwnerAddress,
                        amount: coinAmount*1000000000,
                      }
                    ]
                  }
                const validate = await tonConnectUI.sendTransaction(myTransaction);
                const bocCellBytes = await TonWeb.boc.Cell.oneFromBoc(TonWeb.utils.base64ToBytes(validate.boc)).hash();
                const hashBase64 = TonWeb.utils.bytesToBase64(bocCellBytes);
            
                const response = await axios.post(Api[6].PostValidation,{
                    id:newid,
                    transaction_hash : hashBase64
                },{
                    headers: {
                      Authorization: `token ${token}`,
                    },
                  });
                  console.log(response)
                 if(response.status){
                  Swal.fire({
                    icon:'success',
                    title : 'Transaction Successful'
                  })
                 }
              }catch(err){
                Swal.fire({
                  icon : 'error',
                  title : 'Error',
                  text : err.response.data.error
                })
                console.log(err)
              }}
            }
            >
              <span className="relative z-10">Confirm</span>
              <img
                src={buttonImage}
                alt=""
                className="w-full h-full absolute left-0 top-0 object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
