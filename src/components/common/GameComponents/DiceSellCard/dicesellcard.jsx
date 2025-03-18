import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Api } from "../../../../api/apiUrl";
import discount from "../../../../asset/img/GameImg/layout2/discount.svg";
import useTokenStore from "../../../../store/token";
import useUpgradeData from "../../../../store/updateData";
import { Modal, OwnerAddress } from "../../../layout/GameLayout/gameLayoutSection2/GameLayout2";
import { useTonConnectUI } from "@tonconnect/ui-react";
import "./dicesellcard.css";

export default function Dicesellcard({
  Title,
  Img,
  Color,
  id,
  DTS,
  Price,
  className,
}) {
  const [tonConnectUI] = useTonConnectUI();
  const TonWeb = new window.TonWeb(new window.TonWeb.HttpProvider("https://toncenter.com/api/v2/jsonRPC"));
  const { token } = useTokenStore();
  const { toggleUpgrade } = useUpgradeData();
  const [disabled, setdisabled] = useState(false);
  const [Colors, setColors] = useState({
    colorsp: "",
    BgColor: "",
  });
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);

  const ColorsP = {
    Green: "#1AE5A1",
    Red: "#EC3C4D",
    Gold: "#F47600",
    Yellow: "#CAFD7B",
  };
  const BgColors = {
    Green: "#1AE5A117",
    Red: "#FF2E6017",
    Gold: "#FD8A0217",
    Yellow: "#CAFD7B17",
  };

  const ColorHandller = () => {
    if (Color === "Green") {
      setColors({
        colorsp: ColorsP.Green,
        BgColor: BgColors.Green,
      });
    } else if (Color === "Red") {
      setColors({
        colorsp: ColorsP.Red,
        BgColor: BgColors.Red,
      });
    } else if (Color === "Gold") {
      setColors({
        colorsp: ColorsP.Gold,
        BgColor: BgColors.Gold,
      });
    } else if (Color === "Yellow") {
      setColors({
        colorsp: ColorsP.Yellow,
        BgColor: BgColors.Yellow,
      });
    }
  };

  const buyCombo =async (options) => {
    try{
    const response1 = await axios.post(Api[6].PostBuyDts,{
      currency:options.selectedCoin.toLocaleLowerCase(),
      dts_amount :DTS,
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
          amount: options*1000000000,
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
  }catch(err){
    console.log(err)
  }
  };

  useEffect(() => {
    ColorHandller();
  }, [Color]);

  return (
    <div
      style={{
        color: Colors.colorsp,
        boxShadow: `inset 0px 0px 18px 1px ${Colors.colorsp}`,
        borderColor: Colors.colorsp,
      }}
      className="Dicesellcard-container"
    >
      <span className="absolute -top-2 -right-2 z-20">
        <img src={discount} alt="" className="relative z-0" />
        <span className="absolute left-[2.6rem] top-[1.8rem] -translate-x-1/2 -translate-y-1/2 rotate-45 z-10 text-white text-sm">
          40%
        </span>
      </span>
      <span
        className="absolute w-full h-full z-20"
        onClick={() => setIsOpenConfirm(true)}
      ></span>
      <div className="mt-8 h-20">
        <img
          className={` ${className} mx-auto absolute z-10`}
          src={Img}
          alt=""
        />
      </div>
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.19)",
          borderColor: Colors.colorsp,
        }}
        className="absolute top-[90px] h-8 w-full flex justify-center items-center border-t border-b border-dashed"
      >
        <p
          style={{
            textShadow: `0px 0px 2px ${Colors.colorsp} , 0px 0px 2px ${Colors.colorsp} , 0px 0px 2px ${Colors.colorsp} ,0px 0px 2px ${Colors.colorsp}`,
          }}
          className="text-white font-semibold"
        >
          {Title}
        </p>
      </div>
      <div className="mt-8 mb-9 text-center text-sm">
        <p className="text-[17px] font-bold">
          <span className="text-white">include {DTS} </span>
          <span className={`text-[${Colors.colorsp}]`}>DTS</span>
        </p>
      </div>
      <div
        style={{ backgroundColor: `${Colors.BgColor}` }}
        className="mt-[20px] w-full h-7 rounded-b-[11px]"
      >
        <p className="flex justify-center items-center">
          <span className="mr-[6px]">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.93848 4.88752L2.62381 11.221C2.69417 11.8715 3.0196 12.4743 3.53703 12.9127C4.05446 13.3511 4.72706 13.5938 5.42448 13.5938H10.5758C11.2732 13.5938 11.9458 13.3511 12.4633 12.9127C12.9807 12.4743 13.3061 11.8715 13.3765 11.221L14.0618 4.88721L1.93848 4.88752Z"
                stroke={Colors.colorsp}
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.21094 4.8875V4.0075C5.21094 3.31413 5.50474 2.64915 6.02772 2.15886C6.5507 1.66857 7.26 1.39313 7.9996 1.39313C8.7392 1.39313 9.44851 1.66857 9.97149 2.15886C10.4945 2.64915 10.7883 3.31413 10.7883 4.0075V4.88719M6.79927 10.7481C7.06594 10.9581 7.3536 11.0544 7.99994 11.0544H8.3276C8.58381 11.054 8.82936 10.9582 9.0103 10.7882C9.19124 10.6181 9.29278 10.3877 9.2926 10.1475C9.29278 9.90731 9.19124 9.67688 9.0103 9.50683C8.82936 9.33679 8.58381 9.24104 8.3276 9.24063H7.67227C7.41607 9.24021 7.17052 9.14446 6.98958 8.97442C6.80863 8.80437 6.70709 8.57394 6.70727 8.33375C6.70718 8.09362 6.80876 7.86326 6.98969 7.69329C7.17063 7.52331 7.41613 7.4276 7.67227 7.42719H7.99994C8.6466 7.42719 8.93427 7.52313 9.2006 7.73313"
                stroke={Colors.colorsp}
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="text-white mr-1">{Price}</span>
          <span className={`text-[${Colors.colorsp}] font-bold`}>USD</span>
        </p>
      </div>
      <Modal
        isOpen={isOpenConfirm}
        onConfirm={(options) => {
          buyCombo(options);
        }}
        setIsOpen={setIsOpenConfirm}
        amount={DTS}
      />
    </div>
  );
}
