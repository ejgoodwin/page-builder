import React, { useContext, useEffect, useState } from "react";
import BackgroundColorContext from "../../context/BackgroundColorContext";

const Button = ({ id, updateItemData }) => {
 
  const [buttonData, setButtonData] = useState({});
  // const { updatePrimaryButton, updateSecondaryButton } = useContext(BackgroundColorContext);

  // Apply primary type to the button.
  useEffect(() => {
    setButtonData((prevState) => ({...prevState, type: 'primary'}));
  }, [])
  
  return (
    <React.Fragment>
      <label htmlFor={`button-${id}`}>Button</label>
      <div className="pb-buttons-item">
        <input
          className="pb-section-text-input"
          onBlur={() => updateItemData([buttonData], 'buttons', id)}
          onChange={(e) => setButtonData((prevState) => ({...prevState, link: e.target.value}))}
          placeholder="Link"
          value={buttonData.link} />
        <input
          className="pb-section-text-input"
          onBlur={() => updateItemData([buttonData], 'buttons', id)}
          onChange={(e) => setButtonData((prevState) => ({...prevState, label: e.target.value}))}
          placeholder="Label"
          value={buttonData.label} />
        <select
          className="pb-section-text-input"
          onBlur={() => updateItemData([buttonData], 'buttons', id)}
          onChange={(e) => setButtonData((prevState) => {
            return {
              ...prevState,
              type: e.target.value,
            }
          })}>
            <option value='primary'>Primary</option>
            <option value='secondary'>Secondary</option>
        </select>
      </div>
    </React.Fragment>
  );
}

export default Button;