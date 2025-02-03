import React, { useCallback, useEffect, useState } from "react";
import WalletIcon from '../../../components/icons/walletIcon'
import { useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";
import { toUserFriendlyAddress } from "@tonconnect/sdk";
import useUserStore from "../../../store/user";
import AddressDisplay from "../pages/deposit/components/HashCode";

const ConnectWalletButton =() => {
  const wallet = useTonWallet();
  const [tonConnectUI ] = useTonConnectUI();
  const { user, setUser } = useUserStore();

  const connectWallet =()=>{
    try{
      if(wallet?.account?.address){
        setUser({...user , address : toUserFriendlyAddress(wallet?.account?.address) , connected : true});
        console.log(user)
      }else{
          tonConnectUI.openModal();
      }
    }catch(err){
      console.log(err.message)
    }
  }

  const disconnectWallet =()=>{
    tonConnectUI.disconnect();
  }

  useEffect(()=>{
    setUser({...user , address :wallet?.account?.address? toUserFriendlyAddress(wallet?.account?.address) : '', connected : true});
  },[ wallet?.account?.address , ])
  // disconnectWallet()
  return (
    <>
    {!wallet?.account.address ?
      <button
        className="w-full flex justify-center items-center space-x-2 border border-[#00F0FF] rounded-xl px-6 py-2 text-[#00F0FF]"
        style={{
          background:
            "linear-gradient(117deg, #00F0FF -84.8%, rgba(40,39,70,0) 104.46%)",
        }}
        onClick={connectWallet}
      >
        <WalletIcon />
        <span className="font-bold">CONNECT YOUR WALLET</span>
      </button> 
      :
        <AddressDisplay address={user?.address}/>
    }
      
    </>
  );
};

export default ConnectWalletButton;
