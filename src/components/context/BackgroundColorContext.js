import { createContext, useState } from 'react'

const BackgroundColorContext = createContext();

export function BackgroundColorContextProvider({ children }) {
  const [items, setItems] = useState([]);

  const addITem = (color) => {
    setItems((prevState) => [...prevState, color]);
  }

  const removeColor = (ItemIndex) => {
    setItems((prevState) => [...prevState].filter((item, index) => index !== ItemIndex));
  }

  return (
    <BackgroundColorContext.Provider value={{ items, addITem, removeColor }}>{children}</BackgroundColorContext.Provider>
  );
}

export default BackgroundColorContext;