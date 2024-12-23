import BorderShadow from '../../../../components/icons/change/profileNavbar/border'
import './profileNav.css'
import img from '../../../../asset/img/NavbarImg/PIC.png'
import Layer1 from '../../../../components/icons/change/profileNavbar/layer1'
import ProfileShadow from '../../../../components/icons/change/profileNavbar/profileshadow'
import BackgroundImg from '../../../../components/icons/change/profileNavbar/background'
export default function ProfileNav(){
    return(
        <div className=''>
            <div className='mt-10 mb-4'>
                Icon
            </div>
            <div className='w-[315px] h-[70px] mx-auto relative'>
                <div className='absolute right-9 top-[-3px]'><ProfileShadow /></div>
                <div className='absolute'>
                    <BackgroundImg />
                </div>
                <div className='relative w-[145px] h-[145px] top-[-50px] left-[-45PX]'>
                    <div className='absolute'>
                        <BorderShadow />
                        <img className='absolute bg-slate-500 rounded-[50%] w-[70px] h-[68px] top-[27%] right-[28%]' src={img}/>
                    </div>
                </div>
                <div className='profileNav-polygon-shape'>   
                      <p>faraz</p>
                </div>
                <div className='absolute top-[5px] right-10'>
                    <p className='flex'><span className='mr-[6px]'><Layer1 /></span> <span className='text-[#1ae5a1] text-xl font-bold'>level 1</span></p>
                </div>
                <div className='absolute right-10 bottom-[18px] flex items-center'>
                    <p className='profileNav-progress'><span className='w-[47%] h-[98%] bg-[#1AE5A1] absolute rounded-[45px]'></span></p>
                    <p className='text-[#1ae5a1] text-[8px] font-normal'><span>3000/5500</span>XP</p>
                </div>
            </div>
        </div>
    )
}