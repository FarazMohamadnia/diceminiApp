import { useEffect, useState } from "react";
import BackButton from "../../components/common/shared/BackButton";
import Notificationcard from "./components/NotificationCard/notificationcardComponent";
import { Api } from "../../api/apiUrl";
import axios from "axios";
import useTokenStore from "../../store/token";

export default function Notification(){
    const {token } = useTokenStore();
    const [items , setitems]=useState([]);
    const notificationHandler = async()=>{
        try{
            const response = await axios.get(Api[2].notification, {
                headers :{
                    Authorization: `token ${token}`
                }
            });
            setitems(response.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        notificationHandler()
    },[])

    return(
        <div className="px-4 pt-10">
            <div>
                <BackButton title={'Back'}/>
            </div>
            <div>
                <p className="text-[#1ae5a1] text-center text-[20px] font-bold">Notifications</p>
                <div>
                    {
                        items.map(data =>  <Notificationcard key={data.title} {...data}/>)
                    }

                </div>
            </div>
        </div>
    )
}