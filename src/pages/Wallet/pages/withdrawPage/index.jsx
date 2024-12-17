import React from 'react'
import Navbar from '../../../../components/global/Navbar/navbar';
import Bottonlink from '../../../../components/global/BottonLink/bottonlink';
import BackButton from '../../../../components/common/shared/BackButton';
import Button from '../../../../components/common/shared/Button';
import WithdrawTopicon from '../../../../components/icons/WithdrawTopUp';
import CurrencyIcon from '../../../../components/icons/currency';
import './withrawPage.css'
import Amount from './components/AmountComponent';
import MaterialIcon from '../../../../components/icons/materialIcon';
import BlueWallet from '../../../../components/icons/blueWalletIcon';
import WithDrawhistory from './components/WithdrawHistory';
const WithdrawPage = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div className='flex justify-between mt-3'>
            <div className=''>
                <BackButton title={'Back to Wallet'}/>
            </div>
            <div className='mr-16 mt-4'>
                <Button title={'Withraw'} icon={<WithdrawTopicon />}/>
            </div>
            <div></div>
        </div>
        <div>
        <div className="flex justify-center items-center w-3/5 h-[150px] mt-7 mx-auto mb-3">
            <div className="w-1/2"><CurrencyIcon /></div>
                <div className="w-1/2 text-left">
                    <p className="text-white text-[13px]">Your Balance :</p>
                    <p className="mt-3 text-[20px] text-center"><span className="text-white mr-2">31</span><span className="text-[#1ae5a1]">USD</span></p>
                    <div className="flex justify-between text-[8px] mt-3 text-white">
                        <p>MINIMUM WITHDRAW AMOUNT :</p>
                        <p>0.6 <span className='text-[#1ae5a1]'>USD</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-4'>
            <div className='WithdrawPage-inputs-style'>
                <div>
                    <p className='text-[#3bffff] text-[15px] font-light'>Your Wallet</p>
                </div>
                <div>
                    <p className='text-white text-[10px]'>KSDJFGNHBIUEJDNBF34897FIU</p>
                </div>
                <div>
                    <p className='text-[#3bffff] text-[15px] font-light'>Change</p>
                </div>
            </div>
            <div className=''>
                BTN
            </div>
            <div>
                <Amount />
            </div>
            <div className='flex justify-center items-center mt-4'>
                <div><MaterialIcon /></div>
                <div className='ml-3'>
                    <p className='text-white text-[8px] font-medium'>
                        you will receive 
                    </p>
                    <p className='text-[#f15a2b] text-[8px] font-medium'>
                        TRANFER FEE -0.12 USD
                    </p>
                </div>
                <div className='ml-3'>
                    <p className='text-[13px]'><span className='text-white'>0.6</span> <span className='text-[#1ae5a1]'>USD</span></p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-2'>
                <button className="WithdrawPage-BTN-boxshadow flex items-center justify-center space-x-2 border border-[#00F0FF] rounded-2xl px-12 py-2">
                  <BlueWallet />
                  <span className="text-[#00F0FF] font-semibold tracking-wide text-start">
                    DEPOSIT
                  </span>
                </button>
            </div>
            <div className='mt-3 mb-28'>
                <WithDrawhistory />
            </div>
        </div>
        <div>
            <Bottonlink />
        </div>
    </div>
  )
}

export default WithdrawPage;