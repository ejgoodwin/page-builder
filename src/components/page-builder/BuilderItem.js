import { useState } from "react";
import colourWheel from "../../images/colour-wheel.png";

const BuilderItem = ({ item, updateItemData }) => {

  const [headingText, setHeadingText] = useState('');
  const [buttonPath, setButtonPath] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [buttonType, setButtonType] = useState('button--primary');
	const [bodyText, setbodyText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [padding, setPadding] = useState([]);
  const [paddingGuideHightlight, setPaddingGuideHightlight] = useState('');

  const inputPaddingChange = (event, side) => {
    const paddingClone = [...padding];
    paddingClone[side] = event.target.value;
    setPadding(paddingClone);
  }

  return (
    <div className={`pb-section-item ${item.id}__item`} key={item.id}>

      {/* Heading and text */}
      <div className="pb-section-item__input-group">
        <label htmlFor={`heading-${item.id}`}>Heading</label>
        <input
          className="pb-section-text-input"
          id={`heading-${item.id}`}
          placeholder="Heading..."
          type="text" 
          onChange={(e) => setHeadingText(e.target.value)}
          onBlur={() => updateItemData(headingText, item.id, 'heading')}
          value={headingText} />
        <label htmlFor={`text-${item.id}`}>Text</label>
        <textarea
          className="pb-section-text-input"
          id={`text-${item.id}`}
          placeholder="Text..."
          type="text" onChange={(e) => setbodyText(e.target.value)}
          onBlur={() => updateItemData(bodyText, item.id, 'text')}
          value={bodyText} />
      </div>

      {/* Image and buttons */}
      <div className="pb-section-item__input-group">
        <label htmlFor={`image-${item.id}`}>Image</label>
          <input
            className="pb-section-text-input"
            id={`image-${item.id}`}
            placeholder="Image url"
            type="text" 
            onChange={(e) => setImageUrl(e.target.value)}
            onBlur={() => updateItemData(imageUrl, item.id, 'image')}
            value={imageUrl} />
        <label htmlFor={`button-${item.id}`}>Button</label>
        <div>
          <label>Link</label>
          <input
            onBlur={() => updateItemData([{link: buttonPath, label: buttonText, classes: buttonType}], item.id, 'buttons')}
            onChange={(e) => setButtonPath(e.target.value)}
            value={buttonPath} />
          <label>Text</label>
          <input
            onBlur={() => updateItemData([{link: buttonPath, label: buttonText, classes: buttonType}], item.id, 'buttons')}
            onChange={(e) => setButtonText(e.target.value)}
            value={buttonText} />
          <label>Button type</label>
          <select  onBlur={() => updateItemData([{link: buttonPath, label: buttonText, classes: buttonType}], item.id, 'buttons')} onChange={(e) => setButtonType(e.target.value)}>
            <option value='button--primary'>Primary</option>
            <option value='button--secondary'>Secondary</option>
          </select>
        </div> 
      </div>

      {/* Padding and colours */}
      <div className="pb-section-item__input-group">
        <label htmlFor={`padding-${item.id}`}>Padding</label>
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
            onFocus={() => setPaddingGuideHightlight('top')}
            value={padding[0]} />
          <input
            className="pb-section-text-input"
            placeholder="px"
            type="text" 
            onChange={(e) => inputPaddingChange(e, 1)}
            onBlur={() => updateItemData(padding, item.id, 'padding')}
            onFocus={() => setPaddingGuideHightlight('right')}
            value={padding[1]} />
          <input
            className="pb-section-text-input"
            placeholder="px"
            type="text" 
            onChange={(e) => inputPaddingChange(e, 2)}
            onBlur={() => updateItemData(padding, item.id, 'padding')}
            onFocus={() => setPaddingGuideHightlight('bottom')}
            value={padding[2]} />
          <input
            className="pb-section-text-input"
            placeholder="px"
            type="text" 
            onChange={(e) => inputPaddingChange(e, 3)}
            onBlur={() => updateItemData(padding, item.id, 'padding')}
            onFocus={() => setPaddingGuideHightlight('left')}
            value={padding[3]} />
        </div>
        <label htmlFor={`background-colour-${item.id}`}>Background colour</label>
        <div className="pb-colour-picker">
          <img className="pb-colour-picker__icon" src={colourWheel} alt="" />
          
          <input
            className="pb-section-text-input pb-colour-picker__input"
            id={`background-colour-${item.id}`}
            placeholder="Background color hex value"
            type="color" 
            onChange={(e) => setBackgroundColor(e.target.value)}
            onBlur={() => updateItemData(backgroundColor, item.id, 'background')}
            value={backgroundColor} />
          <span className="pb-colour-picker__outline"></span>
        </div>
        <label htmlFor={`text-colour-${item.id}`}>Text colour</label>
        <div className="pb-colour-picker">
          <img className="pb-colour-picker__icon" src={colourWheel} alt="" />
          <input
            className="pb-section-text-input pb-colour-picker__input"
            id={`text-colour-${item.id}`}
            placeholder="Text colour hex value"
            type="color" 
            onChange={(e) => setTextColor(e.target.value)}
            onBlur={() => updateItemData(textColor, item.id, 'color')}
            value={textColor} />
          <span className="pb-colour-picker__outline"></span>
        </div>
      </div>
    </div>
  );
}

export default BuilderItem;