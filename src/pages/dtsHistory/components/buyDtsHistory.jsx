import React, { useEffect, useState } from "react";
import axios from "axios";
import { spiral } from 'ldrs'
import { SucessFullIcon } from "../../../components/icons/successfull";
import { PendingIcon } from "../../../components/icons/pending";
import CancelledIcon from "../../../components/icons/cancelled";
import useTokenStore from "../../../store/token";
import { Api } from "../../../api/apiUrl";
import CalenderIcon from "../../../components/icons/calender";
spiral.register()


const BuyDtsHistory = () => {
    const [transitionData ,settransitionData]=useState([]);
    const [renderHandler , setrenderHandler]=useState(true);
    const [loading , setloading]=useState(true)
    const [table , settable]=useState(true)
    const{token}=useTokenStore();
    const iconMap = {
      1: <SucessFullIcon />,
      2: <PendingIcon />,
      3: <CancelledIcon />
    };
    const statusMap = {
      1: 'Successful',
      2: 'Processing',
      3: 'Cancelled'
    };
    const statusColorMap = {
      1: "#1AE5A1",
      2: "#FFCF60",
      3: "#FF4D4D" 
    };
    const signMap = {
      1: "+",
      2: "-"
  };
  
    const tabledata = async()=>{
      try{
        const response = await axios.get(Api[4].buyDtsTable ,{
          headers:{
             "Authorization" : `token ${token}`
          }
        })
        console.log(response.data)
        if(renderHandler){ 
          response.data.map(data =>{
            const date = new Date(data.insert_dt);
            const year = date.getFullYear();
            const month = date.getMonth() + 1
            const day = date.getDate()
            
            const obg={
              status :statusMap[data.status] ,
              icon: iconMap[data.status],
              statusColor: statusColorMap[data.status],
              amount: `${signMap[data.transaction_type]}${data.amount} ${data.currency.toUpperCase()}`,
              amountColor : statusColorMap[data.status] ,
              date : `${year}/${month}/${day}`
            }
            transitionData.push(obg)
            setrenderHandler(false)
          })   
          if(transitionData.length != 0)settable(false)
        }
        setloading(false)
      }catch(err){
        console.log(err)
        setloading(false)
      }
    }
  
    useEffect(()=>{
      if(token){tabledata()}
    },[ transitionData , token])
  return (
    <div
      className="
    relative
    border-[0.5px] border-[#00f0ff]
    rounded-[10px]
    w-full max-w-m
    overflow-hidden
    linear-gradient-blue-table
    backdrop-blur-[14.4px]
    overflow-y-scroll ,
    h-[200px]
  "
    >
      {" "}
      <div className="flex justify-center items-center table-blue-shadow">
        <div className="deposite_shadow">
          <span className="absolute right-0 left-0 w-full text-[15px] font-extrabold text-center top-1">
            Buy Dts History
          </span>
        </div>
      </div>
      {
      loading? 
      <div className="flex justify-center items-center h-full w-full">
        <l-spiral
          size="70"
          speed="0.9"
          color="white" 
        ></l-spiral>
      </div> 
      :
      <div className="mt-8 flex flex-col divide-y divide-[#cafd7b3b]">
        {table && <div className="w-full h-32 flex justify-center items-center">
          <p className="text-[#00f0ff] font-bold">No Transaction History</p>
        </div>}
        {transitionData.map((tx, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 px-2"
          >
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{tx.icon}</span>

              <span
                className={`font-semibold`}
                style={{
                  color: `${tx.statusColor}`,
                }}
              >
                {tx.status}
              </span>
            </div>
            <span
              className={`font-semibold`}
              style={{
                color: `${tx.statusColor}`,
              }}
            >
              {tx.amount}
            </span>


            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <span>
                  <CalenderIcon color={tx.statusColor} />
                </span>
                <span
                  style={{
                    color: `${tx.statusColor}`,
                  }}
                >
                  {tx.date}
                </span>
              </div>
              <span
              style={{
                color: `${tx.statusColor}`,
              }}
            >
              {"»"}
            </span>
            </div>
          </div>
        ))}
      </div>
      }
    </div>
  );
};

export default BuyDtsHistory;
