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
      <main className="px-4 pb-28">
        <div className="flex items-center mt-6">
          <div>
            <BackButton title={"Back to Dice"} />
          </div>
        </div>
        <div className="flex justify-center items-center font-bold">
            <Button title={"Sell Your Dice"} icon={<SellIcon />} />
        </div>
        <div>
          <div className="flex justify-center items-center min-w-[250px] w-[60%]  h-[150px] mt-7 mx-auto mb-3">
            <div className="w-1/2">
              <DiceGroup />
            </div>
            <div className="w-1/2 text-center">
              <p className="text-[#F42500] text-[14px] italic font-bold">
                Available Dice for sell:
              </p>
              <p className="mt-3 font-bold">
                <span className="text-white mr-2">4</span>
                <span className="text-[#1ae5a1]">DICES</span>
              </p>
              <div className="flex justify-center text-[11px] mt-3 text-white">
                <p className="mr-3">CURRENT DICE PRIZE :</p>
                <p>0.6 <span className="text-[#1ae5a1]">USD</span></p>
              </div>
            </div>
          </div>
          <div>
            <Progress />
            <div className="flex justify-between items-center text-white mx-2">
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
          </div>
          <div className="flex text-white justify-center items-center text-[18px] my-2">
            <div className="flex items-center justify-center">
              <WalletIcon2 />
              <p className="ml-1 mr-4">you will receive </p>
            </div>
            <p className="">
              0.6 <span className="text-[#1AE5A1] text-[18px] font-bold">USD</span>
            </p>
          </div>
          <button className="diceSell-Btn-Bgcolor mt-6 flex items-center justify-center w-40 h-[43px] bg-white/0 rounded-[15px] border border-[#3bffff] mx-auto">
            <SellIcon1 /> <span className=" text-[#3bffff] ml-2">SELL</span>
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
