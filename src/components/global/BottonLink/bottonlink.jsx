import './bottonlink.css';
import img from '../../../asset/img/BottomLinkImg/home-01.png'
import img1 from '../../../asset/img/BottomLinkImg/ion_dice-outline.png'
import img2 from '../../../asset/img/BottomLinkImg/user-circle.png'
import img3 from '../../../asset/img/BottomLinkImg/wallet1.png'
import img4 from '../../../asset/img/BottomLinkImg/Group3.png'
import SelectImg from '../../../asset/img/BottomLinkImg/Selected/home-010.png'
import SelectImg1 from '../../../asset/img/BottomLinkImg/Selected/Vector01.png'
import SelectImg2 from '../../../asset/img/BottomLinkImg/Selected/Group.png'
import SelectImg3 from '../../../asset/img/BottomLinkImg/Selected/wallet2.png'
import SelectImg4 from '../../../asset/img/BottomLinkImg/Selected/Frame21.png'
import { Link, useNavigate } from 'react-router-dom';
import { useRoute } from '../../../context/BottomLinkContext/bottomlinkcontext';

const ImageSelected=[SelectImg ,SelectImg1 , SelectImg2 , SelectImg3 , SelectImg4]
export default function Bottonlink(){
    const {Route , setRoute} = useRoute();
    const navigate = useNavigate();


    const RouteHandler =(e)=>{
        const Id = e.target.id
        const rect = e.target.getBoundingClientRect();
        const right = rect.right;
        const positionX = right - 55;
        if(Id === '0'){
            setRoute({
                img : ImageSelected[0],
                position : positionX,
                Path : '/'
            })

        }else if(Id === '1'){
            setRoute({
                img : ImageSelected[1],
                position :positionX,
                Path : '/Dice'
            })
        
        }else if(Id === '2'){
            setRoute({
                img : ImageSelected[2],
                position : positionX,
                Path : '/Games'
            })
        }else if(Id === '3'){
            setRoute({
                img : ImageSelected[3],
                position :positionX,
                Path : '/wallet'
            })
           
        }else if(Id === '4'){
            setRoute({
                img : ImageSelected[4],
                position : positionX,
                Path : '/profile'
            })
            
        }
    }

    return(
        <div className='Bottonlink-container'>
            <div style={{transform : `translateX(${Route.position}px)`}} className='Bottonlink-Selected-Waves'>
                <div className='Bottonlink-Selected-Waves-shaped'></div>
                <div className='Bottonlink-Selected'><img src={Route.img} alt=''/></div>
           </div>
            <div className='Bottonlink-body'>
                <Link to={'/'} id='0' onClick={RouteHandler}>
                    <div id='0' className={`flex justify-center items-center flex-col`}>
                        <img id='0' className='w-6 h-6 mb-2' src={img} alt='' />
                        <p id='0' className={Route.Path !== '/' ? 'text-neutral-50 text-xs font-light' :'text-[#1ae5a1] text-[13px] font-bold'}>Home</p>
                    </div>
                </Link>
                <Link to={'/Dice'} id='1' onClick={RouteHandler}>
                    <div id='1'  className={`flex justify-center items-center flex-col`}>
                        <img id='1' className='w-6 h-6 mb-2' src={img1} alt='' />
                        <p id='1' className={Route.Path !== '/Dice' ? 'text-neutral-50 text-xs font-light' :'text-[#1ae5a1] text-[13px] font-bold'}>Dice</p>
                    </div>
                </Link>
                <Link to={'/Games'} id='2' onClick={RouteHandler}>
                    <div id='2' className={`flex justify-center items-center flex-col`}>
                        <img id='2' className='w-6 h-6 mb-2' src={img4} alt='' />
                        <p id='2' className={Route.Path !== '/Games' ? 'text-neutral-50 text-xs font-light' :'text-[#1ae5a1] text-[13px] font-bold'}>Games</p>
                    </div>
                </Link>
                <Link to={'/Wallet'} id='3' onClick={RouteHandler}>
                    <div  id='3'className={`flex justify-center items-center flex-col`}>
                        <img id='3' className='w-6 h-6 mb-2' src={img3} alt='' />
                        <p id='3' className={Route.Path !== '/wallet' ? 'text-neutral-50 text-xs font-light' :'text-[#1ae5a1] text-[13px] font-bold'}>Wallet</p>
                    </div>
                </Link>
                <Link to={'/Profile'} id='4' onClick={RouteHandler}>
                    <div id='4' className={`flex justify-center items-center flex-col`}>
                        <img id='4' className='w-6 h-6 mb-2' src={img2} alt='' />
                        <p id='4' className={Route.Path !== '/profile' ? 'text-neutral-50 text-xs font-light' :'text-[#1ae5a1] text-[13px] font-bold'}>Profile</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}