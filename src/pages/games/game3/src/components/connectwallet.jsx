import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProjectApi } from "../api/Api";
import { toUserFriendlyAddress } from "@tonconnect/sdk";
import { useStore } from "../store";

export default function ConnectWallet({ auth }) {
  const wallet = useTonWallet();
  const { player_id} = useStore();

  const sendAddress = async (walletAddress) => {
    if (!walletAddress) return;
    try {
      const friendly = toUserFriendlyAddress(walletAddress);
      const response = await axios.post(
        ProjectApi[1].postConnectWallet,
        { wallet_address: friendly },
        {
          headers: {
            Authorization: auth,
          },
        }
      );
      if(!response.data.is_first_time){
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "wallet_connected",
            wallet_address:toUserFriendlyAddress(wallet?.account?.address),
            network: "TON", 
            chain_id: "1100", 
            user_id: player_id, 
            session_id: crypto.randomUUID(), 
            device: navigator.userAgent, 
            language: navigator.language, 
            country: Intl.DateTimeFormat().resolvedOptions().timeZone, 
            timestamp: new Date().toISOString(), 
        });
        console.log(window.dataLayer)       
      }
    } catch (err) {
      console.error("Error sending address:", err);
    }
  };

  useEffect(() => {
    const walletAddress = wallet?.account?.address;
    sendAddress(walletAddress);
  }, [wallet?.account?.address, auth]);

  return (
    <div>
      <TonConnectButton />
    </div>
  );
}
