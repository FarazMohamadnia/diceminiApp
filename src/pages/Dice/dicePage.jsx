import Bottonlink from '../../components/global/BottonLink/bottonlink'
import Navbar from '../../components/global/Navbar/navbar'
import DiceLayout1 from '../../components/layout/DiceLayout/DiceLayoutSection1/diceLayoutPage'
import DiceLayout2 from '../../components/layout/DiceLayout/DiceLayoutSection2/diceLayoutPage2'
import './dicePage.css'
export default function DicePage(){
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <DiceLayout1 />
            </div>
            <div>
                <DiceLayout2 />
            </div>
            <div>
                <Bottonlink />
            </div>
        </div>
    )
}