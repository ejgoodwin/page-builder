import Section from "../components/Section";

const HomePage = ({ data }) => {
    return data.map(item => <Section object={item} /> );
}

export default HomePage;