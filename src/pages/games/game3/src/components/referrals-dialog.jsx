import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useStore } from "../store";
import Cross from "./asset/icon/cross";
import PeopleIcon from "./asset/icon/people";
import RefferalBell from "./asset/icon/refferal-bell";

const RefferalDialog = ({ handleCloseDialog }) => {
  const dialogRef = useRef(null);

  const { player_id } = useStore();
  const [leftList, setLeftList] = useState([]);
  const [rightList, setRightList] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        handleCloseDialog();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleCloseDialog]);

  const getReferralsList = async () => {}

  useEffect(() => {
    getReferralsList();
    return () => {};
  }, [player_id]);

  return (
    <div className="z-20 fixed inset-0 flex items-center backdrop-blur-md justify-center transition-all duration-1000">
      <div
        ref={dialogRef}
        className="bg-white p-6 w-[330px] rounded-xl shadow-lg py-4 transition-transform duration-1000 border border-[#FFDE7B] bg-white/50 backdrop-blur-[6.5px] scale-100"
      >
        <div
          onClick={handleCloseDialog}
          className="w-full flex justify-end text-black"
        >
          <Cross />
        </div>
        <div className="w-full flex flex-col items-center gap-2 justify-center">
          <RefferalBell />
          <p className="text-xl font-semibold">Referrals</p>
        </div>
        <div className="flex justify-center items-center gap-4 py-5">
          <span>
            <PeopleIcon />
          </span>
          <span>{count}</span>
        </div>

        <div className="flex w-full justify-evenly h-full max-h-full overflow-y-auto">
          <ul>
            {leftList.map((item, index) => {
              return (
                <li key={index} className="border-b border-black py-[2px]">
                  {index + 1}-{" "}
                  {item.referee.telegram_username
                    ? item.referee.telegram_username
                    : "NO_ID"}{" "}
                </li>
              );
            })}
          </ul>

          {rightList.length > 0 ? (
            <div className="w-[1px] bg-black"></div>
          ) : null}

          <ul>
            {rightList.map((item, index) => {
              return (
                <li key={index} className="border-b border-black py-[2px]">
                  {index + 1 + leftList.length}-{" "}
                  {item.referee.telegram_username
                    ? item.referee.telegram_username
                    : "NO_ID"}{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RefferalDialog;
