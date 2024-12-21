import './notificationcardComponent.css'
import { FaBookmark } from "react-icons/fa";

export default function Notificationcard({title , text}){
    return(
        <div className='Notificationcard-container'>
            <div className='absolute top-[-1px] right-[5px]'>
                <FaBookmark  color='#1ae5a1' size={'1.3rem'}/>
            </div>
            <div>
                <p className='text-[#3bffff] text-[20px] font-bold '>{title}</p>
                <p className='text-white text-[14px]'>{text}</p>
            </div>
        </div>
    )
}