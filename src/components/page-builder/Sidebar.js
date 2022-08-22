import React, { useContext, useState } from "react";
import BrandingColourContext from "../context/BrandingColorContext";
import hero from "../../images/components/hero.png";
import card from "../../images/components/cards.png";
import textBlock from "../../images/components/text-block-left.png";
import textBlockCenter from "../../images/components/text-block-center.png";

const Sidebar = ({ addComponent }) => {
	const [activeTab, setActiveTab] = useState(1);
	const [sidebarIsVisible, setSidebarIsVisible] = useState(false);

	const toggleSidebar = () => {
		setSidebarIsVisible((prevState) => !prevState);
	}

	return (
		<React.Fragment>
			<button
				className="pb-sidebar__toggle-button pb-sidebar__toggle-button--open"
				onClick={() => toggleSidebar()}>
				<span className="material-icons">menu</span>
			</button>
			<div className={`pb-sidebar ${sidebarIsVisible ? 'pb-sidebar--open' : ''}`}>
				<div className="pb-tab-headings">
					<button
						className={`pb-tab-link ${activeTab === 1 ? 'pb-tab-link--active' : ''}`}
						onClick={() => setActiveTab(1)}>
						Components
					</button>
					<button
						className={`pb-tab-link ${activeTab === 2 ? 'pb-tab-link--active' : ''}`}
						onClick={() => setActiveTab(2)}>
						Branding
					</button>
					<button
						className="pb-sidebar__toggle-button pb-sidebar__toggle-button--close"
						onClick={() => toggleSidebar()}>
						<span className="material-icons">close</span>
					</button>
				</div>

				{activeTab === 1 ? <ComponentsTab addComponent={addComponent} /> : <BrandingTab />}
			</div>
		</React.Fragment>
	);
}

function ComponentsTab({ addComponent }) {
	return (
		<div>
			<h4>Hero</h4>
			<div className="pb-sidebar-component">
				<button className="button pb-sidebar-component__button" onClick={() => addComponent('hero', '')}>
					<img src={hero} alt="Hero left aligned" />
					Left aligned
				</button>
			</div>

			<h4>Card</h4>
			<div className="pb-sidebar-component">
				<button className="button pb-sidebar-component__button" onClick={() => addComponent('card', '')}>
					<img src={card} alt="Card" />
					Card
				</button>
			</div>

			<h4>Text block</h4>
			<div className="pb-sidebar-component">
				<button className="button pb-sidebar-component__button" onClick={() => addComponent('text-block', '')}>
					<img src={textBlock} alt="Text block left aligned" />
					Left aligned
				</button>

				<button className="button pb-sidebar-component__button" onClick={() => addComponent('text-block', 'text-block--center')}>
					<img src={textBlockCenter} alt="Text block center aligned" />
					Center aligned
				</button>
			</div>
		</div>
	);
}

function BrandingTab() {
	const { items, primaryStyling, secondaryStyling, addITem, updatePrimaryButton, updateSecondaryButton, removeColor } = useContext(BrandingColourContext);

	return (
		<div>
			<div className="pb-sidebar__section">
				<h3>Colours</h3>
				<div className="pb-branding-color-tile-container">
					{items.map((colorItem, index) => <button
						className="pb-branding-color-tile"
						onClick={() => removeColor(index)}
						style={{ background: `${colorItem}` }}>
						<span className="pb-branding-color-tile-icon material-icons md-18">remove</span>
					</button>)}
					<button className="pb-branding-color-tile pb-branding-color-tile--add">
						<span className="pb-branding-color-tile-add-icon material-icons md-18">add</span>
						<input
							className="pb-colour-picker__input"
							onBlur={(e) => addITem(e.target.value)}
							type="color"
						/>
					</button>
				</div>
			</div>

			<div className="pb-sidebar__section">
				<h3>Buttons</h3>
				{items.length < 1 ? 'Add some colours above to apply button styling' : ''}

				<div className={items.length < 1 ? 'pb-hide' : ''}>
					<div className="pb-sidebar__section-inner">
						<h4>Primary</h4>
						<button className='button' style={{ backgroundColor: primaryStyling[0], color: primaryStyling[1] }}>Primary button</button>
						<label>Background colour</label>
						<div className="pb-branding-color-tile-container">
							{items.map((colorItem) => <button
								className="pb-branding-color-tile"
								onClick={() => updatePrimaryButton([colorItem, primaryStyling[1]])}
								style={{ background: `${colorItem}` }}>
							</button>)}
						</div>

						<label>Text colour</label>
						<div className="pb-branding-color-tile-container">
							{items.map((colorItem) => <button
								className="pb-branding-color-tile"
								onClick={() => updatePrimaryButton([primaryStyling[0], colorItem])}
								style={{ background: `${colorItem}` }}>
							</button>)}
						</div>
					</div>

					<div className="pb-sidebar__section-inner">
						<h4>Secondary</h4>
						<button className='button' style={{ backgroundColor: secondaryStyling[0], color: secondaryStyling[1] }}>Secondary button</button>
						<label>Background colour</label>
						<div className="pb-branding-color-tile-container">
							{items.map((colorItem) => <button
								className="pb-branding-color-tile"
								onClick={() => updateSecondaryButton([colorItem, secondaryStyling[1]])}
								style={{ background: `${colorItem}` }}>
							</button>)}
						</div>

						<label>Text colour</label>
						<div className="pb-branding-color-tile-container">
							{items.map((colorItem) => <button
								className="pb-branding-color-tile"
								onClick={() => updateSecondaryButton([secondaryStyling[0], colorItem])}
								style={{ background: `${colorItem}` }}>
							</button>)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;