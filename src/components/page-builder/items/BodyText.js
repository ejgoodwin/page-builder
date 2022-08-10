import React, { useState } from "react";

const BodyText = ({ id, updateItemData }) => {
  const [bodyText, setbodyText] = useState('');

  return (
    <React.Fragment>
      <label htmlFor={`text-${id}`}>Text</label>
      <textarea
        className="pb-section-text-input"
        id={`text-${id}`}
        placeholder="Text..."
        type="text" onChange={(e) => setbodyText(e.target.value)}
        onBlur={() => updateItemData(bodyText, 'text', id)}
        value={bodyText} />
    </React.Fragment>
  );
}

export default BodyText;
