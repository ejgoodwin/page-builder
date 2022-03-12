import { useState } from "react";
import Builder from "../components/page-builder/Builder";
import Sidebar from "../components/page-builder/Sidebar";

const PageBuilder = () => {

	const [builderData, setBuilderData] = useState([]);

	const addComponent = (name) => {
		setBuilderData([...builderData, name]);
	}

	return (
		<div className="pb-container">
			<Sidebar addComponent={addComponent} />
			<Builder data={builderData} />
		</div>
	);
}

export default PageBuilder;