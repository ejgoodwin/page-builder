import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<Link className="header__link" to="/" >Home</Link>
			<div>
				<Link className="header__link" to="/page-builder">Page builder</Link>
				<Link className="header__link" to="/example-page">Example page</Link>
			</div>
		</header>
	);
}

export default Header;