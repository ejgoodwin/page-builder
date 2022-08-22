import Section from "./section/Section";

const Page = ({ data }) => {
	return data.map(item => <Section key={item.id} object={item} /> );
}

export default Page;