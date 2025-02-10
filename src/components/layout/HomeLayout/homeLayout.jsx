import './homeLayout.css'
import img from '../../../asset/img/NavbarImg/DTScoin.png'
import HomeProgress from './components/homeProgress'
import DiceSelected from './components/diceselect'
import CrapsGame from './components/rolldice'
import { useEffect, useState } from 'react'
import AddBtnIcon1 from '../../icons/addbtnicon1'
import GameBtnIcon from '../../icons/gamebtnicon'
import RullBtnIcon from '../../icons/rullbtnicon'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Api } from '../../../api/apiUrl'
import Swal from 'sweetalert2'
import useUserStore from '../../../store/user'
import useTokenStore from '../../../store/token'
export default function HomeLayout(){
    const {token } = useTokenStore();
    const { user } = useUserStore();
    const [numbers , setnumbers]=useState({
        number1 : 2,
        number2: 6,
        result : true
    })
    const [DiceNumber , setDiceNumber]=useState({
        dice1 : 1,
        dice2 : 1
    });

    const [Loading , setLoading]=useState(false);
    const [BtnDisabled , setBtnDisabled]=useState(false)
    const RollHandler =async()=>{
        try{
            console.log(DiceNumber)
            setBtnDisabled(true)
            setLoading(true)
            const response = await axios.post(Api[3].PostDiceNumber , DiceNumber , {
                headers :{
                    Authorization: `token ${token}`
                }
            } )
            setnumbers({
                number1 :response.data.dice1,
                number2 : response.data.dice2
            })
            setTimeout(() => {
                setBtnDisabled(false)
                setLoading(false)
                if(response.data.is_win){
                    Swal.fire({
                        icon:"success",
                        text : "Win"
                    })
                }
            }, 4000);

            console.log(response)
        }catch(err){
            console.log(err)
            setLoading(false)
            setBtnDisabled(false)
        }
    }

    return(
        <div className="HomeLayout-container">
            <div className='flex justify-center items-center mr-3 pt-16'>
                <p className='flex items-center'><span><img className='w-[60px] h-[60px]' src={img} alt=''/></span>
                    <span>
                        <span className='text-white text-[32px] font-bold'>{user.inactive_dots_balance}</span>
                        {/* <span className='text-white text-2xl font-normal'>25</span> */}
                    </span>
                    <span className='text-[32px] font-bold text-[#00ffa9] ml-1'>DTS</span>
                </p>
            </div>
            <div className='flex justify-evenly px-6 mt-8'>
                <div>
                    <HomeProgress />
                </div>
                <div>
                    <DiceSelected DiceNumber={DiceNumber} setDiceNumber={setDiceNumber}/>
                </div>
            </div>
            <div className='flex justify-around items-center mt-10'>
                <div className=''>
                    <CrapsGame targetNumber={numbers.number1} rolling={Loading}/>
                </div>
                <div className=''>
                    <CrapsGame targetNumber={numbers.number2} rolling={Loading}/>
                </div>
            </div>
            <div className='flex mt-4'>
                <div className='flex justify-center items-center w-full h-[130px]'>
                    <button onClick={RollHandler} disabled={BtnDisabled} className='flex justify-between items-center h-[49px] w-[100px] px-[17px] py-2.5 bg-black/50 rounded-[117px] shadow-[0px_0px_8px_0px_rgba(59,255,255,1.00)] border border-[#3bffff]'><span><RullBtnIcon /></span><span className='text-[#3bffff] text-2xl font-medium'>Roll</span></button>
                </div>
                <div className='w-11 absolute right-[6px] text-center'>
                    <div className=''>
                        <Link to={'/dice-detail'}><button className='flex justify-center items-center w-11 h-11 rounded-[30px] shadow-[0px_0px_8px_0px_rgba(0,240,255,1.00)] border border-[#3bffff]'><AddBtnIcon1 /></button></Link>
                        <p className='text-neutral-50 text-xs font-medium my-2'>Earn DTS</p>
                    </div>
                    <div className=''>
                        <Link to={'/games'}><button className='flex justify-center items-center w-11 h-11 rounded-[30px] shadow-[0px_0px_8px_0px_rgba(0,240,255,1.00)] border border-[#3bffff]'><GameBtnIcon /></button></Link>
                        <p className='text-white text-xs font-medium my-2'>Play Now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}