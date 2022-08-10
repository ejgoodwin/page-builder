import { useState } from "react";
import Page from "../Page";
import BuilderSection from "./BuilderSection";

const Builder = ({ addCard, addSavedSection, data, deleteComponent, moveComponent }) => {

	const [modalIsOpen, setModalIsOpen] = useState(false);

	return (
		<div className="pb-builder">
			<header className="pb-header">
				<h1>Page builder</h1>
				<div>
					{/* <button disabled={data.length < 1} className="button">View code</button> */}
					<button disabled={data.length < 1} className="button button--secondary" onClick={() => setModalIsOpen(!modalIsOpen)}>Preview page</button>
				</div>
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

			{modalIsOpen ?
				<div className="pb-preview-modal">
					<button
						aria-label="close"
						className="pb-preview-modal__close" 
						onClick={() => setModalIsOpen(!modalIsOpen)}>
						<span className="material-icons">close</span>
					</button>
					<div className="pb-preview-modal__main">
						<Page data={data} />
					</div>
				</div>
				: ''
			}
		</div>
	);
}

export default Builder;