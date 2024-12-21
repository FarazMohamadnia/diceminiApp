import React, { createContext, useState, useContext } from "react";
import HomeSelectIcon from "../../components/icons/change/bottonLinkIcon/ActiveIcon/homeselectIcon";
const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [Route, setRoute] = useState({
    img: <HomeSelectIcon />,
    position: 15,
  });

  return (
    <RouteContext.Provider value={{ Route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = () => {
  return useContext(RouteContext);
};
