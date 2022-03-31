import SectionItem from "./SectionItem";


const Section = ({ object }) => {

	const style = {
		'backgroundColor': object.background ? object.background : '',
		'color': object.color ? object.color : '',
		'padding': object.padding ? object.padding : '',
	}

	return (
		<section 
		className={`${object.component} ${object.classes} section`} style={style}>
			<div className={`container ${object.component}__container`}>
				{object.items.map(item => <SectionItem key={item.id} item={item} component={object.component} />)}
			</div>
		</section>
	);
}

export default Section;