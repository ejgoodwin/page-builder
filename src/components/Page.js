import Section from "./section/Section";
import { BackgroundColorContextProvider } from "./context/BackgroundColorContext";
const Page = ({ data }) => {
	return data.map(item => <BackgroundColorContextProvider>
		<Section key={item.id} object={item} />
	</BackgroundColorContextProvider>);
}

export default Page;