import SectionButton from "./SectionButton";

const SectionItem = ({ item, component }) => {

    const heading = component === 'hero' ? <h1>{item.heading}</h1> : <h2>{item.heading}</h2>;

    return (
        <div className={`${component}__item`}>
            <div className={`${component}__item-text`}>
                {item.heading && heading}
                {item.text && <p>{item.text}</p>}
                {item.buttons && item.buttons.map(button => <SectionButton label={button.label} /> )}
            </div>
            <div className={`${component}__item-media`}>
                {item.image && <img src={item.image} alt="" /> }
            </div>
        </div>
    );
}

export default SectionItem;