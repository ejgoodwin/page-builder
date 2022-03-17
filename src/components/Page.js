import Section from "./section/Section";

const Page = ({ data }) => {
	return data.map(item => <Section object={item} />);
}

export default Page;