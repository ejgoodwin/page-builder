import SectionItem from "./SectionItem";


const Section = ({ object }) => {
	return (
		<section className={`${object.component} ${object.classes} section`} style={{ 'backgroundColor': object.background, 'color': object.color }}>
			<div className={`container ${object.component}__container`}>
				{object.items.map(item => <SectionItem key={item.id} item={item} component={object.component} />)}
			</div>
		</section>
	);
}

export default Section;