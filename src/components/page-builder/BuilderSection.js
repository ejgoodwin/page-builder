const BuilderSection = ({ item, inputTextChange, itemIndex }) => {
	return (
		<div className={`pb-section-item ${item.component}__item`}>
			<input
				className="pb-section-text-input"
				placeholder="Heading..."
				type="text" onChange={(e) => inputTextChange(e, item.id, itemIndex, 'heading')} />
			<textarea
				className="pb-section-text-input"
				placeholder="Text..."
				type="text" onChange={(e) => inputTextChange(e, item.id, itemIndex, 'text')} />
		</div>
	);
}

export default BuilderSection;