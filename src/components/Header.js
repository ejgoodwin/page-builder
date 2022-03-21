import { Link } from "react-router-dom";
import logo from "../images/lockup.svg";

const Header = () => {
	return (
		<header className="header">
			<Link className="header__lockup" to="/" >
				<img src={logo} alt='Logo' />
			</Link>
			<div>
				<Link className="header__link" to="/page-builder">Page builder</Link>
				<Link className="header__link" to="/example-page">Example page</Link>
			</div>
		</header>
	);
}

export default Header;