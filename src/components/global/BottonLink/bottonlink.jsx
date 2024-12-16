import "./bottonlink.css";
import img from "../../../asset/img/BottomLinkImg/home-01.png";
import img1 from "../../../asset/img/BottomLinkImg/ion_dice-outline.png";
import img2 from "../../../asset/img/BottomLinkImg/user-circle.png";
import img3 from "../../../asset/img/BottomLinkImg/wallet1.png";
import img4 from "../../../asset/img/BottomLinkImg/Group3.png";
import SelectImg from "../../../asset/img/BottomLinkImg/Selected/home-010.png";
import SelectImg1 from "../../../asset/img/BottomLinkImg/Selected/Vector01.png";
import SelectImg2 from "../../../asset/img/BottomLinkImg/Selected/Group.png";
import SelectImg3 from "../../../asset/img/BottomLinkImg/Selected/wallet2.png";
import SelectImg4 from "../../../asset/img/BottomLinkImg/Selected/Frame21.png";
import { Link, useNavigate } from "react-router-dom";
import { useRoute } from "../../../context/BottomLinkContext/bottomlinkcontext";
// import { useRoute } from "../../../context/BottomLinkContext/bottomlinkcontext";

const ImageSelected = [
  SelectImg,
  SelectImg1,
  SelectImg2,
  SelectImg3,
  SelectImg4,
];
export default function Bottonlink() {
  const { Route, setRoute } = useRoute();
  const navigate = useNavigate();

  const RouteHandler = (e) => {
    const Id = e.target.id;
    const rect = e.target.getBoundingClientRect();
    const right = rect.right;
    const positionX = right - 55;
    if (Id === "0") {
      setRoute({
        img: ImageSelected[0],
        position: positionX,
        Path: "/",
      });
    } else if (Id === "1") {
      setRoute({
        img: ImageSelected[1],
        position: positionX,
        Path: "/Dice",
      });
    } else if (Id === "2") {
      setRoute({
        img: ImageSelected[2],
        position: positionX,
        Path: "/Games",
      });
    } else if (Id === "3") {
      setRoute({
        img: ImageSelected[3],
        position: positionX,
        Path: "/wallet",
      });
    } else if (Id === "4") {
      setRoute({
        img: ImageSelected[4],
        position: positionX,
        Path: "/profile",
      });
    }
  };

  return (
    <div className="Bottonlink-container">
      <div
        style={{ transform: `translateX(${Route.position}px)` }}
        className="Bottonlink-Selected-Waves"
      >
        <div className="Bottonlink-Selected-Waves-shaped"></div>
        <div className="Bottonlink-Selected">
          <img src={Route.img} alt="" />
        </div>
      </div>
      <div className="Bottonlink-body">
        <Link to={"/"} id="0" onClick={RouteHandler}>
          <div id="0" className={`flex justify-center items-center flex-col`}>
            <img id="0" className="w-6 h-6 mb-2" src={img} alt="" />
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
        <Link to={"/Dice"} id="1" onClick={RouteHandler}>
          <div id="1" className={`flex justify-center items-center flex-col`}>
            <img id="1" className="w-6 h-6 mb-2" src={img1} alt="" />
            <p
              id="1"
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
        <Link to={"/Games"} id="2" onClick={RouteHandler}>
          <div id="2" className={`flex justify-center items-center flex-col`}>
            <img id="2" className="w-6 h-6 mb-2" src={img4} alt="" />
            <p
              id="2"
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
        <Link to={"/Wallet"} id="3" onClick={RouteHandler}>
          <div id="3" className={`flex justify-center items-center flex-col`}>
            <img id="3" className="w-6 h-6 mb-2" src={img3} alt="" />
            <p
              id="3"
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
        <Link to={"/Profile"} id="4" onClick={RouteHandler}>
          <div id="4" className={`flex justify-center items-center flex-col`}>
            <img id="4" className="w-6 h-6 mb-2" src={img2} alt="" />
            <p
              id="4"
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

// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// // import { NavContext } from "./NavContext";
// import { NavContext } from "../../../context/BottomLinkContext/bottomlinkcontext";

// const BottomLink = () => {
//   const Menus = [
//     { href: "/", name: "Home", icon: "home-outline", dis: "translate-x-0" },
//     {
//       href: "/dice",
//       name: "Profile",
//       icon: "person-outline",
//       dis: "translate-x-16",
//     },
//     {
//       href: "/games",
//       name: "Message",
//       icon: "chatbubble-outline",
//       dis: "translate-x-32",
//     },
//     {
//       href: "/wallet",
//       name: "Photos",
//       icon: "camera-outline",
//       dis: "translate-x-48",
//     },
//     {
//       href: "/profile",
//       name: "Settings",
//       icon: "settings-outline",
//       dis: "translate-x-64",
//     },
//   ];

//   const { active, setActive, isUserNav, setIsUserNav } = useContext(NavContext);
//   const [target, setTarget] = useState(null);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const currentPath = location.pathname;
//     const currentIndex = Menus.findIndex((menu) => menu.href === currentPath);

//     if (currentIndex !== -1 && currentIndex !== active) {
//       // فقط زمانی حالت active را تغییر دهید که کاربر کلیک کرده باشد (isUserNav = true)
//       // یا اگر می‌خواهید حتی بدون کلیک کاربر آپدیت شود ولی بدون انیمیشن:
//       if (isUserNav) {
//         setActive(currentIndex);
//       } else {
//         // اگر تغییر مسیر از بیرون بود، کلاس انیمیشن را غیر فعال کنید
//         // با حذف duration-500 موقع رندر مجدد
//         // اینجا می‌توانید یک state برای کنترل duration بگذارید
//         setActive(currentIndex);
//       }
//     }

//     // پس از تغییر مسیر، دوباره مقدار isUserNav را false کنید تا برای ناوبری‌های بعدی آماده باشید
//     setIsUserNav(false);
//   }, [location.pathname, Menus, active, setActive, isUserNav, setIsUserNav]);

//   const handleNavigation = (index) => {
//     if (index === active) return;
//     setTarget(index);
//     setIsAnimating(true);
//     setIsUserNav(true); // نشان می‌دهیم که این تغییر مسیر به خاطر کلیک کاربر است

//     window.scrollTo({ top: 0, behavior: "smooth" });

//     setTimeout(() => {
//       navigate(Menus[index].href);
//       setTarget(null);
//       setIsAnimating(false);
//     }, 500);
//   };

//   return (
//     <div className="fixed z-10 bottom-0 w-full">
//       <div className="bg-[#1D222E] min-h-[70px] px-6 rounded-t-xl">
//         <ul className="flex relative">
//           <span
//             className={`bg-[#3B3E44] ${
//               target !== null ? "duration-500" : "duration-0"
//             } ${Menus[target ?? active].dis}
//              border-4 border-gray-900 h-16 w-16 absolute -top-5 rounded-full`}
//           >
//             <span
//               className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px]
//               rounded-tr-[11px] shadow-myShadow1"
//             ></span>
//             <span
//               className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px]
//               rounded-tl-[11px] shadow-myShadow2"
//             ></span>
//           </span>
//           {Menus.map((menu, i) => (
//             <li key={i} className="w-16">
//               <button
//                 className="flex flex-col text-center pt-6"
//                 onClick={() => handleNavigation(i)}
//               >
//                 <span
//                   className={`text-xl cursor-pointer ${
//                     i === (target ?? active)
//                       ? "-mt-6 text-white duration-500"
//                       : "duration-0"
//                   }`}
//                 >
//                   <ion-icon name={menu.icon}></ion-icon>
//                 </span>
//                 <span
//                   className={`${
//                     (target ?? active) === i
//                       ? "translate-y-4 duration-700 opacity-100"
//                       : "opacity-0 translate-y-10 duration-0"
//                   }`}
//                 >
//                   {menu.name}
//                 </span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default BottomLink;
