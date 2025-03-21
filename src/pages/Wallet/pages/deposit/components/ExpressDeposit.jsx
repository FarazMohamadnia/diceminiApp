import React from "react";
import DepositIcon from "../../../../../components/icons/deposit";
import HistoryTable from "./HistoryTable";
import Amount from "../../withdrawPage/components/AmountComponent";
import useCounterStore from "../../../../../store/amount";
import { useTonConnectUI } from "@tonconnect/ui-react";
import useUserStore from "../../../../../store/user";
import Swal from "sweetalert2";
import axios from "axios";
import { Api } from "../../../../../api/apiUrl";
import useTokenStore from "../../../../../store/token";
import useUpgradeData from "../../../../../store/updateData";

const inactiveStyle = {
  boxShadow: "inset 0 0 20px 0 rgba(26,229,161,0.5)",
};

const ExpressDeposit = () => {
  const {toggleUpgrade } = useUpgradeData();
    const { amount } = useCounterStore();
    const [tonConnectUI] = useTonConnectUI();
    const { user }=useUserStore();
    const {token } = useTokenStore();
    const OwnerAddress = 'UQD6G1Ek7PQsXAyRBMTdxfmdsAk2kysNDj6VfeKAk-aSS4cM'
    const TonWeb = new window.TonWeb(new window.TonWeb.HttpProvider("https://toncenter.com/api/v2/jsonRPC"));

    const sendTransaction = async() => {
        if(!user?.address){
            Swal.fire({
                title: "Error",
                text: "Connect your wallet!",
                icon: "error"
            });
            return console.log('Connect Youre Wallet !')
        }
        try{
        const myTransaction = {
            validUntil: Math.floor(Date.now() / 1000) + 120, // 120 sec
            messages: [
              {
                address: OwnerAddress,
                amount: amount*1000000000,
              }
            ]
          }
          const response = await tonConnectUI.sendTransaction(myTransaction , {
            modals: ['before', 'success', 'error'],
            notifications: ['before', 'success', 'error']
          });
        
          const bocCellBytes = await TonWeb.boc.Cell.oneFromBoc(TonWeb.utils.base64ToBytes(response.boc)).hash();
        
          const hashBase64 = TonWeb.utils.bytesToBase64(bocCellBytes);
          
          const TonResponse = await axios.post(Api[3].PostDeposit , {
            ton_amount : myTransaction.messages[0].amount/1000000000 ,
            transaction_hash : hashBase64
          }, 
          {
            headers:{
               "Authorization" : `token ${token}`
            }
          })
          Swal.fire({
            title: `Transaction successful`,
            icon: 'success'
        });
          toggleUpgrade(prv => prv ? false : true)
        }catch(err){
            Swal.fire({
                title: `Error !`,
                text: err.message,
                icon: "error"
            });
            console.log(err)
        }
      }
  return (
    <>
      <div className="mb-3"><Amount type={'ton'}/></div>
      <div className="flex items-center justify-center">
        <button
          style={inactiveStyle}
          onClick={sendTransaction}
          className="flex items-center justify-between space-x-2 border border-[#1AE5A1] rounded-2xl px-8 py-2 text-[#07CB8A] mt-3"
        >
          <DepositIcon />
          <span className="font-semibold tracking-wide">DEPOSIT</span>
        </button>
      </div>
      <div className="mt-6">
        <HistoryTable />
      </div>
    </>
  );
};

export default ExpressDeposit;
