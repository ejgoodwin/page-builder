const Sidebar = ({ addComponent }) => {
	return (
		<div className="pb-sidebar">
			<h2>Components</h2>
			<h3>Hero</h3>
			<div className="pb-sidebar-component">
				<button className="button" onClick={() => addComponent('hero')}>Left aligned</button>
			</div>
			<h3>Card</h3>
			<div className="pb-sidebar-component">
				<button className="button" onClick={() => addComponent('card')}>Card</button>
			</div>
			<h3>Text block</h3>
			<div className="pb-sidebar-component">
				<button className="button" onClick={() => addComponent('text-block')}>Left aligned</button>
			</div>
		</div>
	);
}

export default Sidebar;