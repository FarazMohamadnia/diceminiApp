import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DicePage from "./pages/Dice/dicePage";
import GamePage from "./pages/Game";
import ProfilePage from "./pages/Profile/profilePage";
import { RouteProvider } from "./context/BottomLinkContext/bottomlinkcontext";
import DetailDice from "./pages/DetailDice";
import DetailDiceUser from "./pages/DetailUserDices";
import Wallet from "./pages/Wallet";
import Dicesellpages from "./pages/Wallet/pages/DiceSellPages/diceSell";
import WithdrawPage from "./pages/Wallet/pages/withdrawPage";
import Deposite from "./pages/Wallet/pages/deposit/components/Deposite";
import DiceHistoriPage from "./pages/DiceHistori";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Dice" element={<DicePage />} />
          <Route path="/dice/histori" element={<DiceHistoriPage />} />
          <Route path="/dice-detail" element={<DetailDice />} />
          <Route path="/dice-detail-user" element={<DetailDiceUser />} />
          <Route path="/wallet/sell" element={<Dicesellpages />} />
          <Route path="/Games" element={<GamePage />} />
          <Route path="/Wallet" element={<Wallet />} />
          <Route path="/Wallet/withdraw" element={<WithdrawPage />} />
          <Route path="/Wallet/deposite" element={<Deposite />} />
          <Route path="/Profile" element={<ProfilePage />} />
        </Routes>
      </RouteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
