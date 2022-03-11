import SectionItem from "./SectionItem";


const Section = ({ object }) => {
    return (
        <section className={`${object.component} section`}>
            <div className={`container ${object.component}__container ${object.classes}`}>
                {object.items.map(item => <SectionItem item={item} component={object.component} /> )}
            </div>
        </section>
    );
}

export default Section;