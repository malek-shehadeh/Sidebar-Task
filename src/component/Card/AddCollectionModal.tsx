//Addform
import React from "react";
import "../../styles/AddNewCollection.scss";

interface NewCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewCollectionModal: React.FC<NewCollectionModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <div className="header-content">
            <img src="/Frame 1000002840.svg" alt="New Collection" />
            <div className="title-container">
              <h2>
                Add <span className="newCollection">New Collection</span>
              </h2>
              <p>Knowledge Base / Create New Collection</p>
            </div>
          </div>
          <button className="close-button" onClick={onClose}>
            <img src="/close-circle.svg" alt="Close" />
          </button>
        </div>
        <div className="collectionName">
          <span className="margin">
            Collection Name* <img src="/info-circle1.svg" alt="text" />
          </span>
          <div className="inputArena">
            <button className="button-with-icon">
              <img src="/text.svg" alt="icon" className="button-icon" />
              Arena
              <img src="/info-circle.svg" alt="icon" className="button-icon2" />
            </button>
          </div>
        </div>
        <div className="Description">
          <span className="margin">
            Description <img src="/info-circle1.svg"  alt="text" />
          </span>
          <div className="DescriptionInput">
            <span className="DescriptionText">Description</span>
            <button className="DescriptionForm"></button>
          </div>
        </div>
        <div className="mainTow">
          <span className="margin2">
            Tag* <img src="/info-circle1.svg"  alt="text" />
          </span>
          <span className="acces2">
            Access Level* <img src="/info-circle1.svg"  alt="text" />
          </span>
          <div className="towInput">
            <button className="buttonTow">
              <img src="/category-2.svg" alt="category" className="button-icon" />
              placeholder
            </button>
            <div className="div2">
              <button className="buttonTow2">
                <div>
                  <img src="/setting-4.svg" alt="category" className="button-icon" />
                  placeholder
                </div>
                <img src="/arrow-down.svg" alt="arrow" className="button-icon3" />
              </button>
            </div>
          </div>
          <div className="upload">
            <div className="upload2">
              <div className="upload3">
                <img src="/document-upload.svg" alt="document" />
                <p className="text1">
                  <span className="click-here ">Click here</span> to upload your
                  Collection Thumbnail or drag and drop.
                </p>
                <p className="text2">
                  Supported Format: SVG, JPG, PNG (10mb each)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The lastBorder button inside modal-content */}
        <div className="lastBorder">
          <button>
            <img src="/add.svg" alt="add" />
            Create Now
          </button>
          <p className="cancel">Cancel</p>
        </div>
      </div>
    </div>
  );
};

export default NewCollectionModal;