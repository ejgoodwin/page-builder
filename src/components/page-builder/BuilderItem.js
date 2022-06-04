import { useState } from "react";
import colourWheel from "../../images/colour-wheel.png";

const BuilderItem = ({ item, updateItemData }) => {

  const [headingText, setHeadingText] = useState('');
	const [bodyText, setbodyText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [padding, setPadding] = useState([]);
  const [paddingGuideHightlight, setPaddingGuideHightlight] = useState('');

  const inputHeadingTextChange = (event) => setHeadingText(event.target.value);
	const inputBodyTextChange = (event) => setbodyText(event.target.value);
  const inputBackgroundColorChange = (event) => setBackgroundColor(event.target.value);
  const inputTextColorChange = (event) => setTextColor(event.target.value);
  const inputImageChange = (event) => setImageUrl(event.target.value);
  const inputPaddingChange = (event, side) => {
    const paddingClone = [...padding];
    paddingClone[side] = event.target.value;
    setPadding(paddingClone);
  }
  const focusGuide = (side) => setPaddingGuideHightlight(side);


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
        <div className="pb-section-item__padding">
          <div className={`pb-section-item__padding-guide ${paddingGuideHightlight}`}>
            <span className="pb-section-item__padding-guide-line pb-section-item__padding-guide-line--1"></span>
            <span className="pb-section-item__padding-guide-line pb-section-item__padding-guide-line--2"></span>
            <span className="pb-section-item__padding-guide-line pb-section-item__padding-guide-line--3"></span>
            <span className="pb-section-item__padding-guide-line pb-section-item__padding-guide-line--4"></span>
          </div>
          <input
            className="pb-section-text-input"
            id={`padding-${item.id}`}
            placeholder="px"
            type="text" 
            onChange={(e) => inputPaddingChange(e, 0)}
            onBlur={() => updateItemData(padding, item.id, 'padding')}
            onFocus={() => focusGuide('top')}
            value={padding[0]} />
          <input
            className="pb-section-text-input"
            placeholder="px"
            type="text" 
            onChange={(e) => inputPaddingChange(e, 1)}
            onBlur={() => updateItemData(padding, item.id, 'padding')}
            onFocus={() => focusGuide('right')}
            value={padding[1]} />
          <input
            className="pb-section-text-input"
            placeholder="px"
            type="text" 
            onChange={(e) => inputPaddingChange(e, 2)}
            onBlur={() => updateItemData(padding, item.id, 'padding')}
            onFocus={() => focusGuide('bottom')}
            value={padding[2]} />
          <input
            className="pb-section-text-input"
            placeholder="px"
            type="text" 
            onChange={(e) => inputPaddingChange(e, 3)}
            onBlur={() => updateItemData(padding, item.id, 'padding')}
            onFocus={() => focusGuide('left')}
            value={padding[3]} />
        </div>
        <label for={`background-colour-${item.id}`}>Background colour</label>
        <div className="pb-colour-picker">
          <img className="pb-colour-picker__icon" src={colourWheel} alt="" />
          
          <input
            className="pb-section-text-input pb-colour-picker__input"
            id={`background-colour-${item.id}`}
            placeholder="Background color hex value"
            type="color" 
            onChange={(e) => inputBackgroundColorChange(e)}
            onBlur={() => updateItemData(backgroundColor, item.id, 'background')}
            value={backgroundColor} />
          <span className="pb-colour-picker__outline"></span>
        </div>
        <label for={`text-colour-${item.id}`}>Text colour</label>
        <div className="pb-colour-picker">
          <img className="pb-colour-picker__icon" src={colourWheel} alt="" />
          <input
            className="pb-section-text-input pb-colour-picker__input"
            id={`text-colour-${item.id}`}
            placeholder="Text colour hex value"
            type="color" 
            onChange={(e) => inputTextColorChange(e)}
            onBlur={() => updateItemData(textColor, item.id, 'color')}
            value={textColor} />
          <span className="pb-colour-picker__outline"></span>
        </div>
      </div>
    </div>
  );
}

export default BuilderItem;