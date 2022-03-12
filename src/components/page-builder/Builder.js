import Page from "../../pages/Page";
import BuilderSection from "./BuilderSection";

const Builder = ({ data, inputTextChange }) => {
	return (
		<div className="pb-builder">
			<header className="pb-header">
				<h1>Page builder</h1>
				<div>
					<button className="button">View code</button>
					<button className="button">Preview page</button>
				</div>
			</header>
			{data.map(item =>
				<div>
					<p>{item.component}</p>
					<BuilderSection item={item} inputTextChange={inputTextChange} />
				</div>)}
			<section>
				<div className="pb-section-empty">
					<p>Drag and drop a component</p>	
				</div>
			</section>

			{/* Temp - maybe a modal or new page. */}
			<h2>Preview</h2>
			<Page data={data} />
		</div>
	);
}

export default Builder;