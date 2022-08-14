import { useContext } from "react";
import { Link } from "react-router-dom";
import BackgroundColorContext from "../context/BackgroundColorContext";

const SectionItem = ({ component, item }) => {

	const heading = component === 'hero' ? <h1 className="hero__heading">{item.heading}</h1> : <h2>{item.heading}</h2>;
	const backgroundColour = item.background ? item.background : '';
	const textColour = item.color ? item.color : '';
	const padding = item.padding ? item.padding : '';

	return (
		<div className={`${component}__item`} style={{ "backgroundColor": backgroundColour, "color": textColour, "padding": padding }}>
			<div className={`${component}__item-text`}>
				{item.heading && heading}
				{item.text && <p>{item.text}</p>}
				{item.buttons ? <Buttons buttons={item.buttons} /> : ''}
			</div>
			<div className={`${component}__item-media`}>
				{item.image && <img src={item.image} alt="" />}
			</div>
		</div>
	);
}

function Buttons({ buttons }) {
	const { primaryStyling, secondaryStyling } = useContext(BackgroundColorContext);

	return (
		<div className="button-container">
			{buttons.map((button) =>
				<Link
					className={`button ${button.classes}`}
					to={button.link ? button.link : ''}
					style={{
						backgroundColor: button.type === 'primary' ? primaryStyling[0] : secondaryStyling[0],
						color: button.type === 'primary' ? primaryStyling[1] : secondaryStyling[1]
					}}>
						{button.label}
				</Link>)}
		</div>
	);
}

export default SectionItem;