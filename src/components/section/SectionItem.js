import SectionButton from "./SectionButton";

const SectionItem = ({ component, item }) => {

    const heading = component === 'hero' ? <h1 className="hero__heading">{item.heading}</h1> : <h2>{item.heading}</h2>;
    const backgroundColour = item.background ? item.background : '';

    return (
        <div className={`${component}__item`} style={{"background": backgroundColour}}>
            <div className={`${component}__item-text`}>
                {item.heading && heading}
                {item.text && <p>{item.text}</p>}
                {item.buttons && item.buttons.map(button => <SectionButton label={button.label} link={button.link ? button.link : ''} /> )}
            </div>
            <div className={`${component}__item-media`}>
                {item.image && <img src={item.image} alt="" /> }
            </div>
        </div>
    );
}

export default SectionItem;