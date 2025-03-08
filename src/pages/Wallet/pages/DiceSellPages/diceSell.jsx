import axios from "axios";
import BackButton from "../../../../components/common/shared/BackButton";
import Button from "../../../../components/common/shared/Button";
import Bottonlink from "../../../../components/global/BottonLink/bottonlink";
import Navbar from "../../../../components/global/Navbar/navbar";
import DiceGroup from "../../../../components/icons/DiceGroup";
import SellIcon from "../../../../components/icons/sell";
import SellIcon1 from "../../../../components/icons/sellIcon1";
import WalletIcon2 from "../../../../components/icons/walletIcon2";
import useUserStore from "../../../../store/user";
import SellHistory from "./components/SellHistory";
import "./diceSell.css";
import { Api } from "../../../../api/apiUrl";
import useTokenStore from "../../../../store/token";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useUpgradeData from "../../../../store/updateData";
export default function Dicesellpages() {
  const {toggleUpgrade } = useUpgradeData();
  const { token } = useTokenStore()
  const { user }=useUserStore();
  const [dice , setdice]=useState(0)
  const [dicePrice , setdicePrice]=useState(0)

  const dicePricehandler = async()=>{
    try{
      const response = await axios.get(Api[3].diceTon ,  {
        headers:{
           "Authorization" : `token ${token}`
        }
      })
      setdicePrice(response.data.dice_to_ton)
    }catch(err){
      console.log(err)
    }
  }

  const inputhandler = (e)=>{
    if (e.target.value.includes('-') || e.target.value.includes('.')) {
      setdice(0)
    }else{
      setdice(e.target.value)
    }
  }

  const sendTransaction = async()=>{
    try{
      setdice(0)
      const response = await axios.post(Api[3].PostSellDice , {
        dice_amount: dice
      } ,{
        headers:{
           "Authorization" : `token ${token}`
        }
      })
      Swal.fire({
        icon:'success',
        title:'Dice sold successfully'
      })
      toggleUpgrade(prv => prv ? false : true)
      console.log(response)
    }catch(err){
      setdice(0)
      Swal.fire({
        icon:'error',
        title: err.response.data.error
      })
    }
  }

  useEffect(()=>{
    dicePricehandler()
  },[])
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
                <span className="text-white mr-2">{user.dice_balance}</span>
                <span className="text-[#1ae5a1]">DICES</span>
              </p>
              <div className="flex justify-center text-[11px] mt-3 text-white">
                <p className="mr-3">CURRENT DICE PRIZE :</p>
                <p>{dicePrice ? dicePrice.toFixed(2) : 0}<span className="text-[#1ae5a1]">TON</span></p>
              </div>
            </div>
          </div>
          <div className="w-full text-center">
              <div className="relative w-36 mx-auto">
                <span className='text-[#3BFFFF] absolute z-10 top-[6px] left-2'>DICE : </span>
                <input onChange={inputhandler} value={dice} type="number" placeholder="12 Dice" className="w-36 bg-[#1ae5a100] h-9 rounded-xl ps-11 mx-auto border border-[#1AE5A1] backdrop-blur-[108.30px] shadow-[inset_0px_4px_26.600000381469727px_-7px_rgba(26, 229, 161, 1)] text-[white] "/>
              </div>
          </div>
          <div className="flex text-white justify-center items-center text-[18px] my-2">
            <div className="flex items-center justify-center">
              <WalletIcon2 />
              <p className="ml-1 mr-4">you will receive </p>
            </div>
            <p className="">
              {(dice*dicePrice).toFixed(3)} <span className="text-[#1AE5A1] text-[18px] font-bold">TON</span>
            </p>
          </div>
          <button onClick={sendTransaction} className="diceSell-Btn-Bgcolor mt-6 flex items-center justify-center w-40 h-[43px] bg-white/0 rounded-[15px] border border-[#3bffff] mx-auto">
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
