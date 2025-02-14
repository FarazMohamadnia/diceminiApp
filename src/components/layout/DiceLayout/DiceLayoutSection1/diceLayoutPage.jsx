import './diceLayoutPage.css';
import CircleImageComponent from '../../../common/DiceComponents/CircleImage/circleimage';
import borderImg3 from '../../../../asset/img/DiceImg/BorderLeft.png';
import img from '../../../../asset/img/DiceImg/testImage.png'
import img2 from '../../../../asset/img/DiceImg/Icon2.png'
import { Link } from 'react-router-dom';
import BronzModal from '../../../icons/change/Dice/DiceModal/bronzModal';
import SilverModal from '../../../icons/change/Dice/DiceModal/silverModal';
import GoldModal1 from '../../../icons/change/Dice/DiceModal/GoldModal';
import ArrowRightIcon from '../../../icons/change/Dice/DiceModal/arrowRight';
import GroupIcon from '../../../icons/change/Dice/DiceModal/groupeIcon';
import { Api } from '../../../../api/apiUrl';
import useTokenStore from '../../../../store/token';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function DiceLayout1(){
    const {token}= useTokenStore()
    const [data , setdata]=useState([])
    const [rank , setrank]=useState(0);
    const luckyBoardHandler = async()=>{
        try{
            const response = await axios.get(Api[3].GamePage , 
              {
                headers:{
                   "Authorization" : `token ${token}`
                }
              })
              setdata([
                {
                    BgImage :response.data.lucky_board.player.picture ,
                    scale : 1,
                    borderImg : borderImg3
                },
                {
                    BgImage : response.data.lucky_board.rank2.picture,
                    scale : 0.9 ,
                    borderImg : borderImg3 ,
                },
                {
                    BgImage : response.data.lucky_board.rank1.picture,
                    scale : 1,
                    borderImg : borderImg3
                },
                {
                    BgImage : response.data.lucky_board.rank3.picture,
                    scale : 0.8,
                    borderImg : borderImg3
                }
              ])
              setrank(response.data.lucky_board.player.rank)


        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        luckyBoardHandler()
    },[])
    return(
        <div className='DicelayoutPage-container'>
            <div className='DicelayoutPage-Body'>
                <div className='flex justify-center items-center'>
                    <span className='mr-3'><GroupIcon /></span><p className='font-bold'>LUCKY BOARD</p>
                </div>
                <div className='h-[100px] flex items-center justify-between'>
                    <div className='w-[90px] h-[60px] border-r border-[#1ae5a1] flex justify-center items-center'>
                        <div className='relative'><CircleImageComponent {...data[0]}/><span className='absolute bottom-[-8px] z-10 right-[17px]'>#{rank}</span></div>
                    </div>
                    <div className='flex justify-between w-[66%]'>
                        <div className='relative'>
                            <CircleImageComponent {...data[1]}/>
                            <span className='absolute top-[44px] left-[22px] z-10'><SilverModal /></span>
                        </div>
                        <div className='relative'>
                            <CircleImageComponent {...data[2]}/>
                            <span className='absolute top-[50px] left-[22px] z-10'><GoldModal1 /></span>
                        </div>
                        <div className='relative'>
                            <CircleImageComponent {...data[3]} />
                            <span className='absolute top-[42px] left-[22px] z-10' ><BronzModal /></span>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={'/games/leaderboard'}><p className='flex justify-center items-center text-neutral-50 text-[13px] font-medium'>View luckyboard <span className='mt-[2px] ml-1'><ArrowRightIcon /></span></p></Link>
                </div>
            </div>
        </div>
    )
}