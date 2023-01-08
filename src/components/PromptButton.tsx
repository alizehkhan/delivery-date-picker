import { format } from 'date-fns'
import { useState } from 'react'
import ReactModal from 'react-modal'

import { ReactComponent as Van } from '../images/van.svg'

import Modal from './Modal'

const PromptButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [deliveryDate, setDeliveryDate] = useState(new Date())

  return (
    <>
      <button className="prompt-button" onClick={() => setIsModalOpen(true)}>
        <div className="prompt-button-left">
          <p>{format(deliveryDate, 'eee d LLLL')}</p>
          <div className="prompt-van-label">
            <Van />
            <p>Earliest delivery</p>
          </div>
        </div>
        <div className="prompt-button-right">
          <div className="prompt-calendar">{format(deliveryDate, 'd')}</div>
          <p>Change</p>
        </div>
      </button>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        shouldCloseOnOverlayClick
        className="modal"
        overlayClassName="overlay"
      >
        <Modal
          setIsModalOpen={setIsModalOpen}
          setDeliveryDate={setDeliveryDate}
          deliveryDate={deliveryDate}
        />
      </ReactModal>
    </>
  )
}

export default PromptButton
