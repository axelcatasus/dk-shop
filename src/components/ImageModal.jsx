import * as React from 'react';
import { modal, modalContent, modalImage, closeButton } from './image-modal.module.scss';


const ImageModal = ({ url, setImageViewUrl }) => {

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setImageViewUrl(null)
    }

    if (e.key === 'Escape') {
      console.log(e.key)
      setImageViewUrl(null)
    }
  }

  return (
    <div 
      className={modal}
      onClick={(e) => closeModal(e)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => closeModal(e)}
    >
      <div className={modalContent}>
        <button 
          onClick={() => setImageViewUrl(null)}
          aria-label="Close Modal"
          className={closeButton}
        >
          Close
        </button>
        <img src={url} alt="" className={modalImage} />
      </div>
    </div>
  );
};

export default ImageModal;