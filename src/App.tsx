import { useState } from "react";

import PromptButton from "./components/PromptButton";
import { SubscriptionContext } from "./context/SubscriptionContext";
import { earliestDeliveryDate } from "./utils";

import "./stylesheets/index.scss";

const App = () => {
  const [deliveryDate, setDeliveryDate] = useState(
    earliestDeliveryDate(new Date())
  );

  return (
    <SubscriptionContext.Provider value={{ deliveryDate, setDeliveryDate }}>
      <main>
        <div className="prompt-container">
          <h1 className="prompt-title">Choose your delivery day</h1>
          <p className="prompt-label">Delivery is always free</p>
          <PromptButton />
        </div>
      </main>
    </SubscriptionContext.Provider>
  );
};

export default App;
