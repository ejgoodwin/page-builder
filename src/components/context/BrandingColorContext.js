import { createContext, useState } from 'react'

const BrandingColorContext = createContext();

export function BrandingColourContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [primaryStyling, setPrimaryStyling] = useState(['#057BBA', '#fff']);
  const [secondaryStyling, setSecondaryStyling] = useState(['#FAD287', '#000']);

  const addColor = (color) => {
    setItems((prevState) => [...prevState, color]);
  }

  const removeColor = (ItemIndex) => {
    setItems((prevState) => [...prevState].filter((item, index) => index !== ItemIndex));
  }

  const updateLastColor = (color) => {
    setItems((prevState) => {
      const updatedColors = [...prevState];
      updatedColors[updatedColors.length - 1] = color;
      return updatedColors;
    });
  }

  const updatePrimaryButton = (styling) => {
    setPrimaryStyling(styling);
    console.log('updated primary', primaryStyling)
  }

  const updateSecondaryButton = (styling) => {
    setSecondaryStyling(styling);
  }

  return (
    <BrandingColorContext.Provider
      value={{ items, primaryStyling, secondaryStyling, addColor,updateLastColor, updatePrimaryButton, updateSecondaryButton, removeColor }}>
      {children}
    </BrandingColorContext.Provider>
  );
}

export default BrandingColorContext;