import React, { useEffect, useState } from "react";
import Navbar from "../../../components/global/Navbar/navbar";
import Bottonlink from "../../../components/global/BottonLink/bottonlink";
import BackButton from "../../../components/common/shared/BackButton";
import Button from "../../../components/common/shared/Button";
import PlusIcon from "../../../components/icons/plus";
import RewardCard from "../components/DetailCard";
import { Link } from "react-router-dom";
import axios from "axios";
import { Api } from "../../../api/apiUrl";
import useTokenStore from "../../../store/token";

const Detail = () => {
  const {token}=useTokenStore()
  const [Tasks , setTasks]=useState([]);
  const [loading , setloading]=useState(true);
  const [preload , setpreload]=useState(true)
  const getTasks = async ()=>{
    // try{
    //   const response = await axios.get(Api[7].GetTasks , {
    //     headers:{
    //        "Authorization" : `token ${token}`
    //     }
    // })
    // setTasks(response.data.tasks);
    // setloading(false)
    // console.log(response)
    // }catch(err){
    //   setloading(false)
    //   console.log(err)
    // }
  }

  useEffect(()=>{
    if(token)getTasks();
  },[token , preload])
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <main className="mx-4 mt-6 pb-28">
        <div className="flex items-center gap-6">
          <BackButton title="Back to Dice" />
        </div>
        <div className="w-[100%] flex justify-center items-center font-bold">
          <div className="mr-5">
            <Button title="Earn DTS" icon={<div className="mt-[2px]"><PlusIcon /></div>} />
          </div>
        </div>
        <div className="flex">
          <Tabs />
        </div>
        <div className="mt-8 flex flex-col gap-4 min-h-[50vh] overflow-y-scroll">
          {/* {
            loading ? 
            <div className="flex justify-center items-center">
              <l-spiral size="100" speed="0.9" color="#1AE5A1"></l-spiral>
            </div>
            :
            Tasks.map((data , index) => <RewardCard type={index % 2 === 0 ? 'success' : 'error'} data={data} setpreload={setpreload}/>)
          } */}
        </div>
      </main>
      <div>
        <Bottonlink />
      </div>
    </div>
  );
};

export default Detail;

function Tabs() {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    {
      title: "General",
      key: "general",
      href: '/dice-detail'
    },
    {
      title: "Referral",
      key: "referral",
      href : '/dice-detail-user'
    },
  ];
  return (
    <div className="flex w-full items-center justify-center mt-8 gap-4">
      {tabs.map((tab) => {
        return (
          <Link to={tab.href}>
            <button
              key={tab.key}
              className={`rounded-full border border-[#1AE5A1] h-[45px] font-semibold w-[90px] cursor-pointer ${
                activeTab === tab.key
                  ? "bg-[#04CCA7] text-black border font-black border-[#00F0FF] transform scale-110"
                  : "bg-transparent text-white"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.title}
            </button>
          </Link>
        );
      })}
    </div>
  );
}
