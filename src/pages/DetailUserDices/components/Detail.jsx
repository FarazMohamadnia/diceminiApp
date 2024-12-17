import React, { useEffect, useState } from "react";
import Navbar from "../../../components/global/Navbar/navbar";
import BackButton from "../../../components/common/shared/BackButton";
import Button from "../../../components/common/shared/Button";
import PlusIcon from "../../../components/icons/plus";
import Bottonlink from "../../../components/global/BottonLink/bottonlink";
import UserRewardCard from "./Card";
import { Link , useLocation } from "react-router-dom";

const Detail = () => {



  return (
    <>
      <div>
        <Navbar />
      </div>
      <main className="mx-4 mt-6">
        <div className="flex items-center gap-6">
          <BackButton title="Back to Dice" />
          <Button title="Earn More" icon={<PlusIcon />} />
        </div>
        <div className="flex">
          <Tabs />
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <UserRewardCard />
          <UserRewardCard />
          <UserRewardCard />
          <UserRewardCard />
        </div>
      </main>
      <div>
        <Bottonlink />
      </div>
    </>
  );
};

export default Detail;

function Tabs() {
  const location = useLocation();
  // const {pathname} = location
  console.log(location.pathname);
  const [activeTab, setActiveTab] = useState(location.pathname);



  const tabs = [
    {
      title: "Daily",
      key: "daily",
      href : '/dice-detail'
    },
    {
      title: "General",
      key: "general",
      href : '/aasdasd'
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
                  ? "bg-[#04CCA7] text-black"
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
