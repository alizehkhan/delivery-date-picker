import { format, isSameDay } from "date-fns";
import { useContext, useState } from "react";
import ReactModal from "react-modal";

import { ReactComponent as Van } from "../images/van.svg";

import Modal from "./Modal";
import { earliestDeliveryDate } from "../utils";
import { SubscriptionContext } from "../context/SubscriptionContext";

const PromptButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { deliveryDate } = useContext(SubscriptionContext);

  const today = new Date();

  return (
    <>
      <button className="prompt-button" onClick={() => setIsModalOpen(true)}>
        <div className="prompt-button-left">
          <p>{format(deliveryDate, "eee d LLLL")}</p>
          {isSameDay(deliveryDate, earliestDeliveryDate(today)) && (
            <div className="prompt-van-label">
              <Van />
              <p>Earliest delivery</p>
            </div>
          )}
        </div>
        <div className="prompt-button-right">
          <div className="prompt-calendar">{format(deliveryDate, "d")}</div>
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
        <Modal setIsModalOpen={setIsModalOpen} />
      </ReactModal>
    </>
  );
};

export default PromptButton;
