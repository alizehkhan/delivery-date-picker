import { Dispatch, SetStateAction, createContext } from "react";

type Subscription = {
  deliveryDate: Date;
  setDeliveryDate: Dispatch<SetStateAction<Date>>;
};

export const SubscriptionContext = createContext<Subscription>({
  deliveryDate: new Date(),
  setDeliveryDate: () => {},
});
