import { useEffect, useState } from "react";
import BackButton from "../../components/common/shared/BackButton";
import Notificationcard from "./components/NotificationCard/notificationcardComponent";
import { Api } from "../../api/apiUrl";
import axios from "axios";
import useTokenStore from "../../store/token";
import { spiral } from 'ldrs'
spiral.register()

export default function Notification(){
    const {token } = useTokenStore();
    const [items , setitems]=useState([]);
    const [loading , setloading]=useState(true)
    const notificationHandler = async()=>{
        try{
            const response = await axios.get(Api[2].notification, {
                headers :{
                    Authorization: `token ${token}`
                }
            });
            setitems(response.data)
            setloading(false)
        }catch(err){
            setloading(false)
            console.log(err)
        }
    }

    useEffect(()=>{
        notificationHandler()
    },[])

    return(
        <div className="px-4 pt-5">
            <div>
                <BackButton title={'Back'}/>
            </div>
            <div>
                <p className="text-[#1ae5a1] text-center text-[20px] font-bold">Notifications</p>
                <div>
                    {
                        loading ? 
                        <div className="w-full h-[60vh] flex justify-center items-center">
                            <l-spiral
                              size="100"
                              speed="0.9" 
                              color="#1ae5a1" 
                            ></l-spiral>
                        </div> 
                        : 
                        items.map(data =>  <Notificationcard key={data.title} {...data}/>)
                    }

                </div>
            </div>
        </div>
    )
}