import BodyText from "./items/BodyText";
import Button from "./items/Button";
import Color from "./items/Color";
import Heading from "./items/Heading";
import Image from "./items/Image";
import Padding from "./items/Padding";

const BuilderItem = ({ item, section, updateItemData }) => {
  return (
    <>
      <Heading section={section} id={item.id} updateItemData={updateItemData} />
      <div className={`pb-section-item ${item.id}__item`} key={item.id}>
        <div className='pb-section-item__input-group'>
          <BodyText id={item.id} updateItemData={updateItemData} />
        </div>

        <div className='pb-section-item__input-group'>
          <Image id={item.id} updateItemData={updateItemData} />
          <Button id={item.id} updateItemData={updateItemData} />
        </div>

        <div className='pb-section-item__input-group'>
          <Padding id={item.id} updateData={updateItemData} />
          <Color
            id={item.id}
            item='background'
            label='Background color'
            updateItemData={updateItemData}
          />
          <Color
            id={item.id}
            item='color'
            label='Text color'
            updateItemData={updateItemData}
          />
        </div>
      </div>
    </>
  );
};

export default BuilderItem;
