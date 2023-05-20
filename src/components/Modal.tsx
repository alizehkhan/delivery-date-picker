import {
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isFriday,
  isSameDay,
  isSaturday,
  isTuesday,
  startOfMonth,
} from "date-fns";
import { useContext, useState } from "react";
import { SubscriptionContext } from "../context/SubscriptionContext";

const Modal = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (_: boolean) => void;
}) => {
  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];
  const daysOfMonth = eachDayOfInterval({
    start: startOfMonth(new Date()),
    end: endOfMonth(new Date()),
  });
  const { deliveryDate, setDeliveryDate } = useContext(SubscriptionContext);
  const [selectedDate, setSelectedDate] = useState(deliveryDate);

  return (
    <>
      <div>
        <h1 className="month">{format(new Date(), "MMMM")}</h1>
        <div className="week">
          {daysOfWeek.map((day, index) => (
            <p key={index}>{day}</p>
          ))}
        </div>
        <div className="days">
          {daysOfMonth.map((date, index) => (
            <button
              key={index}
              disabled={isTuesday(date) || isFriday(date) || isSaturday(date)}
              className="day"
              id={isSameDay(date, selectedDate) ? "selected" : undefined}
              style={
                index === 0
                  ? { gridColumn: getDay(daysOfMonth[0]) || 7 }
                  : undefined
              }
              onClick={() => setSelectedDate(date)}
            >
              <time dateTime={format(date, "yyyy-MM-dd")}>
                {format(date, "d")}
              </time>
            </button>
          ))}
        </div>
        <div className="modal-ctas">
          <button
            className="button-tertiary"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="button-secondary"
            onClick={() => {
              setDeliveryDate(selectedDate);
              setIsModalOpen(false);
            }}
          >
            Change date
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
