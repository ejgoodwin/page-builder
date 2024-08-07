import { useState } from "react";
import Builder from "./Builder";
import Sidebar from "./Sidebar";

// Note: structuredClone() is not compatible with older browsers https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

const PageBuilder = () => {
  const [builderData, setBuilderData] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [sectionCount, setSectionCount] = useState(0);

  const addComponent = (name, classes) => {
    setSectionCount(sectionCount + 1);
    setItemCount(itemCount + 1);

    let newData = {
      component: name,
      classes: classes,
      id: `${sectionCount}-${name}`,
      items: [
        {
          id: `item-${itemCount}`,
          heading: "Placeholder...",
          text: "Placeholder...",
        },
      ],
    };

    setBuilderData((prevState) => [...prevState, newData]);
  };

  const addCard = (sectionId) => {
    setItemCount(itemCount + 1);
    const newItem = {
      id: `item-${itemCount}`,
      heading: "Placeholder...",
      text: "Placeholder...",
    };
    const builderDataClone = structuredClone(builderData);

    for (const section in builderDataClone) {
      if (builderDataClone[section].id === sectionId) {
        builderDataClone[section].items.push(newItem);
        break;
      }
    }
    setBuilderData(builderDataClone);
  };

  const deleteComponent = (id) => {
    const builderDataClone = structuredClone(builderData);
    for (let i = 0; i < builderDataClone.length; i++) {
      if (builderDataClone[i].id === id) {
        builderDataClone.splice(i, 1);
      }
    }
    setBuilderData(builderDataClone);
  };

  const moveComponent = (direction, id) => {
    const dir = direction === "up" ? -1 : 1;
    const builderDataClone = structuredClone(builderData);
    let temp;
    for (let i = 0; i < builderDataClone.length; i++) {
      if (builderDataClone[i].id === id) {
        temp = builderDataClone[i + dir];
        builderDataClone[i + dir] = builderDataClone[i];
        builderDataClone[i] = temp;
        break;
      }
    }
    setBuilderData(builderDataClone);
  };

  const addSavedSection = (savedSection) => {
    console.log(savedSection);
    const builderDataClone = structuredClone(builderData);
    for (const sectionIndex in builderDataClone) {
      if (builderDataClone[sectionIndex].id === savedSection.id) {
        builderDataClone[sectionIndex] = savedSection;
        break;
      }
    }
    setBuilderData(builderDataClone);
  };

  return (
    <div className='pb-container'>
      <Sidebar addComponent={addComponent} />
      <Builder
        addCard={addCard}
        addComponent={addComponent}
        addSavedSection={addSavedSection}
        data={builderData}
        deleteComponent={deleteComponent}
        moveComponent={moveComponent}
      />
    </div>
  );
};

export default PageBuilder;
