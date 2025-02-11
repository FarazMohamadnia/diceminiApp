import './navbar.css'
import Pic from '../../../asset/img/NavbarImg/PIC.png'
import Notification from '../../../asset/img/NavbarImg/NotifactionIcon.png';
import DiceIcon from '../../../asset/img/NavbarImg/DiceIcon.png'
import DTScoin from '../../../asset/img/NavbarImg/DTScoin.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import RightLine from '../../icons/change/Navbar/rightline';
import LeftLine from '../../icons/change/Navbar/leftline';
import ImgShadow from '../../icons/change/Navbar/imgshadow';
import NavbarProgressbar from '../navprogress/NavProgross';
import Logo from '../../icons/logo';
import useUserStore from '../../../store/user';
import useNotificationStore from '../../../store/notification';

export default function Navbar(){
    const { isToggled, setFalse } = useNotificationStore();
    const { user } = useUserStore();
    const NotificationCheckHandler =()=>{
        setFalse()
        console.log(isToggled);
    }
    return(
        <div>
            <div className='flex items-center justify-between mx-3 mb-3 max-w-xl pt-10'>
                <div className='w-12 h-12'>
                    <Logo />
                </div>
                <div className='navbar-User-backgroundImage'>
                    <div className='absolute'><ImgShadow /></div>
                    <img src={user.picture} alt='' className='navbar-User-Image'/>
                </div>
                <Link className='relative' to={'/notification'}>
                    <div onClick={NotificationCheckHandler}>
                        <img alt='' className='mt-8 w-4 h-4' src={Notification}/>
                        {
                            isToggled? 
                            <span className= 'navbar-Notification-boxshadow w-[5px] h-[5px] bg-[#1ae5a1] rounded right-0 top-7 absolute shadow-[0_35px_60px_-15px_#1ae5a1]'></span>
                            :
                            <div></div>
                        }
                    </div>
                </Link>
            </div>
            <div className='navbar-botton-section'>
                <div className='text-center relative'>
                    <div><p className='text-white text-[14px] font-normal'>READY TO SELL </p></div>
                    <div className='Navbar-left-polygon'>
                        <div className='absolute'>
                            <RightLine />
                        </div>
                        <p className='text-white text-[14px] font-semibold'>{user.dice_balance} <span className='text-[#00efff]'>DICES</span> </p>
                        <span className='Navbar-left-polygon-Icon'><img alt='' src={DiceIcon}/></span>
                    </div>
                    <div className='absolute left-2 w-[120px] bottom-[-19px] h-4 flex justify-center items-center'>
                        <NavbarProgressbar />
                    </div>
                </div>
                <div className='text-center'>
                    <div><p className='text-white text-[13px] font-medium mt-4'>{user.telegram_username}</p></div>
                    <div><p className=' mt-4 text-center text-white text-[12px] font-light'>Level {user.level}</p></div>
                </div>
                <div className='text-center'>
                    <div><p className='text-white text-[14px] font-normal'>READY TO PLAY</p></div>
                    <div className='Navbar-right-polygon'>
                        <div className='absolute top-[-4px]'>
                            <LeftLine />
                        </div>
                        <p className='text-white text-[14px] pt-[3px] font-semibold'>{user.inactive_dots_balance}  <span className='text-[#00efff] font-semibold'>DTS</span></p>
                        <span className='Navbar-right-polygon-Icon'><img className='Navbar-left-polygon-Icon-img' alt='' src={DTScoin}/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}