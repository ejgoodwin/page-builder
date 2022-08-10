import React, { useState } from "react";

const Button = ({ id, updateItemData }) => {
  const [buttonPath, setButtonPath] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [buttonType, setButtonType] = useState('button--primary');

  return (
    <React.Fragment>
      <label htmlFor={`button-${id}`}>Button</label>
      <div className="pb-buttons-item">
        <input
          className="pb-section-text-input"
          onBlur={() => updateItemData([{ link: buttonPath, label: buttonText, classes: buttonType }], 'buttons', id)}
          onChange={(e) => setButtonPath(e.target.value)}
          placeholder="Link"
          value={buttonPath} />
        <input
          className="pb-section-text-input"
          onBlur={() => updateItemData([{ link: buttonPath, label: buttonText, classes: buttonType }], 'buttons', id)}
          onChange={(e) => setButtonText(e.target.value)}
          value={buttonText}
          placeholder="Label" />
        <select className="pb-section-text-input" onBlur={() => updateItemData([{ link: buttonPath, label: buttonText, classes: buttonType }], 'buttons', id)} onChange={(e) => setButtonType(e.target.value)}>
          <option value='button--primary'>Primary</option>
          <option value='button--secondary'>Secondary</option>
        </select>
      </div>
    </React.Fragment>
  );
}

export default Button;