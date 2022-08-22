import { createContext, useState } from 'react'

const BackgroundColorContext = createContext();

export function BrandingContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [primaryStyling, setPrimaryStyling] = useState(['#057BBA', '#fff']);
  const [secondaryStyling, setSecondaryStyling] = useState(['#FAD287', '#000']);

  const addITem = (color) => {
    setItems((prevState) => [...prevState, color]);
  }

  const removeColor = (ItemIndex) => {
    setItems((prevState) => [...prevState].filter((item, index) => index !== ItemIndex));
  }

  const updatePrimaryButton = (styling) => {
    setPrimaryStyling(styling);
    console.log('updated primary', primaryStyling)
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