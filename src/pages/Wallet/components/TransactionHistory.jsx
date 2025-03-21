import React, { useEffect, useState } from "react";
import "./styles.css";
import { SucessFullIcon } from "../../../components/icons/successfull";
import { PendingIcon } from "../../../components/icons/pending";
import CalenderIcon from "../../../components/icons/calender";
import axios from "axios";
import { Api } from "../../../api/apiUrl";
import useTokenStore from "../../../store/token";
import CancelledIcon from "../../../components/icons/cancelled";
import { spiral } from 'ldrs';
spiral.register();

const TransactionHistory = () => {
  const [transitionData ,settransitionData]=useState([]);
  const [renderHandler , setrenderHandler]=useState(true);
  const [loading , setloading]=useState(true);
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
      const response = await axios.get(Api[4].transactions ,{
        headers:{
           "Authorization" : `token ${token}`
        }
      })
      if(renderHandler){
        
        response.data.map(data =>{
          const date = new Date(data.insert_dt);
          const year = date.getFullYear();
          const month = date.getMonth() + 1
          const day = date.getDate()
          console.log(data)
          const obg={
            status :statusMap[data.status] ,
            icon: iconMap[data.status],
            statusColor: statusColorMap[data.status],
            amount: `${signMap[data.transaction_type]}${data.ton_amount.toFixed(2)} TON`,
            amountColor : statusColorMap[data.status] ,
            date : `${year}/${month}/${day}`
          }
          transitionData.push(obg)
          setrenderHandler(false)
        })   
      }
      setloading(false)
      console.log(transitionData)   
    }catch(err){
      setloading(false)
      console.log(err)
    }
  }

  useEffect(()=>{
    tabledata()
  },[transitionData])
  return (
    <div
      className="
    relative
    border-[0.5px] border-[#1ae5a1]
    rounded-[10px]
    w-full max-w-m
    overflow-hidden
    linear-gradient-table
    backdrop-blur-[14.4px]
    overflow-y-scroll
    h-[200px]
  "
    >
      {" "}
      <div className="flex justify-center table-green-shadow">
        <div className="transaction_shadow ">
          <span className="absolute right-0 left-0 w-full text-xs font-extrabold text-center top-1.5">
            TRANSACTION HISTORY
          </span>
        </div>
      </div>
      {
        loading ? 
        <div className="flex justify-center items-center h-full w-full">
        <l-spiral
          size="70"
          speed="0.9"
          color="white" 
        ></l-spiral>
      </div> 
      :
      <div className="mt-8 flex flex-col divide-y divide-green-500">
        {
          transitionData.map((tx, index) => (
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

export default TransactionHistory;
