import '../DiceBoxSection2/diceBox.css'

export default function ComingSoonBox({picture }){
    return(
        <div style={{backgroundImage : `url(${picture})`}} className="DiceBox-Container relative">
                <div className='absolute w-full h-full rounded-xl bg-black/20 backdrop-blur-sm'></div>
                <div className='bg-[#1ae5a1]/75 font-bold w-[260px] transform rotate-[48deg] absolute top-[87px] right-[-40px] text-white text-center rounded-xl'>
                    Coming Soon
                </div>
        </div>
    )
}