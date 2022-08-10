import React, { useState } from "react";
import colourWheel from "../../../images/colour-wheel.png";

const Color = ({ id, item, label, updateItemData }) => {
  const [backgroundColor, setBackgroundColor] = useState('');

  return (
    <React.Fragment>
      <label htmlFor={`background-colour-${id}`}>{label}</label>
      <div className="pb-colour-picker">
        <img className="pb-colour-picker__icon" src={colourWheel} alt="" />

        <input
          className="pb-section-text-input pb-colour-picker__input"
          id={`background-colour-${id}`}
          placeholder="Background color hex value"
          type="color"
          onChange={(e) => setBackgroundColor(e.target.value)}
          onBlur={() => updateItemData(backgroundColor, item, id)}
          value={backgroundColor} />
        <span className="pb-colour-picker__outline"></span>
      </div>
    </React.Fragment>
  );
}

export default Color;