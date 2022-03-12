import { Link } from "react-router-dom";

const SectionButton = ({ label, link }) => {
    return (
        // <button>{label}</button>
        <Link className="button" to={link}>{label}</Link>
    );
}

export default SectionButton;