import { Link } from "react-router-dom";

const SectionItem = ({ component, item }) => {

	const heading = component === 'hero' ? <h1 className="hero__heading">{item.heading}</h1> : <h2>{item.heading}</h2>;
	const backgroundColour = item.background ? item.background : '';
	const textColour = item.color ? item.color : '';

	return (
		<div className={`${component}__item`} style={{ "backgroundColor": backgroundColour, "color":  textColour}}>
			<div className={`${component}__item-text`}>
				{item.heading && heading}
				{item.text && <p>{item.text}</p>}
				{item.buttons && item.buttons.map(button =>
					<Link className={`button ${button.classes}`} to={button.link ? button.link : ''}>{button.label}</Link>)}
			</div>
			<div className={`${component}__item-media`}>
				{item.image && <img src={item.image} alt="" />}
			</div>
		</div>
	);
}

export default SectionItem;