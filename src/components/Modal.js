import React from 'react'
import PortalReactDOM from 'react-dom';
import closeIcon from '../assets/icon-close.svg'
import rules from '../assets/image-rules.svg'
const Modal = ({toggle}) => {
  return (
    PortalReactDOM.createPortal(
      <div className='modal-container'>
        <div className='modal-box'>
          <div className='modal__header'>
            <h1>Rules</h1>
            <button onClick={toggle}>
              <img src={closeIcon} alt='close' srcSet='' />
            </button>
          </div>
          <div className='rules'>
          <img src={rules} alt='rules' srcSet='' />
          </div>
        </div>
      </div>,
      document.getElementById("modal")
    )
  )
}

export default Modal