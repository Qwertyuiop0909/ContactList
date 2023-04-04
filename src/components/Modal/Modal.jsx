/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { createPortal } from 'react-dom'
import styles from './modal.module.scss'

const Modal = ({ isOpen, setIsOpen, children }) => {
  if (!isOpen) return null

  const clickHandler = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  return createPortal(
    <div onClick={clickHandler} className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.closeButton}>
          <button type="button" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root'),
  )
}

export default Modal
