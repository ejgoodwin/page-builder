import { useState } from "react";
import Builder from "../components/page-builder/Builder";
import Sidebar from "../components/page-builder/Sidebar";

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

	const addCard = itemId => {
		const newItem = {
			id: 1,
			heading: 'Placeholder...',
			text: 'Placeholder...',
		}
		let builderCopy = [...builderData];

		for (const item in builderCopy) {
			if (builderCopy[item].id === itemId) {
				builderCopy[item].items.push(newItem);
				break;
			}
		}
		setBuilderData(builderCopy);
	}

	const deleteComponent = id => {
		let builderCopy = [...builderData];
		for (let i = 0; i < builderCopy.length; i++) {
			if (builderCopy[i].id === id) {
				builderCopy.splice(i, 1);
			}
		}
		setBuilderData(builderCopy);
	}

	const moveComponent = (direction, id) => {
		const dir = direction === 'up' ? -1 : 1;
		let temp;
		let builderCopy = [...builderData];
		for (let i = 0; i < builderCopy.length; i++) {
			if (builderCopy[i].id === id) {
				console.log('temp', temp);
				temp = builderCopy[i + dir];
				builderCopy[i + dir] = builderCopy[i];
				builderCopy[i] = temp;
				break;
			}
		}
		setBuilderData(builderCopy);
	}

	const inputTextChange = (event, sectionId, itemIndex, property) => {
		let builderCopy = [...builderData];
		builderCopy.forEach(item => {
			if (item.id === sectionId) {
				item.items[itemIndex][property] = event.target.value;
			}
		});
		setBuilderData(builderCopy);
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