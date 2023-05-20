import { addDays, isFriday, isSaturday, isTuesday } from "date-fns";

export const earliestDeliveryDate = (today: Date) => {
  if (isTuesday(today) || isFriday(today) || isSaturday(today)) {
    let nearestDate = addDays(today, 1);

    while (
      isTuesday(nearestDate) ||
      isFriday(nearestDate) ||
      isSaturday(nearestDate)
    ) {
      nearestDate = addDays(nearestDate, 1);
    }

    return nearestDate;
  }
  return today;
};
