import Icon from '../../../../asset/img/DiceImg/Section2/diceIcon.png'
import jetIcon from '../../../../asset/img/DiceImg/Section2/shuttle1.png'
import pepoleIcon from '../../../../asset/img/DiceImg/Section2/pepoleImg.png'
import './diceLayoutPage2.css'
import DiceBox from '../../../common/DiceComponents/DiceBoxSection2/diceBox'
import fakeImage from '../../../../asset/img/DiceImg/Section2/testImage.png'
const fakeData = [
    {
        name:'Dice Game',
        img :fakeImage ,
        status : true
    },
    {
        name:'Dice Game',
        img :fakeImage ,
        status : true
    },
    {
        name:'Dice Game',
        img :fakeImage ,
        status : true
    },
    {
        name:'Dice Game',
        img :fakeImage ,
        status : true
    },
    {
        name:'Dice Game',
        img :fakeImage ,
        status : true
    },
    {
        name:'Dice Game',
        img :fakeImage ,
        status : true
    },
]

const fakeData2 = [
    {
        name:'Dice Game3',
        img :fakeImage ,
        status : false
    },
    {
        name:'Dice Game 23',
        img :fakeImage ,
        status : false
    },
    {
        name:'Dice Game 2',
        img :fakeImage ,
        status : false
    },
    {
        name:'new Dice Game',
        img :fakeImage ,
        status : false
    }
]

export default function DiceLayout2(){
    return(
        <div className="mt-3 mb-20">
            <div>
                <p className="text-[#17fbaf] text-xl font-bold flex items-center justify-center">
                <span className='mr-3'><img alt="" src={Icon}/></span>
                    DICE GAMES
                <span className='ml-3'><img alt="" src={Icon}/></span>
                </p>
            </div>
            <div>
                <div className='DicelayoutPage2-backgroundColor h-9 py-[5px]'>
                    <p className='flex justify-start items-center pl-2 text-[#1ae5a1] text-base font-bold'><span className='mr-2'><img alt='' src={jetIcon}/></span>UP TO 1000X</p>
                </div>
                <div className='overflow-x-scroll flex flex-nowrap justify-start h-60'>
                    {
                        fakeData.map(data => <DiceBox {...data}/>)
                    }
                </div>
            </div>
            <div>
                <div className='DicelayoutPage2-backgroundColor h-9 py-[5px]'>
                    <p className='DicelayoutPage2-backgroundColor flex justify-start items-center pl-2 text-[#1ae5a1] text-base font-bold'><span className='mr-2'><img src={pepoleIcon} alt=''/></span>MULTIPLAYER</p>
                </div>
                <div className='overflow-x-scroll flex flex-nowrap justify-start h-60'>
                    {
                        fakeData2.map(data => <DiceBox {...data}/>)
                    }
                </div>
            </div>
        </div>
    )
}