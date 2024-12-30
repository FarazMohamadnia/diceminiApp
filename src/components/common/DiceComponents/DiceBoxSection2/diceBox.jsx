import './diceBox.css'
import ArrowRightIcon from '../../../icons/change/Dice/DiceModal/arrowRight'
import Dice9Icon from '../../../icons/change/Dice/section2/dice9'
import HumanIcon from '../../../icons/change/Dice/section2/humanicon'
import GreenArrowRight from '../../../icons/greenarrowright'

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
                                        <p className='text-[#1ae5a1] text-[13px] font-medium flex justify-center items-center'><span className='mr-[2px]'><Dice9Icon /></span>UP TO <span className='text-white ml-[1px]'>1000</span>x</p>
                                        <p className='text-[13px] font-medium flex justify-center items-center text-white'><HumanIcon /> 174</p>
                                    </div>
                                    <div>
                                        <p className='text-neutral-50 mt-1 text-[12px] font-medium flex items-center justify-center'><span className='mr-1'>PLAY NOW </span><GreenArrowRight/></p>
                                    </div>
                                </div>
                            :
                                <div>
                                    <div className='flex justify-around'>
                                        <p className='text-[#1ae5a1] text-[14px] font-medium flex justify-center items-center mr-4'><span className='mr-[2px]'><Dice9Icon /></span>Prize :<span className='text-white mx-[2px]'> 40</span>DTS</p>
                                    </div>
                                    <div>
                                        <p className='text-neutral-50 mt-1 text-[12px] font-medium flex items-center justify-center'><span className='mr-1'>ENTER (21 <span className='text-[#1AE5A1]'>DTS</span>)</span><GreenArrowRight/></p>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}