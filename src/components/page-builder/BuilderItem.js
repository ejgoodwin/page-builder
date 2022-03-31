import { useState } from "react";

const BuilderItem = ({ item, updateItemData }) => {

  const [headingText, setHeadingText] = useState('');
	const [bodyText, setbodyText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [padding, setPadding] = useState('');

  const inputHeadingTextChange = (event) => setHeadingText(event.target.value);
	const inputBodyTextChange = (event) => setbodyText(event.target.value);
  const inputBackgroundColorChange = (event) => setBackgroundColor(event.target.value);
  const inputTextColorChange = (event) => setTextColor(event.target.value);
  const inputImageChange = (event) => setImageUrl(event.target.value);
  const inputPaddingChange = (event) => setPadding(event.target.value);


  return (
    <div className={`pb-section-item ${item.id}__item`} key={item.id}>

      {/* Heading and text */}
      <div className="pb-section-item__input-group">
        <label for={`heading-${item.id}`}>Heading</label>
        <input
          className="pb-section-text-input"
          id={`heading-${item.id}`}
          placeholder="Heading..."
          type="text" 
          onChange={(e) => inputHeadingTextChange(e)}
          onBlur={() => updateItemData(headingText, item.id, 'heading')}
          value={headingText} />
        <label for={`text-${item.id}`}>Text</label>
        <textarea
          className="pb-section-text-input"
          id={`text-${item.id}`}
          placeholder="Text..."
          type="text" onChange={(e) => inputBodyTextChange(e)}
          onBlur={() => updateItemData(bodyText, item.id, 'text')}
          value={bodyText} />
      </div>

      {/* Image and buttons */}
      <div className="pb-section-item__input-group">
        <label for={`image-${item.id}`}>Image</label>
          <input
            className="pb-section-text-input"
            id={`image-${item.id}`}
            placeholder="Image url"
            type="text" 
            onChange={(e) => inputImageChange(e)}
            onBlur={() => updateItemData(imageUrl, item.id, 'image')}
            value={imageUrl} />
      </div>

      {/* Padding and colours */}
      <div className="pb-section-item__input-group">
        <label for={`padding-${item.id}`}>Padding</label>
          <input
            className="pb-section-text-input"
            id={`padding-${item.id}`}
            placeholder="top right bottom left"
            type="text" 
            onChange={(e) => inputPaddingChange(e)}
            onBlur={() => updateItemData(padding, item.id, 'padding')}
            value={padding} />
        <label for={`background-colour-${item.id}`}>Background colour</label>
        <input
          className="pb-section-text-input"
          id={`background-colour-${item.id}`}
          placeholder="Background color hex value"
          type="text" 
          onChange={(e) => inputBackgroundColorChange(e)}
          onBlur={() => updateItemData(backgroundColor, item.id, 'background')}
          value={backgroundColor} />
        <label for={`text-colour-${item.id}`}>Text colour</label>
        <input
          className="pb-section-text-input"
          id={`text-colour-${item.id}`}
          placeholder="Text colour hex value"
          type="text" 
          onChange={(e) => inputTextColorChange(e)}
          onBlur={() => updateItemData(textColor, item.id, 'color')}
          value={textColor} />
      </div>
    </div>
  );
}

export default BuilderItem;