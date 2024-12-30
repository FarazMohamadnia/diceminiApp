import './index.css'
export default function Amount(){
    return(
        <div>
            <div className='AmountComponent-inputs-style'>
                <div><p className='text-[#3bffff] text-[15px] font-light'>AMOUNT</p></div>
                <div>
                    <p className='text-white text-[15px] font-light'>24 usd</p>
                </div>
                <div>
                    <p className='text-white/70 text-[15px] font-light h-6 w-11 px-1 py-[3px] bg-[#1ae5a1]/2 rounded-[7px] border border-[#1ae5a1] justify-center items-center gap-2.5 inline-flex mr-1'>%25</p>
                    <p className='text-white/70 text-[15px] font-light h-6 w-11 px-1 py-[3px] bg-[#1ae5a1]/2 rounded-[7px] border border-[#1ae5a1] justify-center items-center gap-2.5 inline-flex mr-1'>%50</p>
                    <p className='text-white/70 text-[15px] font-light h-6 w-11 px-1 py-[3px] bg-[#1ae5a1]/2 rounded-[7px] border border-[#1ae5a1] justify-center items-center gap-2.5 inline-flex mr-1'>%75</p>
                    <p className='text-white/70 text-[15px] font-light h-6 w-11 px-1 py-[3px] bg-[#1ae5a1]/2 rounded-[7px] border border-[#1ae5a1] justify-center items-center gap-2.5 inline-flex mr-1'>%100</p>
                </div>
            </div>
        </div>
    )
}
