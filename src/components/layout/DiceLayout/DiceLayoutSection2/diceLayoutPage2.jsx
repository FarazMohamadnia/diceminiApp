import './diceLayoutPage2.css'
import DiceBox from '../../../common/DiceComponents/DiceBoxSection2/diceBox'
import fakeImage from '../../../../asset/img/DiceImg/Section2/testImage.png'
import fakeImage1 from '../../../../asset/img/DiceImg/Section2/Group1000001898.png'
import fakeImage2 from '../../../../asset/img/DiceImg/Section2/Rectangle.png'
import fakeImage3 from '../../../../asset/img/DiceImg/Section2/dices.png'
import JetIcon from '../../../icons/change/Dice/DiceModal/jetIcon'
import PIcon from '../../../icons/change/Dice/DiceModal/pepoleIcon'
import TwoDiceIcon from '../../../icons/change/Dice/DiceModal/twodiceIcon'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Api } from '../../../../api/apiUrl'
import useTokenStore from '../../../../store/token'
import ComingSoonBox from '../../../common/DiceComponents/comingSoon/ComingSoon'
import { bouncy } from 'ldrs'
bouncy.register()
const fakeData2 = [
    {
        picture :fakeImage ,
    },
    {
        picture :fakeImage1 ,
    },
    {
        picture :fakeImage2 ,
    },
    {
        picture :fakeImage3 ,
    }
]

export default function DiceLayout2(){
    const {token} = useTokenStore()
    const [loading , setloading]=useState(true)
    const [gameData , setgameData]=useState([])
    const getGames = async()=>{
        try{
            const response = await axios.get(Api[3].GamePage , 
            {
              headers:{
                 "Authorization" : `token ${token}`
              }
            })
            setgameData(response.data.categorized_games[1])
            setloading(false)
        }catch(err){
            setloading(false)
            console.log(err)
        }
    }

    useEffect(()=>{
        if(token)getGames();
    },[token])
    return(
        <div className="mt-3">
            <div>
                <p className="text-[#17fbaf] text-xl font-bold flex items-center justify-center">
                <span className='mr-3'><TwoDiceIcon /></span>
                    DICE GAMES
                <span className='ml-3'><TwoDiceIcon /></span>
                </p>
            </div>
            <div>
                <div className='DicelayoutPage2-backgroundColor h-9 py-[5px]'>
                    <p className='flex justify-start items-center pl-2 text-[#1ae5a1] text-base font-bold'><span className='mr-2'><JetIcon /></span>UP TO 1000X</p>
                </div>
                <div className='overflow-x-scroll flex flex-nowrap justify-start my-3 '>
                    {loading ? 
                    <div className='w-full h-20 flex justify-center items-center'>
                        <l-bouncy
                          size="80"
                          speed="1" 
                          color="#1ae5a1" 
                        ></l-bouncy>
                    </div> 
                    : 
                        gameData.map(data => <DiceBox {...data}/>)
                    }
                </div>
            </div>
            <div>
                <div className='DicelayoutPage2-backgroundColor h-9 py-[5px]'>
                    <p className='flex justify-start items-center pl-2 text-[#1ae5a1] text-base font-bold'><span className='mr-2'><PIcon /></span>MULTIPLAYER</p>
                </div>
                <div className='overflow-x-scroll flex flex-nowrap justify-start h-60 mt-3'>
                    {
                        fakeData2.map(data => <ComingSoonBox {...data}/>)
                    }
                </div>
            </div>
        </div>
    )
}