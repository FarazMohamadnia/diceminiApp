import React, { useCallback, useEffect, useState } from "react";
import WalletIcon from '../../../components/icons/walletIcon'
import { useTonConnectUI } from "@tonconnect/ui-react";
const ConnectWalletButton = () => {
  const [TonConnectUI] = useTonConnectUI();
  const [TonWalletAddress, setTonWalletAddress] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);

  const handleWalletConnection = useCallback((address) => {
    setTonWalletAddress(address);
    console.log("Wallet connected successfully!");
    setIsLoading(false);
  }, []);

  const handleWalletDisconnection = useCallback(() => {
    setTonWalletAddress(null);
    console.log("Wallet connected successfully!");
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (TonConnectUI.account?.address) {
        handleWalletConnection(TonConnectUI.account?.address);
      } else {
        handleWalletDisconnection();
      }
    };
  
    checkWalletConnection();
  
    const unsubscribe = TonConnectUI.onStatusChange((wallet) => {
      if (wallet) {
        handleWalletConnection(wallet.account.address);
      } else {
        handleWalletDisconnection();
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, [TonConnectUI, handleWalletConnection, handleWalletDisconnection]);

  const handleWalletAction = async () => {
    if (TonConnectUI.connected) {
      setIsLoading(true);
      await TonConnectUI.disconnect();
    } else {
      await TonConnectUI.openModal();
    }
  };
  return (
    <button
      className="w-full flex justify-center items-center space-x-2 border border-[#00F0FF] rounded-xl px-6 py-4 text-[#00F0FF]"
      style={{
        background:
          "linear-gradient(117deg, #00F0FF -84.8%, rgba(40,39,70,0) 104.46%)",
      }}
     onClick={handleWalletAction}
    >
      <WalletIcon />
      <span className="font-bold">CONNECT YOUR WALLET</span>
    </button>
  );
};

export default ConnectWalletButton;
