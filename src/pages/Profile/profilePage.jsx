import Imagebox from '../../components/common/HomeComponents/HomeComponentsSection2/ImageBox/imagebox'
import Bottonlink from '../../components/global/BottonLink/bottonlink'
import GameIcon1 from '../../components/icons/change/profileNavbar/gameIcon'
import GameIcon2 from '../../components/icons/change/profileNavbar/gameIcon2'
import ProfileBoxIcon1 from '../../components/icons/change/profileNavbar/profileBox/ProfileBox1'
import ProfileBoxIcon2 from '../../components/icons/change/profileNavbar/profileBox/ProfileBox2'
import ProfileBoxIcon3 from '../../components/icons/change/profileNavbar/profileBox/ProfileBox3'
import STATISTICSICON from '../../components/icons/change/profileNavbar/STATISTICSIcon'
import ProfileBox from './components/profileBox'
import Carousel from './components/profilecarosel'
import ProfileNav from './components/profileNavbar/profileNav'
import './profilePage.css'
import img from '../../asset/img/HomeImg/carouselImage/image1.png'
import fakeimg from '../../asset/img/HomeImg/carouselImage/image2.png'
const fakeData = [
    {
        Icon : <ProfileBoxIcon1 /> ,
        title : 'Lucky Board',
        DTS : '#20'
    },
    {
        Icon : <ProfileBoxIcon2 /> ,
        title : 'Total Profit',
        DTS : '141 DTS'
    },

    {
        Icon : <ProfileBoxIcon3 /> ,
        title : 'Total bets this week',
        DTS : '200 DTS'
    },

]

const images = [
    {
        title : 'Dice Game1',
        text : 'UP TO 1000x',
        images : fakeimg
    },
    {
        title : 'Dice Game2',
        text : 'UP TO 1000x',
        images : img
    },
    {
        title : 'New Dice Game',
        text : 'Dice game',
        images : fakeimg
    },
    {
        title : 'best Dice Game',
        text : 'UP TO 200x',
        images : img
    },
    {
        title : 'Dice Game',
        text : 'UP TO 1000x',
        images : fakeimg
    }
]

export default function ProfilePage(){
    return(
        <div>
            <div>
                <ProfileNav />
            </div>
            <div>
                <div className='profilePage-background-style mt-3 mb-3'>
                    <p className='flex items-center text-[#1ae5a1] text-[22px] font-bold'><span className='mr-2'><STATISTICSICON /></span>STATISTICS</p>
                </div>
                <div className='flex justify-center items-center flex-wrap flex-row-reverse'>
                    {
                        fakeData.map(data => <div key={data.title}> <ProfileBox {...data}/> </div>)
                    }

                </div>
            </div>
            <div>
                <div className='profilePage-background-style mt-6 mb-3'>
                    <p className='flex items-center text-[#1ae5a1] text-[22px] font-bold'><span className='mr-2'><GameIcon1 /></span>Most Played Games</p>
                </div>
                <div className='flex flex-nowrap items-center justify-start overflow-x-scroll mt-5 pl-5'>
                    <Imagebox /> <Imagebox /> <Imagebox /> <Imagebox /> <Imagebox /> <Imagebox /> <Imagebox />
                </div>
            </div>
            <div>
                <div className='profilePage-background-style mt-6 mb-3'>
                    <p className='flex items-center text-[#1ae5a1] text-[22px] font-bold'><span className='mr-2'><GameIcon2 /></span>Game History</p>
                </div>
            </div>
            <div>
                <Carousel images={images} />
            </div>
            <Bottonlink />
        </div>
    )
}