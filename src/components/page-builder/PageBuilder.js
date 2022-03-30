import { useState } from "react";
import Builder from "./Builder";
import Sidebar from "./Sidebar";

// Note: structuredClone() is not compatible with older browsers https://developer.mozilla.org/en-US/docs/Web/API/structuredClone 

const PageBuilder = () => {

	const [builderData, setBuilderData] = useState([]);
	const [sectionCount, setSectionCount] = useState(0);

	const addComponent = name => {
		setSectionCount(sectionCount + 1);

		let newData = {
			component: name,
			classes: '',
			id: `${sectionCount}-${name}`,
			items: [
				{
					id: 1,
					heading: 'Placeholder...',
					text: 'Placeholder...',
				}
			]
		};

		setBuilderData([...builderData, newData]);
	}

	const addCard = sectionId => {
		const newItem = {
			id: 1,
			heading: 'Placeholder...',
			text: 'Placeholder...',
		}
		const builderDataClone = structuredClone(builderData);

		for (const section in builderDataClone) {
			if (builderDataClone[section].id === sectionId) {
				builderDataClone[section].items.push(newItem);
				break
			}
		}
		setBuilderData(builderDataClone);
	}

	const deleteComponent = id => {
		const builderDataClone = structuredClone(builderData);
		for (let i = 0; i < builderDataClone.length; i++) {
			if (builderDataClone[i].id === id) {
				builderDataClone.splice(i, 1);
			}
		}
		setBuilderData(builderDataClone);
	}

	const moveComponent = (direction, id) => {
		const dir = direction === 'up' ? -1 : 1;
		const builderDataClone = structuredClone(builderData);
		let temp;
		for (let i = 0; i < builderDataClone.length; i++) {
			if (builderDataClone[i].id === id) {
				temp = builderDataClone[i + dir];
				builderDataClone[i + dir] = builderDataClone[i];
				builderDataClone[i] = temp;
				break;
			}
		}
		setBuilderData(builderDataClone);
	}

	const inputTextChange = (event, sectionId, itemIndex, property) => {
		const builderDataClone = structuredClone(builderData);
		builderDataClone.forEach(item => {
			if (item.id === sectionId) {
				item.items[itemIndex][property] = event.target.value;
			}
		});
		setBuilderData(builderDataClone);
	}

	return (
		<div className="pb-container">
			<Sidebar addComponent={addComponent} />
			<Builder
				addCard={addCard}
				data={builderData}
				deleteComponent={deleteComponent}
				inputTextChange={inputTextChange}
				moveComponent={moveComponent} />
		</div>
	);
}

export default PageBuilder;