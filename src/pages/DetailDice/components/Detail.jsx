import React, { useState } from "react";
import Navbar from "../../../components/global/Navbar/navbar";
import Bottonlink from "../../../components/global/BottonLink/bottonlink";
import BackButton from "../../../components/common/shared/BackButton";
import Button from "../../../components/common/shared/Button";
import PlusIcon from "../../../components/icons/plus";
import RewardCard from "../components/DetailCard";

const Detail = () => {
  return (
    <div>
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
        <div className="mt-8 flex flex-col gap-4">
          <RewardCard type="error" />
          <RewardCard type="success" />
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
  const [activeTab, setActiveTab] = useState("daily");

  const tabs = [
    {
      title: "Daily",
      key: "daily",
    },
    {
      title: "General",
      key: "general",
    },
    {
      title: "Referral",
      key: "referral",
    },
  ];
  return (
    <div className="flex w-full items-center justify-center mt-8 gap-4">
      {tabs.map((tab) => {
        return (
          <button
            key={tab.key}
            className={`rounded-full border border-[#1AE5A1] h-[45px] font-semibold w-[90px] cursor-pointer ${
              activeTab === tab.key
                ? "bg-[#04CCA7] text-black"
                : "bg-transparent text-white"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.title}
          </button>
        );
      })}
    </div>
  );
}
