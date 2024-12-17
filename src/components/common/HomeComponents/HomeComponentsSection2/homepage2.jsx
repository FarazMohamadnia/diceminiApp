import './homepage2.css'
import img from '../../../../asset/img/HomeImg/HomePageSection2Image/Vector.png'
import img1 from '../../../../asset/img/HomeImg/HomePageSection2Image/fi-rr-angle-double-small-right.png'
import Imagebox from './ImageBox/imagebox'
import { Link } from 'react-router-dom'
export default function Homepagesection2(){
    return(
        <div>
            <div className='HomepageSection2-backgroundColor w-full shadow h-[42px] flex items-center px-3 justify-between mb-4'>
                <div className='flex items-center'>
                    <img className='w-6 h-[27px] mt-[6px]' src={img} alt=''/>
                    <p className='text-[#1ae5a1] text-sm font-bold ml-1'>DICE GAMES</p>
                </div>
                <Link to={'/Games'}>
                    <div className='flex items-center'>
                        <p className='text-white text-sm font-normal mr-1'>Go to game list</p>
                        <img src={img1} alt=''/>
                    </div>
                </Link>
            </div>
            <div className='overflow-x-auto flex-nowrap flex ml-3'>
                <Imagebox /> <Imagebox />  <Imagebox />  <Imagebox />  <Imagebox /> <Imagebox />
            </div>
        </div>
    )
}