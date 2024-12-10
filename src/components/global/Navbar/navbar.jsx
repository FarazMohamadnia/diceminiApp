import './navbar.css'
import Logo from '../../../asset/img/NavbarImg/LOGO.png'
import Pic from '../../../asset/img/NavbarImg/PIC.png'
import Notification from '../../../asset/img/NavbarImg/NotifactionIcon.png';
import DiceIcon from '../../../asset/img/NavbarImg/DiceIcon.png'
import MoneyBagIcon from '../../../asset/img/NavbarImg/moneyBag.png'
export default function Navbar(){
    return(
        <div>
            <div className='flex items-center justify-between mx-3'>
                <img className='w-12 h-12' src={Logo}/>
                <div className='navbar-User-backgroundImage'>
                    <img src={Pic} className='navbar-User-Image'/>
                </div>
                <div>
                    <img className='mt-8 w-4 h-4' src={Notification}/>
                </div>
            </div>
            <div className='navbar-botton-section'>
                <div className='text-center '>
                    <div><p className='text-white text-[9px] font-normal'>18 OUT OF 21 <span className='text-[#00efff]'>DTS</span></p></div>
                    <div className='Navbar-left-polygon'>
                        <p className='text-white text-[12px] pt-1 font-semibold'>3 <span className='text-[#00efff]'>DICES</span> </p>
                        <span className='Navbar-left-polygon-Icon'><img src={DiceIcon}/></span>
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
                        <span className='Navbar-right-polygon-Icon'><img src={MoneyBagIcon}/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}