import { useEffect, useState } from "react";
import BuilderItem from "./BuilderItem";
import colourWheel from "../../images/colour-wheel.png";

const BuilderSection = ({ addCard, addSavedSection, deleteComponent, first, last, moveComponent, section }) => {

	const [sectionData, setSectionData] = useState(section);
	const [tabActiveItem, setTabActiveItem] = useState(true);
	const [sectionClasses, setSectionClasses] = useState('');
	const [sectionPadding, setSectionPadding] = useState('');
	const [sectionBackgroundColour, setSectionBackgroundColour] = useState('');

	const inputSectionClassesChange = (event) => setSectionClasses(event.target.value);
	const inputSectionPaddingChange = (event) => setSectionPadding(event.target.value);
	const inputSectionBackgroundColourChange = (event) => setSectionBackgroundColour(event.target.value);

	useEffect(() => {
		setSectionData(section);
	}, [section]);

	const validatePadding = value => {
		// Add 'px' to padding string. TODO: validate, strip existing characters.
		value = value.join('px ');
		value += 'px';
		return value;
	}

	const updateItemData = (value, itemId, property) => {
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
	}

	const updateSectionData = (value, property) => {
		const sectionClone = structuredClone(sectionData);
		if (property === 'padding') {
			value = validatePadding(value);
		}
		sectionClone[property] = value;
		setSectionData(sectionClone);
	}

	const saveSection = () => {
		const sectionClone = structuredClone(sectionData);
		addSavedSection(sectionClone);
	}

	return (
		<section>
			<div className="pb-section-header">
				<h3 className="pb-section-header-heading">{section.component}</h3>
				<div className="pb-section-header-buttons">
					<button className="button button-icon button-small button--red" onClick={() => deleteComponent(section.id)}>
						<span className="material-icons md-18">close</span>Delete
					</button>
					<button className="button button-icon button-small button--primary" onClick={saveSection}>
						<span className="material-icons md-18">check</span>Save
					</button>
				</div>
			</div>
			<div className={`pb-section pb-section-${section.component}`}>
				<div className="pb-tab-headings">
					<button className={`pb-tab-link ${tabActiveItem ? 'pb-tab-link--active' : ''}`} onClick={() => setTabActiveItem(true)}>Item</button>
					<button className={`pb-tab-link ${!tabActiveItem ? 'pb-tab-link--active' : ''}`} onClick={() => setTabActiveItem(false)}>Section</button>
				</div>
				<div className={`pb-tab-content ${tabActiveItem ? 'pb-tab-content--show' : ''}`}>
					{section.items.map(item => <BuilderItem item={item} key={item.id} updateItemData={updateItemData} />)}
					{section.component === 'card' && section.items.length < 3 ?
						<button className="button button-small button-icon" onClick={() => addCard(section.id)}>
							<span className="material-icons md-18">add</span> Add card
						</button> : null}
				</div>

				<div className={`pb-tab-content ${!tabActiveItem ? 'pb-tab-content--show' : ''}`}>
					<div className="pb-section-item">
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

						<div className="pb-section-item__input-group">
							<label for={`padding-${section.id}`}>Padding</label>
							<input
								className="pb-section-text-input"
								id={`padding-${section.id}`}
								placeholder="top right bottom left"
								type="text"
								onChange={(e) => inputSectionPaddingChange(e)}
								onBlur={() => updateSectionData(sectionPadding, 'padding')}
								value={sectionPadding} />
						</div>

						<div className="pb-section-item__input-group">
							<label for={`background-colour-${section.id}`}>Background colour</label>
							<div className="pb-colour-picker">
         				 <img className="pb-colour-picker__icon" src={colourWheel} alt="" />
									<input
										className="pb-section-text-input pb-colour-picker__input"
										id={`background-colour-${section.id}`}
										placeholder="Hex value"
										type="color"
										onChange={(e) => inputSectionBackgroundColourChange(e)}
										onBlur={() => updateSectionData(sectionBackgroundColour, 'background')}
										value={sectionBackgroundColour} />
									<span className="pb-colour-picker__outline"></span>
							</div>
						</div>
					</div>
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

export default BuilderSection;