import { useEffect } from 'react'
import Bottonlink from '../../components/global/BottonLink/bottonlink'
import Navbar from '../../components/global/Navbar/navbar'
import GameLayout1 from '../../components/layout/GameLayout/gameLayoutSection1/GameLayout'
import GameLayout2 from '../../components/layout/GameLayout/gameLayoutSection2/GameLayout2'
import './dicePage.css'
import useTokenStore from '../../store/token'
import useUpgradeData from '../../store/updateData'
export default function DicePage(){
    const {token}=useTokenStore()
    const {toggleUpgrade}=useUpgradeData()
    // useEffect(()=>{
        // if(!token)toggleUpgrade(prv => prv ? false : true)
    // },[token])
    return(
        <div className='pb-28'>
            <div>
                <Navbar />
            </div>
            <div>
                <GameLayout1 />
            </div>
            <div>
                {/* <GameLayout2 /> */}
            </div>
            <div>
                <Bottonlink />
            </div>
        </div>
    )
}