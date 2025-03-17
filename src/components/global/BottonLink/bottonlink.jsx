import "./bottonlink.css";
import {useLocation} from 'react-router-dom'
import { Link } from "react-router-dom";
import { useRoute } from "../../../context/BottomLinkContext/bottomlinkcontext";
import { useEffect, useRef} from "react";
import HomeIcon from "../../icons/change/bottonLinkIcon/HomeIcon";
import GameIcon from "../../icons/change/bottonLinkIcon/GameIcon";
import DiceIcon from '../../icons/change/bottonLinkIcon/diceIcons'
import WalletBtnIcon from "../../icons/change/bottonLinkIcon/wallet";
import ProfileIcon from "../../icons/change/bottonLinkIcon/ProfileIcon";
import ProfileSelectIcon from "../../icons/change/bottonLinkIcon/ActiveIcon/profileselecticon";
import HomeSelectIcon from "../../icons/change/bottonLinkIcon/ActiveIcon/homeselectIcon";
import DiceSelectIcon from "../../icons/change/bottonLinkIcon/ActiveIcon/diceselecticon";
import GameSelectIcon from "../../icons/change/bottonLinkIcon/ActiveIcon/gameselecticon";
import WalletSelectIcon from "../../icons/change/bottonLinkIcon/ActiveIcon/walletselecticon";

const ImageSelected = [
  <HomeSelectIcon/>,
  <DiceSelectIcon />,
  <GameSelectIcon />,
  <WalletSelectIcon /> ,
  <ProfileSelectIcon/>,
];

export default function Bottonlink() {
  const elementRef1 = useRef(null);
  const elementRef2 = useRef(null);
  const elementRef3 = useRef(null);
  const elementRef4 = useRef(null);
  const elementRef5 = useRef(null);

  const { Route, setRoute } = useRoute();
  const location = useLocation();
  const Path =  location.pathname;
  const RouteHandler = () => {
    const elements = [elementRef1.current, elementRef2.current, elementRef3.current ,elementRef4.current , elementRef5.current];
    const newDistances = elements.map(element => {
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.right - 55;
      }
      return 0;
    });

    if (Path === '/') {
      setRoute({  
        img: ImageSelected[0],
        position: newDistances[0],
        Path: "/",
      });
    } else if (Path.includes('/Dice')) {
      setRoute({
        img: ImageSelected[1],
        position: newDistances[1],
        Path: "/Dice",
      });
    } else if (Path.includes('/Games')) {
      setRoute({
        img: ImageSelected[2],
        position: newDistances[2],
        Path: "/Games",
      });
    } else if (Path.includes('/Wallet')) {
      setRoute({
        img: ImageSelected[3],
        position: newDistances[3],
        Path: "/wallet",
      });
    } else if (Path.includes("/Profile")) {
      setRoute({
        img: ImageSelected[4],
        position: newDistances[4],
        Path: "/profile",
      });
    }
  };

  useEffect(()=>{
    RouteHandler();
  },[])

  return (
    <div className="Bottonlink-container">
      <div
        style={{ transform: `translateX(${Route.position}px)` }}
        className="Bottonlink-Selected-Waves"
      >
        <div className="Bottonlink-Selected-Waves-shaped"></div>
        <div className="Bottonlink-Selected">
          {Route.img}
        </div>
      </div>
      <div className="Bottonlink-body">
        <Link ref={elementRef1} to={"/"} onClick={RouteHandler}>
          <div className={`flex justify-center items-center flex-col`}>
            <HomeIcon />
            <p
              id="0"
              className={
                Route.Path !== "/"
                  ? "text-neutral-50 text-xs font-light"
                  : "text-[#1ae5a1] text-[13px] font-bold"
              }
            >
              Home
            </p>
          </div>
        </Link>
        <Link ref={elementRef2} to={"/Dice"} onClick={RouteHandler}>
          <div className={`flex justify-center items-center flex-col`}>
              <DiceIcon />
            <p
              className={
                Route.Path !== "/Dice"
                  ? "text-neutral-50 text-xs font-light"
                  : "text-[#1ae5a1] text-[13px] font-bold"
              }
            >
              Dice
            </p>
          </div>
        </Link>
        <Link ref={elementRef3} to={"/Games"} onClick={RouteHandler}>
          <div className={`flex justify-center items-center flex-col`}>
              <GameIcon />
            <p
              className={
                Route.Path !== "/Games"
                  ? "text-neutral-50 text-xs font-light"
                  : "text-[#1ae5a1] text-[13px] font-bold"
              }
            >
              Games
            </p>
          </div>
        </Link>
        <Link ref={elementRef4} to={"/Wallet"} onClick={RouteHandler}>
          <div className={`flex justify-center items-center flex-col`}>
              <WalletBtnIcon />
            <p
              className={
                Route.Path !== "/wallet"
                  ? "text-neutral-50 text-xs font-light"
                  : "text-[#1ae5a1] text-[13px] font-bold"
              }
            >
              Wallet
            </p>
          </div>
        </Link>
        <Link ref={elementRef5} to={"/Profile"} onClick={RouteHandler}>
          <div className={`flex justify-center items-center flex-col`}>
              <ProfileIcon />
            <p
              className={
                Route.Path !== "/profile"
                  ? "text-neutral-50 text-xs font-light"
                  : "text-[#1ae5a1] text-[13px] font-bold"
              }
            >
              Profile
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}