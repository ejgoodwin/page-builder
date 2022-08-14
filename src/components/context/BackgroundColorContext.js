import { createContext, useState } from 'react'

const BackgroundColorContext = createContext();

export function BackgroundColorContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [primaryStyling, setPrimaryStyling] = useState(['#057BBA', 'white']);
  const [secondaryStyling, setSecondaryStyling] = useState(['#FAD287', 'black']);

  const addITem = (color) => {
    setItems((prevState) => [...prevState, color]);
  }

  const removeColor = (ItemIndex) => {
    setItems((prevState) => [...prevState].filter((item, index) => index !== ItemIndex));
  }

  const updatePrimaryButton = (styling) => {
    setPrimaryStyling(styling);
  }

  const updateSecondaryButton = (styling) => {
    setSecondaryStyling(styling);
  }

  return (
    <BackgroundColorContext.Provider
      value={{ items, primaryStyling, secondaryStyling, addITem, updatePrimaryButton, updateSecondaryButton, removeColor }}>
      {children}
    </BackgroundColorContext.Provider>
  );
}

export default BackgroundColorContext;