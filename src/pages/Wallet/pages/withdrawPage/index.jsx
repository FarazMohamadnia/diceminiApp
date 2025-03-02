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
import DropDownMenu from '../../components/DropdownMenu';
import useUserStore from '../../../../store/user';
import ConnectWalletButton from '../../components/ConnectWallet';
import useTokenStore from '../../../../store/token';
import axios from 'axios';
import { Api } from '../../../../api/apiUrl';
import Swal from 'sweetalert2';
import useCounterStore from '../../../../store/amount';
const WithdrawPage = () => {
    const { amount} = useCounterStore();
    const { user }=useUserStore();
    const {token} =useTokenStore()
    const sendTonAmount =async()=>{
        try{
            const response = await axios.post(Api[4].PostWithdraw , {ton_amount : amount} ,             {
                headers:{
                   "Authorization" : `token ${token}`
                }
            })
            if(response.status === 200){
                Swal.fire({
                    icon: 'success',
                    title : 'transaction confirmed '
                })
            }else{
                Swal.fire({
                    icon: 'error',
                    title : 'transaction failed '
                })
            }
            
        }catch(err){
            Swal.fire({
                icon: 'error',
                title : 'transaction failed '
            })
            console.log(err)
        }
    }
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div className='mt-3 ml-3'>
            <BackButton title={'Back to Wallet'}/>
        </div>
        <div className='flex justify-center items-center mt-4 font-bold'>
                <Button color={'#00efff'} title={'Withdraw'} icon={<WithdrawTopicon />}/>
        </div>
        <div>
        <div className="flex justify-center items-center h-[150px] mt-7 mx-auto mb-3">
            <div className=""><CurrencyIcon /></div>
                <div className=" text-left">
                    <p className="text-white text-[13px] font-bold italic">Your Balance :</p>
                    <p className="mt-3 text-[25px] font-bold text-center"><span className="text-white mr-2">{user.ton_balance?user.ton_balance.toFixed(3) : 0}</span><span className="text-[#1ae5a1]">TON</span></p>
                    <div className="flex justify-between text-[10px] mt-3 text-white">
                        <p className='mr-2'>MINIMUM WITHDRAW AMOUNT :</p>
                        <p className='font-bold'>1 <span className='text-[#1ae5a1]'>TON</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-4 pb-28'>
            <div className='w-[95%] mx-auto'>
                <ConnectWalletButton />
            </div>
            <div className='flex px-[10px] my-2'>
                <div className='w-[90%]'>
                    <DropDownMenu />
                </div>
                <div className='ml-2 w-[90%]'>
                    <DropDownMenu title="Network" options={["TON"]} />
                </div>
            </div>
            <div className='px-[10px]'>
                <Amount type={'dts'}/>
            </div>
            <div className='flex justify-center font-bold italic items-center mt-4'>
                <div><MaterialIcon /></div>
                <div className='ml-3'>
                    <p className='text-white text-[8px] font-medium'>
                        you will receive 
                    </p>
                    <p className='text-[#f15a2b] text-[8px] font-medium'>
                        TRANFER FEE -0.12 TON
                    </p>
                </div>
                <div className='ml-3'>
                    <p className='text-[13px]'><span className='text-white'>0.6</span> <span className='text-[#1ae5a1]'>TON</span></p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-5 mb-7'>
                <button onClick={sendTonAmount} className="WithdrawPage-BTN-boxshadow flex items-center justify-center space-x-2 border border-[#00F0FF] rounded-2xl px-9 py-2">
                  <BlueWallet />
                  <span className="text-[#00F0FF] font-semibold tracking-wide text-start">
                    Withdraw
                  </span>
                </button>
            </div>
            <div className='mt-3'>
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