import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { ProjectApi } from "../api/Api";
import { useStore } from "../store";
import BigShield from "./asset/icon/big-shield";
import Cross from "./asset/icon/cross";
import InviteIcon from "./asset/icon/invite";
import ReferralIcon from "./asset/icon/reffrerals";
import Submit from "./asset/icon/submit";
import { ShareText } from "./controller";
import RefferalDialog from "./referrals-dialog";

const MissionDialog = ({ handleCloseDialog }) => {
  const [isRefferalDialogOpen, setIsRefferalDialogOpen] = useState(false);
  const dialogRef = useRef(null);
  const [checkboxes, setCheckboxes] = useState({
    has_invite: false,
    has_submit: false,
  });

  const { shareLink, player_id } = useStore();

  const handleCloseRefferalDialog = () => {
    setIsRefferalDialogOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isRefferalDialogOpen) return;

      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        handleCloseDialog();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleCloseDialog, isRefferalDialogOpen]);

  const getCheckboxStatus = async () => {
    try {
      const response = await axios.get(ProjectApi[3].missions, {
        headers: {
          Authorization: player_id,
        },
      });
      if (response.data) setCheckboxes(response.data);
    } catch (error) {
      console.error(error);
      // TODO: remove mock data
      // setCheckboxes(exampleData.get.missions);
    }
  };

  useEffect(() => {
    if (player_id) getCheckboxStatus();
  }, [player_id]);

  const telegramShareUrl = `tg://msg?text=${encodeURIComponent(
    ShareText("link")
  )}`;

  // Fallback URL for web (if not in Telegram)
  const fallbackUrl = `https://t.me/share/url?url=&text=${encodeURIComponent(
    ShareText(shareLink)
  )}`;

  const openTelegramLink = () => {
    // Try to open the Telegram URI
    try {
      const isTelegramAvailable = /Telegram/i.test(navigator.userAgent); // Check if Telegram is installed
      if (isTelegramAvailable) {
        
        window.location.href = telegramShareUrl;
      } else {
        

        // If Telegram isn't installed, open the fallback URL
        window.location.href = fallbackUrl;
      }
    } catch (error) {
    

      window.location.href = fallbackUrl;
    }
  };

  return (
    <>
      <div className="z-10 fixed inset-0 flex items-center backdrop-blur-md justify-center transition-all duration-1000">
        <div
          ref={dialogRef}
          className="bg-white p-6 w-[330px] rounded-xl shadow-lg pb-6 transition-transform duration-1000 border border-[#FFDE7B] bg-white/50 backdrop-blur-[6.5px] scale-100"
        >
          <div
            onClick={handleCloseDialog}
            className="w-full flex justify-end text-black"
          >
            <Cross />
          </div>
          <div className="w-full flex flex-col items-center gap-2 justify-center">
            <BigShield />
            <p className="text-xl font-semibold">Mission</p>
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
            <div>
              <label className="flex items-center cursor-pointer relative">
                <input
                  type="checkbox"
                  checked={checkboxes.has_invite}
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-green-600 checked:border-green-600"
                  id="check4"
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
            <h2 className="text-center text-md font-semibold text-black">
              Invite a friend, get 1 chance
              <br />
              for the $30 lottery daily! 
            </h2>
          </div>
          <div className="flex justify-center items-center gap-6 mt-6">
            <a
              href={fallbackUrl}
              rel="noopener noreferrer"
              // onClick={() => {
              //   openTelegramLink();
              // }}
              // href={`tg://msg?text=${encodeURIComponent(ShareText(shareLink))}`}
              className="flex items-center justify-between bg-[#021224] rounded-full text-white px-3 py-1 gap-2 border border-[#FFDE7B]"
              style={{
                boxShadow: "0px 2px 20.1px 0px rgba(255, 222, 123, 0.50)",
              }}
            >
              <span>
                <InviteIcon />
              </span>{" "}
              Invite Friends
            </a>
            <button
              onClick={() => setIsRefferalDialogOpen(true)}
              className="flex items-center justify-between bg-[#021224] rounded-full text-white px-3 py-1 gap-2 border border-[#FFDE7B]"
              style={{
                boxShadow: "0px 2px 20.1px 0px rgba(255, 222, 123, 0.50)",
              }}
            >
              <span>
                <ReferralIcon />
              </span>{" "}
              Referrals
            </button>
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <div>
              <label className="flex items-center cursor-pointer relative">
                <input
                  type="checkbox"
                  checked={checkboxes.has_submit}
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-green-600 checked:border-green-600"
                  id="check4"
                />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
            <h2 className="text-center text-md font-semibold text-black">
              Submit your result, enter 
              <br />
              the $20 lottery daily!
            </h2>
          </div>
          <div className="flex justify-center items-center gap-6 mt-4">
            <button
              className="flex items-center justify-between bg-[#021224] rounded-full text-white px-3 py-1 gap-2 border border-[#FFDE7B]"
              style={{
                boxShadow: "0px 2px 20.1px 0px rgba(255, 222, 123, 0.50)",
              }}
              onClick={handleCloseDialog}
            >
              <span>
                <Submit />
              </span>{" "}
              Submit Now!
            </button>
          </div>
        </div>
      </div>

      {isRefferalDialogOpen && (
        <RefferalDialog handleCloseDialog={handleCloseRefferalDialog} />
      )}
    </>
  );
};

export default MissionDialog;
