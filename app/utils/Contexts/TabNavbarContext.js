import React, { createContext } from "react";
export const TabNavbarContext = createContext({
  tabBarNavigate: (route, props) => {},
});
