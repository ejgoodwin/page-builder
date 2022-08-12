import { useContext, useState } from "react";
import BackgroundColorContext from "../context/BackgroundColorContext";

const Sidebar = ({ addComponent }) => {
	const [activeTab, setActiveTab] = useState(1);

	return (
		<div className="pb-sidebar">
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
			</div>

			{/* Update to switch statement */}
			{activeTab === 1 ? <ComponentsTab addComponent={addComponent} /> : <BrandingTab />}
		</div>
	);
}

function ComponentsTab({ addComponent }) {
	return (
		<div>
			<h4>Hero</h4>
			<div className="pb-sidebar-component">
				<button className="button" onClick={() => addComponent('hero')}>Left aligned</button>
			</div>
			<h4>Card</h4>
			<div className="pb-sidebar-component">
				<button className="button" onClick={() => addComponent('card')}>Card</button>
			</div>
			<h4>Text block</h4>
			<div className="pb-sidebar-component">
				<button className="button" onClick={() => addComponent('text-block')}>Left aligned</button>
			</div>
		</div>
	);
}

function BrandingTab() {
	const { items, addITem, removeColor } = useContext(BackgroundColorContext);

	return (
		<div>
			<label>Colours</label>
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
	);
}

export default Sidebar;