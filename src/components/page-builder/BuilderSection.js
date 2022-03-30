import { useEffect, useState } from "react";
import BuilderItem from "./BuilderItem";

const BuilderSection = ({ addCard, addSavedSection, deleteComponent, section }) => {

	const [sectionData, setSectionData] = useState(section);

	useEffect(() => {
		setSectionData(section);
	}, [section])

	const updateItemData = (value, itemId, property) => {
		const sectionClone = structuredClone(sectionData);
		for (const item in section.items) {
			if (sectionClone.items[item].id === itemId) {
				sectionClone.items[item][property] = value;
				break;
			}
		}
		setSectionData(sectionClone);
	}

	const saveSection = () => {
		const sectionClone = structuredClone(sectionData);
		addSavedSection(sectionClone);
	}
	
	return (
		<section className={`pb-section pb-section-${section.component}`}>
			<span className="pb-section-component-name">{section.component}</span>
			{section.items.map(item => <BuilderItem item={item} key={item.id} updateItemData={updateItemData} /> 	)}
			<button onClick={saveSection}>Save</button>
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