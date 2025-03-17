import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { classNames } from "../../../util/class-name";
import { hiddenList } from "../../../config/shownavigation";
import useLoadingStore from "../../../store/loading";

export const ButtonLinkV2 = ({ menu }) => {
  const location = useLocation();
  const {isLoading} = useLoadingStore()
  const [active, setActive] = useState(
    location.pathname === "/"
      ? 0
      : menu.findIndex((item) => {
          if (item.path === "/") return false;
          return location.pathname.startsWith(item.path);
        })
  );

  useEffect(() => {
    setActive(
      location.pathname === "/"
        ? 0
        : menu.findIndex((item) => {
            if (item.path === "/") return false;
            return location.pathname.startsWith(item.path);
          })
    );
  }, [location.pathname]);

  if (isLoading||hiddenList.find((item) => location.pathname.startsWith(item)))
    return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between text-center text-xs w-full overflow-x-clip max-w-md mx-auto z-50">
      <div
        className="flex items-center justify-center rounded-full w-20 h-20 absolute -top-[13px] transition-all duration-500 z-0"
        style={{
          left: `calc(${active} * (100% / ${menu.length}) + (100% / ${menu.length}) / 2 - 2.5rem)`,
        }}
      >
        <svg
          style={{
            borderTopRightRadius: active === menu.length - 1 ? "2.5rem" : "",
            borderTopLeftRadius: active === 0 ? "2.5rem" : "",
          }}
          className={"scale-[1.8]"}
          width="86"
          height="33"
          viewBox="0 0 86 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43 20C51.6359 20 58.9934 14.5266 61.7927 6.85955C63.1186 3.22803 66.134 0 70 0H79C82.866 0 86 3.13401 86 7V26C86 29.866 82.866 33 79 33H7C3.13401 33 0 29.866 0 26V7C0 3.13401 3.13401 0 7 0H16C19.866 0 22.8814 3.22803 24.2073 6.85954C27.0066 14.5266 34.3641 20 43 20Z"
            fill="#212534"
          />
        </svg>
        <span
          className={
            "bg-secondary absolute top-[4.2rem] left-1/2 -translate-x-1/2 w-24 h-full"
          }
        ></span>
      </div>
      <span
        style={{
          left: `calc(${active} * (100% / ${menu.length}) + (100% / ${menu.length}) / 2 - -2rem)`,
          width: "-webkit-fill-available",
        }}
        className={
          "absolute top-0 z-10 w-full h-full bg-secondary transition-all duration-500 rounded-t-[1.5rem]"
        }
      ></span>

      <span
        style={{
          right: `calc((${menu.length} - 1 - ${active}) * (100% / ${menu.length}) + (100% / ${menu.length}) / 2 - -2rem)`,
          width: "-webkit-fill-available",
        }}
        className={
          "absolute top-0 z-10 w-full h-full bg-secondary transition-all duration-500 rounded-t-[1.5rem]"
        }
      ></span>

      <svg
        className="bg-secondary shadow-2xl shadow-[#1ae5a1] rounded-full w-14 h-14 absolute -top-8 transition-all duration-500 flex items-center justify-center z-[70]"
        style={{
          left: `calc(${active} * (100% / ${menu.length}) + (100% / ${menu.length}) / 2 - 1.75rem)`,
        }}
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          id="Ellipse 6"
          cx="29"
          cy="29"
          r="28.5"
          fill="url(#paint0_linear_4011_2807)"
          fillOpacity="0.2"
          stroke="url(#paint1_linear_4011_2807)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_4011_2807"
            x1="10.5"
            y1="6"
            x2="46"
            y2="52.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1ae5a1" />
            <stop offset="1" stopColor="#1ae5a1" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_4011_2807"
            x1="29"
            y1="0"
            x2="29"
            y2="58"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1ae5a1" />
            <stop offset="1" stopColor="#1ae5a1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className={"flex flex-col w-full rounded-t-2xl py-3 gap-2"}>
        <div
          className={
            "flex items-center justify-between w-full relative z-[80] cursor-pointer"
          }
        >
          {menu.map((item, index) => (
            <NavLink
              to={item.path}
              key={item.path}
              onClick={() => setActive(index)}
              className={classNames(
                "flex flex-col items-center gap-1 flex-1",
                index === 0 ? "rounded-tl-2xl" : "",
                index === menu.length - 1 ? "rounded-tr-2xl" : ""
              )}
            >
              <div
                className={`transition-all duration-500  [&>*]:m-auto ${
                  active === index
                    ? "scale-125 -translate-y-[26px] [&>*]:size-7"
                    : "[&>*]:size-7"
                }`}
              >
                {active === index ? item.icon:item.icon1}
              </div>
            </NavLink>
          ))}
        </div>
        <div className={"flex items-center justify-between w-full z-[80]"}>
          {menu.map((item, index) => (
            <NavLink
              to={item.path}
              key={item.path}
              onClick={() => setActive(index)}
              className={`flex flex-col items-center gap-1 flex-1 cursor-pointer text-white font-medium transition-all duration-300 ${
                index === 0 ? "rounded-tl-2xl" : ""
              } ${index === menu.length - 1 ? "rounded-tr-2xl" : ""} ${
                active === index ? "!text-[#1ae5a1] text-xxs" : "text-xxxs"
              }`}
            >
              <div className="transition-all duration-300">{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
