import { useState } from "react";

const BuilderItem = ({ item, updateItemData }) => {

  const [headingText, setHeadingText] = useState('');
	const [bodyText, setbodyText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');

  const inputHeadingTextChange = (event) => setHeadingText(event.target.value);
	const inputBodyTextChange = (event) => setbodyText(event.target.value);
  const inputBackgroundColorChange = (event) => setBackgroundColor(event.target.value);
  const inputTextColorChange = (event) => setTextColor(event.target.value);


  return (
    <div className={`pb-section-item ${item.component}__item`} key={item.id}>
      <input
        className="pb-section-text-input"
        placeholder="Heading..."
        type="text" 
        onChange={(e) => inputHeadingTextChange(e)}
        onBlur={() => updateItemData(headingText, item.id, 'heading')}
        value={headingText} />
      <textarea
        className="pb-section-text-input"
        placeholder="Text..."
        type="text" onChange={(e) => inputBodyTextChange(e)}
        onBlur={() => updateItemData(bodyText, item.id, 'text')}
        value={bodyText} />
      <input
        className="pb-section-text-input"
        placeholder="Background color hex value"
        type="text" 
        onChange={(e) => inputBackgroundColorChange(e)}
        onBlur={() => updateItemData(backgroundColor, item.id, 'background')}
        value={backgroundColor} />
      <input
        className="pb-section-text-input"
        placeholder="Text colour hex value"
        type="text" 
        onChange={(e) => inputTextColorChange(e)}
        onBlur={() => updateItemData(textColor, item.id, 'color')}
        value={textColor} />
    </div>
  );
}

export default BuilderItem;