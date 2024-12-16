import React, { createContext, useState, useContext } from "react";
import img from "../../asset/img/BottomLinkImg/Selected/home-010.png";
const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [Route, setRoute] = useState({
    img: img,
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
