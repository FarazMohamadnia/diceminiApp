import { toUserFriendlyAddress, useTonWallet } from "@tonconnect/ui-react";
import useUserStore from "../store/user";
import { useEffect } from "react";
export default function WalletProvider(){
    const wallet = useTonWallet();
    const { user, setUser } = useUserStore();
    useEffect(()=>{
        if(wallet?.account?.address){
            setUser({...user , address :wallet?.account?.address ? toUserFriendlyAddress(wallet?.account?.address) : '', connected : true});
        }
        console.log(user)
    },[wallet?.account?.address])
    return null
}