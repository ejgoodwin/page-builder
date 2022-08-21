import { useEffect, useState } from "react";
import BuilderItem from "./BuilderItem";
import Padding from "./items/Padding";
import Color from "./items/Color";

const BuilderSection = ({ addCard, addSavedSection, deleteComponent, first, last, moveComponent, section }) => {

	const [sectionData, setSectionData] = useState(section);
	const [tabActiveItem, setTabActiveItem] = useState(1);

	useEffect(() => {
		setSectionData(section);
	}, [section]);

	const validatePadding = value => {
		// Add 'px' to padding string. TODO: validate, strip existing characters.
		// Empty values update to 0 and join with 'px'.
		value = value.map(item => item ? item : 0).join('px ');
		value += 'px';
		return value;
	}

	const updateItemData = (value, property, itemId) => {
		const sectionClone = structuredClone(sectionData);
		if (property === 'padding') {
			value = validatePadding(value);
		}
		for (const item in section.items) {
			if (sectionClone.items[item].id === itemId) {
				sectionClone.items[item][property] = value;
				break;
			}
		}
		setSectionData(sectionClone);
		addSavedSection(sectionClone);
	}

	const updateSectionData = (value, property) => {
		const sectionClone = structuredClone(sectionData);
		if (property === 'padding') {
			value = validatePadding(value);
		}
		sectionClone[property] = value;
		setSectionData(sectionClone);
		addSavedSection(sectionClone);
	}

	const formatComponentName = (component) => component.replaceAll('-', ' ');

	return (
		<section>
			<div className="pb-section-header">
				<h3 className="pb-section-header-heading">{formatComponentName(section.component)}</h3>
				<div className="pb-section-header-buttons">
					<button className="button button-icon button-small" onClick={() => deleteComponent(section.id)}>
						<span className="material-icons">delete</span>
					</button>
				</div>
			</div>
			<div className={`pb-section pb-section-${section.component}`}>
				<div className="pb-tab-headings">
					<button className={`pb-tab-link ${tabActiveItem === 1 ? 'pb-tab-link--active' : ''}`} onClick={() => setTabActiveItem(1)}>Item</button>
					<button className={`pb-tab-link ${tabActiveItem === 2 ? 'pb-tab-link--active' : ''}`} onClick={() => setTabActiveItem(2)}>Section</button>
				</div>

				{/* TODO: Update to use something more scaleable than 1,2 state */}
				<div className={tabActiveItem === 1 ? 'pb-show' : 'pb-hide'} >
					<ItemTab updateItemData={updateItemData} section={section} addCard={addCard} />
				</div>

				<div className={tabActiveItem === 2 ? 'pb-show' : 'pb-hide'} >
					<SectionTab section={section} updateSectionData={updateSectionData} />
				</div>

				<div className="pb-section-move-buttons">
					<button className="button button-icon-round" disabled={first} onClick={() => moveComponent('up', section.id)}>
						<span className="material-icons">arrow_drop_up</span>
					</button>
					<button className="button button-icon-round" disabled={last} onClick={() => moveComponent('down', section.id)}>
						<span className="material-icons">arrow_drop_down</span>
					</button>
				</div>
			</div>
		</section>
	);
}

function ItemTab( {section, addCard, updateItemData }) {
	return (
		<div className='pb-tab-content'>
			{section.items.map(item => <BuilderItem item={item} key={item.id} updateItemData={updateItemData} />)}
			{section.component === 'card' && section.items.length < 3 ?
				<button className="button button-small button-icon" onClick={() => addCard(section.id)}>
					<span className="material-icons md-18">add</span> Add card
				</button> : null}
		</div>
	);
}

function SectionTab( {section, updateSectionData }) {
	const [sectionClasses, setSectionClasses] = useState('');

	return (
		<div className='pb-tab-content'>
			<div className="pb-section-item">
				<div className="pb-section-item__input-group">
					<label htmlFor={`classes-${section.id}`}>Classes</label>
					<input
						className="pb-section-text-input"
						id={`classes-${section.id}`}
						placeholder="Heading..."
						type="text"
						onChange={(e) => setSectionClasses(e.target.value)}
						onBlur={() => updateSectionData(sectionClasses, 'classes')}
						value={sectionClasses} />
				</div>

				<div className="pb-section-item__input-group">
					<Padding id={section.id} updateData={updateSectionData} />
				</div>

				<div className="pb-section-item__input-group">
					<Color id={section.id} item="background" label="Background color" updateItemData={updateSectionData} />
				</div>
			</div>
		</div>
	);

}

export default BuilderSection;