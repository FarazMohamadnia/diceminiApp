import React from "react";
import Navbar from "../../../components/global/Navbar/navbar";
import Bottonlink from "../../../components/global/BottonLink/bottonlink";
import ConnectWalletButton from "./ConnectWallet";
import PaymentWallet from "./PaymentWallet";
import TransactionHistory from "./TransactionHistory";

const Wallet = () => {
  return (
    <div>
      <Navbar />
      <main className="px-4">
        <div className="flex justify-center mt-12">
          <ConnectWalletButton />
        </div>
        <div className="mt-8">
          <PaymentWallet />
        </div>
        <div className="mt-4">
          <TransactionHistory />
        </div>
      </main>
      <Bottonlink />
    </div>
  );
};

export default Wallet;
