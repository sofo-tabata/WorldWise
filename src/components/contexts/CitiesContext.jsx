import { createContext, useContext } from "react";
import { useState } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [currentCity, setCurrentCity] = useState({});

  return (
    <CitiesContext.Provider
      value={{
        currentCity,
        setCurrentCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside of the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
