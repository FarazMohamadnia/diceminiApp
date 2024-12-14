import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DicePage from './pages/Dice/dicePage';
import GamePage from './pages/Game/gamePage';
import WalletPage from './pages/Wallet/walletPage';
import ProfilePage from './pages/Profile/profilePage';
import { RouteProvider } from './context/BottomLinkContext/bottomlinkcontext';
import Bottonlink from './components/global/BottonLink/bottonlink';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Dice" element={<DicePage />} />
          <Route path="/Games" element={<GamePage />} />
          <Route path="/Wallet" element={<WalletPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
        </Routes>
      </RouteProvider>
    </BrowserRouter>
  </React.StrictMode>
);

