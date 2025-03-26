import React, { useEffect, useState } from "react";
import Navbar from "../../../components/global/Navbar/navbar";
import BackButton from "../../../components/common/shared/BackButton";
import Button from "../../../components/common/shared/Button";
import PlusIcon from "../../../components/icons/plus";
import Bottonlink from "../../../components/global/BottonLink/bottonlink";
import UserRewardCard from "./Card";
import { Link , useLocation } from "react-router-dom";
import Networking from "../../../components/icons/networking";
import axios from "axios";
import { Api } from "../../../api/apiUrl";
import useTokenStore from "../../../store/token";

const Detail = () => {
  const [data , setdata]=useState([]);
  const [loading , setloading]= useState(true);
  const[code , setcode]=useState('')
  const {token} = useTokenStore()
  const referralHandler = async()=>{
    try{
      const response = await axios.get(Api[1].referrals ,{
        headers:{
           "Authorization" : `token ${token}`
        }
      })
      setloading(false)
      setdata(response.data.referral)
      
    }catch(err){
      console.log(err)
      setloading(false)
    }
  }

  const referralCodeHandler =async()=>{
    try{
      const response = await axios.get(Api[1].referralCode ,{
        headers:{
           "Authorization" : `token ${token}`
        }
      })
      setcode(response.data.referral_link)
    }catch(err){
      console.log(err)
    }
  }

  const ShareText = (link) => {
    return `🔥 Predict the Dice Combo & Share $100 Daily! 🔥\n\n🎯 Guess the perfect combo and win your share of $100 every day!\n\n🙌 Invite your friends to submit more combos & boost your chances to win!\n\n💰 More entries = More wins! 🚀\n\n👉 Start predicting now! 🎲\n\n${link}`;
  };

  const fallbackUrl = `https://t.me/share/url?url=&text=${encodeURIComponent(
    ShareText(code)
  )}`;

  useEffect(()=>{
    if(token){
      referralHandler()
      referralCodeHandler()
    }
  },[token])
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main className="mx-4 mt-6">
        <div className="flex items-center gap-6">
          <BackButton title="Back to Dice" />
        </div>
        <div className="w-[100%] flex justify-center items-center font-bold">
          <div className="mr-5">
            <Button title="Earn DTS" icon={<PlusIcon />} />
          </div>
        </div>
        <div className="flex">
          <Tabs />
        </div>
        <div className="flex flex-col gap-4 mt-8 max-h-[23rem] overflow-y-scroll">
          {
            data.map((item , index) => <UserRewardCard key={index} {...item}/>)
          }
        </div>
      </main>
      <div className="w-[272px] h-[51px] flex justify-center items-center mx-auto my-6 bg-white/10 rounded-[10px] shadow-[0px_0px_8.899999618530273px_0px_rgba(26,229,161,1.00)] border border-[#00efff] px-4 py-2">
        <p className="mr-3">
          <Networking />
        </p>
        <a href={fallbackUrl}><p className="text-[#3bffff] text-[13px] font-medium">INVITE YOUR FIRENDS TO EARN MORE</p></a>
      </div>
      <div>
        <Bottonlink />
      </div>
    </>
  );
};

export default Detail;

function Tabs() {
  const location = useLocation();
  console.log(location.pathname);
  const [activeTab, setActiveTab] = useState(location.pathname);



  const tabs = [
    {
      title: "General",
      key: "general",
      href : '/dice-detail'
    },
    {
      title: "Referral",
      key: "referral",
      href : '/dice-detail-user'
    },
  ];

  useEffect(()=>{
    setActiveTab(location.pathname)
  },[location.pathname])


  return (
    <div className="flex w-full items-center justify-center mt-8 gap-4">
      {tabs.map((tab) => {
        return (
          <Link to={tab.href}>
            <button
              key={tab.key}
              className={`rounded-full border border-[#1AE5A1] h-[45px] font-semibold w-[90px] cursor-pointer ${
                tab.href === location.pathname
                  ? "bg-[#04CCA7] text-black border font-bold border-[#00F0FF] transform scale-110"
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
