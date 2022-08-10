import React, { useState } from "react";

const Image = ({ id, updateItemData }) => {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <React.Fragment>
        <label htmlFor={`image-${id}`}>Image</label>
          <input
            className="pb-section-text-input"
            id={`image-${id}`}
            placeholder="Image url"
            type="text" 
            onChange={(e) => setImageUrl(e.target.value)}
            onBlur={() => updateItemData(imageUrl,'image', id)}
            value={imageUrl} />
    </React.Fragment>
  );
}

export default Image;