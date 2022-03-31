import { useEffect, useState } from "react";
import BuilderItem from "./BuilderItem";

const BuilderSection = ({ addCard, addSavedSection, deleteComponent, section }) => {

	const [sectionData, setSectionData] = useState(section);
	const [tabActiveItem, setTabActiveItem] = useState(true);
	const [sectionClasses, setSectionClasses] = useState('');

  const inputSectionClassesChange = (event) => setSectionClasses(event.target.value);

	useEffect(() => {
		setSectionData(section);
	}, [section])

	const updateItemData = (value, itemId, property) => {
		const sectionClone = structuredClone(sectionData);
		// Add 'px' to padding string. TODO: validate, strip existing characters.
		if (property === 'padding') {
			value = value.split(' ').join('px ');
			value += 'px';
		}
		for (const item in section.items) {
			if (sectionClone.items[item].id === itemId) {
				sectionClone.items[item][property] = value;
				break;
			}
		}
		setSectionData(sectionClone);
	}

	const updateSectionData = (value, property) => {
		const sectionClone = structuredClone(sectionData);
		sectionClone[property] = value;
		setSectionData(sectionClone);
	}

	const saveSection = () => {
		const sectionClone = structuredClone(sectionData);
		addSavedSection(sectionClone);
	}
	
	return (
		<section className={`pb-section pb-section-${section.component}`}>
			<span className="pb-section-component-name">{section.component}</span>
			
			<div className="pb-tab-headings">
				<button onClick={() => setTabActiveItem(true)}>Item</button>
				<button onClick={() => setTabActiveItem(false)}>Section</button>
			</div>
			<div className={`pb-tab-content ${tabActiveItem ? 'pb-tab-content--show' : ''}`}>
				{section.items.map(item => <BuilderItem item={item} key={item.id} updateItemData={updateItemData} /> 	)}
				{section.component === 'card' && section.items.length < 3 ?
					<button className="button button-small button-icon" onClick={() => addCard(section.id)}>
						<span className="material-icons md-18">add</span> Add card
					</button> : null}
			</div>

			<div className={`pb-tab-content ${!tabActiveItem ? 'pb-tab-content--show' : ''}`}>
				<div className="pb-section-item__input-group">
					<label for={`classes-${section.id}`}>Classes</label>
					<input
						className="pb-section-text-input"
						id={`classes-${section.id}`}
						placeholder="Heading..."
						type="text" 
						onChange={(e) => inputSectionClassesChange(e)}
						onBlur={() => updateSectionData(sectionClasses, 'classes')}
						value={sectionClasses} />
				</div>
			</div>

			<button onClick={saveSection}>Save</button>
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