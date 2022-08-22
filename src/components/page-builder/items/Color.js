import React, { useContext, useState } from "react";
import colourWheel from "../../../images/colour-wheel.png";
import BrandingColourContext from "../../context/BrandingColorContext";

const Color = ({ id, item, label, updateItemData }) => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const { items } = useContext(BrandingColourContext);

  const clickBrandingColours = (colorItem) => {
    setBackgroundColor(colorItem);
    updateItemData(colorItem, item, id);
  }

  return (
    <React.Fragment>
      <label htmlFor={`background-colour-${id}`}>{label}</label>
      <div className="pb-branding-color-tile-container pb-branding-color-tile-container--large-gap">
        <div className="pb-branding-color-tile" style={{ background: backgroundColor }}></div>

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

        {items.length > 0 ?
          <div className="pb-branding-color-tile-suggestions">
            {items.map((colorItem) => <button
              className="pb-branding-color-tile pb-branding-color-tile--suggestion"
              onClick={() => clickBrandingColours(colorItem)}
              style={{ background: `${colorItem}` }}>
            </button>)}
          </div>
          : ''}

      </div>
    </React.Fragment>
  );
}

export default Color;