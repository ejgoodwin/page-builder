import Page from "../Page";
import BuilderSection from "./BuilderSection";

const Builder = ({ addCard, data, deleteComponent, inputTextChange, moveComponent }) => {

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
				<section key={item.id} className={`pb-section pb-section-${item.component}`}>
					<span className="pb-section-component-name">{item.component}</span>

					{item.items.map((section, index) =>
						<BuilderSection
							key={`${item.id}-${index}`}
							item={item}
							inputTextChange={inputTextChange}
							itemIndex={index} />)}

					{item.component === 'card' && item.items.length < 3 ? <button className="button button-small button-icon" onClick={() => addCard(item.id)}>
						<span className="material-icons md-18">add</span> Add card
					</button> : null}

					<button className="button pb-section-delete button-icon-round" onClick={() => deleteComponent(item.id)}>
						<span className="material-icons">close</span>
					</button>
					<div className="pb-section-move-buttons">
						<button className="button button-icon-round" disabled={i === 0} onClick={() => moveComponent('up', item.id)}>
							<span className="material-icons">arrow_drop_up</span>
						</button>
						<button className="button button-icon-round" disabled={i === data.length - 1} onClick={() => moveComponent('down', item.id)}>
							<span className="material-icons">arrow_drop_down</span>
						</button>
					</div>
				</section>)}

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