import { useState } from "react";

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
	return (
		<div>
			Branding coming soon.
		</div>
	);
}

export default Sidebar;