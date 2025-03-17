import './GameLayout.css'
import React, {useState} from "react";
import {Link} from 'react-router-dom'
import OpenWalletIcon from '../../../icons/change/game/walletIcon'
import SellIcon from '../../../icons/change/game/sellIcon'
import AddIcon from '../../../icons/change/game/addIcon'
import DisableIcon from '../../../icons/disableBtnIcon'
import DisableBadge from '../../../icons/disablebadge'
import InfoIcon from '../../../icons/change/game/info'
import BuyCrypto from '../../../icons/change/game/buyCrypto'
import ModalExample from '../../../common/GameComponents/modal/modalexample'
import CircularDots from '../../../common/GameComponents/CircleProgressBar/newprogress/newprogressbar';
import useUserStore from '../../../../store/user';

const modalfakedata = [
    {
        title: ' What is DTS? ',
        text: ['In the United playgrounds of Dice Maniacs, DTS is the official currency! 💰🎲 The name DTS comes from the dots on a die, representing every roll, every move, and every chance taken in this world of dice games. Whether you’re playing, predicting, or strategizing—DTS powers the UPD experience! 🚀🔥']
    },
    {
        title: 'What is Dice Maniacs? ',
        text: ['Dice Maniacs is a vast land where all dice games come to life! 🎲✨ It’s a world of endless rolls, strategies, and thrilling moments, where every citizen has a chance to play, predict, and win. Whether you’re here to test your luck, master the odds, or just enjoy the excitement—Dice Maniacs is where the real dice action happens! ']
    }
]
export default function GameLayout1() {
    const { user } = useUserStore();
    const [IsModalOpen, setIsModalOpen] = useState(false);
    const [IsModalOpen2, setIsModalOpen2] = useState(false);
    return (
        <div>
            <div className='flex items-center justify-center mt-7'>
                <Link className='GameLayout1-Btn-style ' to={'/Wallet'}>
                    <button className='text-base font-bold flex items-center'><span
                        className='mr-2'><OpenWalletIcon/></span>OPEN YOUR WALLET
                    </button>
                </Link>
            </div>
            <div className='GameLayout1-section2-bodyStyle'>
                <div className='w-1/2 flex flex-col justify-center items-center relative mt-5'>
                    <div className='GameLayout1-section2-img-style'></div>
                    <p className='text-white text-2xl font-bold mt-3 mb-5'>
                        {user.inactive_dots_balance}<span className='text-[#00ffa9] ml-[2px]'>DTS</span>
                    </p>
                </div>
                <div className='w-1/2 text-center mt-1'>
                    <div>
                        <button onClick={() => setIsModalOpen(true)} className='GameLayout1-section2-BTN'>
                            <span
                            className='w-[25%]'><InfoIcon/>
                            </span>
                            <span className='w-[75%]'>WHAT IS DTS ?</span>
                        </button>
                        <ModalExample data={modalfakedata[0]} isOpen={IsModalOpen}
                        onClose={() => setIsModalOpen(false)}/>
                    </div>   
                    <Link to={'/dtshistory'}>
                        <button className='GameLayout1-section2-BTN'><span className='w-[25%]'><BuyCrypto /></span><span className='w-[75%]'>BUY DTS</span></button>
                    </Link> 
                    <Link to={'/dice-detail'}>
                        <button className='GameLayout1-section2-BTN'><span className='w-[25%]'><AddIcon /></span><span className='w-[75%]'>EARN DTS</span></button>
                    </Link>
                </div>
            </div>
            <div className='GameLayout1-section2-bodyStyle'>
                <div className='w-1/2 flex flex-col justify-center items-center relative mt-5'>
                    <div>
                        <CircularDots/>
                        <div className='relative'>
                            <p className='text-white text-[14px] top-[-20px] absolute left-[16px]'>0</p>
                            <p className='text-white text-[14px] top-[-19px] absolute right-[17px]'>21</p>
                        </div>
                    </div>
                    <div className='relative top-[-13px] text-center mr-1'>
                        <p className='text-white'>{user.dice_balance} <span className='text-[#1AE5A1]'>DICES</span></p>
                        <p className='text-white text-[9px]'>7 out of 21<span className='text-[#1AE5A1]'>DTS</span></p>
                    </div>
                </div>
                <div className='w-1/2 text-center mt-1'>
                    <div>
                        <button onClick={() => setIsModalOpen2(true)} className='GameLayout1-section2-BTN'><span className='w-[25%]'><InfoIcon /></span><span className='w-[75%]'>WHAT IS DICE ?</span></button>
                        <ModalExample data={modalfakedata[1]} isOpen={IsModalOpen2} onClose={() => setIsModalOpen2(false)}/>
                    </div>                    
                    <Link to={'/wallet/sell'}>
                        <button className='GameLayout1-section2-BTN'><span className='w-[25%]'><SellIcon /></span><span className='w-[75%]'>SELL YOUR DICE</span></button>
                    </Link>
                    <Link>
                        <button disabled className='GameLayout1-section3-BTN'><span
                            className='w-[25%]'><DisableIcon/></span><span
                            className='w-[75%] text-[16px]'>MARKET PLACE</span>
                            <span className='absolute top-0 right-0'>
                            <DisableBadge/>
                            <span
                                className='absolute w-[40px] text-white text-[6px] top-[9px] right-[-5px] transform rotate-[36.3deg] '>
                                Coming Soon
                            </span>
                        </span></button>
                    </Link>
                </div>
            </div>
        </div>

    )
}