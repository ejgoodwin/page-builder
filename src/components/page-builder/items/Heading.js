import React, { useState } from "react";

const Heading = ({ id, updateItemData }) => {
  const [headingText, setHeadingText] = useState('');

  return (
    <React.Fragment>
      <label htmlFor={`heading-${id}`}>Heading</label>
      <input
        className="pb-section-text-input"
        id={`heading-${id}`}
        placeholder="Heading..."
        type="text"
        onChange={(e) => setHeadingText(e.target.value)}
        onBlur={() => updateItemData(headingText, 'heading', id)}
        value={headingText} />
    </React.Fragment>
  );
}

export default Heading;