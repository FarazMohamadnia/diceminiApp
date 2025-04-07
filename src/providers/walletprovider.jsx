import { toUserFriendlyAddress, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import useUserStore from "../store/user";
import { useEffect } from "react";
import axios from "axios";
import { Api } from "../api/apiUrl";
import useTokenStore from "../store/token";
import Swal from "sweetalert2";
export default function WalletProvider(){
    const {token } = useTokenStore();
    const wallet = useTonWallet();
    const [tonConnectUI ] = useTonConnectUI();
    const { user, setUser } = useUserStore();
    const walletAddressHandler =async()=>{
        try{
            if(wallet?.account?.address){
                const response = await axios.post(Api[2].PostConnectWallet ,{ "wallet_address" :  toUserFriendlyAddress(wallet?.account?.address)} , {
                  headers:{
                     "Authorization" : `token ${token}`
                  }
                })
                console.log(response)
            }
        }catch(err){
          try{
            tonConnectUI.disconnect();
          }catch(err){
            console.log(err)
          }
          Swal.fire({
            icon : 'error',
            title : err.response.data.error
          })
          console.log(err)
        }
      }
    useEffect(()=>{
        if(wallet?.account?.address && token){
            setUser({...user , address :wallet?.account?.address ? toUserFriendlyAddress(wallet?.account?.address) : '', connected : true});
            walletAddressHandler()
        }
    },[wallet?.account?.address , token])
    return null
}