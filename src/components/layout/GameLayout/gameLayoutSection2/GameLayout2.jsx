import './GameLayout2.css'
import Dicesellcard from '../../../common/GameComponents/DiceSellCard/dicesellcard'
import FakeDiceImg from '../../../../asset/img/GameImg/Section2/TestDice.png'
import TwoWhiteDice from '../../../icons/change/game/twowhiteDice'
const FakeData =[
    {
        Title : 'BASIC COMBO',
        Img : FakeDiceImg,
        Color : 'Green',
        Dices : '20 + 2',
        DTS : '42',
        Price : 1.99
    },
    {
        Title : ' COMBO',
        Img : FakeDiceImg,
        Color : 'Red',
        Dices : '20 + 2',
        DTS : '42',
        Price : 1.99
    },
    {
        Title : 'BASIC COMBO',
        Img : FakeDiceImg,
        Color : 'Yellow',
        Dices : '20 + 2',
        DTS : '42',
        Price : 1.99
    },
    {
        Title : 'BASIC COMBO',
        Img : FakeDiceImg,
        Color : 'Gold',
        Dices : '20 + 2',
        DTS : '42',
        Price : 1.99
    }
]
export default function GameLayout2(){
    return(
        <div>
            <div className='mt-3 GameLayout2-background'>
                <div className='flex justify-center items-center font-bold text-[16px] text-[#1AE5A1]'><TwoWhiteDice /><span>Get Your Dice</span><TwoWhiteDice /></div>
            </div>
            <div>
                <div className='flex justify-center items-center mt-3 w-full'>
                    <p className='text-center w-[130px]  font-bold text-base text-white'>1 <span className='text-[#3bffff]'>Dice</span> = 21 <span className='text-[#3bffff]'>DTS</span></p>
                </div>
            </div>
            <div className='flex justify-center items-center flex-wrap'>
                {
                    FakeData.map(data=> <Dicesellcard  {...data}/>)
                }
            </div>
        </div>
    )
}