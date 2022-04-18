const Sidebar = ({ addComponent }) => {
	return (
		<div className="pb-sidebar">
			<h3>Components</h3>
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

export default Sidebar;