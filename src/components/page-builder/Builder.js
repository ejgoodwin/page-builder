import { useState } from "react";
import Page from "../Page";
import BuilderSection from "./BuilderSection";
import hero from "../../images/components/hero.png";
import card from "../../images/components/cards.png";
import textBlock from "../../images/components/text-block-left.png";
import textBlockCenter from "../../images/components/text-block-center.png";

const Builder = ({
  addCard,
  addComponent,
  addSavedSection,
  data,
  deleteComponent,
  moveComponent,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addComponentModalIsOpen, setAddComponentModalIsOpen] = useState(false);

  const addNewComponent = (component, classes) => {
    addComponent(component, classes);
    setAddComponentModalIsOpen(false);
  };

  return (
    <div className='pb-builder'>
      <header className='pb-header'>
        <h1>Page builder</h1>
        <div>
          {/* <button disabled={data.length < 1} className="button">View code</button> */}
          <button
            disabled={data.length < 1}
            className='button button--secondary'
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            Preview page
          </button>
        </div>
      </header>

      {data.map((item, i) => (
        <BuilderSection
          addCard={addCard}
          addSavedSection={addSavedSection}
          deleteComponent={deleteComponent}
          first={i === 0}
          last={i === data.length - 1}
          moveComponent={moveComponent}
          key={item.id}
          section={item}
        />
      ))}

      <section>
        <div className='pb-section pb-section-empty'>
          <p>
            Add a component{" "}
            <button onClick={() => setAddComponentModalIsOpen(true)}>
              Add
            </button>
          </p>
        </div>
      </section>

      {addComponentModalIsOpen && (
        <div className='pb-preview-modal'>
          {" "}
          <button
            aria-label='close'
            className='pb-preview-modal__close'
            onClick={() => setAddComponentModalIsOpen(false)}
          >
            <span className='material-icons'>close</span>
          </button>
          <div className='pb-preview-modal__main'>
            <section>
              <header>Add a new section</header>
            </section>

            <div>
              <h4>Hero</h4>
              <div className='pb-sidebar-component'>
                <button
                  className='button pb-sidebar-component__button'
                  onClick={() => addNewComponent("hero")}
                >
                  <img src={hero} alt='Hero left aligned' />
                  Left aligned
                </button>
              </div>

              <h4>Card</h4>
              <div className='pb-sidebar-component'>
                <button
                  className='button pb-sidebar-component__button'
                  onClick={() => addNewComponent("card")}
                >
                  <img src={card} alt='Card' />
                  Card
                </button>
              </div>

              <h4>Text block</h4>
              <div className='pb-sidebar-component'>
                <button
                  className='button pb-sidebar-component__button'
                  onClick={() => addNewComponent("text-block")}
                >
                  <img src={textBlock} alt='Text block left aligned' />
                  Left aligned
                </button>

                <button
                  className='button pb-sidebar-component__button'
                  onClick={() =>
                    addNewComponent("text-block", "text-block--center")
                  }
                >
                  <img src={textBlockCenter} alt='Text block center aligned' />
                  Center aligned
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {modalIsOpen && (
        <div className='pb-preview-modal'>
          <button
            aria-label='close'
            className='pb-preview-modal__close'
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            <span className='material-icons'>close</span>
          </button>
          <div className='pb-preview-modal__main'>
            <Page data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Builder;
