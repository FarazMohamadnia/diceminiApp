import React from "react";
import QRCode from "../../../../../components/icons/barcode";
import AddressDisplay from "./HashCode";
import HistoryTable from "./HistoryTable";
import ConnectWalletButton from "../../../components/ConnectWallet";

const ManualDeposit = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <QRCode />
      </div>
      <div className="mt-4">
        <ConnectWalletButton />
      </div>
      <div className="mt-4">
        <HistoryTable />
      </div>
    </>
  );
};

export default ManualDeposit;
