import { useState } from "react";

// TODO: handle text updates for multiple items, e.g. cards.

const BuilderSection = ({ addCard, addSavedSection, deleteComponent, section }) => {

	const [headingText, setHeadingText] = useState('');
	const [bodyText, setbodyText] = useState('');

	const inputHeadingTextChange = (event) => setHeadingText(event.target.value);
	const inputBodyTextChange = (event) => setbodyText(event.target.value);

	const saveSection = () => {
		const sectionClone = structuredClone(section);

		sectionClone.items[0].heading = headingText;
		sectionClone.items[0].text = bodyText;

		addSavedSection(sectionClone);
	}
	
	return (
		<section className={`pb-section pb-section-${section.component}`}>
			<span className="pb-section-component-name">{section.component}</span>
			{section.items.map(item => 
				<div className={`pb-section-item ${item.component}__item`} key={item.id}>
					<input
						className="pb-section-text-input"
						placeholder="Heading..."
						type="text" onChange={(e) => inputHeadingTextChange(e)}
						value={headingText} />
					<textarea
						className="pb-section-text-input"
						placeholder="Text..."
						type="text" onChange={(e) => inputBodyTextChange(e)}
						value={bodyText} />
					<button onClick={saveSection}>Save</button>
				</div>
			)}

			{section.component === 'card' && section.items.length < 3 ? <button className="button button-small button-icon" onClick={() => addCard(section.id)}>
				<span className="material-icons md-18">add</span> Add card</button> : null}

				<button className="button pb-section-delete button-icon-round" onClick={() => deleteComponent(section.id)}>
					<span className="material-icons">close</span>
				</button>
				{/* <div className="pb-section-move-buttons">
					<button className="button button-icon-round" disabled={i === 0} onClick={() => moveComponent('up', section.id)}>
						<span className="material-icons">arrow_drop_up</span>
					</button>
					<button className="button button-icon-round" disabled={i === data.length - 1} onClick={() => moveComponent('down', section.id)}>
						<span className="material-icons">arrow_drop_down</span>
					</button>
				</div> */}
		
		</section>
	);
}

export default BuilderSection;