import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DicePage from "./pages/Dice/dicePage";
import ProfilePage from "./pages/Profile/profilePage";
import { RouteProvider } from "./context/BottomLinkContext/bottomlinkcontext";
import DetailDice from "./pages/DetailDice";
import DetailDiceUser from "./pages/DetailUserDices";
import Wallet from "./pages/Wallet";
import Dicesellpages from "./pages/Wallet/pages/DiceSellPages/diceSell";
import WithdrawPage from "./pages/Wallet/pages/withdrawPage";
import Deposite from "./pages/Wallet/pages/deposit/components/Deposite";
import DiceHistoriPage from "./pages/DiceHistori";
import LeaderBoard from "./pages/Game/leaderboard";
import GamePage from "./pages/Game/gamePage";
import Notification from "./pages/notificationpage/notification";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <div className="pb-28 overflow-x-hidden max-w-lg">
    <BrowserRouter>
      <RouteProvider>
        <TonConnectUIProvider manifestUrl="http://localhost:3000/maniest-example.json">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Dice" element={<DicePage />} />
            <Route path="/dice/histori" element={<DiceHistoriPage />} />
            <Route path="/dice-detail" element={<DetailDice />} />
            <Route path="/dice-detail-user" element={<DetailDiceUser />} />
            <Route path="/wallet/sell" element={<Dicesellpages />} />
            <Route path="/games" element={<GamePage />} />
            <Route path="/games/leaderboard" element={<LeaderBoard />} />
            <Route path="/Wallet" element={<Wallet />} />
            <Route path="/Wallet/withdraw" element={<WithdrawPage />} />
            <Route path="/Wallet/deposite" element={<Deposite />} />
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/notification" element={<Notification />} />
          </Routes>
        </TonConnectUIProvider>
      </RouteProvider>
    </BrowserRouter>
    </div>
  </React.StrictMode>
);
