import React, { useState } from "react";

const Padding = ({ id, updateData }) => {
  const [padding, setPadding] = useState(Array(4).fill(''));
  const [paddingGuideHightlight, setPaddingGuideHightlight] = useState('');

  const inputPaddingChange = (event, side) => {
    const paddingClone = [...padding];
    paddingClone[side] = event.target.value;
    setPadding(paddingClone);
  }

  return (
    <React.Fragment>
      <label htmlFor={`padding-${id}`}>Padding</label>
      <div className="pb-section-item__padding">
        <div className={`pb-section-item__padding-guide ${paddingGuideHightlight}`}>
          <span className="pb-section-item__padding-guide-line pb-section-item__padding-guide-line--1"></span>
          <span className="pb-section-item__padding-guide-line pb-section-item__padding-guide-line--2"></span>
          <span className="pb-section-item__padding-guide-line pb-section-item__padding-guide-line--3"></span>
          <span className="pb-section-item__padding-guide-line pb-section-item__padding-guide-line--4"></span>
        </div>
        <input
          className="pb-section-text-input"
          id={`padding-${id}`}
          placeholder="px"
          type="text"
          onChange={(e) => inputPaddingChange(e, 0)}
          onBlur={() => updateData(padding, 'padding', id)}
          onFocus={() => setPaddingGuideHightlight('top')}
          value={padding[0]} />
        <input
          className="pb-section-text-input"
          placeholder="px"
          type="text"
          onChange={(e) => inputPaddingChange(e, 1)}
          onBlur={() => updateData(padding, 'padding', id)}
          onFocus={() => setPaddingGuideHightlight('right')}
          value={padding[1]} />
        <input
          className="pb-section-text-input"
          placeholder="px"
          type="text"
          onChange={(e) => inputPaddingChange(e, 2)}
          onBlur={() => updateData(padding, 'padding', id)}
          onFocus={() => setPaddingGuideHightlight('bottom')}
          value={padding[2]} />
        <input
          className="pb-section-text-input"
          placeholder="px"
          type="text"
          onChange={(e) => inputPaddingChange(e, 3)}
          onBlur={() => updateData(padding, 'padding', id)}
          onFocus={() => setPaddingGuideHightlight('left')}
          value={padding[3]} />
      </div>
    </React.Fragment>
  );
}

export default Padding;