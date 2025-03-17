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
import { ButtonLinkV2 } from "./components/global/BottonLinksV2/bottonLinksV2";
import HomeSelectIcon from "./components/icons/change/bottonLinkIcon/ActiveIcon/homeselectIcon";
import DiceSelectIcon from "./components/icons/change/bottonLinkIcon/ActiveIcon/diceselecticon";
import GameSelectIcon from "./components/icons/change/bottonLinkIcon/ActiveIcon/gameselecticon";
import WalletSelectIcon from "./components/icons/change/bottonLinkIcon/ActiveIcon/walletselecticon";
import ProfileSelectIcon from "./components/icons/change/bottonLinkIcon/ActiveIcon/profileselecticon";
import HomeIcon from "./components/icons/change/bottonLinkIcon/HomeIcon";
// import DiceIcon from "./components/icons/dice";
import DiceIcon from './components/icons/change/bottonLinkIcon/diceIcons'
import GameIcon from "./components/icons/change/bottonLinkIcon/GameIcon";
import WalletBtnIcon from "./components/icons/change/bottonLinkIcon/wallet";
import ProfileIcon from "./components/icons/change/bottonLinkIcon/ProfileIcon";

const ImageSelected = [
  <HomeSelectIcon/>,
  <DiceSelectIcon />,
  <GameSelectIcon />,
  <WalletSelectIcon /> ,
  <ProfileSelectIcon/>,
];
const menus = [
  { name: "HOME",icon1 :<HomeIcon/>, icon: ImageSelected[0], path: "/" },
  { name: "DICE", icon1 : <DiceIcon/>, icon: ImageSelected[1], path: "/dice" },
  { name: "GAMES", icon1 : <GameIcon/> , icon: ImageSelected[2], path: "/games" },
  { name: "WALLET", icon1 : <WalletBtnIcon/>, icon: ImageSelected[3], path: "/wallet" },
  { name: "PROFILE", icon1 : <ProfileIcon />,icon: ImageSelected[4], path: "/profile" },
];
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
            <Route path="/dice" element={<DicePage />} />
            <Route path="/dice/histori" element={<DiceHistoriPage />} />
            <Route path="/dice-detail" element={<DetailDice />} />
            <Route path="/dice-detail-user" element={<DetailDiceUser />} />
            <Route path="/wallet/sell" element={<Dicesellpages />} />
            <Route path="/games" element={<GamePage />} />
            <Route path="/games/leaderboard" element={<LeaderBoard />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/wallet/withdraw" element={<WithdrawPage />} />
            <Route path="/wallet/deposite" element={<Deposite />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/games/rocket-dice" element={<DiceGame1 />} />
            <Route path="/games/dice-clash" element={<DiceGame2 />} />
          </Routes>
          {/* <ButtonLinkV2 menu={menus}/> */}
        </TonConnectUIProvider>
      </RouteProvider>
    </BrowserRouter>
    </div>
  </React.StrictMode>
);
