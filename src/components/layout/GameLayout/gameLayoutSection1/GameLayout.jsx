import './GameLayout.css'
import CircularProgressBar from '../../../common/GameComponents/CircleProgressBar/progressbar'
import { Link } from 'react-router-dom'
import OpenWalletIcon from '../../../icons/change/game/walletIcon'
import SellIcon from '../../../icons/change/game/sellIcon'
import AddIcon from '../../../icons/change/game/addIcon'
import DisableIcon from '../../../icons/disableBtnIcon'
import DisableBadge from '../../../icons/disablebadge'

export default function GameLayout1(){
    return(
        <div>
            <div className='flex items-center justify-center mt-7'>
                <Link className='GameLayout1-Btn-style ' to={'/Wallet'}><button className='text-base font-bold flex items-center'><span className='mr-2'><OpenWalletIcon/></span>OPEN YOUR WALLET</button></Link>
            </div>
            <div className='GameLayout1-section2-bodyStyle'>
                <div className='w-1/2 flex flex-col justify-center items-center relative mt-5'>
                    <div>
                        <CircularProgressBar percentage={90}/>
                        <div className='relative'>
                            <p className='text-white text-[10px] top-[-19px] absolute left-[5px]'>0</p>
                            <p className='text-white text-[10px] top-[-19px] absolute right-1'>21</p>
                        </div>
                    </div>
                    <div className='relative top-[-13px] text-center mr-1'>
                        <p className='text-white'>4 <span className='text-[#1AE5A1]'>DICES</span></p>
                        <p className='text-white text-[9px]'>7 out of 21<span className='text-[#1AE5A1]'>DTS</span></p>
                    </div>
                </div>
                <div className='w-1/2 text-center mt-1'>
                    <Link to={'/wallet/sell'}>
                        <button className='GameLayout1-section2-BTN'><span className='mr-3'><SellIcon /></span><span>SELL YOUR DICE</span></button>
                    </Link>
                    <Link to={'/dice-detail'}>
                        <button className='GameLayout1-section2-BTN'><span className='mr-8'><AddIcon /></span><span>EARN MORE</span></button>
                    </Link>
                    <Link>
                        <button disabled className='GameLayout1-section3-BTN'><span className='mr-8'><DisableIcon/></span><span>BUY/SWAP</span> 
                        <span className='absolute top-0 right-0'>
                            <DisableBadge />
                            <span className='absolute w-[40px] text-white text-[6px] top-[9px] right-[-5px] transform rotate-[36.3deg] '>
                                Coming Soon
                            </span>
                        </span></button>
                    </Link>
                </div>
            </div>

        </div>
        
    )
}