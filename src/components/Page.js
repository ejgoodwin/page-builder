import Section from "./section/Section";
import { BackgroundColorContextProvider } from "./context/BackgroundColorContext";
const Page = ({ data }) => {
	return data.map(item => <Section key={item.id} object={item} /> );
}

export default Page;