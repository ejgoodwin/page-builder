import { useState } from "react";
import Builder from "../components/page-builder/Builder";
import Sidebar from "../components/page-builder/Sidebar";

const PageBuilder = () => {

	const [builderData, setBuilderData] = useState([]);
	const [sectionCount, setSectionCount] = useState(0);


	const addComponent = (name) => {
		setSectionCount(sectionCount + 1);

		let newData = {
			component: name,
			classes: '',
			id: `${sectionCount}-${name}`,
			items: [
				{
					heading: '',
					text: '',
				}
			]
		};

		setBuilderData([...builderData, newData]);
	}

	const inputTextChange = (event, sectionId, property) => {
		let builderCopy = [...builderData];
		builderCopy.forEach(item => {
			if (item.id === sectionId) {
				item.items[0][property] = event.target.value;
			}
		});
		setBuilderData(builderCopy);
	}

	return (
		<div className="pb-container">
			<Sidebar addComponent={addComponent} />
			<Builder data={builderData} inputTextChange={inputTextChange} />
		</div>
	);
}

export default PageBuilder;