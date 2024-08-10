import React, { useState } from "react";

const Heading = ({ id, section, updateItemData }) => {
  const [headingText, setHeadingText] = useState("");

  return (
    <>
      {section.component === "hero" ? (
        <h1>
          <input
            className='pb-section-text-input-preview hero__heading'
            id={`heading-${id}`}
            placeholder='Heading...'
            type='text'
            onChange={(e) => setHeadingText(e.target.value)}
            onBlur={() => updateItemData(headingText, "heading", id)}
            value={headingText}
          />
        </h1>
      ) : (
        <h2>
          <input
            className='pb-section-text-input-preview hero__heading-2'
            id={`heading-${id}`}
            placeholder='Heading...'
            type='text'
            onChange={(e) => setHeadingText(e.target.value)}
            onBlur={() => updateItemData(headingText, "heading", id)}
            value={headingText}
          />
        </h2>
      )}
    </>
  );
};

export default Heading;
