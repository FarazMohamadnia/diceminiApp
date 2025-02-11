import BorderShadow from '../../../../components/icons/change/profileNavbar/border'
import './profileNav.css'
import img from '../../../../asset/img/NavbarImg/PIC.png'
import Layer1 from '../../../../components/icons/change/profileNavbar/layer1'
import ProfileShadow from '../../../../components/icons/change/profileNavbar/profileshadow'
import BackgroundImg from '../../../../components/icons/change/profileNavbar/background'
import BigLogo from "../../../../components/icons/BigLogo";
import useUserStore from '../../../../store/user'

export default function ProfileNav() {
    const { user } = useUserStore();
    function calculateProgress(value, min, max) {
        if (value < min || value > max) {
            return 
        }
        let percentage = ((value - min) / (max - min)) * 100;
        return `${percentage}%`;
    }
    return (
        <div className=''>
            <div className='my-10 flex justify-center '>
                <BigLogo/>
            </div>
            <div className='w-[315px] h-[70px] mx-auto relative'>
                <div className='absolute right-9 top-[-3px]'><ProfileShadow/></div>
                <div className='absolute'>
                    <BackgroundImg/>
                </div>
                <div className='relative w-[145px] h-[145px] top-[-50px] left-[-45PX]'>
                    <div className='absolute'>
                        <BorderShadow/>
                        <img className='absolute rounded-[50%] w-[75px] h-[71px] top-[25%] right-[26%]' src={user.picture}/>
                    </div>
                </div>
                <div className='profileNav-polygon-shape'>
                    <p>{user.telegram_username}</p>
                </div>
                <div className='absolute top-[5px] right-10'>
                    <p className='flex'><span className='mr-[6px]'><Layer1/></span> <span
                        className='text-[#1ae5a1] text-xl font-bold'>level {user.level}</span></p>
                </div>
                <div className='absolute right-7 bottom-[18px] flex items-center'>
                    <p className='profileNav-progress'><span
                        className={`w-[${Math.floor(calculateProgress(user.xp , 0 , user.max_xp))}%] h-[98%] bg-[#1AE5A1] absolute rounded-[45px]`}></span></p>
                    <p className='text-[#1ae5a1] text-[8px] font-normal'><span>{user.xp}/{user.max_xp}</span>XP</p>
                </div>
            </div>
        </div>
    )
}