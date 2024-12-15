import './diceBox.css'
import Dice2Icon from '../../../../asset/img/DiceImg/Section2/diceIcon2.png'
import HumanIcon from '../../../../asset/img/DiceImg/Section2/profile-2user.png'
import ArrowRight from '../../../../asset/img/DiceImg/ArrowRight.png'
export default function DiceBox({img , status , name}){

    return(
        <div style={{backgroundImage : `url(${img})`}} className="DiceBox-Container">
            <div className=' h-2/5 w-full rounded-b-xl'>
                <div className='DiceBox-Title'>
                    <p>{name}</p>
                </div>
                <div className='Dice-text-layout'>
                    <div>
                        {
                            status? 
                                <div>
                                    <div className='flex justify-around'>
                                        <p className='text-[#1ae5a1] text-[10px] font-medium flex justify-center items-center'><img className='mr-[2px]' alt='' src={Dice2Icon}/>UP TO <span className='text-white'>1000</span>x</p>
                                        <p className='text-[#1ae5a1] text-[10px] font-medium flex justify-center items-center'><img className='mr-1' src={HumanIcon} alt=''/>174</p>
                                    </div>
                                    <div>
                                        <p className='text-neutral-50 mt-2 text-[10px] font-medium flex items-center justify-center'><span className='mr-1'>PLAY NOW </span><img src={ArrowRight} alt=''/></p>
                                    </div>
                                </div>
                            :
                                <div>
                                    <div className='flex justify-around'>
                                        <p className='text-[#1ae5a1] text-[12px] font-medium flex justify-center items-center'><img className='mr-[2px]' alt='' src={Dice2Icon}/>Prize :<span className='text-white'> 40</span>DTS</p>
                                    </div>
                                    <div>
                                        <p className='text-neutral-50 mt-2 text-[10px] font-medium flex items-center justify-center'><span className='mr-1'>ENTER (21 <span className='text-[#1AE5A1]'>DTS</span>)</span><img src={ArrowRight} alt=''/></p>
                                    </div>
                                </div>
                        }
                    </div>
                    <div>
                        btn
                    </div>
                </div>
            </div>
        </div>
    )
}