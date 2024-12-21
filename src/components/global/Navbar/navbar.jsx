import './navbar.css'
import Logo from '../../../asset/img/NavbarImg/LOGO.png'
import Pic from '../../../asset/img/NavbarImg/PIC.png'
import Notification from '../../../asset/img/NavbarImg/NotifactionIcon.png';
import DiceIcon from '../../../asset/img/NavbarImg/DiceIcon.png'
import MoneyBagIcon from '../../../asset/img/NavbarImg/moneyBag.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar(){
    const [CheckNotification , setCheckNotification]=useState(true);
    const NotificationCheckHandler =()=>{
        setCheckNotification(false);
        console.log(CheckNotification);
    }
    return(
        <div>
            <div className='flex items-center justify-between mx-3'>
                <img alt='' className='w-12 h-12' src={Logo}/>
                <div className='navbar-User-backgroundImage'>
                    <img src={Pic} alt='' className='navbar-User-Image'/>
                </div>
                <Link className='relative' to={'/notification'}>
                    <div onClick={NotificationCheckHandler}>
                        <img alt='' className='mt-8 w-4 h-4' src={Notification}/>
                        {
                            CheckNotification? 
                            <span className= 'navbar-Notification-boxshadow w-[5px] h-[5px] bg-[#1ae5a1] rounded right-0 top-7 absolute shadow-[0_35px_60px_-15px_#1ae5a1]'></span>
                            :
                            <div></div>
                        }
                    </div>
                </Link>
            </div>
            <div className='navbar-botton-section'>
                <div className='text-center '>
                    <div><p className='text-white text-[9px] font-normal'>18 OUT OF 21 <span className='text-[#00efff]'>DTS</span></p></div>
                    <div className='Navbar-left-polygon'>
                        <p className='text-white text-[12px] pt-1 font-semibold'>3 <span className='text-[#00efff]'>DICES</span> </p>
                        <span className='Navbar-left-polygon-Icon'><img alt='' src={DiceIcon}/></span>
                    </div>
                </div>
                <div className='text-center'>
                    <div><p className='text-white text-[10px] font-medium mt-4'>Diyartt-2000</p></div>
                    <div><p className=' mt-4 text-center text-white text-[12px] font-light'>Level 1</p></div>
                </div>
                <div className='text-center'>
                    <div><p className='text-white text-[9px] font-normal'>CASH <span className='text-[#00efff]'>BALANCE</span></p></div>
                    <div className='Navbar-right-polygon'>
                        <p className='text-white text-[12px] mt-[1px] font-semibold'>2000 <span className='text-[#00efff] font-semibold'>USD</span></p>
                        <span className='Navbar-right-polygon-Icon'><img alt='' src={MoneyBagIcon}/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}