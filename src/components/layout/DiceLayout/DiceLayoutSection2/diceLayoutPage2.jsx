import './diceLayoutPage2.css'
import DiceBox from '../../../common/DiceComponents/DiceBoxSection2/diceBox'
import fakeImage from '../../../../asset/img/DiceImg/Section2/testImage.png'
import JetIcon from '../../../icons/change/Dice/DiceModal/jetIcon'
import PIcon from '../../../icons/change/Dice/DiceModal/pepoleIcon'
import TwoDiceIcon from '../../../icons/change/Dice/DiceModal/twodiceIcon'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Api } from '../../../../api/apiUrl'
import useTokenStore from '../../../../store/token'

const fakeData2 = [
    {
        name:'Dice Game3',
        img :fakeImage ,
        status : false,
        comingSoon : true
    },
    {
        name:'Dice Game 23',
        img :fakeImage ,
        status : false,
        comingSoon : true
    },
    {
        name:'Dice Game 2',
        img :fakeImage ,
        status : false,
        comingSoon : true
    },
    {
        name:'new Dice Game',
        img :fakeImage ,
        status : false,
        comingSoon : true
    }
]

export default function DiceLayout2(){
    const {token} = useTokenStore()
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

        }catch(err){
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
                    {
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
                        fakeData2.map(data => <DiceBox {...data}/>)
                    }
                </div>
            </div>
        </div>
    )
}