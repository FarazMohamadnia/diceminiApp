import BackButton from "../../../../components/common/shared/BackButton";
import Button from "../../../../components/common/shared/Button";
import Bottonlink from "../../../../components/global/BottonLink/bottonlink";
import Navbar from "../../../../components/global/Navbar/navbar";
import DiceGroup from "../../../../components/icons/DiceGroup";
import SellIcon from "../../../../components/icons/sell";
import SellIcon1 from "../../../../components/icons/sellIcon1";
import WalletIcon2 from "../../../../components/icons/walletIcon2";
import Progress from "./components/BaseProgressBar";
import SellHistory from "./components/SellHistory";
import "./diceSell.css";
export default function Dicesellpages() {
  return (
    <div>
      <Navbar />
      <main className="px-4">
        <div className="flex items-center mt-6">
          <div>
            <BackButton title={"Back to Dice"} />
          </div>
          <div className="ml-3 mt-3">
            <Button title={"Sell your Dice"} icon={<SellIcon />} />
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center w-3/5 h-[150px] mt-7 mx-auto mb-3">
            <div className="w-1/2">
              <DiceGroup />
            </div>
            <div className="w-1/2 text-center">
              <p className="text-[#F42500] text-[10px]">
                Available Dice for sell:
              </p>
              <p className="mt-3">
                <span className="text-white mr-2">4</span>
                <span className="text-[#1ae5a1]">DICES</span>
              </p>
              <div className="flex justify-center text-[7px] mt-3 text-white">
                <p>CURRENT DICE PRIZE :</p>
                <p>0.6 USD</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[]">
            <Progress />
            <div className="flex justify-between w-[230px] text-gray-500">
              <span>0</span>
              <span>2</span>
              <span>4</span>
            </div>
          </div>
          <div className="flex text-white justify-center items-center text-[12px]">
            <div className="flex items-center justify-center">
              <WalletIcon2 />
              <p className="ml-1 mr-4">you will receive </p>
            </div>
            <p className="">
              0.6 <span className="text-[#1AE5A1] text-[13px]">USD</span>
            </p>
          </div>
          <button className="diceSell-Btn-Bgcolor mt-4 flex items-center justify-center w-40 h-[43px] bg-white/0 rounded-[15px] border border-[#3bffff] mx-auto">
            <SellIcon1 /> <span className=" text-[#3bffff] ml-2">Sell</span>
          </button>

          <div className="mt-8">
            <SellHistory />
          </div>
        </div>
        <div></div>
      </main>

      <Bottonlink />
    </div>
  );
}
