import Bottonlink from '../../components/global/BottonLink/bottonlink'
import Navbar from '../../components/global/Navbar/navbar'
import GameLayout1 from '../../components/layout/GameLayout/gameLayoutSection1/GameLayout'
import GameLayout2 from '../../components/layout/GameLayout/gameLayoutSection2/GameLayout2'
import './dicePage.css'
export default function DicePage(){
    return(
        <div className='pb-28'>
            <div>
                <Navbar />
            </div>
            <div>
                <GameLayout1 />
            </div>
            <div>
                <GameLayout2 />
            </div>
            <div>
                <Bottonlink />
            </div>
        </div>
    )
}