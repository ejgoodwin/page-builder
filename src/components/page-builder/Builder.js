import BuilderSection from "./BuilderSection";

const Builder = ({ data }) => {
	return (
		<div className="pb-builder">
			<header className="pb-header">
				<h1>Page builder</h1>
				<div>
					<button className="button">View code</button>
					<button className="button">Preview page</button>
				</div>
			</header>
			{data.length > 0 && data.map(item => <BuilderSection item={item} />)}
			<section>
				<div className="pb-section-empty">
					<p>Drag and drop a component</p>	
				</div>
			</section>
		</div>
	);
}

export default Builder;