import React, { useCallback, useEffect, useState } from "react";
import WalletIcon from '../../../components/icons/walletIcon'
import { useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";
import { toUserFriendlyAddress } from "@tonconnect/sdk";
import useUserStore from "../../../store/user";

const ConnectWalletButton =() => {
  const wallet = useTonWallet();
  const [tonConnectUI ] = useTonConnectUI();
  const { user, setUser } = useUserStore();

  const connectWallet =()=>{
    try{
      wallet?.account.address? console.log(user?.address) : tonConnectUI.openModal();
      if(wallet?.account.address){
        const friendly = toUserFriendlyAddress(wallet?.account?.address);
        setUser({...user , address : friendly , connected : true});
        console.log(user)
      }
    }catch(err){
      console.log(err.message)
    }
  }

  const disconnectWallet =()=>{
    tonConnectUI.disconnect();
  }

  
  console.log(user)

  useEffect(()=>{
    setUser({...user , address : wallet?.account.address});
  },[])
  // disconnectWallet()
  return (
    <button
      className="w-full flex justify-center items-center space-x-2 border border-[#00F0FF] rounded-xl px-6 py-4 text-[#00F0FF]"
      style={{
        background:
          "linear-gradient(117deg, #00F0FF -84.8%, rgba(40,39,70,0) 104.46%)",
      }}
      onClick={connectWallet}
    >
      <WalletIcon />
      <span className="font-bold">CONNECT YOUR WALLET</span>
    </button>
  );
};

export default ConnectWalletButton;
