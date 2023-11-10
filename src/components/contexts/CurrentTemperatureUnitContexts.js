import React, { createContext, useContext, useState } from "react";

// Create the context
const MyContext = createContext();

// Create a custom provider component
export function MyContextProvider({ children }) {
  const [data, setData] = useState("F");

  // You can define functions and state here that you want to share with consumers.

  const toggleMeasureUnits = () => {
    setData((unit) => (unit === "C" ? "F" : "C"));
  };

  return (
    <MyContext.Provider value={{ data, toggleMeasureUnits }}>
      {children}
    </MyContext.Provider>
  );
}

// Create a custom hook for using the context
export function useMyContext() {
  return useContext(MyContext);
}
