import axios from 'axios'
import Bottonlink from '../../components/global/BottonLink/bottonlink'
import Navbar from '../../components/global/Navbar/navbar'
import DiceLayout1 from '../../components/layout/DiceLayout/DiceLayoutSection1/diceLayoutPage'
import DiceLayout2 from '../../components/layout/DiceLayout/DiceLayoutSection2/diceLayoutPage2'
import { Api } from '../../api/apiUrl'
import { useEffect } from 'react'
export default function GamePage(){
    const playerRankhandler = async()=>{
        try{
            const response = await axios.get(Api[3].GamePage, {
                headers :{
                    Authorization: "token 3"
                }
            });
            console.log(response)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        playerRankhandler()
    },[])
    return(
        <div>
          <Navbar />
         <div className='pb-24'>
             <DiceLayout1 />
             <DiceLayout2 />
         </div>
            <Bottonlink />
        </div>

    )
}