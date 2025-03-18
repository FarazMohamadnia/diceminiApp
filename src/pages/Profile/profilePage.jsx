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
import axios from 'axios'
import { Api } from '../../api/apiUrl'
import { useEffect, useState } from 'react'
import useTokenStore from '../../store/token'
import { spiral } from 'ldrs'
import { bouncy } from 'ldrs'
bouncy.register()
spiral.register()


export default function ProfilePage(){
    const {token } = useTokenStore();
    const [gameData,setgameData]=useState([])
    const [gameHistoryData , setgameHistoryData]=useState([])
    const [Loading , setLoading]=useState(true)
    const [data , setdata]=useState([
        {
            Icon : <ProfileBoxIcon1 /> ,
            title : 'Lucky Board',
            DTS : '#'
        },
        {
            Icon : <ProfileBoxIcon2 /> ,
            title : 'Total Profit',
            DTS : 'DTS'
        },
    
        {
            Icon : <ProfileBoxIcon3 /> ,
            title : 'Total bets this week',
            DTS : 'DTS'
        },
    ])
    const profileDataHandller =async()=>{
        try{
            const response = await axios.get(Api[0].Profile ,{
                headers:{
                   "Authorization" : `token ${token}`
                }
              })
              setdata([
                {
                    Icon : <ProfileBoxIcon1 /> ,
                    title : 'Lucky Board',
                    DTS : `#${response.data.statistics.luck_board_rank}`
                },
                {
                    Icon : <ProfileBoxIcon2 /> ,
                    title : 'Total Profit',
                    DTS : `${response.data.statistics.total_play_this_week} DTS`
                },
            
                {
                    Icon : <ProfileBoxIcon3 /> ,
                    title : 'Total Play this week',
                    DTS : `${response.data.statistics.total_win_this_week} DTS`
                },
              ])
              setgameData(response.data.most_played_games)
              setgameHistoryData(response.data.game_history)
              setLoading(false)
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }

    useEffect(()=>{
        profileDataHandller();
    },[])
    return(
        <div>
            <div>
                <ProfileNav />
            </div>
            <div className='pb-28'>
                <div>
                    <div className='profilePage-background-style mt-3 mb-3'>
                        <p className='flex items-center text-[#1ae5a1] text-[22px] font-bold'><span className='mr-2'><STATISTICSICON /></span>STATISTICS</p>
                    </div>
                    <div className='flex justify-center items-center flex-wrap flex-row-reverse'>
                        {
                            data.map(data => <div key={data.title}> <ProfileBox {...data}/> </div>)
                        }

                    </div>
                </div>
                <div>
                    <div className='profilePage-background-style mt-6'>
                        <p className='flex items-center text-[#1ae5a1] text-[22px] font-bold'><span className='mr-2'><GameIcon1 /></span>Most Played Games</p>
                    </div>
                    <div className='flex flex-nowrap items-center justify-start overflow-x-scroll pt-5 pb-5 pl-5'>
                        {
                            Loading ? 
                            <div className='w-full h-full flex justify-center items-center'>
                                <l-bouncy
                                  size="60"
                                  speed="1.2" 
                                  color="#1ae5a1" 
                                ></l-bouncy>
                            </div> :
                            gameData.map((data)=> <Imagebox {...data}/>)
                        }
                    </div>
                </div>
                <div>
                    <div className='profilePage-background-style mb-3'>
                        <p className='flex items-center text-[#1ae5a1] text-[22px] font-bold'><span className='mr-2'><GameIcon2 /></span>Game History</p>
                    </div>
                </div>
                <div>
                    {
                        Loading ? 
                        <div className='flex justify-center items-center h-52'>
                            <l-spiral
                              size="80"
                              speed="1" 
                              color="#1ae5a1" 
                            ></l-spiral>
                        </div> : <Carousel gameHistoryData={gameHistoryData} />
                    }
                </div>
            </div>
            <Bottonlink />
        </div>
    )
}