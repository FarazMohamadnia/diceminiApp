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
import DiceGame1 from "./pages/games/game1/dicegame";
import DiceGame2 from "./pages/games/game2/dicegame2";
import WalletProvider from "./providers/walletprovider";
import ApiLoader from "./providers/LoadingProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <div className="overflow-x-hidden max-w-lg">
    <BrowserRouter>
      <RouteProvider>
        <TonConnectUIProvider manifestUrl="https://mainapp.dicemaniacs.com/maniest-example.json">
        <WalletProvider />   
        <ApiLoader />
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
            <Route path="/games/rocket-dice" element={<DiceGame1 />} />
            <Route path="/games/dice-clash" element={<DiceGame2 />} />
          </Routes>
        </TonConnectUIProvider>
      </RouteProvider>
    </BrowserRouter>
    </div>
  </React.StrictMode>
);
