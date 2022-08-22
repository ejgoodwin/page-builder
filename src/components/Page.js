import Section from "./section/Section";
import { BrandingContextProvider } from "./context/BackgroundColorContext";
const Page = ({ data }) => {
	return data.map(item => <Section key={item.id} object={item} /> );
}

export default Page;