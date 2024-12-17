import './diceLayoutPage.css';
import Icon from '../../../../asset/img/DiceImg/Icon1.png'
import arrowIcon from '../../../../asset/img/DiceImg/ArrowRight.png'
import CircleImageComponent from '../../../common/DiceComponents/CircleImage/circleimage';
import borderImg3 from '../../../../asset/img/DiceImg/BorderLeft.png';
import img from '../../../../asset/img/DiceImg/testImage.png'
import img2 from '../../../../asset/img/DiceImg/Icon2.png'
import GoldIcon from '../../../../asset/img/DiceImg/goldModal.png';
import SilverIcon from '../../../../asset/img/DiceImg/SilverModal.png';
import BronzeImg from '../../../../asset/img/DiceImg/BronzImg.png'
import { Link } from 'react-router-dom';
const FakeData = [
    {
        BgImage :img ,
        scale : 1,
        borderImg : borderImg3
    },
    {
        BgImage : img2,
        scale : 0.8 ,
        borderImg : borderImg3 ,
    },
    {
        BgImage : img2,
        scale : 1,
        borderImg : borderImg3
    },
    {
        BgImage : img2,
        scale : 0.7,
        borderImg : borderImg3
    }
]
export default function DiceLayout1(){
    return(
        <div className='DicelayoutPage-container'>
            <div className='DicelayoutPage-Body'>
                <div className='flex justify-center items-center'>
                    <span><img src={Icon} className='mr-3' alt=''/></span><p>LUCKY BOARD</p>
                </div>
                <div className='h-[100px] flex items-center justify-between'>
                    <div className='w-[90px] h-[60px] border-r border-[#1ae5a1] flex justify-center items-center'>
                        <div className='relative'><CircleImageComponent {...FakeData[0]}/><span className='absolute bottom-[-8px] z-10 right-[17px]'>#20</span></div>
                    </div>
                    <div className='flex justify-between w-2/3'>
                        <div className='relative'>
                            <CircleImageComponent {...FakeData[1]}/>
                            <span><img className='absolute top-[44px] left-[22px] z-10' src={SilverIcon} alt=''/></span>
                        </div>
                        <div className='relative'>
                            <CircleImageComponent {...FakeData[2]}/>
                            <span><img className='absolute top-[50px] left-[22px] z-10' src={GoldIcon} alt=''/></span>
                        </div>
                        <div className='relative'>
                            <CircleImageComponent {...FakeData[3]} />
                            <span><img className='absolute top-[42px] left-[22px] z-10' src={BronzeImg} alt=''/></span>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={'/games/leaderboard'}><p className='flex justify-center items-center text-neutral-50 text-[13px] font-medium'>View luckyboard <span className='mt-[2px] ml-1'><img src={arrowIcon}/></span></p></Link>
                </div>
            </div>
        </div>
    )
}