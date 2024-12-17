import BackButton from "../../components/common/shared/BackButton";
import Button from "../../components/common/shared/Button";
import Bottonlink from "../../components/global/BottonLink/bottonlink";
import Navbar from "../../components/global/Navbar/navbar";
import Historidice from "../../components/icons/HistoriDiceIcon";
import Dicehistory from "./components/DiceHistoryTable";

export default function DiceHistoriPage(){
    return(
        <div>
            <Navbar />
            <main className="px-4 mt-3">
                <div>
                    <BackButton title={'Back To Dice'}/>
                </div>
                <div>
                    <div className="flex justify-center items-center mt-5">
                        <Button title={'Dice History'} icon={<Historidice />}/>
                    </div>
                    <div className="mt-5">
                        <Dicehistory />
                    </div>
                </div>
            </main> 
            <Bottonlink />
        </div>
    )
}