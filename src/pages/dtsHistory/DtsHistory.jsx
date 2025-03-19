import { useEffect } from "react";
import Bottonlink from "../../components/global/BottonLink/bottonlink";
import Navbar from "../../components/global/Navbar/navbar";
import GameLayout2 from "../../components/layout/GameLayout/gameLayoutSection2/GameLayout2";
import useTokenStore from "../../store/token";
import useUpgradeData from "../../store/updateData";
import ConnectWalletButton from "../Wallet/components/ConnectWallet";
import BuyDtsHistory from "./components/buyDtsHistory";
import BackButton from "../../components/common/shared/BackButton";

export default function DtsHistory(){
    const {token}=useTokenStore()
    const {toggleUpgrade}=useUpgradeData()
    // useEffect(()=>{
        // if(!token)toggleUpgrade(prv => prv ? false : true)
    // },[token])
    return(
        <div>
            <Navbar />
            <div className="mx-4 my-4">
                <BackButton title={'Back To Dice'}/>
            </div>
            <div>
                <div className="my-6 px-4">
                    <ConnectWalletButton />
                </div>
                <GameLayout2 />
                <div className="px-6 my-3 mb-28">
                    <BuyDtsHistory />
                </div>
            </div>
            <Bottonlink />
        </div>
    )
}