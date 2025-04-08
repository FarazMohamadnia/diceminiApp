import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toUserFriendlyAddress } from "@tonconnect/sdk";
import { useStore } from "../store";

export default function ConnectWallet({ auth }) {
  const wallet = useTonWallet();
  const { player_id} = useStore();

  const sendAddress = async (walletAddress) => {
   
   
  }

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
