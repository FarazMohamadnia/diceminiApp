import GreenShadow from '../../../../components/icons/change/profileNavbar/greenshadow'
import './index.css'
export default function ProfileBox({title , DTS , Icon}){
    return(
        <div className='ProfileBox-container'>
            <span className='absolute top-[-4px]'></span>
            <div className='absolute top-[-6px]'><GreenShadow /></div>
            <div>{Icon}</div>
            <p className='text-white/75 text-xs font-bold text-center'>{title}</p>
            <p className='text-[#1ae5a1] text-xl font-bold'>{DTS}</p>
        </div>
    )
}