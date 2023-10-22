import React from "react";
// import React, { createContext } from "react";
const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  handleToggleSwitchChange: () => {},
});
export { CurrentTemperatureUnitContext };
