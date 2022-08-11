import { Link, NavLink } from "react-router-dom";
import logo from "../images/lockup.svg";

const Header = () => {

	const activeStyle = {
		borderColor: "#29c1dd"
	}
	return (
		<header className="header">
			<Link className="header__lockup" to="/" >
				<img src={logo} alt='Logo' />
			</Link>
			<nav>
				<NavLink className="header__link" to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink>
				<NavLink className="header__link" to="/page-builder" style={({ isActive }) => isActive ? activeStyle : undefined}>Page builder</NavLink>
				<NavLink className="header__link" to="/example-page" style={({ isActive }) => isActive ? activeStyle : undefined}>Example page</NavLink>
			</nav>
		</header>
	);
}

export default Header;