import Page from "../Page";
import BuilderSection from "./BuilderSection";

const Builder = ({ addCard, addSavedSection, data, deleteComponent, moveComponent }) => {

	return (
		<div className="pb-builder">
			<header className="pb-header">
				<h1>Page builder</h1>
				{/* <div>
					<button disabled={data.length < 1} className="button">View code</button>
					<button disabled={data.length < 1} className="button">Preview page</button>
				</div> */}
			</header>

			{data.map((item, i) => 
				<BuilderSection 
					addCard={addCard} 
					addSavedSection={addSavedSection} 
					deleteComponent={deleteComponent}
					first={i === 0}
					last={i === data.length - 1} 
					moveComponent={moveComponent}
					key={item.id} 
					section={item} />)}

			<section>
				<div className="pb-section pb-section-empty">
					<p>Add a component</p>
				</div>
			</section>

			{/* Temp - maybe a modal or new page. */}
			<h2>Preview</h2>
			<Page data={data} />
		</div>
	);
}

export default Builder;