import Bottonlink from '../../components/global/BottonLink/bottonlink'
import Navbar from '../../components/global/Navbar/navbar'
import DiceLayout1 from '../../components/layout/DiceLayout/DiceLayoutSection1/diceLayoutPage'
import DiceLayout2 from '../../components/layout/DiceLayout/DiceLayoutSection2/diceLayoutPage2'
export default function GamePage(){
    return(
        <div>
          <Navbar />
         <div className='pb-24'>
             <DiceLayout1 />
             <DiceLayout2 />
         </div>
            <Bottonlink />
        </div>

    )
}