import SectionItem from "./SectionItem";


const Section = ({ object }) => {
	return (
		<section className={`${object.component} section`} style={{ 'background': object.background, 'color': object.color }}>
			<div className={`container ${object.component}__container ${object.classes}`}>
				{object.items.map(item => <SectionItem item={item} component={object.component} />)}
			</div>
		</section>
	);
}

export default Section;