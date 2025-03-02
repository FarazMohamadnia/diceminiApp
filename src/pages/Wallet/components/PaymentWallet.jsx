import React from "react";
import BlueShadow from "../../../components/shadows/blueShadow";
import DepositIcon from "../../../components/icons/deposit";
import WithdrawIcon from "../../../components/icons/withdraw";
import { NavLink } from "react-router-dom";
import useUserStore from "../../../store/user";

const PaymentWallet = () => {
  const {user} = useUserStore()
  return (
    <div
      className="relative border border-[#00F0FF] rounded-xl p-6 w-full max-w-md flex items-center justify-between"
      style={{
        background:
          "linear-gradient(117deg, #00F0FF -100%, rgba(40,39,70,0) 104.46%)",
      }}
    >
      <div className="absolute left-0 top-[-8px] w-full flex justify-center">
        <BlueShadow />
      </div>

      <div className="flex w-1/2 flex-col justify-center">
        <span className="text-[12vw] text-white leading-none text-center font-bold">
          {user.ton_balance ? user.ton_balance.toFixed(3) : 0}
        </span>
        <span className="mt-2 text-center text-cyan-400 font-semibold">TON</span>
      </div>

      <div className="flex flex-col space-y-4 ml-6">
        <NavLink
          style={{
            boxShadow : 'inset 0px 0px 10px 1px black'
          }}
          to={"/wallet/deposite"}
          className="flex items-center justify-between space-x-2 border border-[#00F0FF] rounded-2xl px-6 py-3 text-[#07CB8A]"
        >
          <span className="font-semibold tracking-wide flex justify-center w-full items-center">
          <span  className="mr-[10px]"><DepositIcon /></span><span className="mr-5">DEPOSIT</span>
          </span>
        </NavLink>
        <NavLink
          style={{
            boxShadow : 'inset 0px 0px 10px 1px black'
          }}
          to={"/wallet/withdraw"}
          className="flex  items-center justify-between space-x-2 border border-[#00F0FF] rounded-2xl px-6 py-3 text-[#07CB8A]"
        >
          <span className="font-semibold  tracking-wide w-full flex justify-center ">
            <span className="mr-3"><WithdrawIcon /></span><span className="mr-2">WITHDRAW</span>
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default PaymentWallet;
