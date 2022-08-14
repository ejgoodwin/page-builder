import { createContext, useState } from "react";

const ButtonStylingContext = createContext();

export function ButtonStylingContextProvider({ children }) {
  const [primaryStyling, setPrimaryStyling] = useState(['lightblue', 'black']);
  const [secondaryStyling, setSecondaryStyling] = useState(['salmon', 'white']);

  return (
    <ButtonStylingContext.Provider value={{ primaryStyling, secondaryStyling }}>{children}</ButtonStylingContext.Provider>
  );
}

export default ButtonStylingContext; 