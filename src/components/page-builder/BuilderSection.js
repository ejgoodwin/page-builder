const BuilderSection = ({ item, inputTextChange }) => {
    return (
        <div>
            <input type="text" onChange={(e) => inputTextChange(e, item.id, 'heading')} />
            <input type="text" onChange={(e) => inputTextChange(e, item.id, 'text')} />
        </div>
    );
}

export default BuilderSection;